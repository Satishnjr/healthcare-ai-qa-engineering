const { createError } = require("../security/error-contract");

function normalizeText(value) {
  return String(value ?? "").toLowerCase();
}

function includesAny(haystackValues, needles) {
  const lowerHaystack = haystackValues.map((value) => normalizeText(value));
  return needles.some((needle) => lowerHaystack.includes(normalizeText(needle)));
}

function toUnique(values) {
  return [...new Set(values)];
}

function buildNotFound(tool, requestId, message, details = {}) {
  throw createError({
    code: "NOT_FOUND",
    message,
    tool,
    requestId,
    retryable: false,
    details,
  });
}

function searchJira({ input, deps }) {
  const raw = deps.jiraRepository.searchIssues({}).issues;
  const query = normalizeText(input.query ?? "");

  let issues = raw.filter((issue) => {
    if (input.issueType && issue.issueType !== input.issueType) {
      return false;
    }
    if (input.status && issue.status !== input.status) {
      return false;
    }
    if (input.priority && issue.priority !== input.priority) {
      return false;
    }
    if (input.assignee && issue.assignee !== input.assignee) {
      return false;
    }
    if (input.project && !issue.issueKey.startsWith(`${input.project}-`)) {
      return false;
    }
    if (input.labels && input.labels.length > 0 && !includesAny(issue.labels, input.labels)) {
      return false;
    }
    if (!query) {
      return true;
    }
    return [
      issue.issueKey,
      issue.summary,
      issue.description,
      issue.issueType,
      issue.status,
      issue.priority,
      ...issue.traceabilityIds,
    ]
      .map((value) => normalizeText(value))
      .join(" ")
      .includes(query);
  });

  issues = issues.map((issue) => ({
    ...issue,
    sourceSystem: "jira",
    traceability: {
      traceabilityIds: issue.traceabilityIds,
      testCaseIds: issue.testCaseIds,
      testScenarioIds: issue.testScenarioIds,
    },
  }));

  return {
    sourceSystem: "jira",
    query: input,
    total: issues.length,
    issues,
  };
}

function getJiraIssue({ input, deps, requestId }) {
  const { issue } = deps.jiraRepository.getIssue(input.issueKey);
  if (!issue) {
    buildNotFound("get_jira_issue", requestId, `Jira issue ${input.issueKey} was not found`, {
      issueKey: input.issueKey,
    });
  }
  const { pages } = deps.confluenceRepository.searchPages({ sourceId: issue.issueKey });
  return {
    sourceSystem: "jira",
    issue,
    acceptanceCriteria: issue.acceptanceCriteria,
    linkedIssues: issue.linkedIssues,
    testScenarios: issue.testScenarioIds,
    testCases: issue.testCaseIds,
    defectLinks: issue.linkedIssues.filter((item) => item.includes("BUG")),
    confluenceReferences: pages.map((page) => page.documentId),
    traceabilityIds: issue.traceabilityIds,
  };
}

function searchConfluence({ input, deps }) {
  const raw = deps.confluenceRepository.searchPages({}).pages;
  const query = normalizeText(input.query ?? "");
  const pages = raw
    .filter((page) => {
      if (input.space && page.spaceKey !== input.space) {
        return false;
      }
      if (input.sourceType && page.sourceType !== input.sourceType) {
        return false;
      }
      if (input.labels && input.labels.length > 0 && !includesAny(page.labels, input.labels)) {
        return false;
      }
      if (!query) {
        return true;
      }
      return [
        page.documentId,
        page.title,
        page.content,
        page.sourceId,
        ...page.traceabilityIds,
      ]
        .map((value) => normalizeText(value))
        .join(" ")
        .includes(query);
    })
    .map((page) => ({
      ...page,
      sourceSystem: "confluence",
    }));

  return {
    sourceSystem: "confluence",
    query: input,
    total: pages.length,
    pages,
  };
}

