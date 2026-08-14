function createEvidenceRecord({
  evidenceId,
  sourceSystem,
  sourceType,
  sourceId,
  documentId = null,
  chunkId = null,
  traceabilityIds = [],
  content,
  score = 0,
  timestamp,
  accessScope = "public",
  sensitivity = "Internal",
}) {
  return {
    evidenceId,
    sourceSystem,
    sourceType,
    sourceId,
    documentId,
    chunkId,
    traceabilityIds,
    content,
    score,
    timestamp,
    accessScope,
    sensitivity,
  };
}

module.exports = {
  createEvidenceRecord,
};
