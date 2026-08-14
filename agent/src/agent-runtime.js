const { AgentController } = require("./agent-controller");
const { DeterministicProvider } = require("./providers/deterministic-provider");

class AgentRuntime {
  constructor({ provider = null } = {}) {
    this.provider = provider ?? new DeterministicProvider();
    this.controller = new AgentController({
      provider: this.provider,
    });
  }

  executeTask({ request, role = "Doctor", approvalDecision = "APPROVED" }) {
    return this.controller.handleRequest({
      request,
      role,
      approvalDecision,
    });
  }
}

module.exports = {
  AgentRuntime,
};
