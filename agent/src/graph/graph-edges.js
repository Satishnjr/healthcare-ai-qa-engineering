const START = "START";
const END = "END";
const WAITING_FOR_APPROVAL = "WAITING_FOR_APPROVAL";

const baseFlow = [
  "task_understanding",
  "planning",
  "tool_selection",
  "tool_execution",
  "evidence_collection",
  "evidence_validation",
  "reasoning",
  "response_generation",
  "confidence_evaluation",
  "approval_check",
  "finalization",
  "audit",
];

function getDefaultNext(node) {
  if (node === START) {
    return baseFlow[0];
  }
  if (node === "audit") {
    return END;
  }
  const index = baseFlow.indexOf(node);
  if (index < 0 || index === baseFlow.length - 1) {
    return END;
  }
  return baseFlow[index + 1];
}

function nextNodeFor(state, nodeName) {
  if (state.executionStatus === "FAILED") {
    if (nodeName === "finalization") {
      return "audit";
    }
    if (nodeName === "audit") {
      return END;
    }
    return "finalization";
  }

  if (nodeName === "task_understanding" && state.finalStatus === "ACCESS_DENIED") {
    return "finalization";
  }

  if (nodeName === "tool_execution") {
    const hasToolError = state.toolResults.some((item) => item.status !== "SUCCESS");
    const canRetry =
      state.retry.failedNode === "tool_execution" &&
      state.retry.retryCount < 2 &&
      state.limits.toolCallCount < 10;
    if (hasToolError && canRetry) {
      return "tool_selection";
    }
  }

  if (nodeName === "evidence_validation") {
    const status = state.evidenceValidation?.status;
    if (status === "INSUFFICIENT") {
      if ((state.retry.evidenceRetryCount ?? 0) < 1 && state.limits.toolCallCount < 10) {
        state.retry.evidenceRetryCount = (state.retry.evidenceRetryCount ?? 0) + 1;
        return "tool_selection";
      }
      return "finalization";
    }
  }

  if (nodeName === "approval_check") {
    if (state.approval.required && state.approval.decision !== "APPROVED") {
      return WAITING_FOR_APPROVAL;
    }
  }

  return getDefaultNext(nodeName);
}

module.exports = {
  START,
  END,
  WAITING_FOR_APPROVAL,
  nextNodeFor,
};
