function nowIso() {
  return new Date().toISOString();
}

function makeOperationMetadata(operation, sourceSystem, sourceId, status, traceabilityIds, error = null) {
  return {
    operation,
    sourceSystem,
    sourceId,
    timestamp: nowIso(),
    duration: 0,
    status,
    error,
    correlationId: `cfh-${Date.now()}`,
    traceabilityIds: Array.isArray(traceabilityIds) ? traceabilityIds : []
  };
}

module.exports = {
  nowIso,
  makeOperationMetadata
};
