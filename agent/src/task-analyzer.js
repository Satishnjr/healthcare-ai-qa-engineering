const { stableId } = require("../../rag/src/hash");
const { TASK_RISK, TASK_TYPES } = require("./contracts/task-contracts");

function inferTaskType(text) {
  if (text.includes("rag evaluation") || text.includes("why did") && text.includes("fail")) {
    return TASK_TYPES.RAG_EVALUATION_ANALYSIS;
  }
  if (text.includes("traceability")) {
    return TASK_TYPES.TRACEABILITY_LOOKUP;
  }
  if (text.includes("confluence")) {
    return TASK_TYPES.CONFLUENCE_LOOKUP;
  }
  if (text.includes("jira")) {
    return TASK_TYPES.JIRA_LOOKUP;
  }
  if (text.includes("test case") || text.includes("cover")) {
    return TASK_TYPES.TEST_CASE_ANALYSIS;
  }
  if (text.includes("automate first") || text.includes("automation")) {
    return TASK_TYPES.AUTOMATION_RECOMMENDATION;
  }
  if (text.includes("acceptance criteria") || text.includes("knowledge")) {
    return TASK_TYPES.KNOWLEDGE_SEARCH;
  }
  if (text.includes("rag")) {
    return TASK_TYPES.RAG_QUERY;
  }
  return TASK_TYPES.GENERAL_QA_KNOWLEDGE;
}

function extractEntities(request) {
  const entities = [];
  const lower = request.toLowerCase();
  if (lower.includes("appointment cancellation")) {
    entities.push({ type: "FEATURE", value: "appointment cancellation" });
  }
  const issueKeyMatch = request.match(/\bCFH-[A-Z]{2,4}-\d{3}\b/i);
  if (issueKeyMatch) {
    entities.push({ type: "JIRA_ISSUE", value: issueKeyMatch[0].toUpperCase() });
  }
  return entities;
}

function estimateRisk(taskType) {
  if (taskType === TASK_TYPES.AUTOMATION_RECOMMENDATION) {
    return TASK_RISK.MEDIUM;
  }
  return TASK_RISK.LOW;
}

function analyzeTask({ request, role }) {
  const originalRequest = String(request ?? "").trim();
  const normalized = originalRequest.toLowerCase();
  const taskType = inferTaskType(normalized);
  const entities = extractEntities(originalRequest);
  const confidence = entities.length ? 0.93 : 0.81;

  return {
    taskId: stableId("TASK", originalRequest, role, new Date().toISOString()),
    originalRequest,
    taskType,
    entities,
    constraints: {
      role,
      readOnly: true,
      noFabrication: true,
    },
    requestedOutput: "grounded_qa_response",
    riskLevel: estimateRisk(taskType),
    confidence,
  };
}

module.exports = {
  analyzeTask,
};
