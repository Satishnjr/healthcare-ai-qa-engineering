const assert = require("assert");
const {
  JiraMockAdapter,
  ConfluenceMockAdapter,
  JiraRepository,
  ConfluenceRepository,
  TraceabilityService,
  JiraConfluenceSyncService,
  KnowledgeExportService
} = require("../src/index");

function run() {
  const jiraRepository = new JiraRepository(new JiraMockAdapter());
  const confluenceRepository = new ConfluenceRepository(new ConfluenceMockAdapter());
  const traceability = new TraceabilityService(jiraRepository, confluenceRepository);
  const syncService = new JiraConfluenceSyncService(jiraRepository, confluenceRepository);
  const exportService = new KnowledgeExportService(confluenceRepository);

  const createdIssue = jiraRepository.createIssue({
    issueKey: "CFH-TASK-001",
    issueType: "Task",
    summary: "Validate release note template",
    description: "Task for release note validation.",
    status: "Ready",
    priority: "Low",
    labels: ["qa"],
    components: ["Release"],
    sprint: "Sprint-12",
    release: "R1",
    assignee: "qa.engineer",
    reporter: "qa.lead",
    parentIssue: "CFH-EPIC-001",
    defectSeverity: null,
    automationStatus: "MANUAL",
    aiClassification: "FOUNDATION",
    aiConfidence: 0.75
  });
  assert.strictEqual(createdIssue.issue.issueKey, "CFH-TASK-001");

  const fetchedIssue = jiraRepository.getIssue("CFH-US-005");
  assert.strictEqual(fetchedIssue.issue.issueType, "Story");
  assert.ok(fetchedIssue.metadata.correlationId);

  const searchedIssues = jiraRepository.searchIssues({ traceabilityId: "TS-003-007" });
  assert.ok(searchedIssues.issues.length >= 1);

  const updatedIssue = jiraRepository.updateIssue("CFH-TASK-001", { status: "In Progress" });
  assert.strictEqual(updatedIssue.issue.status, "In Progress");

  const linked = jiraRepository.linkIssues("CFH-US-005", "CFH-TASK-001");
  assert.strictEqual(linked.linked, true);

  const invalidIssue = jiraRepository.getIssue("CFH-UNKNOWN");
  assert.strictEqual(invalidIssue.issue, null);

  const createdPage = confluenceRepository.createPage({
    spaceKey: "CFH",
    title: "Release Note Validation Knowledge",
    content: "Release note checklist for QA.",
    labels: ["release", "qa"],
    traceabilityIds: ["TC-TS-010-001-01"],
    sourceType: "qa",
    sourceSystem: "repository",
    sourceId: "TC-TS-010-001-01",
    status: "MOCK",
    author: "qa.lead",
    lastModifiedBy: "qa.lead",
    accessScope: "team",
    sensitivity: "internal",
    checksum: "sha256:release-note"
  });
  assert.ok(createdPage.page.documentId.startsWith("CFH-PAGE-"));

  const fetchedPage = confluenceRepository.getPage("CFH-PAGE-001");
  assert.strictEqual(fetchedPage.page.sourceId, "CFH-US-005");
  assert.ok(fetchedPage.metadata.correlationId);

  const searchedPages = confluenceRepository.searchPages({ sourceId: "CFH-US-005" });
  assert.ok(searchedPages.pages.length >= 1);

  const updatedPage = confluenceRepository.updatePage("CFH-PAGE-001", { title: "Patient Search - MRN" });
  assert.strictEqual(updatedPage.page.version, 2);

  const invalidPage = confluenceRepository.getPage("CFH-PAGE-999");
  assert.strictEqual(invalidPage.page, null);

  const tcByStory = traceability.findTestCasesByJiraStory("CFH-US-005");
  assert.ok(tcByStory.includes("TC-TS-003-007-01"));

  const storyByTc = traceability.findJiraStoriesByTestCase("TC-TS-003-007-01");
  assert.ok(storyByTc.includes("CFH-US-005"));

  const acByDefect = traceability.findAcceptanceCriteriaByDefect("CFH-BUG-014");
  assert.ok(acByDefect.includes("AC-US-003-003-002"));

  const syncResult = syncService.syncStoryToKnowledge("CFH-US-005");
  assert.strictEqual(syncResult.status, "SUCCESS");

  const confluenceLookup = traceability.findConfluenceByJira("CFH-US-005");
  assert.ok(confluenceLookup.length >= 1);

  const exportDoc = exportService.exportDocument("CFH-PAGE-001");
  assert.strictEqual(exportDoc.sourceSystem, "confluence");
  assert.ok(exportDoc.jiraKeys.includes("CFH-US-005"));

  const ragExports = exportService.exportByLabel("requirement");
  assert.ok(ragExports.length >= 1);

  console.log("PASS: Step 4 Jira-Confluence foundation tests passed");
}

run();
