const { executeGraph } = require("../graph/graph-executor");
const graphCheckpointer = require("../graph/graph-checkpointer");
const { createMultiAgentGraphDefinition } = require("./multi-agent-builder");
const { initializeMultiAgentState } = require("./multi-agent-state");
const { DEFAULT_MULTI_AGENT_CONFIG } = require("./multi-agent-config");
const { WAITING_FOR_APPROVAL } = require("./multi-agent-edges");
const { getTelemetryPath } = require("./multi-agent-observability");
const { getMultiAgentAuditPath } = require("./multi-agent-audit");

class MultiAgentRuntime {
  constructor(config = {}) {
    this.config = {
      ...DEFAULT_MULTI_AGENT_CONFIG,
      ...config,
    };
    this.definition = createMultiAgentGraphDefinition();
  }

  createGraph() {
    return this.definition;
  }

  initializeState(request, role = "Doctor", approvalDecision = "APPROVED") {
    return initializeMultiAgentState({
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
      checkpointer: graphCheckpointer,
      config: this.config,
      startNode: this.definition.START,
    });
  }

  resume(multiAgentRunId) {
    const checkpoint = graphCheckpointer.loadCheckpoint(multiAgentRunId);
    if (!checkpoint) {
      throw new Error(`Checkpoint for ${multiAgentRunId} not found.`);
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
      checkpointer: graphCheckpointer,
      config: this.config,
      startNode,
    });
  }

  approve(multiAgentRunId) {
    const checkpoint = graphCheckpointer.loadCheckpoint(multiAgentRunId);
    if (!checkpoint) {
      throw new Error(`Checkpoint for ${multiAgentRunId} not found.`);
    }
    checkpoint.state.approval.decision = "APPROVED";
    checkpoint.state.approval.status = "APPROVED";
    checkpoint.state.approvalStatus = "APPROVED";
    checkpoint.state.executionStatus = "RUNNING";
    graphCheckpointer.saveCheckpoint(checkpoint.state, checkpoint.state.executionStatus);
    return this.resume(multiAgentRunId);
  }

  reject(multiAgentRunId) {
    const checkpoint = graphCheckpointer.loadCheckpoint(multiAgentRunId);
    if (!checkpoint) {
      throw new Error(`Checkpoint for ${multiAgentRunId} not found.`);
    }
    checkpoint.state.approval.decision = "REJECTED";
    checkpoint.state.approval.status = "REJECTED";
    checkpoint.state.approvalStatus = "REJECTED";
    checkpoint.state.executionStatus = "RUNNING";
    graphCheckpointer.saveCheckpoint(checkpoint.state, checkpoint.state.executionStatus);
    return this.resume(multiAgentRunId);
  }

  getState(multiAgentRunId) {
    const checkpoint = graphCheckpointer.loadCheckpoint(multiAgentRunId);
    return checkpoint?.state ?? null;
  }

  getHistory(multiAgentRunId) {
    const run = graphCheckpointer.loadRun(multiAgentRunId);
    if (!run) {
      return null;
    }
    return {
      multiAgentRunId: run.graphRunId,
      currentNode: run.currentNode,
      status: run.status,
      nodeHistory: run.state.nodeHistory,
      transitionHistory: run.state.transitionHistory,
      executionHistory: run.state.executionHistory,
      selectedAgents: run.state.selectedAgents,
      agentStatuses: run.state.agentStatuses,
      conflicts: run.state.conflicts,
      errors: run.state.errors,
    };
  }

  listCheckpoints() {
    return graphCheckpointer.listCheckpoints();
  }

  cleanupCheckpoints(retain = this.config.CHECKPOINT_RETENTION) {
    return graphCheckpointer.cleanupCheckpoints(retain);
  }

  getTelemetryPath() {
    return getTelemetryPath();
  }

  getAuditPath() {
    return getMultiAgentAuditPath();
  }
}

module.exports = {
  MultiAgentRuntime,
};

