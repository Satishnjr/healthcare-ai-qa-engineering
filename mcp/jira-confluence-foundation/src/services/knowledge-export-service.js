const crypto = require("crypto");

function checksum(value) {
  return `sha256:${crypto.createHash("sha256").update(value).digest("hex")}`;
}

class KnowledgeExportService {
  constructor(confluenceRepository) {
    this.confluenceRepository = confluenceRepository;
  }

  exportDocument(documentId) {
    const { page } = this.confluenceRepository.getPage(documentId);
    if (!page) {
      return null;
    }

    return {
      documentId: page.documentId,
      sourceSystem: "confluence",
      sourceId: page.sourceId,
      title: page.title,
      content: page.content,
      contentType: "markdown",
      labels: page.labels,
      traceabilityIds: page.traceabilityIds,
      jiraKeys: page.sourceSystem === "jira" ? [page.sourceId] : [],
      version: page.version,
      timestamp: page.updatedAt,
      accessScope: page.accessScope,
      sensitivity: page.sensitivity,
      checksum: checksum(`${page.documentId}:${page.version}:${page.content}`)
    };
  }

  exportByLabel(label) {
    const { pages } = this.confluenceRepository.searchByLabel(label);
    return pages.map((page) => this.exportDocument(page.documentId));
  }
}

module.exports = KnowledgeExportService;
