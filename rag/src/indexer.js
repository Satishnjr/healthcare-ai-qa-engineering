const path = require("path");
const { discoverKnowledgeDocuments } = require("./knowledge-sources");
const { chunkDocuments } = require("./chunker");
const { DeterministicEmbeddingProvider } = require("./embedding-provider");
const { LocalVectorStore } = require("./vector-store");
const { writeJson, ensureDir } = require("./fs-utils");
const { runtimeIndexDir, repoRoot } = require("./runtime-paths");

function ingestAndIndex() {
  const startedAt = Date.now();
  const documents = discoverKnowledgeDocuments();
  const chunks = chunkDocuments(documents, { chunkSize: 420, overlap: 70 });
  const embeddingProvider = new DeterministicEmbeddingProvider({ dimension: 64 });
  const embeddedChunks = embeddingProvider.embedDocuments(chunks);

  const vectorStore = new LocalVectorStore();
  vectorStore.clear();
  const vectorCount = vectorStore.upsert(embeddedChunks);

  const root = runtimeIndexDir;
  ensureDir(root);
  writeJson(path.join(root, "normalized-documents.json"), documents);
  writeJson(path.join(root, "chunks.json"), chunks);
  writeJson(path.join(root, "runtime-index.json"), {
    metadata: {
      generatedAt: new Date().toISOString(),
      embeddingProvider: embeddingProvider.provider,
      embeddingModel: embeddingProvider.model,
      embeddingQuality: embeddingProvider.quality,
    },
    records: embeddedChunks,
  });

  const frontendCopy = path.join(repoRoot, "frontend", "public", "rag", "runtime-index.json");
  let frontendCopyStatus = "SUCCESS";
  try {
    writeJson(frontendCopy, {
      metadata: {
        generatedAt: new Date().toISOString(),
        embeddingProvider: embeddingProvider.provider,
        embeddingModel: embeddingProvider.model,
        embeddingQuality: embeddingProvider.quality,
      },
      records: embeddedChunks,
    });
  } catch (error) {
    frontendCopyStatus = `FAILED: ${error.code ?? "UNKNOWN"} ${error.message}`;
  }

  const summary = {
    startedAt: new Date(startedAt).toISOString(),
    completedAt: new Date().toISOString(),
    documentsDiscovered: documents.length,
    documentsIndexed: documents.length,
    chunksCreated: chunks.length,
    embeddingsCreated: embeddedChunks.length,
    vectorRecords: vectorCount,
    failures: 0,
    notes: [
      "Embedding provider is deterministic fallback for offline/local development.",
      "Local vector store is development implementation, not production vector database.",
      `Frontend runtime-index copy status: ${frontendCopyStatus}`,
    ],
  };

  writeJson(path.join(root, "ingestion-summary.json"), summary);
  return summary;
}

module.exports = {
  ingestAndIndex,
};
