class JiraRepository {
  constructor(client) {
    this.client = client;
  }

  getIssue(issueKey) {
    return this.client.getIssue(issueKey);
  }

  searchIssues(filters) {
    return this.client.searchIssues(filters);
  }

  createIssue(issueDraft) {
    return this.client.createIssue(issueDraft);
  }

  updateIssue(issueKey, updates) {
    return this.client.updateIssue(issueKey, updates);
  }

  linkIssues(sourceKey, targetKey) {
    return this.client.linkIssues(sourceKey, targetKey);
  }

  getProject() {
    return this.client.getProject();
  }
}

module.exports = JiraRepository;
