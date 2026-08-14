const START = "START";
const END = "END";
const WAITING_FOR_APPROVAL = "WAITING_FOR_APPROVAL";

const flow = [
  "supervisor_understanding",
  "supervisor_planning",
  "agent_selection",
  "qa_agent",
  "rag_agent",
  "test_agent",
  "review_agent",
  "conflict_check",
  "confidence",
  "approval_check",
  "finalization",
  "audit",
];

function defaultNext(node) {
  if (node === START) {
    return flow[0];
  }
  if (node === "audit") {
    return END;
  }
  const index = flow.indexOf(node);
  if (index < 0 || index === flow.length - 1) {
    return END;
  }
  return flow[index + 1];
}

function nextMultiAgentNode(state, node) {
  if (state.executionStatus === "FAILED") {
    if (node === "finalization") {
      return "audit";
    }
    if (node === "audit") {
      return END;
    }
    return "finalization";
  }

  if (node === "qa_agent" && !state.selectedAgents.includes("qa_analyst")) {
    return "rag_agent";
  }
  if (node === "rag_agent" && !state.selectedAgents.includes("rag_knowledge")) {
    return "test_agent";
  }
  if (node === "test_agent" && !state.selectedAgents.includes("test_analyst")) {
    return "review_agent";
  }

  if (node === "review_agent") {
    const status = state.evidenceValidation?.status ?? "INSUFFICIENT";
    const retryAllowed = state.retry.count < 1;
    if ((status === "INSUFFICIENT" || status === "CONFLICTING") && retryAllowed) {
      state.retry.count += 1;
      state.retry.reason = status;
      state.retry.failedPhase = "review_agent";
      return "agent_selection";
    }
  }

  if (node === "approval_check") {
    if (state.approval.required && state.approval.decision !== "APPROVED") {
      return WAITING_FOR_APPROVAL;
    }
  }

  return defaultNext(node);
}

module.exports = {
  START,
  END,
  WAITING_FOR_APPROVAL,
  nextMultiAgentNode,
};

