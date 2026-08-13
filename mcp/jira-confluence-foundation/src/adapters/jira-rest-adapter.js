const JiraClient = require("../clients/jira-client");

class JiraRestAdapter extends JiraClient {
  constructor(config = {}) {
    super();
    this.baseUrl = config.baseUrl || null;
    this.email = config.email || null;
    this.apiToken = config.apiToken || null;
    this.status = "BLOCKED";
  }

  _blocked(operation) {
    return {
      status: "BLOCKED",
      operation,
      reason: "External Jira REST integration is intentionally not executed in Step 4 without verified connectivity and approved runtime credentials."
    };
  }

  getIssue() { return this._blocked("getIssue"); }
  searchIssues() { return this._blocked("searchIssues"); }
  createIssue() { return this._blocked("createIssue"); }
  updateIssue() { return this._blocked("updateIssue"); }
  linkIssues() { return this._blocked("linkIssues"); }
  getComments() { return this._blocked("getComments"); }
  addComment() { return this._blocked("addComment"); }
  getProject() { return this._blocked("getProject"); }
  getSprint() { return this._blocked("getSprint"); }
  getRelease() { return this._blocked("getRelease"); }
}

module.exports = JiraRestAdapter;
