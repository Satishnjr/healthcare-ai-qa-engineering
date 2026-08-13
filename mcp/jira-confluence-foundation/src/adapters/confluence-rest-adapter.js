const ConfluenceClient = require("../clients/confluence-client");

class ConfluenceRestAdapter extends ConfluenceClient {
  constructor(config = {}) {
    super();
    this.baseUrl = config.baseUrl || null;
    this.username = config.username || null;
    this.apiToken = config.apiToken || null;
    this.status = "BLOCKED";
  }

  _blocked(operation) {
    return {
      status: "BLOCKED",
      operation,
      reason: "External Confluence REST integration is intentionally not executed in Step 4 without verified connectivity and approved runtime credentials."
    };
  }

  getPage() { return this._blocked("getPage"); }
  searchPages() { return this._blocked("searchPages"); }
  createPage() { return this._blocked("createPage"); }
  updatePage() { return this._blocked("updatePage"); }
  getPageChildren() { return this._blocked("getPageChildren"); }
  getPageVersion() { return this._blocked("getPageVersion"); }
  searchByLabel() { return this._blocked("searchByLabel"); }
}

module.exports = ConfluenceRestAdapter;
