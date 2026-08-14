const { stableId } = require("../../../rag/src/hash");
const { analyzeTask } = require("../task-analyzer");
const { createPlan } = require("../planner");
const { selectTools } = require("../tool-selector");
const { AgentMcpClient } = require("../tool-executor");
const { collectEvidence } = require("../evidence-manager");
const { validateEvidence } = require("../evidence-validator");
const { buildReasoningOutput } = require("../reasoning-engine");
const { generateResponse } = require("../response-generator");
const { calculateConfidence } = require("../confidence-engine");
const { checkApproval } = require("../approval-manager");
const { applyGuardrails } = require("../guardrails");
const { appendAgentAudit } = require("../audit-manager");
const { enforceAgentAccess } = require("../policies/agent-policy");
const { GRAPH_ERROR_CODES, GraphRuntimeError } = require("./graph-errors");

const NON_RETRYABLE_TOOL_ERRORS = new Set([
  "ACCESS_DENIED",
  "INVALID_INPUT",
  "NOT_FOUND",
  "APPROVAL_REJECTED",
]);

function toNodeError(code, error, node) {
  return {
    code,
    node,
    message: error?.message ?? String(error),
    details: error?.details ?? {},
    timestamp: new Date().toISOString(),
  };
}

function taskUnderstandingNode(state) {
  try {
    if (!state.originalRequest) {
      throw new GraphRuntimeError(
        GRAPH_ERROR_CODES.INVALID_REQUEST,
        "Request cannot be empty.",
      );
    }
    const access = enforceAgentAccess(state.role);
    if (!access.allowed) {
      state.finalStatus = "ACCESS_DENIED";
      state.executionStatus = "FAILED";
      state.warnings.push("ACCESS_DENIED");
      state.response = {
        status: "ACCESS_DENIED",
        answer: access.reason,
      };
      return state;
    }

    const guardrail = applyGuardrails({
      request: state.originalRequest,
    });
    if (!guardrail.allowed) {
      state.finalStatus = "ERROR";
      state.executionStatus = "FAILED";
      state.warnings.push(...(guardrail.warnings ?? []));
      state.response = {
        status: "ERROR",
        answer: guardrail.answer ?? "Guardrail blocked.",
      };
      return state;
    }

    const task = analyzeTask({
      request: state.originalRequest,
      role: state.role,
    });
    state.taskId = task.taskId;
    state.taskType = task.taskType;
    state.entities = task.entities;
    state.constraints = task.constraints;
    state.requestedOutput = task.requestedOutput;
    state.riskLevel = task.riskLevel;
    state.confidence.score = task.confidence;
    state.auditMetadata.taskId = task.taskId;
    return state;
  } catch (error) {
    state.errors.push(
      toNodeError(GRAPH_ERROR_CODES.TASK_ANALYSIS_FAILURE, error, "task_understanding"),
    );
    state.finalStatus = "ERROR";
    state.executionStatus = "FAILED";
    return state;
  }
}

function planningNode(state) {
  try {
    const task = {
      taskId: state.taskId ?? stableId("TASK", state.originalRequest, state.role),
      originalRequest: state.originalRequest,
      taskType: state.taskType,
      constraints: state.constraints,
    };
    state.plan = createPlan(task);
    return state;
  } catch (error) {
    state.errors.push(toNodeError(GRAPH_ERROR_CODES.PLANNING_FAILURE, error, "planning"));
    state.finalStatus = "ERROR";
    state.executionStatus = "FAILED";
    return state;
  }
}

function toolSelectionNode(state) {
  try {
    state.selectedTools = selectTools(state.taskType);
    if (state.plan?.steps?.length) {
      state.plan = {
        ...state.plan,
        steps: state.plan.steps.map((step) => ({
          ...step,
          selected: state.selectedTools.includes(step.tool),
        })),
      };
    }
    return state;
  } catch (error) {
    state.errors.push(
      toNodeError(GRAPH_ERROR_CODES.TOOL_SELECTION_FAILURE, error, "tool_selection"),
    );
    state.finalStatus = "ERROR";
    state.executionStatus = "FAILED";
    return state;
  }
}

function executeSingleTool({ client, step, role }) {
  return client.callTool({
    tool: step.tool,
    input: step.input,
    role,
  });
}

function isRetryableToolError(call) {
  const code = call?.error?.code ?? call?.error?.data?.code ?? null;
  if (!code) {
    return true;
  }
  return !NON_RETRYABLE_TOOL_ERRORS.has(code);
}

