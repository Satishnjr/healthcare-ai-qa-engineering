const { tokenize } = require("../math");

function safeRatio(numerator, denominator) {
  if (!denominator) {
    return 0;
  }
  return Number((numerator / denominator).toFixed(4));
}

function toSourceSet(citations) {
  return new Set(citations.map((item) => `${item.sourceSystem}:${item.sourceId}`));
}

function toTraceabilitySet(citations) {
  const values = new Set();
  citations.forEach((item) => {
    (item.traceabilityIds ?? []).forEach((id) => values.add(id));
  });
  return values;
}

function evaluateContextPrecision({ evaluationCase, result }) {
  const citations = result.citations ?? [];
  if (citations.length === 0) {
    return {
      metric: "context_precision",
      score: 0,
      details: { matchedSources: 0, totalSources: 0 },
    };
  }
  const expectedSources = new Set(evaluationCase.expectedSources ?? []);
  const matches = citations.filter((citation) =>
    expectedSources.has(`${citation.sourceSystem}:${citation.sourceId}`),
  ).length;
  return {
    metric: "context_precision",
    score: safeRatio(matches, citations.length),
    details: { matchedSources: matches, totalSources: citations.length },
  };
}

function evaluateContextRecall({ evaluationCase, result }) {
  const expectedSources = evaluationCase.expectedSources ?? [];
  const expectedTraceabilityIds = evaluationCase.expectedTraceabilityIds ?? [];
  const sourceSet = toSourceSet(result.citations ?? []);
  const traceabilitySet = toTraceabilitySet(result.citations ?? []);

  const sourceHits = expectedSources.filter((source) => sourceSet.has(source)).length;
  const traceabilityHits = expectedTraceabilityIds.filter((id) =>
    traceabilitySet.has(id),
  ).length;
  const hitCount = sourceHits + traceabilityHits;
  const expectedCount = expectedSources.length + expectedTraceabilityIds.length;
  return {
    metric: "context_recall",
    score: expectedCount === 0 ? 1 : safeRatio(hitCount, expectedCount),
    details: {
      sourceHits,
      traceabilityHits,
      expectedSources: expectedSources.length,
      expectedTraceabilityIds: expectedTraceabilityIds.length,
    },
  };
}

function evaluateFaithfulness({ result }) {
  const citations = result.citations ?? [];
  if (!result.answer || !result.answer.trim()) {
    return { metric: "faithfulness", score: 0, details: { reason: "empty_answer" } };
  }
  if (!citations.length) {
    return {
      metric: "faithfulness",
      score: result.warnings?.includes("NO_EVIDENCE") ? 1 : 0,
      details: { reason: "no_citations" },
    };
  }

  const answerTokens = new Set(tokenize(result.answer));
  const contextTokens = new Set();
  (result.citations ?? []).forEach((citation) => {
    tokenize(`${citation.sourceSystem} ${citation.sourceId} ${(citation.traceabilityIds ?? []).join(" ")}`).forEach(
      (token) => contextTokens.add(token),
    );
  });
  const overlaps = [...answerTokens].filter((token) => contextTokens.has(token)).length;
  return {
    metric: "faithfulness",
    score: Math.min(1, safeRatio(overlaps + citations.length, answerTokens.size || 1)),
    details: { overlaps, citationCount: citations.length },
  };
}

function evaluateAnswerRelevance({ evaluationCase, result }) {
  const qTokens = new Set(tokenize(evaluationCase.question));
  const aTokens = new Set(tokenize(result.answer || ""));
  const overlaps = [...qTokens].filter((token) => aTokens.has(token)).length;
  return {
    metric: "answer_relevance",
    score: safeRatio(overlaps, qTokens.size || 1),
    details: { overlaps, queryTokenCount: qTokens.size, answerTokenCount: aTokens.size },
  };
}

function evaluateGroundedness({ result }) {
  const citations = result.citations ?? [];
  if (!citations.length) {
    return {
      metric: "groundedness",
      score: result.warnings?.includes("NO_EVIDENCE") ? 1 : 0,
      details: { citationCount: 0 },
    };
  }
  const hasUnsupportedWarning = (result.warnings ?? []).includes("UNSUPPORTED_CONTENT");
  return {
    metric: "groundedness",
    score: hasUnsupportedWarning ? 0.4 : 1,
    details: { citationCount: citations.length, hasUnsupportedWarning },
  };
}

class LocalDeterministicEvaluator {
  evaluateContextPrecision(payload) {
    return evaluateContextPrecision(payload);
  }

  evaluateContextRecall(payload) {
    return evaluateContextRecall(payload);
  }

  evaluateFaithfulness(payload) {
    return evaluateFaithfulness(payload);
  }

  evaluateAnswerRelevance(payload) {
    return evaluateAnswerRelevance(payload);
  }

  evaluateGroundedness(payload) {
    return evaluateGroundedness(payload);
  }
}

module.exports = {
  LocalDeterministicEvaluator,
  evaluateContextPrecision,
  evaluateContextRecall,
  evaluateFaithfulness,
  evaluateAnswerRelevance,
  evaluateGroundedness,
};