function getConfluencePage({ input, deps, requestId }) {
  const { page } = deps.confluenceRepository.getPage(input.pageId);
  if (!page) {
    buildNotFound("get_confluence_page", requestId, `Confluence page ${input.pageId} was not found`, {
      pageId: input.pageId,
    });
  }
  const jiraIssues = deps.jiraRepository
    .searchIssues({})
    .issues.filter((issue) => issue.issueKey === page.sourceId || issue.linkedIssues.includes(page.sourceId));
  return {
    sourceSystem: "confluence",
    page,
    metadata: {
      labels: page.labels,
      accessScope: page.accessScope,
      sensitivity: page.sensitivity,
    },
    jiraReferences: toUnique([
      page.sourceId,
      ...jiraIssues.map((issue) => issue.issueKey),
    ]).filter(Boolean),
    testReferences: toUnique(
      jiraIssues.flatMap((issue) => [...issue.testCaseIds, ...issue.testScenarioIds])
    ),
    traceabilityIds: page.traceabilityIds,
  };
}

function getTraceability({ input, deps, requestId }) {
  const direction = input.direction ?? "both";
  const graph = {
    entityType: input.entityType,
    entityId: input.entityId,
    direction,
    nodes: [],
    edges: [],
  };

  const addNode = (id, type, metadata = {}) => {
    graph.nodes.push({ id, type, metadata });
  };
  const addEdge = (from, to, relation) => {
    graph.edges.push({ from, to, relation });
  };

  if (input.entityType === "JIRA_STORY") {
    const { issue } = deps.jiraRepository.getIssue(input.entityId);
    if (!issue) {
      buildNotFound("get_traceability", requestId, `Jira story ${input.entityId} not found`, {
        entityType: input.entityType,
        entityId: input.entityId,
      });
    }
    addNode(issue.issueKey, "JIRA_STORY", { status: issue.status });
    issue.testCaseIds.forEach((testCaseId) => {
      addNode(testCaseId, "TEST_CASE");
      addEdge(issue.issueKey, testCaseId, "HAS_TEST_CASE");
    });
    issue.acceptanceCriteria.forEach((criterionId) => {
      addNode(criterionId, "ACCEPTANCE_CRITERION");
      addEdge(issue.issueKey, criterionId, "HAS_ACCEPTANCE_CRITERION");
    });
    const confluenceIds = deps.traceabilityService.findConfluenceByJira(issue.issueKey);
    confluenceIds.forEach((documentId) => {
      addNode(documentId, "CONFLUENCE_PAGE");
      addEdge(issue.issueKey, documentId, "REFERENCED_BY");
    });
  } else if (input.entityType === "TEST_CASE") {
    addNode(input.entityId, "TEST_CASE");
    const stories = deps.traceabilityService.findJiraStoriesByTestCase(input.entityId);
    stories.forEach((storyKey) => {
      addNode(storyKey, "JIRA_STORY");
      addEdge(input.entityId, storyKey, "TESTS");
    });
    const classificationRows = deps.classificationRows.filter(
      (row) => row.testCaseId === input.entityId
    );
    classificationRows.forEach((row) => {
      addNode(row.classification, "AUTOMATION_CLASSIFICATION");
      addEdge(input.entityId, row.classification, "CLASSIFIED_AS");
      addNode(row.automationStatus, "AUTOMATION_STATUS");
      addEdge(input.entityId, row.automationStatus, "AUTOMATION_STATUS");
    });
  } else if (input.entityType === "DEFECT") {
    const { issue } = deps.jiraRepository.getIssue(input.entityId);
    if (!issue) {
      buildNotFound("get_traceability", requestId, `Defect ${input.entityId} not found`, {
        entityType: input.entityType,
        entityId: input.entityId,
      });
    }
    addNode(issue.issueKey, "DEFECT", { severity: issue.defectSeverity });
    issue.acceptanceCriteria.forEach((criterionId) => {
      addNode(criterionId, "ACCEPTANCE_CRITERION");
      addEdge(issue.issueKey, criterionId, "AFFECTS");
    });
  } else if (input.entityType === "USER_STORY") {
    const { issues } = deps.jiraRepository.searchIssues({});
    const story = issues.find((issue) => issue.traceabilityIds.includes(input.entityId));
    if (!story) {
      buildNotFound("get_traceability", requestId, `User story ${input.entityId} not found`, {
        entityType: input.entityType,
        entityId: input.entityId,
      });
    }
    addNode(input.entityId, "USER_STORY");
    addNode(story.issueKey, "JIRA_STORY");
    addEdge(input.entityId, story.issueKey, "MAPPED_TO");
    deps.traceabilityService.findConfluenceByJira(story.issueKey).forEach((pageId) => {
      addNode(pageId, "CONFLUENCE_PAGE");
      addEdge(story.issueKey, pageId, "DOCUMENTED_IN");
    });
  } else if (input.entityType === "AUTOMATION") {
    const rows = deps.classificationRows.filter(
      (row) =>
        row.classification === input.entityId ||
        row.automationStatus === input.entityId
    );
    rows.forEach((row) => {
      addNode(row.testCaseId, "TEST_CASE");
      addEdge(input.entityId, row.testCaseId, "COVERS");
    });
  } else if (input.entityType === "EXECUTION") {
    const executionPath = require("path").join(
      deps.repoRoot,
      "automation",
      "test-results",
      "cucumber",
      "execution-summary.json"
    );
    if (!require("fs").existsSync(executionPath)) {
      throw createError({
        code: "NOT_FOUND",
        message: "Execution summary artifact is not available",
        tool: "get_traceability",
        requestId,
        retryable: true,
      });
    }
    const execution = JSON.parse(require("fs").readFileSync(executionPath, "utf8"));
    addNode(input.entityId, "EXECUTION");
    addNode("execution-summary", "AUTOMATION_ARTIFACT", {
      generatedAt: execution.generatedAt,
      totals: execution.totals,
    });
    addEdge(input.entityId, "execution-summary", "GENERATED");
  } else {
    throw createError({
      code: "INVALID_INPUT",
      message: "Unsupported entityType for traceability lookup",
      tool: "get_traceability",
      requestId,
      retryable: false,
      details: { supported: ["JIRA_STORY", "TEST_CASE", "DEFECT", "USER_STORY", "AUTOMATION", "EXECUTION"] },
    });
  }

  return {
    sourceSystem: "traceability",
    graph,
  };
}

