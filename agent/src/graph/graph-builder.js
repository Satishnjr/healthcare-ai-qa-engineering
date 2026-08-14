const nodes = require("./graph-nodes");
const { START, END, WAITING_FOR_APPROVAL, nextNodeFor } = require("./graph-edges");

function createGraphDefinition() {
  return {
    START,
    END,
    WAITING_FOR_APPROVAL,
    nodes,
    nextNodeFor,
  };
}

module.exports = {
  createGraphDefinition,
};
