const fs = require("fs");
const path = require("path");
const {
  evaluationComparisonsDir,
  evaluationRunsDir,
} = require("../runtime-paths");
const { writeJson, ensureDir, readJson } = require("../fs-utils");
const { stableId } = require("../hash");

function classifyTrend(delta) {
  if (delta > 0.0001) {
    return "IMPROVED";
  }
  if (delta < -0.0001) {
    return "REGRESSED";
  }
  return "UNCHANGED";
}

function compareRuns(baseRun, targetRun) {
  const metrics = [
    "overallScore",
    "contextPrecision",
    "contextRecall",
    "faithfulness",
    "answerRelevance",
    "groundedness",
  ];

  const delta = {};
  metrics.forEach((metric) => {
    const before = baseRun.metrics[metric] ?? 0;
    const after = targetRun.metrics[metric] ?? 0;
    const value = Number((after - before).toFixed(4));
    delta[metric] = {
      before,
      after,
      delta: value,
      trend: classifyTrend(value),
    };
  });

  return {
    comparisonId: stableId("CMP", baseRun.runId, targetRun.runId),
    baseRunId: baseRun.runId,
    targetRunId: targetRun.runId,
    timestamp: new Date().toISOString(),
    delta,
    passDelta: targetRun.passedCases - baseRun.passedCases,
    failDelta: targetRun.failedCases - baseRun.failedCases,
    trend: classifyTrend(delta.overallScore.delta),
  };
}

function loadLatestRuns(limit = 2) {
  if (!fs.existsSync(evaluationRunsDir)) {
    return [];
  }
  const files = fs
    .readdirSync(evaluationRunsDir)
    .filter((name) => name.endsWith(".json"))
    .map((name) => path.join(evaluationRunsDir, name));
  files.sort((left, right) => fs.statSync(right).mtimeMs - fs.statSync(left).mtimeMs);
  return files.slice(0, limit).map((filePath) => readJson(filePath));
}

function saveComparison(comparison) {
  ensureDir(evaluationComparisonsDir);
  const filePath = path.join(evaluationComparisonsDir, `${comparison.comparisonId}.json`);
  writeJson(filePath, comparison);
  return filePath;
}

module.exports = {
  compareRuns,
  loadLatestRuns,
  saveComparison,
};
