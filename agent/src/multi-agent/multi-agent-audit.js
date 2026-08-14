const fs = require("fs");
const path = require("path");

const repoRoot = path.resolve(__dirname, "..", "..", "..");
const baseDir = path.join(repoRoot, ".tmp", "multi-agent-runtime");
const auditPath = path.join(baseDir, "multi-agent-audit.ndjson");

function ensureDir() {
  fs.mkdirSync(baseDir, { recursive: true });
}

function appendMultiAgentAudit(payload) {
  ensureDir();
  fs.appendFileSync(auditPath, `${JSON.stringify(payload)}\n`);
}

function getMultiAgentAuditPath() {
  ensureDir();
  return auditPath;
}

module.exports = {
  appendMultiAgentAudit,
  getMultiAgentAuditPath,
};

