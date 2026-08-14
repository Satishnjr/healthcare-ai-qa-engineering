const { stableId } = require("../../../rag/src/hash");
const { analyzeTask } = require("../task-analyzer");
const { AgentMcpClient } = require("../tool-executor");
const { collectEvidence } = require("../evidence-manager");
const { checkApproval } = require("../approval-manager");
const { applyGuardrails } = require("../guardrails");
const { enforceAgentAccess } = require("../policies/agent-policy");
const { createAgentResultContract } = require("./multi-agent-contract");
const { detectConflicts, resolveConflicts } = require("./multi-agent-conflicts");
const { calculateMultiAgentConfidence } = require("./multi-agent-confidence");
const { appendTelemetry } = require("./multi-agent-observability");
const { appendMultiAgentAudit } = require("./multi-agent-audit");

const AGENT_TYPES = {
  SUPERVISOR: "supervisor",
  QA: "qa_analyst",
  RAG: "rag_knowledge",
  TEST: "test_analyst",
  REVIEW: "review_agent",
};

function nowIso() {
  return new Date().toISOString();
}

function toError(code, node, message, details = {}) {
  return {
    code,
    node,
    message,
    details,
    timestamp: nowIso(),
  };
}

function appendHistory(state, payload) {
  state.executionHistory.push({
    ...payload,
    timestamp: nowIso(),
  });
}

function appendNodeTelemetry(state, payload) {
  appendTelemetry({
    multiAgentRunId: state.multiAgentRunId,
    requestId: state.requestId,
    ...payload,
  });
}

function createSupervisorPlan(state) {
  const text = state.originalRequest.toLowerCase();
  const selected = [];
  const rationale = [];

  if (
    text.includes("acceptance criteria") ||
    text.includes("jira") ||
    text.includes("defect") ||
    text.includes("story")
  ) {
    selected.push(AGENT_TYPES.QA);
    rationale.push("QA Analyst selected for Jira/acceptance-criteria/traceability analysis.");
  }
  if (text.includes("rag") || text.includes("knowledge") || text.includes("quality")) {
    selected.push(AGENT_TYPES.RAG);
    rationale.push("RAG Knowledge Agent selected for knowledge retrieval/evaluation context.");
  }
  if (
    text.includes("test case") ||
    text.includes("test scenario") ||
    text.includes("regression") ||
    text.includes("coverage")
  ) {
    selected.push(AGENT_TYPES.TEST);
    rationale.push("Test Analyst selected for test-case/scenario/coverage recommendations.");
  }

  if (!selected.length) {
    selected.push(AGENT_TYPES.QA);
    rationale.push("Default QA Analyst selected for baseline evidence collection.");
  }

  return {
    planId: stableId("MAPLAN", state.requestId, state.taskType ?? "GENERAL"),
    objective: "Deterministic multi-agent orchestration for evidence-backed QA response.",
    selectedAgents: [...new Set(selected)],
    rationale,
    reviewAgent: AGENT_TYPES.REVIEW,
  };
}

function createAgentTasks(state) {
  const base = [
    {
      agentType: AGENT_TYPES.QA,
      objective: "Collect Jira/Confluence/traceability QA evidence.",
      tools: [
        "search_jira",
        "get_jira_issue",
        "search_confluence",
        "get_confluence_page",
        "get_traceability",
        "get_qa_knowledge",
      ],
    },
    {
      agentType: AGENT_TYPES.RAG,
      objective: "Collect grounded knowledge and RAG quality evidence.",
      tools: ["get_rag_context", "query_rag", "get_rag_evaluation", "get_qa_knowledge"],
    },
    {
      agentType: AGENT_TYPES.TEST,
      objective: "Collect test case/scenario/coverage recommendations.",
      tools: [
        "search_test_cases",
        "get_traceability",
        "search_jira",
        "search_confluence",
        "get_qa_knowledge",
      ],
    },
  ];

  return base
    .filter((item) => state.selectedAgents.includes(item.agentType))
    .map((item) => ({
      ...item,
      taskId: stableId("AGTASK", state.multiAgentRunId, item.agentType),
      request: state.originalRequest,
      role: state.role,
    }));
}

