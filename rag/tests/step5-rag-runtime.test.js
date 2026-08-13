const assert = require("assert");
const path = require("path");
const fs = require("fs");

const { discoverKnowledgeDocuments } = require("../src/knowledge-sources");
const { chunkDocuments } = require("../src/chunker");
const { DeterministicEmbeddingProvider } = require("../src/embedding-provider");
const { LocalVectorStore } = require("../src/vector-store");
const { Retriever } = require("../src/retriever");
const { ContextAssembler } = require("../src/context-assembler");
const { DeterministicGenerationProvider } = require("../src/generation-provider");
const { RagObservabilityLogger } = require("../src/observability");
const { RagQueryService } = require("../src/rag-query-service");
const { runtimeRoot } = require("../src/runtime-paths");

function run() {
  const documents = discoverKnowledgeDocuments();
  assert.ok(documents.length > 0, "normalization should discover documents");
  assert.ok(documents.every((doc) => doc.documentId && doc.checksum), "documents should include normalized ids/checksum");

  const chunksA = chunkDocuments(documents, { chunkSize: 420, overlap: 70 });
  const chunksB = chunkDocuments(documents, { chunkSize: 420, overlap: 70 });
  assert.ok(chunksA.length > 0, "chunking should produce chunks");
  assert.deepStrictEqual(
    chunksA.map((chunk) => chunk.chunkId),
    chunksB.map((chunk) => chunk.chunkId),
    "chunking should be deterministic",
  );

  const embedder = new DeterministicEmbeddingProvider({ dimension: 64 });
  const embedded = embedder.embedDocuments(chunksA);
  assert.strictEqual(embedded[0].embedding.length, 64, "embedding dimension must be stable");

  const testStoreRoot = path.join(runtimeRoot, "test-index");
  fs.rmSync(testStoreRoot, { recursive: true, force: true });
  const store = new LocalVectorStore({ rootDir: testStoreRoot });
  store.clear();
  const countAfterUpsert = store.upsert(embedded);
  assert.strictEqual(countAfterUpsert, embedded.length, "vector upsert should store all records");
  assert.strictEqual(store.count(), embedded.length, "vector count should match");

  const queryEmbedding = embedder.embedQuery("patient search acceptance criteria");
  const scored = store.search(queryEmbedding.vector, 5, {});
  assert.ok(scored.length > 0, "similarity ranking should return results");

  const retriever = new Retriever(store, embedder);
  const clinicalRetrieval = retriever.retrieve({
    query: "patient search acceptance criteria",
    topK: 5,
    userContext: { role: "Doctor" },
  });
  assert.ok(clinicalRetrieval.chunks.length > 0, "retrieval should return chunks");

  const patientRestricted = retriever.retrieve({
    query: "acceptance criteria",
    topK: 5,
    userContext: { role: "Patient" },
    filters: { sourceSystem: "jira" },
  });
  assert.strictEqual(patientRestricted.chunks.length, 0, "access filtering should restrict patient access for team-only jira records");

  const assembler = new ContextAssembler();
  const assembled = assembler.assemble(clinicalRetrieval.chunks, { maxContextChars: 1200 });
  assert.ok(assembled.contextSize > 0, "context assembly should build context text");
  assert.ok(assembled.chunks.length > 0, "context assembly should include chunks");

  const generator = new DeterministicGenerationProvider();
  const grounded = generator.generate({
    query: "patient search acceptance criteria",
    chunks: assembled.chunks,
  });
  assert.ok(grounded.answer.includes("Based on retrieved CareFlow evidence"), "grounded generation should use evidence");

  const noEvidence = generator.generate({ query: "unsupported question", chunks: [] });
  assert.ok(noEvidence.warnings.includes("NO_EVIDENCE"), "no evidence behavior should be explicit");

  const observabilityPath = path.join(runtimeRoot, "test-query-log.ndjson");
  fs.rmSync(observabilityPath, { force: true });
  const observability = new RagObservabilityLogger({ logPath: observabilityPath });
  const service = new RagQueryService({
    retriever,
    contextAssembler: assembler,
    generator,
    observability,
  });

  const answer = service.query({
    query: "What is the acceptance criterion for patient search?",
    topK: 4,
    filters: {},
    userContext: { role: "Doctor" },
  });

  assert.ok(answer.citations.length > 0, "citation generation should include sources");
  assert.ok(answer.retrievalMetadata.contextSize > 0, "query service should include retrieval metadata");
  assert.ok(fs.existsSync(observabilityPath), "observability log should be written");

  process.stdout.write("PASS: Step 5 RAG runtime tests passed\n");
}

run();
