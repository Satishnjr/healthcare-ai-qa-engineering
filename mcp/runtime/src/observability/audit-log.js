const fs = require("fs");
const path = require("path");

const repoRoot = path.resolve(__dirname, "..", "..", "..", "..");
const logDir = path.join(repoRoot, ".tmp", "mcp-runtime");
const auditPath = path.join(logDir, "tool-audit.ndjson");

function ensureAuditLogDir() {
  fs.mkdirSync(logDir, { recursive: true });
}

function appendAudit(entry) {
  ensureAuditLogDir();
  fs.appendFileSync(auditPath, `${JSON.stringify(entry)}\n`, "utf8");
}

function getAuditPath() {
  return auditPath;
}

module.exports = {
  appendAudit,
  getAuditPath,
};
