const fs = require("fs");
const path = require("path");

const repoRoot = path.resolve(__dirname, "..", "..");
const auditDir = path.join(repoRoot, ".tmp", "agent-runtime");
const auditFile = path.join(auditDir, "agent-audit.ndjson");

function appendAgentAudit(entry) {
  fs.mkdirSync(auditDir, { recursive: true });
  fs.appendFileSync(auditFile, `${JSON.stringify(entry)}\n`, "utf8");
}

function getAgentAuditPath() {
  return auditFile;
}

module.exports = {
  appendAgentAudit,
  getAgentAuditPath,
};
