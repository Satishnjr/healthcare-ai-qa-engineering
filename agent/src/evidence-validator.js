const { EVIDENCE_VALIDATION_STATUSES } = require("./contracts/agent-contracts");

function validateEvidence({ task, evidence, role, toolCalls }) {
  if (toolCalls.some((call) => call.error?.code === "ACCESS_DENIED")) {
    return {
      status: EVIDENCE_VALIDATION_STATUSES.UNAUTHORIZED,
      warnings: ["ACCESS_DENIED"],
    };
  }

  if (!evidence.length) {
    return {
      status: EVIDENCE_VALIDATION_STATUSES.INSUFFICIENT,
      warnings: ["NO_EVIDENCE"],
    };
  }

  const allAuthorized = evidence.every((item) => {
    if (role === "Patient") {
      return item.accessScope === "public";
    }
    return true;
  });
  if (!allAuthorized) {
    return {
      status: EVIDENCE_VALIDATION_STATUSES.UNAUTHORIZED,
      warnings: ["EVIDENCE_SCOPE_VIOLATION"],
    };
  }

  const relevantHits = evidence.filter((item) => {
    const body = `${item.content} ${item.sourceId} ${(item.traceabilityIds ?? []).join(" ")}`.toLowerCase();
    return task.originalRequest.toLowerCase().split(/\s+/).some((token) => token.length > 3 && body.includes(token));
  });
  if (relevantHits.length === 0) {
    return {
      status: EVIDENCE_VALIDATION_STATUSES.PARTIAL,
      warnings: ["LOW_RELEVANCE_EVIDENCE"],
    };
  }

  return {
    status: EVIDENCE_VALIDATION_STATUSES.VALID,
    warnings: [],
  };
}

module.exports = {
  validateEvidence,
};
