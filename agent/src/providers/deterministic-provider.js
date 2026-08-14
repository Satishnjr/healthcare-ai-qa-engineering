const { LlmProvider } = require("./llm-provider");
const { analyzeTask } = require("../task-analyzer");
const { createPlan } = require("../planner");

class DeterministicProvider extends LlmProvider {
  constructor() {
    super();
    this.provider = "DEVELOPMENT_DETERMINISTIC_PROVIDER";
    this.model = "rule-based-v1";
  }

  classify({ request, role }) {
    return analyzeTask({ request, role });
  }

  plan({ task }) {
    return createPlan(task);
  }

  summarize({ reasoning }) {
    return reasoning.answer;
  }

  generate({ reasoning }) {
    return reasoning.answer;
  }
}

module.exports = {
  DeterministicProvider,
};
