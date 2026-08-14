const { performance } = require("perf_hooks");
const { DEFAULT_GRAPH_CONFIG } = require("./graph-config");
const { GraphRuntimeError, GRAPH_ERROR_CODES } = require("./graph-errors");
const { recordNode, recordTransition } = require("./graph-history");
const { appendTelemetry } = require("./graph-observability");

function executeGraph({ definition, state, checkpointer, config = {}, startNode = null }) {
  const mergedConfig = {
    ...DEFAULT_GRAPH_CONFIG,
    ...config,
  };
  const started = performance.now();
  let current = startNode ?? definition.START;
  let guard = 0;

  while (current !== definition.END && current !== definition.WAITING_FOR_APPROVAL) {
    if (
      guard >= mergedConfig.MAX_GRAPH_STEPS &&
      current !== "finalization" &&
      current !== "audit"
    ) {
      state.errors.push({
        code: GRAPH_ERROR_CODES.GRAPH_MAX_STEPS,
        message: `Graph exceeded max steps (${mergedConfig.MAX_GRAPH_STEPS}).`,
        node: current,
        timestamp: new Date().toISOString(),
      });
      state.executionStatus = "FAILED";
      state.finalStatus = "FAILED";
      current = "finalization";
    }

    const elapsed = performance.now() - started;
    if (
      elapsed > mergedConfig.GRAPH_TIMEOUT_MS &&
      current !== "finalization" &&
      current !== "audit"
    ) {
      state.errors.push({
        code: GRAPH_ERROR_CODES.GRAPH_TIMEOUT,
        message: `Graph exceeded timeout (${mergedConfig.GRAPH_TIMEOUT_MS}ms).`,
        node: current,
        timestamp: new Date().toISOString(),
      });
      state.executionStatus = "FAILED";
      state.finalStatus = "FAILED";
      current = "finalization";
    }

    const next = definition.nextNodeFor(state, current);
    if (current === definition.START) {
      recordTransition(state, definition.START, next, "start");
      current = next;
      continue;
    }
    const nodeFn = definition.nodes[current];
    if (!nodeFn) {
      throw new GraphRuntimeError(
        GRAPH_ERROR_CODES.INTERNAL_ERROR,
        `Node ${current} is not registered.`,
      );
    }

    const nodeStart = performance.now();
    recordNode(state, current, "RUNNING");
    state.currentStep += 1;
    state.limits.stepCount += 1;

    const updated = nodeFn(state, mergedConfig);
    const nodeDuration = Number((performance.now() - nodeStart).toFixed(2));
    const status = updated.executionStatus === "FAILED" ? "FAILED" : "PASS";
    recordNode(updated, current, status, {
      durationMs: nodeDuration,
    });
    appendTelemetry({
      graphRunId: updated.graphRunId,
      requestId: updated.requestId,
      taskId: updated.taskId,
      timestamp: new Date().toISOString(),
      node: current,
      transition: next,
      durationMs: nodeDuration,
      status,
      toolName: updated.toolCalls.at(-1)?.tool ?? null,
      toolRequestId: updated.toolCalls.at(-1)?.requestId ?? null,
      evidenceCount: updated.evidence.length,
      confidence: updated.confidence.score,
      approvalStatus: updated.approvalStatus,
      finalStatus: updated.finalStatus,
      errorCode: updated.errors.at(-1)?.code ?? null,
    });

    checkpointer.saveCheckpoint(updated, updated.executionStatus);
    const resolvedNext = definition.nextNodeFor(updated, current);
    recordTransition(updated, current, resolvedNext, "default");
    current = resolvedNext;
    guard += 1;
  }

  state.currentNode = current;
  if (current === definition.WAITING_FOR_APPROVAL) {
    state.executionStatus = "WAITING_FOR_APPROVAL";
    state.finalStatus = "NEEDS_APPROVAL";
    checkpointer.saveCheckpoint(state, state.executionStatus);
    return state;
  }

  state.executionStatus = state.executionStatus === "FAILED" ? "FAILED" : "COMPLETED";
  if (state.finalStatus === "RUNNING") {
    state.finalStatus = "SUCCESS";
  }
  state.timestamps.completedAt = new Date().toISOString();
  checkpointer.saveCheckpoint(state, state.executionStatus);
  return state;
}

module.exports = {
  executeGraph,
};