function toolExecutionNode(state, config) {
  try {
    const client = new AgentMcpClient();
    const nextToolCalls = [];
    const nextToolResults = [];
    const maxRetries = config.MAX_TOOL_RETRIES;

    for (const step of state.plan?.steps ?? []) {
      if (state.limits.toolCallCount + nextToolCalls.length >= config.MAX_TOOL_CALLS) {
        state.errors.push({
          code: GRAPH_ERROR_CODES.GRAPH_MAX_TOOL_CALLS,
          node: "tool_execution",
          message: `Tool call limit reached (${config.MAX_TOOL_CALLS}).`,
          timestamp: new Date().toISOString(),
        });
        state.executionStatus = "FAILED";
        state.finalStatus = "FAILED";
        break;
      }
      let retries = 0;
      let result = executeSingleTool({
        client,
        step,
        role: state.role,
      });
      while (result.status !== "SUCCESS" && retries < maxRetries && isRetryableToolError(result)) {
        retries += 1;
        result = executeSingleTool({
          client,
          step,
          role: state.role,
        });
      }
      if (result.status !== "SUCCESS") {
        state.retry.failedNode = "tool_execution";
        state.retry.retryCount = retries;
        state.retry.retryReason =
          result.error?.message ?? "Tool execution returned non-success status.";
      }
      nextToolCalls.push({
        tool: step.tool,
        input: step.input,
        requestId: result.requestId,
        status: result.status,
        durationMs: result.durationMs,
      });
      nextToolResults.push(result);
    }

    state.toolCalls = nextToolCalls;
    state.toolResults = nextToolResults;
    state.limits.toolCallCount += nextToolCalls.length;
    state.auditMetadata.mcpRequestIds = nextToolCalls.map((item) => item.requestId).filter(Boolean);
    return state;
  } catch (error) {
    state.errors.push(
      toNodeError(GRAPH_ERROR_CODES.TOOL_EXECUTION_FAILURE, error, "tool_execution"),
    );
    state.finalStatus = "ERROR";
    state.executionStatus = "FAILED";
    return state;
  }
}

function evidenceCollectionNode(state) {
  try {
    state.evidence = collectEvidence(state.toolResults);
    return state;
  } catch (error) {
    state.errors.push(
      toNodeError(GRAPH_ERROR_CODES.EVIDENCE_FAILURE, error, "evidence_collection"),
    );
    state.finalStatus = "ERROR";
    state.executionStatus = "FAILED";
    return state;
  }
}

function evidenceValidationNode(state) {
  try {
    const validation = validateEvidence({
      task: {
        originalRequest: state.originalRequest,
      },
      evidence: state.evidence,
      role: state.role,
      toolCalls: state.toolResults,
    });
    state.evidenceValidation = validation;
    state.warnings.push(...(validation.warnings ?? []));
    return state;
  } catch (error) {
    state.errors.push(
      toNodeError(GRAPH_ERROR_CODES.VALIDATION_FAILURE, error, "evidence_validation"),
    );
    state.finalStatus = "ERROR";
    state.executionStatus = "FAILED";
    return state;
  }
}

function reasoningNode(state) {
  try {
    state.reasoning = buildReasoningOutput({
      task: {
        taskType: state.taskType,
        originalRequest: state.originalRequest,
      },
      evidence: state.evidence,
      validation: state.evidenceValidation ?? { status: "INSUFFICIENT", warnings: [] },
      toolCalls: state.toolResults,
    });
    state.finalStatus = state.reasoning.status;
    return state;
  } catch (error) {
    state.errors.push(toNodeError(GRAPH_ERROR_CODES.REASONING_FAILURE, error, "reasoning"));
    state.finalStatus = "ERROR";
    state.executionStatus = "FAILED";
    return state;
  }
}

function responseGenerationNode(state) {
  try {
    state.response = generateResponse({
      task: {
        taskId: state.taskId ?? stableId("TASK", state.originalRequest, state.role),
        taskType: state.taskType,
      },
      plan: state.plan,
      toolCalls: state.toolResults.map((item) => ({
        requestId: item.requestId,
        tool: item.tool,
        status: item.status,
        source: item.source,
        durationMs: item.durationMs,
      })),
      evidence: state.evidence,
      reasoning: state.reasoning ?? { answer: "", status: "ERROR", warnings: [] },
      confidence: state.confidence,
      approval: state.approval,
      audit: {
        graphRunId: state.graphRunId,
        requestId: state.requestId,
        taskId: state.taskId,
      },
    });
    state.citations = state.response.citations;
    state.auditMetadata.responseId = state.response.responseId;
    return state;
  } catch (error) {
    state.errors.push(
      toNodeError(GRAPH_ERROR_CODES.RESPONSE_FAILURE, error, "response_generation"),
    );
    state.finalStatus = "ERROR";
    state.executionStatus = "FAILED";
    return state;
  }
}

