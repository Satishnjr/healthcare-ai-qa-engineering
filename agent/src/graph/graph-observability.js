const fs = require("fs");
const path = require("path");

const repoRoot = path.resolve(__dirname, "..", "..", "..");
const logDir = path.join(repoRoot, ".tmp", "langgraph-runtime");
const telemetryPath = path.join(logDir, "graph-telemetry.ndjson");

function ensureDir() {
  fs.mkdirSync(logDir, { recursive: true });
}

function appendTelemetry(entry) {
  ensureDir();
  fs.appendFileSync(telemetryPath, `${JSON.stringify(entry)}\n`, "utf8");
}

function getTelemetryPath() {
  ensureDir();
  return telemetryPath;
}

module.exports = {
  appendTelemetry,
  getTelemetryPath,
};