function runAgentTask({ task, role, state, phase }) {
  const startedAt = nowIso();
  const client = new AgentMcpClient();
  const allowedTools = task.tools.slice(0, 3);
  const toolCalls = [];

  for (const tool of allowedTools) {
    if (state.limits.toolCallCount >= 18) {
      state.errors.push(toError("MULTI_AGENT_MAX_TOOL_CALLS", phase, "Tool call limit reached."));
      state.executionStatus = "FAILED";
      state.finalStatus = "FAILED";
      break;
    }
    const result = client.callTool({
      tool,
      input: {
        query: task.request,
        text: task.request,
      },
      role,
    });
    state.limits.toolCallCount += 1;
    toolCalls.push(result);
    state.agentToolCalls.push({
      agentType: task.agentType,
      taskId: task.taskId,
      tool: tool,
      requestId: result.requestId,
      status: result.status,
    });
    state.toolCalls = state.agentToolCalls;
    state.auditMetadata.mcpRequestIds.push(result.requestId);
  }

  const evidence = collectEvidence(toolCalls);
  if (!evidence.length) {
    toolCalls
      .filter((item) => item.status === "SUCCESS")
      .forEach((item, index) => {
        evidence.push({
          evidenceId: stableId("MAGEV", task.agentType, item.tool, String(index)),
          sourceSystem: item.source ?? "mcp-runtime",
          sourceType: "ToolResult",
          sourceId: item.tool,
          content: `${item.tool} returned deterministic success output.`,
          score: 0.62,
          traceabilityIds: [],
          timestamp: nowIso(),
          accessScope: "project",
          sensitivity: "synthetic",
          citation: `${item.source ?? "mcp-runtime"}:${item.tool}`,
          agentId: stableId("AGENT", task.agentType, task.objective),
        });
      });
  }
  const findings = evidence.slice(0, 4).map((item) => `${item.sourceSystem}:${item.sourceId} - ${item.content}`);
  const recommendations = [];
  if (task.agentType === AGENT_TYPES.TEST) {
    recommendations.push(
      "Prioritize deterministic regression coverage for appointment cancellation path.",
    );
  }
  if (task.agentType === AGENT_TYPES.RAG) {
    recommendations.push("Review latest RAG quality gate metrics before production rollout.");
  }
  if (task.agentType === AGENT_TYPES.QA) {
    recommendations.push("Confirm Jira acceptance criteria linkage with test scenarios.");
  }
  const citations = evidence.map((item) => ({
    sourceSystem: item.sourceSystem,
    sourceId: item.sourceId,
    documentId: item.documentId ?? null,
    chunkId: item.chunkId ?? null,
  }));
  const completedAt = nowIso();
  const confidenceScore =
    evidence.length > 0
      ? Math.min(0.95, Number((0.62 + evidence.length * 0.05).toFixed(4)))
      : 0.35;

  const contract = createAgentResultContract({
    agentType: task.agentType,
    objective: task.objective,
    toolsUsed: allowedTools,
    toolCalls: toolCalls.map((item) => ({
      requestId: item.requestId,
      tool: item.tool,
      status: item.status,
      source: item.source,
      durationMs: item.durationMs,
    })),
    evidence,
    findings,
    recommendations,
    citations,
    confidence: {
      score: confidenceScore,
      band: confidenceScore >= 0.8 ? "MEDIUM_HIGH" : confidenceScore >= 0.6 ? "MEDIUM" : "LOW",
      formula: "STEP10_AGENT_CONFIDENCE_V1",
    },
    warnings: evidence.length ? [] : ["NO_EVIDENCE_COLLECTED"],
    errors: toolCalls
      .filter((item) => item.status !== "SUCCESS")
      .map((item) => `${item.tool}:${item.error?.message ?? "ERROR"}`),
    startedAt,
    completedAt,
    status: toolCalls.some((item) => item.status !== "SUCCESS") ? "PARTIAL" : "COMPLETED",
  });

  return contract;
}