function searchTestCases({ input, deps }) {
  const query = normalizeText(input.query ?? "");
  const rows = deps.classificationRows.filter((row) => {
    if (input.classification && row.classification !== input.classification) {
      return false;
    }
    if (input.module && normalizeText(row.module) !== normalizeText(input.module)) {
      return false;
    }
    if (input.automationStatus && row.automationStatus !== input.automationStatus) {
      return false;
    }
    if (!query) {
      return true;
    }
    return [
      row.testCaseId,
      row.testScenarioId,
      row.userStoryId,
      row.classification,
      row.reason,
      row.module,
    ]
      .map((value) => normalizeText(value))
      .join(" ")
      .includes(query);
  });

  return {
    sourceSystem: "classification",
    query: input,
    total: rows.length,
    testCases: rows.map((row) => ({
      testCaseId: row.testCaseId,
      testScenarioId: row.testScenarioId,
      userStoryId: row.userStoryId,
      classification: row.classification,
      automationStatus: row.automationStatus,
      aiAgentCandidate: row.classification === "AI_AGENT_CANDIDATE",
      module: row.module,
      traceabilityIds: row.traceabilityIds,
      riskLevel: row.riskLevel,
    })),
  };
}

function getRagContext({ input, deps }) {
  const role = input.role ?? "Doctor";
  const topK = input.topK ?? 5;
  const filters = input.filters ?? {};
  const retrieval = deps.ragRuntime.searchKnowledge({
    query: input.query,
    topK,
    filters,
    userContext: { role },
  });
  const chunks = retrieval.chunks ?? [];
  if (chunks.length === 0) {
    return {
      sourceSystem: "rag",
      query: input.query,
      role,
      retrievedChunks: [],
      citations: [],
      warnings: ["NO_EVIDENCE"],
      retrievalMetadata: {
        topK,
        filters,
        returned: 0,
      },
    };
  }
  return {
    sourceSystem: "rag",
    query: input.query,
    role,
    retrievedChunks: chunks,
    citations: chunks.map((chunk) => ({
      chunkId: chunk.chunkId,
      documentId: chunk.documentId,
      sourceSystem: chunk.sourceSystem,
      sourceType: chunk.sourceType,
      sourceId: chunk.sourceId,
      score: chunk.score,
      traceabilityIds: chunk.traceabilityIds,
      labels: chunk.labels,
    })),
    retrievalMetadata: {
      topK,
      filters,
      returned: chunks.length,
    },
    warnings: [],
  };
}

