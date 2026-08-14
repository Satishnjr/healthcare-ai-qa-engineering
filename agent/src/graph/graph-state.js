const { stableId } = require("../../../rag/src/hash");

function initializeGraphState({
  request,
  role,
  approvalDecision = "APPROVED",
  requestId = null,
}) {
  const now = new Date().toISOString();
  const normalizedRequest = String(request ?? "").trim();
  const id = requestId ?? stableId("REQ", normalizedRequest, role, now);
  const graphRunId = stableId("GRAPH", id, String(Date.now()));
  return {
    graphRunId,
    requestId: id,
    taskId: null,
    originalRequest: normalizedRequest,
    role,
    taskType: null,
    entities: [],
    constraints: {},
    requestedOutput: null,
    riskLevel: null,
    confidence: {
      score: 0,
      band: "VERY_LOW",
      formula: "",
    },
    plan: null,
    selectedTools: [],
    currentNode: "START",
    previousNode: null,
    currentStep: 0,
    nodeHistory: [],
    transitionHistory: [],
    toolCalls: [],
    toolResults: [],
    evidence: [],
    evidenceValidation: null,
    reasoning: null,
    response: null,
    citations: [],
    warnings: [],
    approval: {
      required: false,
      status: "NOT_REQUIRED",
      reason: "Read-only request.",
      action: null,
      decision: approvalDecision,
    },
    approvalStatus: "NOT_REQUIRED",
    waitingForApproval: false,
    finalStatus: "RUNNING",
    errors: [],
    retry: {
      failedNode: null,
      retryCount: 0,
      retryReason: null,
      evidenceRetryCount: 0,
    },
    limits: {
      stepCount: 0,
      toolCallCount: 0,
    },
    executionStatus: "RUNNING",
    timestamps: {
      createdAt: now,
      updatedAt: now,
      startedAt: now,
      completedAt: null,
    },
    auditMetadata: {
      graphRunId,
      requestId: id,
      taskId: null,
      responseId: null,
      mcpRequestIds: [],
    },
  };
}

module.exports = {
  initializeGraphState,
};