function supervisorUnderstandingNode(state) {
  try {
    if (!state.originalRequest) {
      throw new Error("Request is empty.");
    }
    const access = enforceAgentAccess(state.role);
    if (!access.allowed) {
      state.executionStatus = "FAILED";
      state.finalStatus = "UNAUTHORIZED";
      state.errors.push(toError("UNAUTHORIZED", "supervisor_understanding", access.reason));
      return state;
    }
    const guardrails = applyGuardrails({ request: state.originalRequest });
    if (!guardrails.allowed) {
      state.executionStatus = "FAILED";
      state.finalStatus = "FAILED";
      state.warnings.push(...(guardrails.warnings ?? []));
      state.errors.push(
        toError("GUARDRAIL_BLOCKED", "supervisor_understanding", "Request blocked by guardrails."),
      );
      return state;
    }
    const analyzed = analyzeTask({
      request: state.originalRequest,
      role: state.role,
    });
    state.taskType = analyzed.taskType;
    state.auditMetadata.taskId = analyzed.taskId;
    state.currentPhase = "SUPERVISOR_UNDERSTANDING";
    state.currentAgent = AGENT_TYPES.SUPERVISOR;
    appendHistory(state, {
      phase: "SUPERVISOR_UNDERSTANDING",
      actor: AGENT_TYPES.SUPERVISOR,
      status: "PASS",
    });
    appendNodeTelemetry(state, {
      agentId: "SUPERVISOR",
      agentType: AGENT_TYPES.SUPERVISOR,
      taskId: analyzed.taskId,
      event: "UNDERSTANDING_COMPLETE",
      status: "PASS",
      durationMs: 0,
      toolsUsed: [],
      toolRequestIds: [],
      evidenceCount: 0,
      confidence: state.confidence.score,
      errors: [],
      currentPhase: state.currentPhase,
    });
    return state;
  } catch (error) {
    state.errors.push(toError("TASK_ANALYSIS_FAILURE", "supervisor_understanding", String(error)));
    state.executionStatus = "FAILED";
    state.finalStatus = "FAILED";
    return state;
  }
}

function supervisorPlanningNode(state) {
  try {
    state.supervisorPlan = createSupervisorPlan(state);
    state.selectedAgents = state.supervisorPlan.selectedAgents;
    state.agentTasks = createAgentTasks(state);
    state.limits.selectedAgentCount = state.selectedAgents.length;
    state.auditMetadata.agentTaskIds = state.agentTasks.map((item) => item.taskId);
    state.currentPhase = "SUPERVISOR_PLANNING";
    appendHistory(state, {
      phase: "SUPERVISOR_PLANNING",
      actor: AGENT_TYPES.SUPERVISOR,
      status: "PASS",
      selectedAgents: state.selectedAgents,
    });
    return state;
  } catch (error) {
    state.errors.push(toError("PLANNING_FAILURE", "supervisor_planning", String(error)));
    state.executionStatus = "FAILED";
    state.finalStatus = "FAILED";
    return state;
  }
}

function agentSelectionNode(state) {
  state.currentPhase = "AGENT_SELECTION";
  appendHistory(state, {
    phase: "AGENT_SELECTION",
    actor: AGENT_TYPES.SUPERVISOR,
    status: "PASS",
    selectedAgents: state.selectedAgents,
  });
  return state;
}

function runSpecialistNode(state, agentType, phaseName) {
  state.currentAgent = agentType;
  state.currentPhase = phaseName;
  const task = state.agentTasks.find((item) => item.agentType === agentType);
  if (!task) {
    state.agentStatuses[agentType] = "SKIPPED";
    appendHistory(state, {
      phase: phaseName,
      actor: agentType,
      status: "SKIPPED",
      reason: "Agent not selected by supervisor.",
    });
    return state;
  }

  const result = runAgentTask({
    task,
    role: state.role,
    state,
    phase: phaseName,
  });
  state.agentResults[agentType] = result;
  state.agentStatuses[agentType] = result.status;
  state.recommendations.push(...(result.recommendations ?? []));
  state.evidence.push(...result.evidence);
  appendHistory(state, {
    phase: phaseName,
    actor: agentType,
    status: result.status,
    tools: result.toolsUsed,
    evidenceCount: result.evidence.length,
  });
  appendNodeTelemetry(state, {
    agentId: result.agentId,
    agentType: result.agentType,
    taskId: result.taskId,
    event: "AGENT_EXECUTED",
    status: result.status,
    durationMs: result.durationMs,
    toolsUsed: result.toolsUsed,
    toolRequestIds: (result.toolCalls ?? []).map((item) => item.requestId),
    evidenceCount: result.evidence.length,
    confidence: result.confidence.score,
    errors: result.errors,
    currentPhase: phaseName,
  });
  return state;
}

function qaAgentNode(state) {
  return runSpecialistNode(state, AGENT_TYPES.QA, "QA_AGENT");
}

function ragAgentNode(state) {
  return runSpecialistNode(state, AGENT_TYPES.RAG, "RAG_AGENT");
}

function testAgentNode(state) {
  return runSpecialistNode(state, AGENT_TYPES.TEST, "TEST_AGENT");
}

