function toPercent(score) {
  return `${Math.round(score * 100)}%`;
}

function formatEvaluationReport(run) {
  const lines = [];
  lines.push("# RAG Evaluation Report");
  lines.push("");
  lines.push(`- Run ID: ${run.runId}`);
  lines.push(`- Dataset: ${run.datasetId} (${run.datasetVersion})`);
  lines.push(`- Timestamp: ${run.timestamp}`);
  lines.push(`- Quality Gate: ${run.qualityGate.status}`);
  lines.push("");
  lines.push("## Summary");
  lines.push("");
  lines.push(`- Total Cases: ${run.totalCases}`);
  lines.push(`- Passed: ${run.passedCases}`);
  lines.push(`- Failed: ${run.failedCases}`);
  lines.push(`- Warnings: ${run.warnCases}`);
  lines.push(`- Context Precision: ${toPercent(run.metrics.contextPrecision)}`);
  lines.push(`- Context Recall: ${toPercent(run.metrics.contextRecall)}`);
  lines.push(`- Faithfulness: ${toPercent(run.metrics.faithfulness)}`);
  lines.push(`- Answer Relevance: ${toPercent(run.metrics.answerRelevance)}`);
  lines.push(`- Groundedness: ${toPercent(run.metrics.groundedness)}`);
  lines.push(`- Overall Score: ${toPercent(run.metrics.overallScore)}`);
  lines.push("");
  lines.push("## Failed Cases");
  lines.push("");
  const failed = run.results.filter((item) => item.status === "FAIL");
  if (!failed.length) {
    lines.push("- None");
  } else {
    failed.forEach((item) => {
      lines.push(
        `- ${item.caseId} (${item.category}) -> ${item.failureCategory} | overall ${toPercent(item.overallScore)}`,
      );
    });
  }
  lines.push("");
  lines.push("## Weakest Cases");
  lines.push("");
  [...run.results]
    .sort((left, right) => left.overallScore - right.overallScore)
    .slice(0, 5)
    .forEach((item) => {
      lines.push(`- ${item.caseId}: ${toPercent(item.overallScore)} (${item.status})`);
    });

  return `${lines.join("\n")}\n`;
}

module.exports = {
  formatEvaluationReport,
};
