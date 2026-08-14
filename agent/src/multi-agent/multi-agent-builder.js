const nodes = require("./multi-agent-nodes");
const { START, END, WAITING_FOR_APPROVAL, nextMultiAgentNode } = require("./multi-agent-edges");

function createMultiAgentGraphDefinition() {
  return {
    START,
    END,
    WAITING_FOR_APPROVAL,
    nodes,
    nextNodeFor: nextMultiAgentNode,
  };
}

module.exports = {
  createMultiAgentGraphDefinition,
};

