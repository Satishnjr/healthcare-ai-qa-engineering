class ConfluenceRepository {
  constructor(client) {
    this.client = client;
  }

  getPage(documentId) {
    return this.client.getPage(documentId);
  }

  searchPages(filters) {
    return this.client.searchPages(filters);
  }

  createPage(pageDraft) {
    return this.client.createPage(pageDraft);
  }

  updatePage(documentId, updates) {
    return this.client.updatePage(documentId, updates);
  }

  searchByLabel(label) {
    return this.client.searchByLabel(label);
  }
}

module.exports = ConfluenceRepository;
