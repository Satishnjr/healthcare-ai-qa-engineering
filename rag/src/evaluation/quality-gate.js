const { EVALUATION_STATUS } = require("./contracts");

const DEFAULT_QUALITY_THRESHOLDS = {
  contextPrecision: 0.55,
  contextRecall: 0.55,
  faithfulness: 0.6,
  answerRelevance: 0.6,
  groundedness: 0.7,
  minimumOverallScore: 0.62,
};

function evaluateQualityGate(summaryMetrics, thresholds = DEFAULT_QUALITY_THRESHOLDS) {
  const failures = [];
  const warnings = [];
  const metricMap = [
    ["contextPrecision", summaryMetrics.contextPrecision],
    ["contextRecall", summaryMetrics.contextRecall],
    ["faithfulness", summaryMetrics.faithfulness],
    ["answerRelevance", summaryMetrics.answerRelevance],
    ["groundedness", summaryMetrics.groundedness],
  ];

  for (const [name, score] of metricMap) {
    const threshold = thresholds[name];
    if (score < threshold) {
      if (score < threshold - 0.1) {
        failures.push(`${name} below threshold (${score} < ${threshold})`);
      } else {
        warnings.push(`${name} slightly below threshold (${score} < ${threshold})`);
      }
    }
  }

  if (summaryMetrics.overallScore < thresholds.minimumOverallScore) {
    if (summaryMetrics.overallScore < thresholds.minimumOverallScore - 0.1) {
      failures.push(
        `overallScore below threshold (${summaryMetrics.overallScore} < ${thresholds.minimumOverallScore})`,
      );
    } else {
      warnings.push(
        `overallScore slightly below threshold (${summaryMetrics.overallScore} < ${thresholds.minimumOverallScore})`,
      );
    }
  }

  const status = failures.length
    ? EVALUATION_STATUS.FAIL
    : warnings.length
      ? EVALUATION_STATUS.WARN
      : EVALUATION_STATUS.PASS;

  return {
    status,
    thresholds,
    failures,
    warnings,
  };
}

module.exports = {
  DEFAULT_QUALITY_THRESHOLDS,
  evaluateQualityGate,
};
