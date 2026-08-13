const { FAILURE_CATEGORIES } = require("./contracts");

function classifyFailure({ evaluationCase, result, metrics }) {
  const expectNoEvidence = Boolean(evaluationCase.metadata?.expectNoEvidence);
  const noEvidence = (result.warnings ?? []).includes("NO_EVIDENCE");
  if (noEvidence && expectNoEvidence) {
    return FAILURE_CATEGORIES.NO_EVIDENCE_EXPECTED;
  }
  if (noEvidence && !expectNoEvidence) {
    return FAILURE_CATEGORIES.NO_EVIDENCE_UNEXPECTED;
  }
  if (evaluationCase.role === "Patient" && (result.citations ?? []).some((item) => item.sourceSystem === "jira")) {
    return FAILURE_CATEGORIES.ACCESS_CONTROL_FAILURE;
  }
  if ((result.citations ?? []).length === 0) {
    return FAILURE_CATEGORIES.CITATION_FAILURE;
  }
  if (metrics.contextRecall < 0.4) {
    return FAILURE_CATEGORIES.LOW_CONTEXT_RECALL;
  }
  if (metrics.contextPrecision < 0.4) {
    return FAILURE_CATEGORIES.LOW_CONTEXT_PRECISION;
  }
  if (metrics.groundedness < 0.5) {
    return FAILURE_CATEGORIES.UNGROUNDED_ANSWER;
  }
  if (metrics.answerRelevance < 0.4) {
    return FAILURE_CATEGORIES.LOW_ANSWER_RELEVANCE;
  }
  return FAILURE_CATEGORIES.WRONG_SOURCE;
}

module.exports = {
  classifyFailure,
};