function reviewAgentNode(state) {
  state.currentAgent = AGENT_TYPES.REVIEW;
  state.currentPhase = "REVIEW_AGENT";
  const statuses = Object.values(state.agentStatuses);
  const hasUnauthorized = statuses.includes("UNAUTHORIZED");
  const hasErrors = statuses.includes("FAILED");
  const hasPartial = statuses.includes("PARTIAL");
  const uniqueEvidence = new Map();
  for (const item of state.evidence) {
    const key = `${item.sourceSystem}:${item.sourceId}:${item.chunkId ?? ""}`;
    if (!uniqueEvidence.has(key)) {
      uniqueEvidence.set(key, item);
    }
  }
  state.evidence = [...uniqueEvidence.values()];

  let reviewStatus = "VALID";
  let reason = "Evidence validated.";
  if (hasUnauthorized) {
    reviewStatus = "UNAUTHORIZED";
    reason = "Unauthorized agent result detected.";
  } else if (!state.evidence.length) {
    reviewStatus = "INSUFFICIENT";
    reason = "No evidence returned by selected agents.";
  } else if (hasErrors) {
    reviewStatus = "PARTIAL";
    reason = "Some agent executions failed.";
  } else if (hasPartial) {
    reviewStatus = "PARTIAL";
    reason = "Some agent executions are partial.";
  }

  state.evidenceValidation = {
    status: reviewStatus,
    reason,
    reviewedBy: AGENT_TYPES.REVIEW,
  };
  state.agentStatuses[AGENT_TYPES.REVIEW] = reviewStatus;
  appendHistory(state, {
    phase: "REVIEW_AGENT",
    actor: AGENT_TYPES.REVIEW,
    status: reviewStatus,
    evidenceCount: state.evidence.length,
  });
  return state;
}

function conflictCheckNode(state) {
  state.currentPhase = "CONFLICT_CHECK";
  const detected = detectConflicts(state.agentResults);
  state.conflicts = resolveConflicts(detected);
  if (state.conflicts.length && state.evidenceValidation.status === "VALID") {
    state.evidenceValidation.status = "CONFLICTING";
    state.evidenceValidation.reason = "Conflicts detected between specialist outputs.";
  }
  appendHistory(state, {
    phase: "CONFLICT_CHECK",
    actor: AGENT_TYPES.SUPERVISOR,
    status: state.conflicts.length ? "CONFLICTING" : "PASS",
    conflictCount: state.conflicts.length,
  });
  return state;
}

function confidenceNode(state) {
  state.currentPhase = "CONFIDENCE";
  state.confidence = calculateMultiAgentConfidence({
    agentResults: state.agentResults,
    evidence: state.evidence,
    conflicts: state.conflicts,
    reviewStatus: state.evidenceValidation.status,
  });
  appendHistory(state, {
    phase: "CONFIDENCE",
    actor: AGENT_TYPES.SUPERVISOR,
    status: "PASS",
    confidence: state.confidence.score,
    band: state.confidence.band,
  });
  return state;
}

function approvalCheckNode(state) {
  state.currentPhase = "APPROVAL_CHECK";
  const approval = checkApproval({ request: state.originalRequest });
  state.approval = {
    ...state.approval,
    ...approval,
    decision: state.approval.decision,
    status: approval.required ? "REQUIRED" : "NOT_REQUIRED",
  };
  state.approvalStatus = state.approval.status;
  if (state.approval.required && state.approval.decision !== "APPROVED") {
    state.waitingForApproval = true;
    state.executionStatus = "WAITING_FOR_APPROVAL";
    state.finalStatus = "NEEDS_APPROVAL";
  }
  appendHistory(state, {
    phase: "APPROVAL_CHECK",
    actor: AGENT_TYPES.SUPERVISOR,
    status: state.approval.status,
    reason: state.approval.reason,
  });
  return state;
}

