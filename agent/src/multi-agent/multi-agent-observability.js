const fs = require("fs");
const path = require("path");

const repoRoot = path.resolve(__dirname, "..", "..", "..");
const baseDir = path.join(repoRoot, ".tmp", "multi-agent-runtime");
const telemetryPath = path.join(baseDir, "multi-agent-telemetry.ndjson");

function ensureDir() {
  fs.mkdirSync(baseDir, { recursive: true });
}

function appendTelemetry(payload) {
  ensureDir();
  fs.appendFileSync(telemetryPath, `${JSON.stringify(payload)}\n`);
}

function getTelemetryPath() {
  ensureDir();
  return telemetryPath;
}

module.exports = {
  appendTelemetry,
  getTelemetryPath,
};

