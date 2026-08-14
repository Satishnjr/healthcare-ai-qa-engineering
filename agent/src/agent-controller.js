const { stableId } = require("../../rag/src/hash");
const { enforceAgentAccess } = require("./policies/agent-policy");
const { applyGuardrails } = require("./guardrails");
const { checkApproval } = require("./approval-manager");
const { executePlan } = require("./tool-executor");
const { collectEvidence } = require("./evidence-manager");
const { validateEvidence } = require("./evidence-validator");
const { buildReasoningOutput } = require("./reasoning-engine");
const { calculateConfidence } = require("./confidence-engine");
const { generateResponse } = require("./response-generator");
const { appendAgentAudit } = require("./audit-manager");

class AgentController {
  constructor({ provider }) {
    this.provider = provider;
  }

  handleRequest({ request, role = "Doctor", approvalDecision = "APPROVED" }) {
    const started = Date.now();
    const access = enforceAgentAccess(role);
    const task = this.provider.classify({ request, role });
    const plan = this.provider.plan({ task });

    if (!access.allowed) {
      const response = {
        responseId: stableId("RESP", task.taskId, String(Date.now())),
        taskId: task.taskId,
        status: "ACCESS_DENIED",
        answer: access.reason,
        taskType: task.taskType,
        plan,
        toolCalls: [],
        evidence: [],
        citations: [],
        confidence: { score: 0, band: "VERY_LOW", formula: "access denied" },
        warnings: ["ACCESS_DENIED"],
        approval: {
          required: false,
          action: null,
          reason: "Request blocked by role policy.",
          status: "NOT_REQUIRED",
        },
        audit: {},
        generatedAt: new Date().toISOString(),
      };
      return response;
    }

    const guardrails = applyGuardrails({ request });
    if (!guardrails.allowed) {
      return {
        responseId: stableId("RESP", task.taskId, String(Date.now())),
        taskId: task.taskId,
        status: "ERROR",
        answer: guardrails.answer,
        taskType: task.taskType,
        plan,
        toolCalls: [],
        evidence: [],
        citations: [],
        confidence: { score: 0, band: "VERY_LOW", formula: "guardrail blocked" },
        warnings: guardrails.warnings,
        approval: {
          required: false,
          action: null,
          reason: "Request blocked by guardrail.",
          status: "NOT_REQUIRED",
        },
        audit: {},
        generatedAt: new Date().toISOString(),
      };
    }

    const approval = checkApproval({ request });
    if (approval.required && approvalDecision !== "APPROVED") {
      return {
        responseId: stableId("RESP", task.taskId, String(Date.now())),
        taskId: task.taskId,
        status: "NEEDS_APPROVAL",
        answer: approval.reason,
        taskType: task.taskType,
        plan,
        toolCalls: [],
        evidence: [],
        citations: [],
        confidence: { score: 0.2, band: "VERY_LOW", formula: "approval pending" },
        warnings: ["APPROVAL_REQUIRED"],
        approval: {
          ...approval,
          status: approvalDecision,
        },
        audit: {},
        generatedAt: new Date().toISOString(),
      };
    }

    const toolCalls = executePlan({
      plan,
      role,
    });
    const evidence = collectEvidence(toolCalls);
    const validation = validateEvidence({
      task,
      evidence,
      role,
      toolCalls,
    });
    const reasoning = buildReasoningOutput({
      task,
      evidence,
      validation,
      toolCalls,
    });
    const confidence = calculateConfidence({
      taskConfidence: task.confidence,
      evidence,
      validationStatus: validation.status,
      toolCalls,
    });

    const audit = {
      responseId: null,
      taskId: task.taskId,
      timestamp: new Date().toISOString(),
      role,
      taskType: task.taskType,
      toolsCalled: toolCalls.map((call) => call.tool),
      toolResults: toolCalls.map((call) => ({
        requestId: call.requestId,
        tool: call.tool,
        status: call.status,
      })),
      evidenceCount: evidence.length,
      confidence: confidence.score,
      finalStatus: reasoning.status,
      approvalStatus: approval.required ? "APPROVED" : "NOT_REQUIRED",
      durationMs: Date.now() - started,
    };

    const response = generateResponse({
      task,
      plan,
      toolCalls,
      evidence,
      reasoning,
      confidence,
      approval: {
        ...approval,
        status: approval.required ? "APPROVED" : "NOT_REQUIRED",
      },
      audit,
    });
    audit.responseId = response.responseId;
    response.audit = audit;
    appendAgentAudit(audit);
    return response;
  }
}

module.exports = {
  AgentController,
};
