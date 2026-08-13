const path = require("path");

const repoRoot = path.resolve(__dirname, "..", "..");
const runtimeRoot =
  process.env.CAREFLOW_RAG_RUNTIME_DIR ??
  path.join(repoRoot, ".tmp", "rag-runtime");
const runtimeIndexDir = path.join(runtimeRoot, "index");
const runtimeLogPath = path.join(runtimeRoot, "query-log.ndjson");

module.exports = {
  repoRoot,
  runtimeRoot,
  runtimeIndexDir,
  runtimeLogPath,
};
