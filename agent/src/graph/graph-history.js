function touchState(state) {
  state.timestamps.updatedAt = new Date().toISOString();
}

function recordNode(state, nodeName, status, details = {}) {
  state.nodeHistory.push({
    node: nodeName,
    status,
    timestamp: new Date().toISOString(),
    details,
  });
  touchState(state);
}

function recordTransition(state, from, to, reason = "default") {
  state.transitionHistory.push({
    from,
    to,
    reason,
    timestamp: new Date().toISOString(),
  });
  state.previousNode = from;
  state.currentNode = to;
  touchState(state);
}

module.exports = {
  recordNode,
  recordTransition,
  touchState,
};
