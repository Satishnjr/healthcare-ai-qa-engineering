const path = require("path");
const { ingestAndIndex } = require("../indexer");
const { createRagRuntime } = require("../rag-runtime-boundary");
const { stableId } = require("../hash");
const { writeJson, ensureDir } = require("../fs-utils");
const {
  evaluationRunsDir,
  evaluationReportsDir,
  repoRoot,
} = require("../runtime-paths");
const { loadEvaluationDataset, snapshotDataset } = require("./dataset");
const { LocalDeterministicEvaluator } = require("./metrics");
const { classifyFailure } = require("./failure-analysis");
const {
  DEFAULT_QUALITY_THRESHOLDS,
  evaluateQualityGate,
} = require("./quality-gate");
const { formatEvaluationReport } = require("./report");
const {
  compareRuns,
  loadLatestRuns,
  saveComparison,
} = require("./comparison");

function average(values) {
  if (!values.length) {
    return 0;
  }
  return Number((values.reduce((sum, value) => sum + value, 0) / values.length).toFixed(4));
}

function evaluateCase({ evaluationCase, ragRuntime, evaluator, thresholds }) {
  const startedAt = Date.now();
  const ragResult = ragRuntime.queryRag({
    query: evaluationCase.question,
    topK: evaluationCase.metadata?.topK ?? 5,
    userContext: { role: evaluationCase.role },
    filters: evaluationCase.metadata?.filters ?? {},
  });
  const retrievalLatency = Date.now() - startedAt;
  const metricPayload = {
    evaluationCase,
    result: ragResult,
  };
  const contextPrecision = evaluator.evaluateContextPrecision(metricPayload).score;
  const contextRecall = evaluator.evaluateContextRecall(metricPayload).score;
  const faithfulness = evaluator.evaluateFaithfulness(metricPayload).score;
  const answerRelevance = evaluator.evaluateAnswerRelevance(metricPayload).score;
  const groundedness = evaluator.evaluateGroundedness(metricPayload).score;
  const overallScore = average([
    contextPrecision,
    contextRecall,
    faithfulness,
    answerRelevance,
    groundedness,
  ]);

  let status = "PASS";
  if (overallScore < thresholds.minimumOverallScore) {
    status = overallScore >= thresholds.minimumOverallScore - 0.1 ? "WARN" : "FAIL";
  }
  const expectNoEvidence = Boolean(evaluationCase.metadata?.expectNoEvidence);
  if (expectNoEvidence && !(ragResult.warnings ?? []).includes("NO_EVIDENCE")) {
    status = "FAIL";
  }
  if (!expectNoEvidence && (ragResult.warnings ?? []).includes("NO_EVIDENCE")) {
    status = "FAIL";
  }

  const failureCategory =
    status === "PASS"
      ? null
      : classifyFailure({
          evaluationCase,
          result: ragResult,
          metrics: {
            contextPrecision,
            contextRecall,
            faithfulness,
            answerRelevance,
            groundedness,
          },
        });

  return {
    caseId: evaluationCase.caseId,
    question: evaluationCase.question,
    role: evaluationCase.role,
    category: evaluationCase.category,
    expectedSources: evaluationCase.expectedSources,
    expectedAnswer: evaluationCase.expectedAnswer,
    expectedTraceabilityIds: evaluationCase.expectedTraceabilityIds,
    answer: ragResult.answer,
    citations: ragResult.citations,
    retrievedSources: ragResult.citations.map((citation) => `${citation.sourceSystem}:${citation.sourceId}`),
    metrics: {
      contextPrecision,
      contextRecall,
      faithfulness,
      answerRelevance,
      groundedness,
    },
    overallScore,
    status,
    warnings: ragResult.warnings ?? [],
    failureCategory,
    observability: {
      retrievalLatency,
      evaluationLatency: Date.now() - startedAt,
      retrievedChunkIds: ragResult.citations.map((item) => item.chunkId),
      scores: ragResult.citations.map((item) => item.score),
    },
  };
}