function queryRag({ input, deps, requestId }) {
  const role = input.role ?? "Doctor";
  const topK = input.topK ?? 5;
  const result = deps.ragRuntime.queryRag({
    query: input.query,
    topK,
    userContext: { role },
    filters: {},
  });
  if (result.warnings?.includes("NO_EVIDENCE")) {
    throw createError({
      code: "NO_EVIDENCE",
      message: "No relevant evidence was found for the query",
      tool: "query_rag",
      requestId,
      retryable: false,
      details: { role, query: input.query },
    });
  }
  return {
    sourceSystem: "rag",
    role,
    answer: result.answer,
    citations: result.citations,
    retrievedDocuments: result.retrievedDocuments,
    confidence: result.confidence,
    retrievalMetadata: result.retrievalMetadata,
    warnings: result.warnings,
  };
}

function getRagEvaluation({ input, deps, requestId }) {
  const run = deps.loadEvaluationRun(input.runId);
  if (!run) {
    buildNotFound("get_rag_evaluation", requestId, "No RAG evaluation run is available");
  }
  const comparison = deps.loadEvaluationComparison();
  const selectedCase = input.caseId
    ? run.results.find((item) => item.caseId === input.caseId) ?? null
    : null;
  if (input.caseId && !selectedCase) {
    buildNotFound("get_rag_evaluation", requestId, `Evaluation case ${input.caseId} not found`, {
      caseId: input.caseId,
      runId: run.runId,
    });
  }
  return {
    sourceSystem: "rag-evaluation",
    evaluationRun: run,
    selectedCase,
    comparison,
  };
}

function getQaKnowledge({ input, deps, requestId }) {
  const role = input.role ?? "Doctor";
  const jiraResult = searchJira({ input: { query: input.query }, deps });
  const confluenceResult = searchConfluence({ input: { query: input.query }, deps });
  const ragResult = deps.ragRuntime.queryRag({
    query: input.query,
    topK: 5,
    userContext: { role },
    filters: {},
  });

  if (
    jiraResult.total === 0 &&
    confluenceResult.total === 0 &&
    (ragResult.warnings ?? []).includes("NO_EVIDENCE")
  ) {
    throw createError({
      code: "NO_EVIDENCE",
      message: "No QA knowledge evidence matched the query",
      tool: "get_qa_knowledge",
      requestId,
      retryable: false,
      details: { query: input.query, role },
    });
  }

  return {
    query: input.query,
    role,
    sourceSystems: ["jira", "confluence", "rag"],
    jira: jiraResult,
    confluence: confluenceResult,
    rag: {
      answer: ragResult.answer,
      citations: ragResult.citations,
      confidence: ragResult.confidence,
      warnings: ragResult.warnings,
      retrievalMetadata: ragResult.retrievalMetadata,
    },
    traceability: {
      jiraTraceabilityIds: toUnique(jiraResult.issues.flatMap((issue) => issue.traceabilityIds)),
      confluenceTraceabilityIds: toUnique(
        confluenceResult.pages.flatMap((page) => page.traceabilityIds)
      ),
    },
  };
}

const toolHandlers = {
  search_jira: searchJira,
  get_jira_issue: getJiraIssue,
  search_confluence: searchConfluence,
  get_confluence_page: getConfluencePage,
  get_traceability: getTraceability,
  search_test_cases: searchTestCases,
  get_rag_context: getRagContext,
  query_rag: queryRag,
  get_rag_evaluation: getRagEvaluation,
  get_qa_knowledge: getQaKnowledge,
};

module.exports = {
  toolHandlers,
};
