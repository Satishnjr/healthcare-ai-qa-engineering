const fs = require("fs");
const path = require("path");
const { readJson, writeJson, ensureDir } = require("../fs-utils");
const { stableId } = require("../hash");
const { evaluationDatasetsDir } = require("../runtime-paths");

const REQUIRED_CASE_FIELDS = [
  "caseId",
  "question",
  "expectedSources",
  "expectedAnswer",
  "referenceContext",
  "expectedTraceabilityIds",
  "role",
  "category",
  "metadata",
];

function validateDataset(dataset) {
  const issues = [];
  if (!dataset || typeof dataset !== "object") {
    return { valid: false, issues: ["Dataset must be an object."] };
  }
  if (!dataset.datasetId) {
    issues.push("datasetId is required.");
  }
  if (!dataset.datasetVersion) {
    issues.push("datasetVersion is required.");
  }
  if (!Array.isArray(dataset.records)) {
    issues.push("records must be an array.");
    return { valid: false, issues };
  }

  const seenCaseIds = new Set();
  for (const record of dataset.records) {
    for (const field of REQUIRED_CASE_FIELDS) {
      if (record[field] === undefined || record[field] === null) {
        issues.push(`Case ${record.caseId ?? "UNKNOWN"} missing field ${field}.`);
      }
    }
    if (record.caseId) {
      if (seenCaseIds.has(record.caseId)) {
        issues.push(`Duplicate caseId detected: ${record.caseId}`);
      }
      seenCaseIds.add(record.caseId);
    }
    if (!Array.isArray(record.expectedSources)) {
      issues.push(`Case ${record.caseId} expectedSources must be array.`);
    }
    if (!Array.isArray(record.expectedTraceabilityIds)) {
      issues.push(`Case ${record.caseId} expectedTraceabilityIds must be array.`);
    }
    if (!Array.isArray(record.referenceContext)) {
      issues.push(`Case ${record.caseId} referenceContext must be array.`);
    }
  }
  return { valid: issues.length === 0, issues };
}

function resolveDatasetPath(inputPath) {
  if (inputPath) {
    return path.resolve(inputPath);
  }
  return path.resolve(__dirname, "..", "..", "data", "rag-evaluation-dataset.sample.json");
}

function loadEvaluationDataset(datasetPath) {
  const resolvedPath = resolveDatasetPath(datasetPath);
  const dataset = readJson(resolvedPath);
  const validation = validateDataset(dataset);
  return {
    dataset,
    datasetPath: resolvedPath,
    validation,
  };
}

function snapshotDataset(dataset) {
  ensureDir(evaluationDatasetsDir);
  const snapshotId = stableId(
    "DATASET",
    dataset.datasetId,
    dataset.datasetVersion,
    String(Date.now()),
  );
  const targetPath = path.join(evaluationDatasetsDir, `${snapshotId}.json`);
  writeJson(targetPath, dataset);
  return targetPath;
}

function getLatestDatasetSnapshotPath() {
  if (!fs.existsSync(evaluationDatasetsDir)) {
    return null;
  }
  const files = fs
    .readdirSync(evaluationDatasetsDir)
    .filter((name) => name.endsWith(".json"))
    .map((name) => path.join(evaluationDatasetsDir, name));
  if (!files.length) {
    return null;
  }
  files.sort((left, right) => fs.statSync(right).mtimeMs - fs.statSync(left).mtimeMs);
  return files[0];
}

module.exports = {
  REQUIRED_CASE_FIELDS,
  validateDataset,
  loadEvaluationDataset,
  snapshotDataset,
  getLatestDatasetSnapshotPath,
};
