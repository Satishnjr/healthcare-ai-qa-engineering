function formatGraphState(state) {
  const lines = [];
  lines.push("LangGraph Runtime State");
  lines.push("-----------------------");
  lines.push(`graphRunId: ${state.graphRunId}`);
  lines.push(`requestId: ${state.requestId}`);
  lines.push(`taskId: ${state.taskId ?? "n/a"}`);
  lines.push(`currentNode: ${state.currentNode}`);
  lines.push(`executionStatus: ${state.executionStatus}`);
  lines.push(`finalStatus: ${state.finalStatus}`);
  lines.push(`approvalStatus: ${state.approvalStatus}`);
  lines.push(`toolCalls: ${state.toolCalls.length}`);
  lines.push(`evidenceCount: ${state.evidence.length}`);
  lines.push(`confidence: ${state.confidence.score} (${state.confidence.band})`);
  lines.push("");
  lines.push("Execution Path:");
  state.transitionHistory.forEach((item) => {
    lines.push(`- ${item.from} -> ${item.to} (${item.reason})`);
  });
  lines.push("");
  lines.push("Tools:");
  state.toolCalls.forEach((call) => {
    lines.push(`- ${call.tool} | ${call.status} | ${call.requestId}`);
  });
  if (state.response?.answer) {
    lines.push("");
    lines.push("Response:");
    lines.push(state.response.answer);
  }
  if (state.citations?.length) {
    lines.push("");
    lines.push("Citations:");
    state.citations.forEach((citation) => {
      lines.push(`- ${citation.sourceSystem}:${citation.sourceId}`);
    });
  }
  if (state.errors.length) {
    lines.push("");
    lines.push("Errors:");
    state.errors.forEach((error) => lines.push(`- ${error.code}: ${error.message}`));
  }
  return lines.join("\n");
}

module.exports = {
  formatGraphState,
};
