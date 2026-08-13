const VALID_ISSUE_TYPES = new Set([
  "Epic",
  "Story",
  "Task",
  "Sub-task",
  "Acceptance Criteria",
  "Bug",
  "Test Case",
  "Test Execution",
  "Release",
  "Sprint"
]);

const REQUIREMENT_STATUSES = new Set([
  "Draft",
  "Refinement",
  "Ready",
  "In Progress",
  "QA Ready",
  "QA Testing",
  "Passed",
  "Failed",
  "Done",
  "Reopened"
]);

const DEFECT_STATUSES = new Set([
  "Open",
  "Triaged",
  "Assigned",
  "In Progress",
  "Fixed",
  "QA Retest",
  "Verified",
  "Closed",
  "Reopened"
]);

const VALID_PAGE_STATUS = new Set(["IMPLEMENTED", "FOUNDATION", "MOCK", "PLANNED", "BLOCKED"]);

function ensureString(value, field) {
  if (typeof value !== "string" || value.trim() === "") {
    throw new Error(`Invalid ${field}: expected non-empty string`);
  }
}

function ensureArray(value, field) {
  if (!Array.isArray(value)) {
    throw new Error(`Invalid ${field}: expected array`);
  }
}

function ensureIsoDate(value, field) {
  ensureString(value, field);
  if (Number.isNaN(Date.parse(value))) {
    throw new Error(`Invalid ${field}: expected ISO timestamp`);
  }
}

function validateJiraIssue(issue) {
  ensureString(issue.issueId, "issueId");
  ensureString(issue.issueKey, "issueKey");
  ensureString(issue.issueType, "issueType");
  ensureString(issue.summary, "summary");
  ensureString(issue.status, "status");
  ensureArray(issue.labels, "labels");
  ensureArray(issue.components, "components");
  ensureArray(issue.linkedIssues, "linkedIssues");
  ensureArray(issue.acceptanceCriteria, "acceptanceCriteria");
  ensureArray(issue.traceabilityIds, "traceabilityIds");
  ensureArray(issue.testCaseIds, "testCaseIds");
  ensureArray(issue.testScenarioIds, "testScenarioIds");
  ensureArray(issue.evidenceReferences, "evidenceReferences");
  ensureIsoDate(issue.createdAt, "createdAt");
  ensureIsoDate(issue.updatedAt, "updatedAt");

  if (!VALID_ISSUE_TYPES.has(issue.issueType)) {
    throw new Error(`Invalid issueType: ${issue.issueType}`);
  }

  if (issue.issueType === "Bug") {
    if (!DEFECT_STATUSES.has(issue.status)) {
      throw new Error(`Invalid defect status: ${issue.status}`);
    }
  } else if (!REQUIREMENT_STATUSES.has(issue.status)) {
    throw new Error(`Invalid requirement status: ${issue.status}`);
  }
}

function validateConfluencePage(page) {
  ensureString(page.documentId, "documentId");
  ensureString(page.spaceKey, "spaceKey");
  ensureString(page.title, "title");
  ensureString(page.version.toString(), "version");
  ensureString(page.content, "content");
  ensureArray(page.labels, "labels");
  ensureArray(page.traceabilityIds, "traceabilityIds");
  ensureString(page.sourceType, "sourceType");
  ensureString(page.sourceSystem, "sourceSystem");
  ensureString(page.sourceId, "sourceId");
  ensureString(page.status, "status");
  ensureIsoDate(page.createdAt, "createdAt");
  ensureIsoDate(page.updatedAt, "updatedAt");
  ensureString(page.author, "author");
  ensureString(page.lastModifiedBy, "lastModifiedBy");
  ensureString(page.accessScope, "accessScope");
  ensureString(page.sensitivity, "sensitivity");
  ensureString(page.checksum, "checksum");

  if (!VALID_PAGE_STATUS.has(page.status)) {
    throw new Error(`Invalid page status: ${page.status}`);
  }
}

module.exports = {
  VALID_ISSUE_TYPES,
  REQUIREMENT_STATUSES,
  DEFECT_STATUSES,
  VALID_PAGE_STATUS,
  validateJiraIssue,
  validateConfluencePage
};
