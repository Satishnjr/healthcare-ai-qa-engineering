const ConfluenceClient = require("../clients/confluence-client");
const { validateConfluencePage } = require("../models/validators");
const { nowIso, makeOperationMetadata } = require("../models/common");
const confluenceData = require("../data/mock-confluence-pages.json");

class ConfluenceMockAdapter extends ConfluenceClient {
  constructor() {
    super();
    this.spaceKey = confluenceData.spaceKey;
    this.pages = [...confluenceData.pages];
  }

  getPage(documentId) {
    const page = this.pages.find((item) => item.documentId === documentId);
    if (!page) {
      return {
        page: null,
        metadata: makeOperationMetadata("getPage", "confluence", documentId, "NOT_FOUND", [])
      };
    }

    return {
      page,
      metadata: makeOperationMetadata("getPage", "confluence", documentId, "SUCCESS", page.traceabilityIds)
    };
  }

  searchPages(filters = {}) {
    let results = [...this.pages];

    if (filters.titleContains) {
      const needle = filters.titleContains.toLowerCase();
      results = results.filter((item) => item.title.toLowerCase().includes(needle));
    }

    if (filters.sourceId) {
      results = results.filter((item) => item.sourceId === filters.sourceId);
    }

    if (filters.traceabilityId) {
      results = results.filter((item) => item.traceabilityIds.includes(filters.traceabilityId));
    }

    return {
      pages: results,
      metadata: makeOperationMetadata("searchPages", "confluence", this.spaceKey, "SUCCESS", [])
    };
  }

  createPage(pageDraft) {
    const now = nowIso();
    const page = {
      documentId: `CFH-PAGE-${String(this.pages.length + 1).padStart(3, "0")}`,
      parentPageId: "CFH-PAGE-ROOT-QA",
      version: 1,
      labels: [],
      traceabilityIds: [],
      status: "MOCK",
      createdAt: now,
      updatedAt: now,
      author: "system",
      lastModifiedBy: "system",
      accessScope: "team",
      sensitivity: "internal",
      checksum: `sha256:auto-${Date.now()}`,
      ...pageDraft
    };

    validateConfluencePage(page);
    this.pages.push(page);

    return {
      page,
      metadata: makeOperationMetadata("createPage", "confluence", page.documentId, "SUCCESS", page.traceabilityIds)
    };
  }

  updatePage(documentId, updates) {
    const index = this.pages.findIndex((item) => item.documentId === documentId);
    if (index < 0) {
      return {
        page: null,
        metadata: makeOperationMetadata("updatePage", "confluence", documentId, "NOT_FOUND", [])
      };
    }

    const updated = {
      ...this.pages[index],
      ...updates,
      version: this.pages[index].version + 1,
      updatedAt: nowIso()
    };

    validateConfluencePage(updated);
    this.pages[index] = updated;

    return {
      page: updated,
      metadata: makeOperationMetadata("updatePage", "confluence", documentId, "SUCCESS", updated.traceabilityIds)
    };
  }

  getPageChildren(parentPageId) {
    const pages = this.pages.filter((item) => item.parentPageId === parentPageId);
    return {
      pages,
      metadata: makeOperationMetadata("getPageChildren", "confluence", parentPageId, "SUCCESS", [])
    };
  }

  getPageVersion(documentId) {
    const page = this.pages.find((item) => item.documentId === documentId);
    if (!page) {
      return {
        version: null,
        metadata: makeOperationMetadata("getPageVersion", "confluence", documentId, "NOT_FOUND", [])
      };
    }

    return {
      version: page.version,
      metadata: makeOperationMetadata("getPageVersion", "confluence", documentId, "SUCCESS", page.traceabilityIds)
    };
  }

  searchByLabel(label) {
    const pages = this.pages.filter((item) => item.labels.includes(label));
    return {
      pages,
      metadata: makeOperationMetadata("searchByLabel", "confluence", this.spaceKey, "SUCCESS", [])
    };
  }
}

module.exports = ConfluenceMockAdapter;
