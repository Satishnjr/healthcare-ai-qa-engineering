const { stableId } = require("../../../rag/src/hash");

function normalizeEvidence(rawEvidence, agentId) {
  return (rawEvidence ?? []).map((item, index) => ({
    evidenceId: item.evidenceId ?? stableId("MAGEV", agentId, String(index), item.sourceId ?? "UNKNOWN"),
    sourceSystem: item.sourceSystem ?? "unknown",
    sourceType: item.sourceType ?? "document",
    sourceId: item.sourceId ?? "UNKNOWN",
    documentId: item.documentId ?? null,
    chunkId: item.chunkId ?? null,
    traceabilityIds: item.traceabilityIds ?? [],
    score: Number(item.score ?? 0),
    accessScope: item.accessScope ?? "project",
    sensitivity: item.sensitivity ?? "synthetic",
    citation: item.citation ?? `${item.sourceSystem ?? "unknown"}:${item.sourceId ?? "UNKNOWN"}`,
    content: item.content ?? "",
    agentId,
  }));
}

function createAgentResultContract({
  agentType,
  objective,
  toolsUsed,
  toolCalls,
  evidence,
  findings,
  recommendations,
  citations,
  confidence,
  warnings,
  errors,
  startedAt,
  completedAt,
  status = "COMPLETED",
}) {
  const agentId = stableId("AGENT", agentType, objective);
  const taskId = stableId("AGTASK", agentType, objective, startedAt);
  return {
    agentId,
    agentType,
    taskId,
    status,
    objective,
    toolsUsed,
    toolCalls,
    evidence: normalizeEvidence(evidence, agentId),
    findings,
    recommendations,
    citations,
    confidence,
    warnings,
    errors,
    startedAt,
    completedAt,
    durationMs: Math.max(0, new Date(completedAt).getTime() - new Date(startedAt).getTime()),
  };
}

module.exports = {
  createAgentResultContract,
  normalizeEvidence,
};

