const path = require("path");
const { checksum, stableId } = require("./hash");
const { readJson, readText } = require("./fs-utils");

const repoRoot = path.resolve(__dirname, "..", "..");

function createDocument({
  sourceSystem,
  sourceType,
  sourceId,
  title,
  content,
  traceabilityIds,
  labels,
  version,
  timestamp,
  accessScope,
  sensitivity,
  metadata,
}) {
  const documentId = stableId("DOC", sourceSystem, sourceType, sourceId, version);
  const normalizedContent = String(content || "").trim();
  return {
    documentId,
    sourceSystem,
    sourceType,
    sourceId,
    title,
    content: normalizedContent,
    traceabilityIds: traceabilityIds ?? [],
    labels: labels ?? [],
    version: version ?? 1,
    timestamp: timestamp ?? new Date(0).toISOString(),
    accessScope: accessScope ?? "team",
    sensitivity: sensitivity ?? "internal",
    metadata: metadata ?? {},
    checksum: checksum(`${sourceSystem}:${sourceType}:${sourceId}:${normalizedContent}`),
  };
}

function extractFromJira() {
  const jiraPath = path.join(repoRoot, "mcp", "jira-confluence-foundation", "src", "data", "mock-jira-issues.json");
  const jira = readJson(jiraPath);
  const docs = [];

  for (const issue of jira.issues) {
    docs.push(
      createDocument({
        sourceSystem: "jira",
        sourceType: issue.issueType,
        sourceId: issue.issueKey,
        title: `${issue.issueKey} - ${issue.summary}`,
        content: [
          issue.description,
          `Status: ${issue.status}`,
          `Priority: ${issue.priority}`,
          `Acceptance Criteria: ${issue.acceptanceCriteria.join(", ")}`,
          `Test Scenarios: ${issue.testScenarioIds.join(", ")}`,
          `Test Cases: ${issue.testCaseIds.join(", ")}`,
        ].join("\n"),
        traceabilityIds: issue.traceabilityIds,
        labels: issue.labels,
        version: 1,
        timestamp: issue.updatedAt,
        accessScope: "team",
        sensitivity: "internal",
        metadata: {
          assignee: issue.assignee,
          reporter: issue.reporter,
        },
      }),
    );

    if (issue.acceptanceCriteria.length > 0) {
      docs.push(
        createDocument({
          sourceSystem: "jira",
          sourceType: "AcceptanceCriteria",
          sourceId: `${issue.issueKey}-AC`,
          title: `${issue.issueKey} acceptance criteria`,
          content: issue.acceptanceCriteria.join("\n"),
          traceabilityIds: issue.traceabilityIds,
          labels: [...issue.labels, "acceptance-criteria"],
          version: 1,
          timestamp: issue.updatedAt,
          accessScope: "team",
          sensitivity: "internal",
          metadata: { issueKey: issue.issueKey },
        }),
      );
    }
  }

  return docs;
}

function extractFromConfluence() {
  const confPath = path.join(repoRoot, "mcp", "jira-confluence-foundation", "src", "data", "mock-confluence-pages.json");
  const conf = readJson(confPath);
  return conf.pages.map((page) =>
    createDocument({
      sourceSystem: "confluence",
      sourceType: page.sourceType,
      sourceId: page.documentId,
      title: page.title,
      content: page.content,
      traceabilityIds: page.traceabilityIds,
      labels: page.labels,
      version: page.version,
      timestamp: page.updatedAt,
      accessScope: page.accessScope,
      sensitivity: page.sensitivity,
      metadata: {
        spaceKey: page.spaceKey,
        sourceId: page.sourceId,
      },
    }),
  );
}

function extractFromMarkdown(filePath, shape) {
  const text = readText(filePath);
  return createDocument({
    ...shape,
    content: text,
  });
}

