const assert = require("assert");

const { validateDataset } = require("../src/evaluation/dataset");
const {
  evaluateContextPrecision,
  evaluateContextRecall,
  evaluateFaithfulness,
  evaluateAnswerRelevance,
  evaluateGroundedness,
} = require("../src/evaluation/metrics");
const {
  evaluateQualityGate,
  DEFAULT_QUALITY_THRESHOLDS,
} = require("../src/evaluation/quality-gate");
const { classifyFailure } = require("../src/evaluation/failure-analysis");
const { compareRuns } = require("../src/evaluation/comparison");
const { runEvaluation } = require("../src/evaluation/runner");

function run() {
  const validDataset = {
    datasetId: "test-dataset",
    datasetVersion: "1.0.0",
    records: [
      {
        caseId: "CASE-1",
        question: "question",
        expectedSources: ["repository:requirements-traceability"],
        expectedAnswer: "expected",
        referenceContext: ["context"],
        expectedTraceabilityIds: ["US-1"],
        role: "Doctor",
        category: "TRACEABILITY",
        metadata: {},
      },
    ],
  };
  assert.strictEqual(validateDataset(validDataset).valid, true, "dataset validation should pass");

  const duplicateDataset = {
    ...validDataset,
    records: [...validDataset.records, { ...validDataset.records[0] }],
  };
  assert.strictEqual(
    validateDataset(duplicateDataset).valid,
    false,
    "duplicate case detection should fail validation",
  );

  const missingFieldDataset = {
    ...validDataset,
    records: [{ ...validDataset.records[0], question: null }],
  };
  assert.strictEqual(
    validateDataset(missingFieldDataset).valid,
    false,
    "missing required field should fail validation",
  );

  const metricPayload = {
    evaluationCase: validDataset.records[0],
    result: {
      answer: "This answer uses context and expected terms",
      citations: [
        {
          sourceSystem: "repository",
          sourceId: "requirements-traceability",
          traceabilityIds: ["US-1"],
          score: 0.8,
        },
      ],
      warnings: [],
    },
  };
  assert.ok(evaluateContextPrecision(metricPayload).score > 0, "context precision score should be calculated");
  assert.ok(evaluateContextRecall(metricPayload).score > 0, "context recall score should be calculated");
  assert.ok(evaluateFaithfulness(metricPayload).score > 0, "faithfulness score should be calculated");
  assert.ok(evaluateAnswerRelevance(metricPayload).score >= 0, "answer relevance should be calculated");
  assert.ok(evaluateGroundedness(metricPayload).score > 0, "groundedness score should be calculated");

  const noEvidenceExpectedPayload = {
    evaluationCase: { ...validDataset.records[0], metadata: { expectNoEvidence: true } },
    result: {
      answer: "I could not find sufficient evidence in the indexed CareFlow knowledge base to answer this question.",
      citations: [],
      warnings: ["NO_EVIDENCE"],
    },
  };
  const expectedFailureCategory = classifyFailure({
    evaluationCase: noEvidenceExpectedPayload.evaluationCase,
    result: noEvidenceExpectedPayload.result,
    metrics: {
      contextPrecision: 0,
      contextRecall: 0,
      faithfulness: 1,
      answerRelevance: 0,
      groundedness: 1,
    },
  });
  assert.strictEqual(expectedFailureCategory, "NO_EVIDENCE_EXPECTED", "expected no-evidence classification should match");

  const noEvidenceUnexpectedCategory = classifyFailure({
    evaluationCase: validDataset.records[0],
    result: noEvidenceExpectedPayload.result,
    metrics: {
      contextPrecision: 0,
      contextRecall: 0,
      faithfulness: 0,
      answerRelevance: 0,
      groundedness: 0,
    },
  });
  assert.strictEqual(
    noEvidenceUnexpectedCategory,
    "NO_EVIDENCE_UNEXPECTED",
    "unexpected no-evidence classification should match",
  );

  const accessViolationCategory = classifyFailure({
    evaluationCase: { ...validDataset.records[0], role: "Patient" },
    result: {
      answer: "answer",
      citations: [{ sourceSystem: "jira", sourceId: "CFH-101", traceabilityIds: [], score: 0.5 }],
      warnings: [],
    },
    metrics: {
      contextPrecision: 0.2,
      contextRecall: 0.2,
      faithfulness: 0.2,
      answerRelevance: 0.2,
      groundedness: 0.2,
    },
  });
  assert.strictEqual(accessViolationCategory, "ACCESS_CONTROL_FAILURE", "access-control failure should be detected");

  const gatePass = evaluateQualityGate(
    {
      contextPrecision: 0.8,
      contextRecall: 0.8,
      faithfulness: 0.9,
      answerRelevance: 0.8,
      groundedness: 0.9,
      overallScore: 0.84,
    },
    DEFAULT_QUALITY_THRESHOLDS,
  );
  assert.strictEqual(gatePass.status, "PASS", "quality gate pass scenario should pass");

  const gateWarn = evaluateQualityGate(
    {
      contextPrecision: 0.53,
      contextRecall: 0.55,
      faithfulness: 0.6,
      answerRelevance: 0.6,
      groundedness: 0.7,
      overallScore: 0.61,
    },
    DEFAULT_QUALITY_THRESHOLDS,
  );
  assert.strictEqual(gateWarn.status, "WARN", "quality gate warn scenario should warn");

  const gateFail = evaluateQualityGate(
    {
      contextPrecision: 0.2,
      contextRecall: 0.2,
      faithfulness: 0.2,
      answerRelevance: 0.2,
      groundedness: 0.2,
      overallScore: 0.2,
    },
    DEFAULT_QUALITY_THRESHOLDS,
  );
  assert.strictEqual(gateFail.status, "FAIL", "quality gate fail scenario should fail");

  const runOutput = runEvaluation();
  assert.ok(runOutput.run.runId, "evaluation run should have runId");
  assert.ok(runOutput.run.totalCases >= 15, "evaluation run should include dataset cases");
  assert.ok(
    runOutput.run.passedCases + runOutput.run.failedCases + runOutput.run.warnCases === runOutput.run.totalCases,
    "case totals should balance",
  );

  const comparison = compareRuns(
    {
      runId: "RUN-A",
      passedCases: 8,
      failedCases: 4,
      metrics: {
        overallScore: 0.5,
        contextPrecision: 0.5,
        contextRecall: 0.5,
        faithfulness: 0.5,
        answerRelevance: 0.5,
        groundedness: 0.5,
      },
    },
    {
      runId: "RUN-B",
      passedCases: 9,
      failedCases: 3,
      metrics: {
        overallScore: 0.6,
        contextPrecision: 0.55,
        contextRecall: 0.6,
        faithfulness: 0.6,
        answerRelevance: 0.6,
        groundedness: 0.65,
      },
    },
  );
  assert.strictEqual(comparison.trend, "IMPROVED", "evaluation comparison trend should be calculated");

  process.stdout.write("PASS: Step 6 RAG evaluation tests passed\n");
}

run();
