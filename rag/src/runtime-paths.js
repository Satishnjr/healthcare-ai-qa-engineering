const path = require("path");

const repoRoot = path.resolve(__dirname, "..", "..");
const runtimeRoot =
  process.env.CAREFLOW_RAG_RUNTIME_DIR ??
  path.join(repoRoot, ".tmp", "rag-runtime");
const runtimeIndexDir = path.join(runtimeRoot, "index");
const runtimeLogPath = path.join(runtimeRoot, "query-log.ndjson");
const evaluationRoot =
  process.env.CAREFLOW_RAG_EVALUATION_DIR ??
  path.join(repoRoot, ".tmp", "rag-evaluation");
const evaluationDatasetsDir = path.join(evaluationRoot, "datasets");
const evaluationRunsDir = path.join(evaluationRoot, "runs");
const evaluationReportsDir = path.join(evaluationRoot, "reports");
const evaluationComparisonsDir = path.join(evaluationRoot, "comparisons");

module.exports = {
  repoRoot,
  runtimeRoot,
  runtimeIndexDir,
  runtimeLogPath,
  evaluationRoot,
  evaluationDatasetsDir,
  evaluationRunsDir,
  evaluationReportsDir,
  evaluationComparisonsDir,
};
