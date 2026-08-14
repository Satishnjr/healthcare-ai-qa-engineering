const READ_ONLY_TOOLS = new Set([
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
]);

function isReadOnlyTool(toolName) {
  return READ_ONLY_TOOLS.has(toolName);
}

module.exports = {
  isReadOnlyTool,
};
