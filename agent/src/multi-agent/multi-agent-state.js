const { stableId } = require("../../../rag/src/hash");

function initializeMultiAgentState({
  request,
  role = "Doctor",
  approvalDecision = "APPROVED",
  requestId = null,
}) {
  const now = new Date().toISOString();
  const originalRequest = String(request ?? "").trim();
  const normalizedRequestId = requestId ?? stableId("REQ", originalRequest, role, now);
  const multiAgentRunId = stableId("MAGRUN", normalizedRequestId, String(Date.now()));

  return {
    multiAgentRunId,
    graphRunId: multiAgentRunId,
    requestId: normalizedRequestId,
    originalRequest,
    role,
    taskType: null,
    supervisorPlan: null,
    selectedAgents: [],
    agentTasks: [],
    agentResults: {},
    agentStatuses: {},
    agentToolCalls: [],
    toolCalls: [],
    evidence: [],
    evidenceValidation: {
      status: "INSUFFICIENT",
      reason: "Execution not completed.",
      reviewedBy: "review_agent",
    },
    conflicts: [],
    recommendations: [],
    finalResponse: null,
    citations: [],
    confidence: {
      score: 0,
      band: "VERY_LOW",
      formula: "STEP10_MULTI_AGENT_CONFIDENCE_V1",
    },
    warnings: [],
    errors: [],
    currentAgent: "supervisor",
    currentPhase: "INITIALIZED",
    executionHistory: [],
    currentNode: "START",
    previousNode: null,
    currentStep: 0,
    nodeHistory: [],
    transitionHistory: [],
    approval: {
      required: false,
      action: null,
      reason: "Read-only request.",
      status: "NOT_REQUIRED",
      decision: approvalDecision,
    },
    approvalStatus: "NOT_REQUIRED",
    waitingForApproval: false,
    finalStatus: "RUNNING",
    executionStatus: "RUNNING",
    retry: {
      count: 0,
      reason: null,
      failedPhase: null,
    },
    limits: {
      stepCount: 0,
      toolCallCount: 0,
      selectedAgentCount: 0,
    },
    timestamps: {
      createdAt: now,
      updatedAt: now,
      startedAt: now,
      completedAt: null,
    },
    auditMetadata: {
      multiAgentRunId,
      graphRunId: multiAgentRunId,
      requestId: normalizedRequestId,
      taskId: null,
      agentTaskIds: [],
      mcpRequestIds: [],
      finalResponseId: null,
    },
  };
}

module.exports = {
  initializeMultiAgentState,
};
