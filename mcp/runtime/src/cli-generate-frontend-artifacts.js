const fs = require("fs");
const path = require("path");

const { createDependencies } = require("./runtime/dependencies");
const { listTools, callTool } = require("./runtime/tool-runtime");

const repoRoot = path.resolve(__dirname, "..", "..", "..");
const frontendMcpDir = path.join(repoRoot, "frontend", "public", "mcp");

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function writeJson(filePath, value) {
  fs.writeFileSync(filePath, JSON.stringify(value, null, 2), "utf8");
}

function run() {
  const deps = createDependencies();
  ensureDir(frontendMcpDir);

  const catalog = listTools();
  const sampleCalls = {
    search_jira: callTool({
      toolName: "search_jira",
      input: { query: "patient search", issueType: "Story", status: "QA Testing" },
      role: "Doctor",
      deps,
    }),
    get_traceability: callTool({
      toolName: "get_traceability",
      input: { entityType: "TEST_CASE", entityId: "TC-TS-003-007-01", direction: "both" },
      role: "Doctor",
      deps,
    }),
    query_rag: callTool({
      toolName: "query_rag",
      input: { query: "patient search acceptance criteria", role: "Doctor", topK: 3 },
      role: "Doctor",
      deps,
    }),
    get_rag_evaluation: callTool({
      toolName: "get_rag_evaluation",
      input: {},
      role: "Doctor",
      deps,
    }),
    unauthorized_jira_patient: (() => {
      try {
        return callTool({
          toolName: "search_jira",
          input: { query: "patient search" },
          role: "Patient",
          deps,
        });
      } catch (error) {
        return { error: error.toJSON ? error.toJSON() : { message: error.message } };
      }
    })(),
  };

  writeJson(path.join(frontendMcpDir, "tool-catalog.json"), {
    generatedAt: new Date().toISOString(),
    runtime: "careflow-mcp-runtime",
    tools: catalog,
  });
  writeJson(path.join(frontendMcpDir, "sample-results.json"), {
    generatedAt: new Date().toISOString(),
    sampleCalls,
  });
}

run();
