const { tokenize } = require("./math");

function applyAccessScope(records, userRole) {
  const patientScopes = new Set(["public"]);
  const clinicalScopes = new Set(["public", "team"]);
  const adminScopes = new Set(["public", "team", "admin"]);

  const scopes =
    userRole === "Patient"
      ? patientScopes
      : userRole === "Healthcare Administrator"
        ? adminScopes
        : clinicalScopes;

  return records.filter((record) => scopes.has(record.accessScope));
}

class Retriever {
  constructor(vectorStore, embeddingProvider) {
    this.vectorStore = vectorStore;
    this.embeddingProvider = embeddingProvider;
  }

  retrieve({ query, topK = 5, filters = {}, userContext = {} }) {
    const minScore = filters.minScore ? Number(filters.minScore) : 0.1;
    const minTokenOverlap = filters.minTokenOverlap ? Number(filters.minTokenOverlap) : 2;
    const queryTokens = new Set(tokenize(query));
    const embedded = this.embeddingProvider.embedQuery(query);
    const raw = this.vectorStore.search(embedded.vector, topK * 3, filters);
    const filtered = applyAccessScope(raw, userContext.role || "Doctor");

    const ranked = filtered
      .map((record) => {
        const contentTokens = new Set(tokenize(record.content));
        let overlapCount = 0;
        for (const token of queryTokens) {
          if (contentTokens.has(token)) {
            overlapCount += 1;
          }
        }
        return {
          ...record,
          overlapCount,
        };
      })
      .filter((record) => record.overlapCount >= minTokenOverlap)
      .filter((record) => record.score >= minScore)
      .sort((left, right) => right.score - left.score || left.chunkId.localeCompare(right.chunkId))
      .slice(0, topK)
      .map((record) => ({
        chunkId: record.chunkId,
        documentId: record.documentId,
        score: Number(record.score.toFixed(6)),
        content: record.content,
        sourceSystem: record.sourceSystem,
        sourceType: record.sourceType,
        sourceId: record.sourceId,
        traceabilityIds: record.traceabilityIds,
        labels: record.labels,
        accessScope: record.accessScope,
        sensitivity: record.sensitivity,
        title: record.title,
      }));

    return {
      queryEmbedding: embedded,
      chunks: ranked,
    };
  }
}

module.exports = {
  Retriever,
};