function buildRun({ dataset, datasetSnapshotPath, thresholds, results, runContext }) {
  const passedCases = results.filter((item) => item.status === "PASS").length;
  const warnCases = results.filter((item) => item.status === "WARN").length;
  const failedCases = results.filter((item) => item.status === "FAIL").length;
  const metrics = {
    contextPrecision: average(results.map((item) => item.metrics.contextPrecision)),
    contextRecall: average(results.map((item) => item.metrics.contextRecall)),
    faithfulness: average(results.map((item) => item.metrics.faithfulness)),
    answerRelevance: average(results.map((item) => item.metrics.answerRelevance)),
    groundedness: average(results.map((item) => item.metrics.groundedness)),
  };
  metrics.overallScore = average([
    metrics.contextPrecision,
    metrics.contextRecall,
    metrics.faithfulness,
    metrics.answerRelevance,
    metrics.groundedness,
  ]);
  const qualityGate = evaluateQualityGate(metrics, thresholds);
  const runId = stableId("RUN", dataset.datasetId, dataset.datasetVersion, String(Date.now()));

  return {
    runId,
    timestamp: new Date().toISOString(),
    datasetId: dataset.datasetId,
    datasetVersion: dataset.datasetVersion,
    datasetSnapshotPath,
    ragVersion: runContext.ragVersion,
    modelVersion: runContext.generationModel,
    promptVersion: "step-5-extractive-v1",
    embeddingVersion: runContext.embeddingModel,
    evaluatorVersion: "local-deterministic-evaluator-v1",
    embeddingProvider: runContext.embeddingProvider,
    embeddingModel: runContext.embeddingModel,
    generationProvider: runContext.generationProvider,
    generationModel: runContext.generationModel,
    totalCases: dataset.records.length,
    passedCases,
    warnCases,
    failedCases,
    metrics,
    qualityGate,
    results,
  };
}

function saveRunArtifacts(run) {
  ensureDir(evaluationRunsDir);
  ensureDir(evaluationReportsDir);
  const runJsonPath = path.join(evaluationRunsDir, `${run.runId}.json`);
  writeJson(runJsonPath, run);

  const telemetryPath = path.join(evaluationRunsDir, `${run.runId}.telemetry.ndjson`);
  const telemetryLines = run.results.map((item) =>
    JSON.stringify({
      runId: run.runId,
      caseId: item.caseId,
      timestamp: run.timestamp,
      datasetVersion: run.datasetVersion,
      ragVersion: run.ragVersion,
      embeddingProvider: run.embeddingProvider,
      embeddingModel: run.embeddingModel,
      generationProvider: run.generationProvider,
      generationModel: run.generationModel,
      modelVersion: run.modelVersion,
      promptVersion: run.promptVersion,
      embeddingVersion: run.embeddingVersion,
      evaluatorVersion: run.evaluatorVersion,
      retrievalLatency: item.observability.retrievalLatency,
      evaluationLatency: item.observability.evaluationLatency,
      retrievedChunkIds: item.observability.retrievedChunkIds,
      scores: item.observability.scores,
      qualityGate: run.qualityGate.status,
      failureCategory: item.failureCategory,
    }),
  );
  require("fs").writeFileSync(telemetryPath, `${telemetryLines.join("\n")}\n`);

  const markdownReport = formatEvaluationReport(run);
  const reportMdPath = path.join(evaluationReportsDir, `${run.runId}.md`);
  require("fs").writeFileSync(reportMdPath, markdownReport);

  const frontendTargetPath = path.join(
    repoRoot,
    "frontend",
    "public",
    "rag",
    "latest-evaluation-run.json",
  );
  let frontendCopyStatus = "SUCCESS";
  try {
    writeJson(frontendTargetPath, run);
  } catch (error) {
    frontendCopyStatus = `FAILED: ${error.code ?? "UNKNOWN"} ${error.message}`;
  }
  return {
    runJsonPath,
    reportMdPath,
    telemetryPath,
    frontendCopyStatus,
  };
}

function runEvaluation(options = {}) {
  const thresholds = options.thresholds ?? DEFAULT_QUALITY_THRESHOLDS;
  const { dataset, validation } = loadEvaluationDataset(options.datasetPath);
  if (!validation.valid) {
    throw new Error(`Dataset validation failed: ${validation.issues.join(" | ")}`);
  }

  const ingestionSummary = ingestAndIndex();
  const ragRuntime = createRagRuntime();
  const evaluator = new LocalDeterministicEvaluator();

  const results = dataset.records.map((evaluationCase) =>
    evaluateCase({
      evaluationCase,
      ragRuntime,
      evaluator,
      thresholds,
    }),
  );

  const runContext = {
    ragVersion: "step-5-runtime",
    embeddingProvider: "deterministic-fallback",
    embeddingModel: "hashing-v1",
    generationProvider: "deterministic-grounded-generator",
    generationModel: "extractive-v1",
  };
  const datasetSnapshotPath = snapshotDataset(dataset);
  const run = buildRun({
    dataset,
    datasetSnapshotPath,
    thresholds,
    results,
    runContext,
  });
  const artifacts = saveRunArtifacts(run);

  const latestRuns = loadLatestRuns(2);
  let comparison = null;
  if (latestRuns.length >= 2) {
    comparison = compareRuns(latestRuns[1], latestRuns[0]);
    saveComparison(comparison);
  }

  return {
    run,
    artifacts,
    comparison,
    ingestionSummary,
  };
}

module.exports = {
  runEvaluation,
};
