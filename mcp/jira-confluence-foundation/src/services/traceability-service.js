class TraceabilityService {
  constructor(jiraRepository, confluenceRepository) {
    this.jiraRepository = jiraRepository;
    this.confluenceRepository = confluenceRepository;
  }

  findTestCasesByJiraStory(issueKey) {
    const { issue } = this.jiraRepository.getIssue(issueKey);
    if (!issue) {
      return [];
    }
    return issue.testCaseIds;
  }

  findJiraStoriesByTestCase(testCaseId) {
    const { issues } = this.jiraRepository.searchIssues({});
    return issues
      .filter((issue) => issue.testCaseIds.includes(testCaseId))
      .map((issue) => issue.issueKey);
  }

  findAcceptanceCriteriaByDefect(issueKey) {
    const { issue } = this.jiraRepository.getIssue(issueKey);
    if (!issue) {
      return [];
    }
    return issue.acceptanceCriteria;
  }

  findConfluenceByJira(issueKey) {
    const { pages } = this.confluenceRepository.searchPages({ sourceId: issueKey });
    return pages.map((page) => page.documentId);
  }

  reverseLookupByTraceabilityId(traceabilityId) {
    const { issues } = this.jiraRepository.searchIssues({ traceabilityId });
    const { pages } = this.confluenceRepository.searchPages({ traceabilityId });

    return {
      jiraKeys: issues.map((issue) => issue.issueKey),
      documentIds: pages.map((page) => page.documentId)
    };
  }
}

module.exports = TraceabilityService;
