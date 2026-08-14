const { toolSchemas } = require("../schemas/tool-schemas");

const toolCatalog = [
  {
    name: "search_jira",
    description: "Search deterministic local Jira issues by query and optional filters.",
  },
  {
    name: "get_jira_issue",
    description: "Get a Jira issue with linked QA traceability fields.",
  },
  {
    name: "search_confluence",
    description: "Search deterministic local Confluence pages with metadata filters.",
  },
  {
    name: "get_confluence_page",
    description: "Get a Confluence page with Jira/test/traceability references.",
  },
  {
    name: "get_traceability",
    description: "Get structured traceability graph across Jira, Confluence, testing and automation.",
  },
  {
    name: "search_test_cases",
    description: "Search Step 1.15 automation classification records for test cases.",
  },
  {
    name: "get_rag_context",
    description: "Retrieve RAG context chunks and citations without generating an answer.",
  },
  {
    name: "query_rag",
    description: "Run existing RAG query service and return answer with citations and metadata.",
  },
  {
    name: "get_rag_evaluation",
    description: "Return Step 6 RAG evaluation run/case/comparison artifacts.",
  },
  {
    name: "get_qa_knowledge",
    description: "Unified QA lookup combining Jira, Confluence and RAG evidence.",
  },
].map((tool) => ({
  ...tool,
  inputSchema: toolSchemas[tool.name],
  outputSchema: {
    type: "object",
    required: ["sourceSystem"],
  },
}));

module.exports = {
  toolCatalog,
};
