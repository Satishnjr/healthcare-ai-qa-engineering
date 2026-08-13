const { nowIso } = require("../models/common");

class JiraConfluenceSyncService {
  constructor(jiraRepository, confluenceRepository) {
    this.jiraRepository = jiraRepository;
    this.confluenceRepository = confluenceRepository;
  }

  syncStoryToKnowledge(issueKey) {
    const storyResult = this.jiraRepository.getIssue(issueKey);
    if (!storyResult.issue) {
      return {
        status: "NOT_FOUND",
        message: `Story not found: ${issueKey}`
      };
    }

    const story = storyResult.issue;
    const pageDraft = {
      spaceKey: "CFH",
      title: `${story.summary} - QA Knowledge`,
      content: [
        `Story: ${story.issueKey}`,
        `Summary: ${story.summary}`,
        `Acceptance Criteria: ${story.acceptanceCriteria.join(", ")}`,
        `Test Scenarios: ${story.testScenarioIds.join(", ")}`,
        `Test Cases: ${story.testCaseIds.join(", ")}`
      ].join("\n"),
      labels: ["jira-sync", "qa-knowledge", "story"],
      traceabilityIds: [...story.traceabilityIds],
      sourceType: "requirement",
      sourceSystem: "jira",
      sourceId: story.issueKey,
      status: "MOCK",
      author: "sync.service",
      lastModifiedBy: "sync.service",
      accessScope: "team",
      sensitivity: "internal",
      checksum: `sha256:sync-${story.issueKey}-${Date.now()}`,
      createdAt: nowIso(),
      updatedAt: nowIso()
    };

    const { page } = this.confluenceRepository.createPage(pageDraft);

    return {
      status: "SUCCESS",
      jiraKey: story.issueKey,
      confluenceDocumentId: page.documentId,
      traceabilityIds: page.traceabilityIds
    };
  }
}

module.exports = JiraConfluenceSyncService;
