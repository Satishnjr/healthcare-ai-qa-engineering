function toBand(score) {
  if (score >= 0.9) {
    return "HIGH";
  }
  if (score >= 0.8) {
    return "MEDIUM_HIGH";
  }
  if (score >= 0.65) {
    return "MEDIUM";
  }
  if (score >= 0.45) {
    return "LOW";
  }
  return "VERY_LOW";
}

function calculateMultiAgentConfidence({
  agentResults,
  evidence,
  conflicts,
  reviewStatus,
}) {
  const resultList = Object.values(agentResults ?? {}).filter(Boolean);
  const avgAgentConfidence =
    resultList.length > 0
      ? resultList.reduce((sum, item) => sum + Number(item.confidence?.score ?? 0), 0) /
        resultList.length
      : 0.3;
  const evidenceQuantityFactor = Math.min(1, (evidence?.length ?? 0) / 6);
  const citationCoverageFactor =
    resultList.length > 0
      ? resultList.filter((item) => (item.citations ?? []).length > 0).length / resultList.length
      : 0;
  const toolSuccessRatio = (() => {
    const calls = resultList.flatMap((item) => item.toolCalls ?? []);
    if (!calls.length) {
      return 0.5;
    }
    return calls.filter((call) => call.status === "SUCCESS").length / calls.length;
  })();
  const conflictPenalty = Math.min(0.35, (conflicts?.length ?? 0) * 0.1);
  const reviewMultiplier =
    reviewStatus === "VALID"
      ? 1
      : reviewStatus === "PARTIAL"
        ? 0.82
        : reviewStatus === "CONFLICTING"
          ? 0.62
          : reviewStatus === "UNAUTHORIZED"
            ? 0.45
            : 0.58;

  const raw =
    avgAgentConfidence * 0.45 +
    evidenceQuantityFactor * 0.2 +
    citationCoverageFactor * 0.15 +
    toolSuccessRatio * 0.2;
  const weighted = Math.max(0, Math.min(1, (raw - conflictPenalty) * reviewMultiplier));
  const score = Number(weighted.toFixed(4));
  return {
    score,
    band: toBand(score),
    formula:
      "STEP10_MULTI_AGENT_CONFIDENCE_V1=(avgAgent*0.45+evidenceQty*0.2+citationCoverage*0.15+toolSuccess*0.2-conflictPenalty)*reviewMultiplier",
  };
}

module.exports = {
  calculateMultiAgentConfidence,
};

