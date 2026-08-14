const { AgentController } = require("./agent-controller");
const { DeterministicProvider } = require("./providers/deterministic-provider");
const { LangGraphCompatibleRuntime } = require("./graph/graph-runtime");

class AgentRuntime {
  constructor({ provider = null } = {}) {
    this.provider = provider ?? new DeterministicProvider();
    this.controller = new AgentController({
      provider: this.provider,
    });
    this.graphRuntime = new LangGraphCompatibleRuntime();
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
}

module.exports = {
  AgentRuntime,
};
