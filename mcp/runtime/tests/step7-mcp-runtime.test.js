const assert = require("assert");

const { listTools, callTool, createDependencies } = require("../src");
const { getAuditPath } = require("../src/observability/audit-log");

function expectError(fn, expectedCode) {
  let thrown = null;
  try {
    fn();
  } catch (error) {
    thrown = error;
  }
  assert(thrown, "Expected an error to be thrown");
  assert.strictEqual(thrown.code, expectedCode);
}

function run() {
  const deps = createDependencies();
  const tools = listTools();
  const toolNames = tools.map((tool) => tool.name);
  const expected = [
    "search_jira",
    "get_jira_issue",
    "search_confluence",
    "get_confluence_page",
    "get_traceability",
    "search_test_cases",
    "get_rag_context",
    "query_rag",
    "get_rag_evaluation",
    "get_qa_knowledge",
  ];

  assert.strictEqual(toolNames.length, expected.length);
  expected.forEach((name) => assert(toolNames.includes(name), `Missing tool ${name}`));

  const jiraSearch = callTool({
    toolName: "search_jira",
    input: { query: "patient", issueType: "Story" },
    role: "Doctor",
    deps,
  });
  assert.strictEqual(jiraSearch.status, "SUCCESS");
  assert(jiraSearch.result.total >= 1);

  const jiraIssue = callTool({
    toolName: "get_jira_issue",
    input: { issueKey: "CFH-US-005" },
    role: "Doctor",
    deps,
  });
  assert.strictEqual(jiraIssue.result.issue.issueKey, "CFH-US-005");

  const confluenceSearch = callTool({
    toolName: "search_confluence",
    input: { query: "defect knowledge" },
    role: "Doctor",
    deps,
  });
  assert(confluenceSearch.result.total >= 1);

  const confluencePage = callTool({
    toolName: "get_confluence_page",
    input: { pageId: "CFH-PAGE-001" },
    role: "Doctor",
    deps,
  });
  assert.strictEqual(confluencePage.result.page.documentId, "CFH-PAGE-001");

  const traceability = callTool({
    toolName: "get_traceability",
    input: { entityType: "TEST_CASE", entityId: "TC-TS-003-007-01", direction: "both" },
    role: "Doctor",
    deps,
  });
  assert(traceability.result.graph.nodes.length > 0);

  const searchTestCases = callTool({
    toolName: "search_test_cases",
    input: { classification: "AI_ASSISTED_AUTOMATION", module: "Patient Management" },
    role: "Doctor",
    deps,
  });
  assert(searchTestCases.result.total > 0);

  const ragContext = callTool({
    toolName: "get_rag_context",
    input: { query: "patient search", role: "Doctor", topK: 3 },
    role: "Doctor",
    deps,
  });
  assert(Array.isArray(ragContext.result.retrievedChunks));

  const ragQuery = callTool({
    toolName: "query_rag",
    input: { query: "patient search by MRN", role: "Doctor", topK: 3 },
    role: "Doctor",
    deps,
  });
  assert(typeof ragQuery.result.answer === "string");
  assert(ragQuery.result.citations.length > 0);

  const ragEvaluation = callTool({
    toolName: "get_rag_evaluation",
    input: {},
    role: "Doctor",
    deps,
  });
  assert(ragEvaluation.result.evaluationRun);

  const qaKnowledge = callTool({
    toolName: "get_qa_knowledge",
    input: { query: "patient search", role: "Doctor" },
    role: "Doctor",
    deps,
  });
  assert(qaKnowledge.result.sourceSystems.includes("jira"));

  expectError(
    () =>
      callTool({
        toolName: "get_jira_issue",
        input: {},
        role: "Doctor",
        deps,
      }),
    "INVALID_INPUT"
  );

  expectError(
    () =>
      callTool({
        toolName: "get_jira_issue",
        input: { issueKey: "CFH-404" },
        role: "Doctor",
        deps,
      }),
    "NOT_FOUND"
  );

  expectError(
    () =>
      callTool({
        toolName: "search_jira",
        input: { query: "patient" },
        role: "Patient",
        deps,
      }),
    "ACCESS_DENIED"
  );

  expectError(
    () =>
      callTool({
        toolName: "query_rag",
        input: { query: "moon mission launch window", role: "Doctor", topK: 3 },
        role: "Doctor",
        deps,
      }),
    "NO_EVIDENCE"
  );

  const auditPath = getAuditPath();
  assert(auditPath.includes(".tmp"));

  process.stdout.write("PASS: Step 7 MCP runtime tests passed\n");
}

run();
