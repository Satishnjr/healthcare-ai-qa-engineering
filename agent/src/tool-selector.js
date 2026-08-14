const { TASK_TYPES } = require("./contracts/task-contracts");

const TOOL_MAP = {
  [TASK_TYPES.JIRA_LOOKUP]: ["search_jira", "get_jira_issue"],
  [TASK_TYPES.CONFLUENCE_LOOKUP]: ["search_confluence", "get_confluence_page"],
  [TASK_TYPES.TRACEABILITY_LOOKUP]: ["search_jira", "get_traceability", "search_confluence"],
  [TASK_TYPES.KNOWLEDGE_SEARCH]: ["search_jira", "get_jira_issue"],
  [TASK_TYPES.RAG_QUERY]: ["query_rag"],
  [TASK_TYPES.RAG_EVALUATION_ANALYSIS]: ["get_rag_evaluation", "query_rag"],
  [TASK_TYPES.TEST_CASE_ANALYSIS]: ["search_test_cases"],
  [TASK_TYPES.AUTOMATION_RECOMMENDATION]: ["search_test_cases", "get_qa_knowledge", "get_rag_context"],
  [TASK_TYPES.GENERAL_QA_KNOWLEDGE]: ["get_qa_knowledge"],
};

function selectTools(taskType) {
  return TOOL_MAP[taskType] ?? ["get_qa_knowledge"];
}

module.exports = {
  selectTools,
};
