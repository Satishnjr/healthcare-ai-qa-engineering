function createRequestId() {
  return `mcp-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

function nowIso() {
  return new Date().toISOString();
}

module.exports = {
  createRequestId,
  nowIso,
};
