const { runEvaluation } = require("./evaluation/runner");

function parseArgs(argv) {
  const args = {};
  for (let i = 0; i < argv.length; i += 1) {
    if (argv[i] === "--dataset") {
      args.datasetPath = argv[i + 1];
      i += 1;
    }
  }
  return args;
}

function printSummary(run, artifacts, comparison) {
  const lines = [];
  lines.push("RAG Evaluation Run");
  lines.push("------------------");
  lines.push(`Run ID: ${run.runId}`);
  lines.push(`Dataset: ${run.datasetId} (${run.datasetVersion})`);
  lines.push(`Cases: ${run.totalCases}`);
  lines.push("");
  lines.push(`Context Precision: ${run.metrics.contextPrecision}`);
  lines.push(`Context Recall:    ${run.metrics.contextRecall}`);
  lines.push(`Faithfulness:      ${run.metrics.faithfulness}`);
  lines.push(`Answer Relevance:  ${run.metrics.answerRelevance}`);
  lines.push(`Groundedness:      ${run.metrics.groundedness}`);
  lines.push(`Overall Score:     ${run.metrics.overallScore}`);
  lines.push("");
  lines.push(`Quality Gate: ${run.qualityGate.status}`);
  lines.push(`Passed: ${run.passedCases} | Warn: ${run.warnCases} | Failed: ${run.failedCases}`);
  lines.push("");
  lines.push(`Run JSON: ${artifacts.runJsonPath}`);
  lines.push(`Report MD: ${artifacts.reportMdPath}`);
  lines.push(`Telemetry: ${artifacts.telemetryPath}`);
  lines.push(`Frontend Copy: ${artifacts.frontendCopyStatus}`);
  if (comparison) {
    lines.push("");
    lines.push(`Comparison Trend: ${comparison.trend}`);
    lines.push(
      `Overall Delta: ${comparison.delta.overallScore.delta} (${comparison.delta.overallScore.trend})`,
    );
  }
  process.stdout.write(`${lines.join("\n")}\n`);
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const output = runEvaluation(args);
  printSummary(output.run, output.artifacts, output.comparison);
}

main();
