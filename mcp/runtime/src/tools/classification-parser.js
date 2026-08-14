const fs = require("fs");
const path = require("path");

const repoRoot = path.resolve(__dirname, "..", "..", "..", "..");
const classificationPath = path.join(
  repoRoot,
  "knowledge",
  "test-cases",
  "CAREFLOW_HEALTH_AUTOMATION_CLASSIFICATION.md"
);

let cached = null;

function parseMarkdownTableRow(line) {
  const trimmed = line.trim();
  if (!trimmed.startsWith("|") || !trimmed.endsWith("|")) {
    return null;
  }
  return trimmed
    .slice(1, -1)
    .split("|")
    .map((item) => item.trim());
}

function loadClassificationRows() {
  if (cached) {
    return cached;
  }
  const content = fs.readFileSync(classificationPath, "utf8");
  const lines = content.split(/\r?\n/);
  const rows = [];

  for (const line of lines) {
    const parsed = parseMarkdownTableRow(line);
    if (!parsed || parsed.length < 11 || !parsed[0].startsWith("TC-")) {
      continue;
    }
    rows.push({
      testCaseId: parsed[0],
      testScenarioId: parsed[1],
      userStoryId: parsed[2],
      priority: parsed[3],
      classification: parsed[4],
      reason: parsed[5],
      requiredCapability: parsed[6],
      automationStatus: parsed[7],
      futureAgent: parsed[8],
      humanApprovalRequired: parsed[9],
      riskLevel: parsed[10],
      module: parsed[5].split("/")[0].trim(),
      traceabilityIds: [parsed[0], parsed[1], parsed[2]],
    });
  }

  cached = rows;
  return rows;
}

module.exports = {
  loadClassificationRows,
  classificationPath,
};
