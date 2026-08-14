const { stableId } = require("../../rag/src/hash");
const { selectTools } = require("./tool-selector");

function buildInputForTool({ tool, request, task }) {
  if (tool === "get_jira_issue") {
    return { issueKey: "CFH-US-005" };
  }
  if (tool === "get_confluence_page") {
    return { pageId: "CFH-PAGE-001" };
  }
  if (tool === "get_traceability") {
    return { entityType: "JIRA_STORY", entityId: "CFH-US-005", direction: "both" };
  }
  if (tool === "query_rag") {
    return { query: request, role: task.constraints.role, topK: 3 };
  }
  if (tool === "get_rag_context") {
    return { query: request, role: task.constraints.role, topK: 3 };
  }
  if (tool === "search_test_cases") {
    return { query: request };
  }
  return { query: request, role: task.constraints.role };
}

function createPlan(task) {
  const tools = selectTools(task.taskType);
  const steps = tools.map((tool, index) => ({
    order: index + 1,
    tool,
    purpose: `Collect evidence for ${task.taskType}`,
    input: buildInputForTool({
      tool,
      request: task.originalRequest,
      task,
    }),
    requiredEvidence: true,
  }));

  return {
    planId: stableId("PLAN", task.taskId, String(Date.now())),
    taskId: task.taskId,
    steps,
  };
}

module.exports = {
  createPlan,
};
