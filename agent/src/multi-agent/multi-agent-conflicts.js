const { stableId } = require("../../../rag/src/hash");

function hasCitationGap(result) {
  if (!result) {
    return false;
  }
  const findingsCount = (result.findings ?? []).length;
  const citationsCount = (result.citations ?? []).length;
  return findingsCount > 0 && citationsCount === 0;
}

function detectConflicts(agentResults) {
  const conflicts = [];
  const resultList = Object.values(agentResults ?? {}).filter(Boolean);
  const byType = Object.fromEntries(resultList.map((result) => [result.agentType, result]));

  if (hasCitationGap(byType.qa_analyst)) {
    conflicts.push({
      conflictId: stableId("CONFLICT", "MISSING_CITATION", "qa_analyst"),
      type: "MISSING_CITATION",
      agents: ["qa_analyst"],
      evidence: [],
      description: "QA Analyst findings exist without citations.",
      severity: "HIGH",
      resolutionStatus: "OPEN",
    });
  }

  if (hasCitationGap(byType.rag_knowledge)) {
    conflicts.push({
      conflictId: stableId("CONFLICT", "MISSING_CITATION", "rag_knowledge"),
      type: "MISSING_CITATION",
      agents: ["rag_knowledge"],
      evidence: [],
      description: "RAG Knowledge Agent findings exist without citations.",
      severity: "HIGH",
      resolutionStatus: "OPEN",
    });
  }

  if (byType.qa_analyst && byType.rag_knowledge) {
    const qaCoverage = (byType.qa_analyst.findings ?? []).join(" ").toLowerCase();
    const ragCoverage = (byType.rag_knowledge.findings ?? []).join(" ").toLowerCase();
    const qaMentionsCancellation = qaCoverage.includes("cancellation");
    const ragMentionsCancellation = ragCoverage.includes("cancellation");
    if (qaMentionsCancellation !== ragMentionsCancellation) {
      conflicts.push({
        conflictId: stableId("CONFLICT", "EVIDENCE_MISMATCH", "qa_rag"),
        type: "EVIDENCE_MISMATCH",
        agents: ["qa_analyst", "rag_knowledge"],
        evidence: [],
        description: "QA and RAG agent findings are semantically inconsistent for cancellation scope.",
        severity: "MEDIUM",
        resolutionStatus: "OPEN",
      });
    }
  }

  if (byType.test_analyst && byType.qa_analyst) {
    const testFinding = (byType.test_analyst.findings ?? []).join(" ").toLowerCase();
    const qaFinding = (byType.qa_analyst.findings ?? []).join(" ").toLowerCase();
    const testMentionsTestCase = testFinding.includes("test case");
    const qaMentionsAc = qaFinding.includes("acceptance");
    if (qaMentionsAc && !testMentionsTestCase) {
      conflicts.push({
        conflictId: stableId("CONFLICT", "COVERAGE_GAP", "qa_test"),
        type: "COVERAGE_GAP",
        agents: ["qa_analyst", "test_analyst"],
        evidence: [],
        description: "Acceptance-criteria evidence exists but test-case recommendation is incomplete.",
        severity: "MEDIUM",
        resolutionStatus: "OPEN",
      });
    }
  }

  return conflicts;
}

function resolveConflicts(conflicts) {
  return conflicts.map((conflict) => ({
    ...conflict,
    resolutionStatus: conflict.severity === "HIGH" ? "ESCALATED" : "RESOLVED",
  }));
}

module.exports = {
  detectConflicts,
  resolveConflicts,
};
