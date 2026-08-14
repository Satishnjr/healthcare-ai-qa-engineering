function average(values) {
  if (!values.length) {
    return 0;
  }
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function calculateConfidence({ taskConfidence, evidence, validationStatus, toolCalls }) {
  const evidenceCountScore = Math.min(1, evidence.length / 5);
  const qualityScore = average(evidence.map((item) => item.score));
  const toolSuccessScore = toolCalls.length
    ? toolCalls.filter((call) => call.status === "SUCCESS").length / toolCalls.length
    : 0;
  const citationCoverageScore = evidence.length ? 1 : 0;
  const consistencyScore = validationStatus === "VALID" ? 1 : validationStatus === "PARTIAL" ? 0.7 : 0.2;

  const score = Number(
    (
      taskConfidence * 0.2 +
      evidenceCountScore * 0.2 +
      qualityScore * 0.2 +
      toolSuccessScore * 0.2 +
      citationCoverageScore * 0.1 +
      consistencyScore * 0.1
    ).toFixed(4),
  );

  const band =
    score >= 0.9
      ? "HIGH"
      : score >= 0.75
        ? "MEDIUM_HIGH"
        : score >= 0.5
          ? "MEDIUM"
          : score >= 0.25
            ? "LOW"
            : "VERY_LOW";

  return {
    score,
    band,
    formula:
      "0.2*task + 0.2*evidenceCount + 0.2*sourceQuality + 0.2*toolSuccess + 0.1*citationCoverage + 0.1*consistency",
  };
}

module.exports = {
  calculateConfidence,
};