function finalizationNode(state) {
  state.currentPhase = "FINALIZATION";
  const citations = [];
  Object.values(state.agentResults).forEach((result) => {
    (result?.citations ?? []).forEach((citation) => citations.push(citation));
  });
  const citationKey = new Set();
  state.citations = citations.filter((item) => {
    const key = `${item.sourceSystem}:${item.sourceId}:${item.chunkId ?? ""}`;
    if (citationKey.has(key)) {
      return false;
    }
    citationKey.add(key);
    return true;
  });

  const summaryLines = [];
  for (const agentType of [AGENT_TYPES.QA, AGENT_TYPES.RAG, AGENT_TYPES.TEST]) {
    const result = state.agentResults[agentType];
    if (!result) {
      continue;
    }
    summaryLines.push(`- ${agentType}: ${(result.findings ?? []).slice(0, 2).join(" | ")}`);
  }
  const reviewLine = `Review status: ${state.evidenceValidation.status} (${state.evidenceValidation.reason})`;
  const conflictLine = `Conflicts: ${state.conflicts.length}`;
  const response = [
    "Multi-agent deterministic response:",
    ...summaryLines,
    reviewLine,
    conflictLine,
  ].join("\n");

  if (state.executionStatus === "WAITING_FOR_APPROVAL") {
    if (state.approval.decision === "REJECTED") {
      state.finalStatus = "PARTIAL";
      state.approval.status = "REJECTED";
      state.approvalStatus = "REJECTED";
    }
  } else if (state.finalStatus === "UNAUTHORIZED") {
    state.executionStatus = "FAILED";
  } else if (state.evidenceValidation.status === "VALID" && !state.conflicts.length) {
    state.finalStatus = "SUCCESS";
    state.executionStatus = "COMPLETED";
  } else if (
    state.evidenceValidation.status === "PARTIAL" ||
    state.evidenceValidation.status === "CONFLICTING"
  ) {
    state.finalStatus = "PARTIAL";
    state.executionStatus = "COMPLETED";
  } else if (state.evidenceValidation.status === "UNAUTHORIZED") {
    state.finalStatus = "UNAUTHORIZED";
    state.executionStatus = "FAILED";
  } else {
    state.finalStatus = "FAILED";
    state.executionStatus = "FAILED";
  }

  state.finalResponse = {
    responseId: stableId("MARESP", state.multiAgentRunId, state.finalStatus),
    answer: response,
    status: state.finalStatus,
  };
  state.auditMetadata.finalResponseId = state.finalResponse.responseId;
  state.timestamps.completedAt = nowIso();
  appendHistory(state, {
    phase: "FINALIZATION",
    actor: AGENT_TYPES.SUPERVISOR,
    status: state.finalStatus,
  });
  return state;
}

function auditNode(state) {
  state.currentPhase = "AUDIT";
  const auditPayload = {
    multiAgentRunId: state.multiAgentRunId,
    graphRunId: state.graphRunId,
    requestId: state.requestId,
    originalRequest: state.originalRequest,
    role: state.role,
    supervisorPlan: state.supervisorPlan,
    selectedAgents: state.selectedAgents,
    agentStatuses: state.agentStatuses,
    toolsCalled: state.agentToolCalls,
    evidenceCount: state.evidence.length,
    reviewStatus: state.evidenceValidation.status,
    conflicts: state.conflicts,
    confidence: state.confidence,
    approvalStatus: state.approvalStatus,
    finalStatus: state.finalStatus,
    responseId: state.finalResponse?.responseId ?? null,
    timestamp: nowIso(),
  };
  appendMultiAgentAudit(auditPayload);
  appendNodeTelemetry(state, {
    agentId: "SUPERVISOR",
    agentType: AGENT_TYPES.SUPERVISOR,
    taskId: state.auditMetadata.taskId ?? "N/A",
    event: "AUDIT_RECORDED",
    status: state.finalStatus,
    durationMs: Math.max(
      0,
      new Date(state.timestamps.completedAt ?? nowIso()).getTime() -
        new Date(state.timestamps.startedAt).getTime(),
    ),
    toolsUsed: [...new Set(state.agentToolCalls.map((item) => item.tool))],
    toolRequestIds: state.auditMetadata.mcpRequestIds,
    evidenceCount: state.evidence.length,
    confidence: state.confidence.score,
    errors: state.errors.map((item) => item.code),
    currentPhase: state.currentPhase,
  });
  return state;
}

module.exports = {
  supervisor_understanding: supervisorUnderstandingNode,
  supervisor_planning: supervisorPlanningNode,
  agent_selection: agentSelectionNode,
  qa_agent: qaAgentNode,
  rag_agent: ragAgentNode,
  test_agent: testAgentNode,
  review_agent: reviewAgentNode,
  conflict_check: conflictCheckNode,
  confidence: confidenceNode,
  approval_check: approvalCheckNode,
  finalization: finalizationNode,
  audit: auditNode,
};
