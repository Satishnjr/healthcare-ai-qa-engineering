const { LocalVectorStore } = require("./vector-store");
const { DeterministicEmbeddingProvider } = require("./embedding-provider");
const { Retriever } = require("./retriever");
const { ContextAssembler } = require("./context-assembler");
const { DeterministicGenerationProvider } = require("./generation-provider");
const { RagObservabilityLogger } = require("./observability");
const { RagQueryService } = require("./rag-query-service");

function createRagRuntime() {
  const vectorStore = new LocalVectorStore();
  const embeddingProvider = new DeterministicEmbeddingProvider({ dimension: 64 });
  const retriever = new Retriever(vectorStore, embeddingProvider);
  const contextAssembler = new ContextAssembler();
  const generator = new DeterministicGenerationProvider();
  const observability = new RagObservabilityLogger();

  const ragQueryService = new RagQueryService({
    retriever,
    contextAssembler,
    generator,
    observability,
  });

  return {
    searchKnowledge: ({ query, topK = 5, filters = {}, userContext = {} }) =>
      retriever.retrieve({ query, topK, filters, userContext }),
    retrieveContext: ({ query, topK = 5, filters = {}, userContext = {} }) => {
      const retrieval = retriever.retrieve({ query, topK, filters, userContext });
      return contextAssembler.assemble(retrieval.chunks, {});
    },
    queryRag: (payload) => ragQueryService.query(payload),
    getSourceDocument: (documentId) => vectorStore.readAll().filter((item) => item.documentId === documentId),
    getTraceability: (traceabilityId) =>
      vectorStore
        .readAll()
        .filter((item) => Array.isArray(item.traceabilityIds) && item.traceabilityIds.includes(traceabilityId)),
  };
}

module.exports = {
  createRagRuntime,
};
