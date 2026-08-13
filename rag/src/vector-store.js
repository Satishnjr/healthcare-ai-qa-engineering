const path = require("path");
const { cosineSimilarity } = require("./math");
const { ensureDir, readJson, writeJson } = require("./fs-utils");
const { runtimeIndexDir } = require("./runtime-paths");

class LocalVectorStore {
  constructor(options = {}) {
    this.rootDir = options.rootDir ?? runtimeIndexDir;
    this.filePath = path.join(this.rootDir, "vector-store.json");
    ensureDir(this.rootDir);
    if (!this.exists()) {
      writeJson(this.filePath, { records: [] });
    }
  }

  exists() {
    try {
      readJson(this.filePath);
      return true;
    } catch {
      return false;
    }
  }

  readAll() {
    try {
      const value = readJson(this.filePath);
      return value.records ?? [];
    } catch {
      this.writeAll([]);
      return [];
    }
  }

  writeAll(records) {
    writeJson(this.filePath, { records });
  }

  upsert(records) {
    const current = this.readAll();
    const byId = new Map(current.map((item) => [item.chunkId, item]));
    for (const record of records) {
      byId.set(record.chunkId, record);
    }
    const merged = [...byId.values()];
    this.writeAll(merged);
    return merged.length;
  }

  delete(chunkIds) {
    const set = new Set(chunkIds);
    const remaining = this.readAll().filter((item) => !set.has(item.chunkId));
    this.writeAll(remaining);
    return remaining.length;
  }

  clear() {
    this.writeAll([]);
  }

  count() {
    return this.readAll().length;
  }

  filterByMetadata(records, filters = {}) {
    return records.filter((record) => {
      if (filters.sourceSystem && record.sourceSystem !== filters.sourceSystem) {
        return false;
      }
      if (filters.sourceType && record.sourceType !== filters.sourceType) {
        return false;
      }
      if (filters.accessScope && record.accessScope !== filters.accessScope) {
        return false;
      }
      if (filters.sensitivity && record.sensitivity !== filters.sensitivity) {
        return false;
      }
      if (filters.label && !record.labels.includes(filters.label)) {
        return false;
      }
      return true;
    });
  }

  search(vector, topK = 5, filters = {}) {
    const records = this.filterByMetadata(this.readAll(), filters);
    return records
      .map((record) => ({
        ...record,
        score: cosineSimilarity(vector, record.embedding),
      }))
      .sort((left, right) => right.score - left.score || left.chunkId.localeCompare(right.chunkId))
      .slice(0, topK);
  }
}

module.exports = {
  LocalVectorStore,
};
