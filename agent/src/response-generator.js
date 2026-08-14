const { stableId } = require("../../rag/src/hash");
const { createAgentResponse } = require("./contracts/response-contracts");

function generateResponse({
  task,
  plan,
  toolCalls,
  evidence,
  reasoning,
  confidence,
  approval,
  audit,
}) {
  return createAgentResponse({
    responseId: stableId("RESP", task.taskId, String(Date.now())),
    taskId: task.taskId,
    status: reasoning.status,
    answer: reasoning.answer,
    taskType: task.taskType,
    plan,
    toolCalls,
    evidence,
    citations: evidence.map((item) => ({
      evidenceId: item.evidenceId,
      sourceSystem: item.sourceSystem,
      sourceId: item.sourceId,
      documentId: item.documentId,
      chunkId: item.chunkId,
      traceabilityIds: item.traceabilityIds,
    })),
    confidence,
    warnings: [...(reasoning.warnings ?? []), `CONFIDENCE_BAND:${confidence.band}`],
    approval,
    audit,
    generatedAt: new Date().toISOString(),
  });
}

module.exports = {
  generateResponse,
};
