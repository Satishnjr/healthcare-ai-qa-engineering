const { AgentController } = require("./agent-controller");
const { DeterministicProvider } = require("./providers/deterministic-provider");
const { LangGraphCompatibleRuntime } = require("./graph/graph-runtime");
const { MultiAgentRuntime } = require("./multi-agent/multi-agent-runtime");

class AgentRuntime {
  constructor({ provider = null } = {}) {
    this.provider = provider ?? new DeterministicProvider();
    this.controller = new AgentController({
      provider: this.provider,
    });
    this.graphRuntime = new LangGraphCompatibleRuntime();
    this.multiAgentRuntime = new MultiAgentRuntime();
  }

  executeTask({ request, role = "Doctor", approvalDecision = "APPROVED" }) {
    return this.controller.handleRequest({
      request,
      role,
      approvalDecision,
    });
  }

  createGraph() {
    return this.graphRuntime.createGraph();
  }

  executeGraphTask({ request, role = "Doctor", approvalDecision = "APPROVED" }) {
    return this.graphRuntime.run({
      request,
      role,
      approvalDecision,
    });
  }

  resumeGraph(graphRunId) {
    return this.graphRuntime.resume(graphRunId);
  }

  approveGraph(graphRunId) {
    return this.graphRuntime.approve(graphRunId);
  }

  rejectGraph(graphRunId) {
    return this.graphRuntime.reject(graphRunId);
  }

  getGraphState(graphRunId) {
    return this.graphRuntime.getState(graphRunId);
  }

  getGraphHistory(graphRunId) {
    return this.graphRuntime.getHistory(graphRunId);
  }

  listGraphCheckpoints() {
    return this.graphRuntime.listCheckpoints();
  }

  executeMultiAgentTask({ request, role = "Doctor", approvalDecision = "APPROVED" }) {
    return this.multiAgentRuntime.run({
      request,
      role,
      approvalDecision,
    });
  }

  resumeMultiAgent(multiAgentRunId) {
    return this.multiAgentRuntime.resume(multiAgentRunId);
  }

  approveMultiAgent(multiAgentRunId) {
    return this.multiAgentRuntime.approve(multiAgentRunId);
  }

  rejectMultiAgent(multiAgentRunId) {
    return this.multiAgentRuntime.reject(multiAgentRunId);
  }

  getMultiAgentState(multiAgentRunId) {
    return this.multiAgentRuntime.getState(multiAgentRunId);
  }

  getMultiAgentHistory(multiAgentRunId) {
    return this.multiAgentRuntime.getHistory(multiAgentRunId);
  }

  listMultiAgentCheckpoints() {
    return this.multiAgentRuntime.listCheckpoints();
  }
}

module.exports = {
  AgentRuntime,
};