function discoverKnowledgeDocuments() {
  const docs = [];

  docs.push(...extractFromJira());
  docs.push(...extractFromConfluence());

  docs.push(
    extractFromMarkdown(path.join(repoRoot, "knowledge", "requirements-traceability.md"), {
      sourceSystem: "repository",
      sourceType: "traceability",
      sourceId: "requirements-traceability",
      title: "Requirements Traceability",
      traceabilityIds: ["TRACEABILITY-MASTER"],
      labels: ["traceability", "requirements"],
      version: 1,
      timestamp: new Date("2026-08-13T00:00:00Z").toISOString(),
      accessScope: "team",
      sensitivity: "internal",
      metadata: { filePath: "knowledge/requirements-traceability.md" },
    }),
  );

  const docsToIngest = [
    {
      filePath: path.join(repoRoot, "docs", "qa", "AUTOMATION_GOVERNANCE.md"),
      sourceType: "automation-governance",
      sourceId: "automation-governance",
      title: "Automation Governance",
      labels: ["automation", "governance"],
    },
    {
      filePath: path.join(repoRoot, "docs", "qa", "AUTOMATION_CANDIDATE_MATRIX.md"),
      sourceType: "automation-candidate-matrix",
      sourceId: "automation-candidate-matrix",
      title: "Automation Candidate Matrix",
      labels: ["automation", "candidate-matrix"],
    },
    {
      filePath: path.join(repoRoot, "docs", "architecture", "UI_ARCHITECTURE.md"),
      sourceType: "ui-architecture",
      sourceId: "ui-architecture",
      title: "UI Architecture",
      labels: ["ui", "architecture"],
    },
    {
      filePath: path.join(repoRoot, "docs", "architecture", "UI_PAGE_SPECIFICATIONS.md"),
      sourceType: "ui-page-specifications",
      sourceId: "ui-page-specifications",
      title: "UI Page Specifications",
      labels: ["ui", "specifications"],
    },
    {
      filePath: path.join(repoRoot, "docs", "architecture", "UI_TESTABILITY_ARCHITECTURE.md"),
      sourceType: "ui-testability-architecture",
      sourceId: "ui-testability-architecture",
      title: "UI Testability Architecture",
      labels: ["ui", "testability"],
    },
    {
      filePath: path.join(repoRoot, "docs", "architecture", "KNOWLEDGE_EXPORT_CONTRACT.md"),
      sourceType: "rag-contract",
      sourceId: "knowledge-export-contract",
      title: "Knowledge Export Contract",
      labels: ["rag", "contract"],
    },
    {
      filePath: path.join(repoRoot, "docs", "ai", "RAGAS_EVALUATION_STRATEGY.md"),
      sourceType: "rag-evaluation",
      sourceId: "ragas-evaluation-strategy",
      title: "RAGAS Evaluation Strategy",
      labels: ["ragas", "evaluation"],
    },
  ];

  for (const item of docsToIngest) {
    docs.push(
      extractFromMarkdown(item.filePath, {
        sourceSystem: "repository",
        sourceType: item.sourceType,
        sourceId: item.sourceId,
        title: item.title,
        traceabilityIds: [item.sourceId.toUpperCase()],
        labels: item.labels,
        version: 1,
        timestamp: new Date("2026-08-13T00:00:00Z").toISOString(),
        accessScope: "team",
        sensitivity: "internal",
        metadata: { filePath: path.relative(repoRoot, item.filePath).replace(/\\/g, "/") },
      }),
    );
  }

  docs.push(
    createDocument({
      sourceSystem: "repository",
      sourceType: "public-help",
      sourceId: "careflow-help-access",
      title: "CareFlow Help and Access Guidance",
      content:
        "Patients can access help and knowledge summaries but cannot access Jira management modules. Doctors and QA roles can access operational knowledge modules.",
      traceabilityIds: ["US-011-001", "AC-NFR-005"],
      labels: ["help", "access-control", "public"],
      version: 1,
      timestamp: new Date("2026-08-13T00:00:00Z").toISOString(),
      accessScope: "public",
      sensitivity: "internal",
      metadata: { origin: "step-5-synthetic" },
    }),
  );

  return docs;
}

module.exports = {
  discoverKnowledgeDocuments,
};
