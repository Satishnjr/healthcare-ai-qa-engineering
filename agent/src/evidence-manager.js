const { stableId } = require("../../rag/src/hash");
const { createEvidenceRecord } = require("./contracts/evidence-contracts");

function toEvidenceFromJira(issue) {
  return createEvidenceRecord({
    evidenceId: stableId("EVD", issue.issueKey, issue.updatedAt ?? new Date().toISOString()),
    sourceSystem: "jira",
    sourceType: issue.issueType ?? "Issue",
    sourceId: issue.issueKey,
    traceabilityIds: issue.traceabilityIds ?? [],
    content: `${issue.summary}. ${issue.description ?? ""}`.trim(),
    score: 0.92,
    timestamp: issue.updatedAt ?? new Date().toISOString(),
    accessScope: issue.accessScope ?? "team",
    sensitivity: issue.sensitivity ?? "Internal",
  });
}

function toEvidenceFromConfluence(page) {
  return createEvidenceRecord({
    evidenceId: stableId("EVD", page.documentId, page.updatedAt ?? new Date().toISOString()),
    sourceSystem: "confluence",
    sourceType: page.sourceType ?? "KnowledgePage",
    sourceId: page.sourceId ?? page.documentId,
    documentId: page.documentId,
    traceabilityIds: page.traceabilityIds ?? [],
    content: `${page.title}. ${page.content ?? ""}`.trim(),
    score: 0.89,
    timestamp: page.updatedAt ?? new Date().toISOString(),
    accessScope: page.accessScope ?? "team",
    sensitivity: page.sensitivity ?? "Internal",
  });
}

function collectEvidence(toolCalls) {
  const evidence = [];

  for (const call of toolCalls) {
    if (call.status !== "SUCCESS" || !call.output) {
      continue;
    }
    const result = call.output;
    if (Array.isArray(result.issues)) {
      result.issues.forEach((issue) => evidence.push(toEvidenceFromJira(issue)));
    }
    if (result.issue) {
      evidence.push(toEvidenceFromJira(result.issue));
    }
    if (Array.isArray(result.pages)) {
      result.pages.forEach((page) => evidence.push(toEvidenceFromConfluence(page)));
    }
    if (result.page) {
      evidence.push(toEvidenceFromConfluence(result.page));
    }
    if (Array.isArray(result.citations)) {
      result.citations.forEach((citation) => {
        evidence.push(
          createEvidenceRecord({
            evidenceId: stableId("EVD", citation.chunkId ?? citation.sourceId, String(Date.now())),
            sourceSystem: citation.sourceSystem ?? "rag",
            sourceType: citation.sourceType ?? "Citation",
            sourceId: citation.sourceId ?? citation.chunkId,
            documentId: citation.documentId ?? null,
            chunkId: citation.chunkId ?? null,
            traceabilityIds: citation.traceabilityIds ?? [],
            content: `Citation from ${citation.sourceSystem}:${citation.sourceId}`,
            score: citation.score ?? 0.8,
            timestamp: new Date().toISOString(),
            accessScope: "team",
            sensitivity: "Internal",
          }),
        );
      });
    }
    if (Array.isArray(result.testCases)) {
      result.testCases.forEach((testCase) => {
        if (typeof testCase === "string") {
          evidence.push(
            createEvidenceRecord({
              evidenceId: stableId("EVD", testCase, String(Date.now())),
              sourceSystem: "jira",
              sourceType: "TestCaseReference",
              sourceId: testCase,
              traceabilityIds: [],
              content: `Referenced test case ${testCase}`,
              score: 0.8,
              timestamp: new Date().toISOString(),
              accessScope: "team",
              sensitivity: "Internal",
            }),
          );
          return;
        }
        evidence.push(
          createEvidenceRecord({
            evidenceId: stableId("EVD", testCase.testCaseId, String(Date.now())),
            sourceSystem: "classification",
            sourceType: "TestCase",
            sourceId: testCase.testCaseId,
            traceabilityIds: testCase.traceabilityIds ?? [],
            content: `${testCase.testCaseId} ${testCase.classification} ${testCase.module}`,
            score: 0.85,
            timestamp: new Date().toISOString(),
            accessScope: "team",
            sensitivity: "Internal",
          }),
        );
      });
    }
  }

  const unique = new Map();
  for (const item of evidence) {
    const key = `${item.sourceSystem}:${item.sourceId}:${item.chunkId ?? ""}`;
    if (!unique.has(key)) {
      unique.set(key, item);
    }
  }
  return [...unique.values()];
}

module.exports = {
  collectEvidence,
};
