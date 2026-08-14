const fs = require("fs");
const path = require("path");

const JiraMockAdapter = require("../../../jira-confluence-foundation/src/adapters/jira-mock-adapter");
const ConfluenceMockAdapter = require("../../../jira-confluence-foundation/src/adapters/confluence-mock-adapter");
const JiraRepository = require("../../../jira-confluence-foundation/src/repositories/jira-repository");
const ConfluenceRepository = require("../../../jira-confluence-foundation/src/repositories/confluence-repository");
const TraceabilityService = require("../../../jira-confluence-foundation/src/services/traceability-service");

const { createRagRuntime, ingestAndIndex } = require("../../../../rag/src");
const { LocalVectorStore } = require("../../../../rag/src/vector-store");
const {
  evaluationRunsDir,
  evaluationComparisonsDir,
} = require("../../../../rag/src/runtime-paths");

const { loadClassificationRows } = require("../tools/classification-parser");

const repoRoot = path.resolve(__dirname, "..", "..", "..", "..");
const frontendLatestRunPath = path.join(
  repoRoot,
  "frontend",
  "public",
  "rag",
  "latest-evaluation-run.json"
);
const frontendLatestComparisonPath = path.join(
  repoRoot,
  "frontend",
  "public",
  "rag",
  "latest-evaluation-comparison.json"
);

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function resolveLatestFile(dirPath, predicate) {
  if (!fs.existsSync(dirPath)) {
    return null;
  }
  const files = fs
    .readdirSync(dirPath)
    .filter((fileName) => predicate(fileName))
    .map((fileName) => ({
      fileName,
      fullPath: path.join(dirPath, fileName),
      mtimeMs: fs.statSync(path.join(dirPath, fileName)).mtimeMs,
    }))
    .sort((a, b) => b.mtimeMs - a.mtimeMs);
  return files[0]?.fullPath ?? null;
}

function ensureRagIndexed() {
  const store = new LocalVectorStore();
  if (store.count() === 0) {
    ingestAndIndex();
  }
}

function createDependencies() {
  const jiraRepository = new JiraRepository(new JiraMockAdapter());
  const confluenceRepository = new ConfluenceRepository(new ConfluenceMockAdapter());
  const traceabilityService = new TraceabilityService(jiraRepository, confluenceRepository);

  ensureRagIndexed();
  const ragRuntime = createRagRuntime();

  const classificationRows = loadClassificationRows();

  return {
    repoRoot,
    jiraRepository,
    confluenceRepository,
    traceabilityService,
    ragRuntime,
    classificationRows,
    loadEvaluationRun: (runId) => {
      if (runId) {
        const runPath = path.join(evaluationRunsDir, `${runId}.json`);
        if (fs.existsSync(runPath)) {
          return readJson(runPath);
        }
        return null;
      }

      if (fs.existsSync(frontendLatestRunPath)) {
        return readJson(frontendLatestRunPath);
      }
      const latestRunPath = resolveLatestFile(evaluationRunsDir, (fileName) =>
        fileName.endsWith(".json") && !fileName.endsWith(".telemetry.ndjson")
      );
      if (!latestRunPath) {
        return null;
      }
      return readJson(latestRunPath);
    },
    loadEvaluationComparison: () => {
      if (fs.existsSync(frontendLatestComparisonPath)) {
        return readJson(frontendLatestComparisonPath);
      }
      const latestComparisonPath = resolveLatestFile(
        evaluationComparisonsDir,
        (fileName) => fileName.endsWith(".json")
      );
      if (!latestComparisonPath) {
        return null;
      }
      return readJson(latestComparisonPath);
    },
  };
}

module.exports = {
  createDependencies,
};
