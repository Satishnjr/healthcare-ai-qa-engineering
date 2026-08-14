function formatMultiAgentState(state) {
  if (!state) {
    return "Multi-agent state not found.";
  }
  const lines = [];
  lines.push("Multi-Agent Runtime State");
  lines.push("-------------------------");
  lines.push(`multiAgentRunId: ${state.multiAgentRunId}`);
  lines.push(`requestId: ${state.requestId}`);
  lines.push(`currentNode: ${state.currentNode}`);
  lines.push(`currentPhase: ${state.currentPhase}`);
  lines.push(`executionStatus: ${state.executionStatus}`);
  lines.push(`finalStatus: ${state.finalStatus}`);
  lines.push(`approvalStatus: ${state.approvalStatus}`);
  lines.push(`selectedAgents: ${(state.selectedAgents ?? []).join(", ") || "none"}`);
  lines.push(`evidenceCount: ${(state.evidence ?? []).length}`);
  lines.push(`conflicts: ${(state.conflicts ?? []).length}`);
  lines.push(`confidence: ${state.confidence?.score ?? 0} (${state.confidence?.band ?? "VERY_LOW"})`);

  if (state.supervisorPlan?.rationale?.length) {
    lines.push("");
    lines.push("Supervisor Rationale:");
    state.supervisorPlan.rationale.forEach((item) => lines.push(`- ${item}`));
  }

  if (Object.keys(state.agentStatuses ?? {}).length) {
    lines.push("");
    lines.push("Agent Statuses:");
    Object.entries(state.agentStatuses).forEach(([agent, status]) => {
      lines.push(`- ${agent}: ${status}`);
    });
  }

  if (state.finalResponse?.answer) {
    lines.push("");
    lines.push("Final Response:");
    lines.push(state.finalResponse.answer);
  }

  if ((state.citations ?? []).length) {
    lines.push("");
    lines.push("Citations:");
    state.citations.forEach((item) =>
      lines.push(`- ${item.sourceSystem}:${item.sourceId}`),
    );
  }

  if ((state.errors ?? []).length) {
    lines.push("");
    lines.push("Errors:");
    state.errors.forEach((error) => lines.push(`- ${error.code}: ${error.message}`));
  }
  return lines.join("\n");
}

module.exports = {
  formatMultiAgentState,
};

