function buildReasoningOutput({ task, evidence, validation, toolCalls }) {
  if (validation.status === "UNAUTHORIZED") {
    return {
      status: "ACCESS_DENIED",
      answer: "You do not have permission to access the requested evidence.",
      warnings: validation.warnings,
      recommendedNextAction: "Retry with an authorized role.",
    };
  }
  if (validation.status === "INSUFFICIENT") {
    return {
      status: "NO_EVIDENCE",
      answer: "No sufficient evidence was found for this request.",
      warnings: validation.warnings,
      recommendedNextAction: "Refine the query with a story ID or module name.",
    };
  }

  const topEvidence = evidence
    .slice()
    .sort((left, right) => right.score - left.score)
    .slice(0, 3);

  const status = validation.status === "VALID" ? "SUCCESS" : "PARTIAL";
  const answerLines = topEvidence.map(
    (item, index) => `${index + 1}. ${item.sourceSystem}:${item.sourceId} - ${item.content.slice(0, 140)}`,
  );

  return {
    status,
    answer: `Task type ${task.taskType} resolved using evidence:\n${answerLines.join("\n")}`,
    warnings: validation.warnings,
    recommendedNextAction:
      toolCalls.some((call) => call.status === "ERROR")
        ? "Retry the query; one or more tool calls failed."
        : "Use traceability lookup for deeper relationship view.",
  };
}

module.exports = {
  buildReasoningOutput,
};
