function listResources() {
  return [
    {
      uri: "careflow://qa-knowledge/summary",
      name: "QA Knowledge Summary",
      description: "High-level local QA knowledge summary from Jira/Confluence foundations.",
    },
    {
      uri: "careflow://jira/issues",
      name: "Jira Issues",
      description: "Read-only list of deterministic local Jira issues.",
    },
    {
      uri: "careflow://confluence/pages",
      name: "Confluence Pages",
      description: "Read-only list of deterministic local Confluence pages.",
    },
    {
      uri: "careflow://traceability/snapshot",
      name: "Traceability Snapshot",
      description: "Read-only traceability graph snapshot.",
    },
    {
      uri: "careflow://rag-evaluation/latest",
      name: "Latest RAG Evaluation",
      description: "Read-only latest Step 6 evaluation run metadata.",
    },
  ];
}

function readResource(uri, deps) {
  if (uri === "careflow://qa-knowledge/summary") {
    const issues = deps.jiraRepository.searchIssues({}).issues;
    const pages = deps.confluenceRepository.searchPages({}).pages;
    return {
      uri,
      content: {
        jiraIssueCount: issues.length,
        confluencePageCount: pages.length,
        traceabilityCoverage: issues.flatMap((issue) => issue.traceabilityIds).length,
      },
    };
  }
  if (uri === "careflow://jira/issues") {
    return {
      uri,
      content: deps.jiraRepository.searchIssues({}).issues,
    };
  }
  if (uri === "careflow://confluence/pages") {
    return {
      uri,
      content: deps.confluenceRepository.searchPages({}).pages,
    };
  }
  if (uri === "careflow://traceability/snapshot") {
    const issues = deps.jiraRepository.searchIssues({}).issues;
    const relationships = issues.map((issue) => ({
      issueKey: issue.issueKey,
      testCaseIds: issue.testCaseIds,
      testScenarioIds: issue.testScenarioIds,
      acceptanceCriteria: issue.acceptanceCriteria,
    }));
    return {
      uri,
      content: relationships,
    };
  }
  if (uri === "careflow://rag-evaluation/latest") {
    return {
      uri,
      content: deps.loadEvaluationRun(),
    };
  }
  return null;
}

module.exports = {
  listResources,
  readResource,
};
