function createAgentResponse(payload) {
  return {
    responseId: payload.responseId,
    taskId: payload.taskId,
    status: payload.status,
    answer: payload.answer,
    taskType: payload.taskType,
    plan: payload.plan,
    toolCalls: payload.toolCalls ?? [],
    evidence: payload.evidence ?? [],
    citations: payload.citations ?? [],
    confidence: payload.confidence ?? 0,
    warnings: payload.warnings ?? [],
    approval: payload.approval,
    audit: payload.audit,
    generatedAt: payload.generatedAt,
  };
}

module.exports = {
  createAgentResponse,
};
