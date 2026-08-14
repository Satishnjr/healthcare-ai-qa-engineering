const { createGraphDefinition } = require("./graph-builder");
const { initializeGraphState } = require("./graph-state");
const { executeGraph } = require("./graph-executor");
const checkpointer = require("./graph-checkpointer");
const { DEFAULT_GRAPH_CONFIG } = require("./graph-config");
const { WAITING_FOR_APPROVAL } = require("./graph-edges");
const { GraphRuntimeError, GRAPH_ERROR_CODES } = require("./graph-errors");
const { getTelemetryPath } = require("./graph-observability");

class LangGraphCompatibleRuntime {
  constructor(config = {}) {
    this.config = {
      ...DEFAULT_GRAPH_CONFIG,
      ...config,
    };
    this.definition = createGraphDefinition();
  }

  createGraph() {
    return this.definition;
  }

  initializeState(request, role = "Doctor", approvalDecision = "APPROVED") {
    return initializeGraphState({
      request,
      role,
      approvalDecision,
    });
  }

  run({ request, role = "Doctor", approvalDecision = "APPROVED" }) {
    const state = this.initializeState(request, role, approvalDecision);
    return executeGraph({
      definition: this.definition,
      state,
      checkpointer,
      config: this.config,
      startNode: this.definition.START,
    });
  }

  resume(graphRunId) {
    const checkpoint = checkpointer.loadCheckpoint(graphRunId);
    if (!checkpoint) {
      throw new GraphRuntimeError(
        GRAPH_ERROR_CODES.CHECKPOINT_FAILURE,
        `Checkpoint for ${graphRunId} not found.`,
      );
    }
    const state = checkpoint.state;
    if (
      checkpoint.currentNode === WAITING_FOR_APPROVAL &&
      state.approval?.required &&
      state.approval?.status === "REQUIRED"
    ) {
      return state;
    }
    const startNode =
      checkpoint.currentNode === WAITING_FOR_APPROVAL ? "finalization" : checkpoint.currentNode;
    state.executionStatus = "RUNNING";
    state.waitingForApproval = false;
    return executeGraph({
      definition: this.definition,
      state,
      checkpointer,
      config: this.config,
      startNode,
    });
  }

  approve(graphRunId) {
    const checkpoint = checkpointer.loadCheckpoint(graphRunId);
    if (!checkpoint) {
      throw new GraphRuntimeError(
        GRAPH_ERROR_CODES.CHECKPOINT_FAILURE,
        `Checkpoint for ${graphRunId} not found.`,
      );
    }
    checkpoint.state.approval.decision = "APPROVED";
    checkpoint.state.approval.status = "APPROVED";
    checkpoint.state.approvalStatus = "APPROVED";
    checkpoint.state.executionStatus = "RUNNING";
    checkpointer.saveCheckpoint(checkpoint.state, checkpoint.state.executionStatus);
    return this.resume(graphRunId);
  }

  reject(graphRunId) {
    const checkpoint = checkpointer.loadCheckpoint(graphRunId);
    if (!checkpoint) {
      throw new GraphRuntimeError(
        GRAPH_ERROR_CODES.CHECKPOINT_FAILURE,
        `Checkpoint for ${graphRunId} not found.`,
      );
    }
    checkpoint.state.approval.decision = "REJECTED";
    checkpoint.state.approval.status = "REJECTED";
    checkpoint.state.approvalStatus = "REJECTED";
    checkpoint.state.executionStatus = "RUNNING";
    checkpointer.saveCheckpoint(checkpoint.state, checkpoint.state.executionStatus);
    return this.resume(graphRunId);
  }

  getState(graphRunId) {
    const checkpoint = checkpointer.loadCheckpoint(graphRunId);
    return checkpoint?.state ?? null;
  }

  getHistory(graphRunId) {
    const run = checkpointer.loadRun(graphRunId);
    if (!run) {
      return null;
    }
    return {
      graphRunId: run.graphRunId,
      currentNode: run.currentNode,
      status: run.status,
      nodeHistory: run.state.nodeHistory,
      transitionHistory: run.state.transitionHistory,
      toolCalls: run.state.toolCalls,
      errors: run.state.errors,
    };
  }

  listCheckpoints() {
    return checkpointer.listCheckpoints();
  }

  cleanupCheckpoints(retain = this.config.CHECKPOINT_RETENTION) {
    return checkpointer.cleanupCheckpoints(retain);
  }

  getTelemetryPath() {
    return getTelemetryPath();
  }
}

module.exports = {
  LangGraphCompatibleRuntime,
};