function confidenceEvaluationNode(state) {
  try {
    state.confidence = calculateConfidence({
      taskConfidence: state.confidence.score || 0.8,
      evidence: state.evidence,
      validationStatus: state.evidenceValidation?.status ?? "INSUFFICIENT",
      toolCalls: state.toolResults,
    });
    if (state.response) {
      state.response.confidence = state.confidence;
    }
    return state;
  } catch (error) {
    state.errors.push(
      toNodeError(
        GRAPH_ERROR_CODES.INTERNAL_ERROR,
        error,
        "confidence_evaluation",
      ),
    );
    state.finalStatus = "ERROR";
    state.executionStatus = "FAILED";
    return state;
  }
}

function approvalCheckNode(state) {
  try {
    const approval = checkApproval({
      request: state.originalRequest,
    });
    state.approval = {
      ...approval,
      decision: state.approval?.decision ?? "APPROVED",
      status: approval.required ? "REQUIRED" : "NOT_REQUIRED",
    };
    state.approvalStatus = state.approval.status;
    if (approval.required && state.approval.decision !== "APPROVED") {
      state.waitingForApproval = true;
      state.finalStatus = "NEEDS_APPROVAL";
      state.executionStatus = "WAITING_FOR_APPROVAL";
      state.errors.push({
        code: GRAPH_ERROR_CODES.APPROVAL_REQUIRED,
        node: "approval_check",
        message: approval.reason,
        timestamp: new Date().toISOString(),
      });
    }
    if (approval.required && state.approval.decision === "REJECTED") {
      state.finalStatus = "NEEDS_APPROVAL";
      state.executionStatus = "WAITING_FOR_APPROVAL";
    }
    return state;
  } catch (error) {
    state.errors.push(
      toNodeError(GRAPH_ERROR_CODES.INTERNAL_ERROR, error, "approval_check"),
    );
    state.finalStatus = "ERROR";
    state.executionStatus = "FAILED";
    return state;
  }
}

function finalizationNode(state) {
  state.waitingForApproval = state.executionStatus === "WAITING_FOR_APPROVAL";
  if (state.executionStatus === "WAITING_FOR_APPROVAL") {
    if (state.approval.decision === "REJECTED") {
      state.finalStatus = "PARTIAL";
      state.approval.status = "REJECTED";
      state.approvalStatus = "REJECTED";
      if (state.response) {
        state.response.status = "NEEDS_APPROVAL";
        state.response.approval = state.approval;
      }
    }
    return state;
  }
  state.executionStatus = "COMPLETED";
  if (state.approvalStatus === "APPROVED" && state.finalStatus === "NEEDS_APPROVAL") {
    state.finalStatus = "SUCCESS";
  } else if (state.approvalStatus === "REJECTED" && state.finalStatus === "NEEDS_APPROVAL") {
    state.finalStatus = "PARTIAL";
  } else if (state.finalStatus === "RUNNING") {
    state.finalStatus = "SUCCESS";
  }
  state.timestamps.completedAt = new Date().toISOString();
  if (state.response) {
    state.response.status = state.finalStatus;
    state.response.approval = state.approval;
  }
  return state;
}

function auditNode(state) {
  const audit = {
    responseId: state.auditMetadata.responseId,
    graphRunId: state.graphRunId,
    requestId: state.requestId,
    taskId: state.taskId,
    timestamp: new Date().toISOString(),
    role: state.role,
    taskType: state.taskType,
    toolsCalled: state.toolCalls.map((item) => item.tool),
    toolResults: state.toolCalls,
    evidenceCount: state.evidence.length,
    confidence: state.confidence.score,
    finalStatus: state.finalStatus,
    approvalStatus: state.approvalStatus,
    durationMs:
      new Date(state.timestamps.completedAt ?? Date.now()).getTime() -
      new Date(state.timestamps.startedAt).getTime(),
  };
  appendAgentAudit(audit);
  state.auditMetadata.auditRecord = audit;
  if (state.response) {
    state.response.audit = {
      ...state.response.audit,
      ...audit,
    };
  }
  return state;
}

module.exports = {
  task_understanding: taskUnderstandingNode,
  planning: planningNode,
  tool_selection: toolSelectionNode,
  tool_execution: toolExecutionNode,
  evidence_collection: evidenceCollectionNode,
  evidence_validation: evidenceValidationNode,
  reasoning: reasoningNode,
  response_generation: responseGenerationNode,
  confidence_evaluation: confidenceEvaluationNode,
  approval_check: approvalCheckNode,
  finalization: finalizationNode,
  audit: auditNode,
};
