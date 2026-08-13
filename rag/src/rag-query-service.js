const { stableId } = require("./hash");

class RagQueryService {
  constructor({ retriever, contextAssembler, generator, observability }) {
    this.retriever = retriever;
    this.contextAssembler = contextAssembler;
    this.generator = generator;
    this.observability = observability;
  }

  query({ query, topK = 5, filters = {}, userContext = {} }) {
    const started = Date.now();
    const queryId = stableId("Q", query, userContext.role ?? "unknown", String(started));

    const retrieved = this.retriever.retrieve({ query, topK, filters, userContext });
    const assembled = this.contextAssembler.assemble(retrieved.chunks, {
      maxContextChars: 2000,
    });
    const generated = this.generator.generate({ query, chunks: assembled.chunks });

    const citations = assembled.chunks.map((chunk) => ({
      chunkId: chunk.chunkId,
      documentId: chunk.documentId,
      sourceSystem: chunk.sourceSystem,
      sourceId: chunk.sourceId,
      sourceType: chunk.sourceType,
      score: chunk.score,
      traceabilityIds: chunk.traceabilityIds,
      labels: chunk.labels,
    }));

    const response = {
      queryId,
      answer: generated.answer,
      citations,
      retrievedDocuments: assembled.chunks.map((chunk) => ({
        chunkId: chunk.chunkId,
        documentId: chunk.documentId,
        score: chunk.score,
        sourceSystem: chunk.sourceSystem,
        sourceType: chunk.sourceType,
        sourceId: chunk.sourceId,
      })),
      confidence: generated.confidence,
      retrievalMetadata: {
        topK,
        filters,
        provider: retrieved.queryEmbedding.provider,
        model: retrieved.queryEmbedding.model,
        embeddingQuality: retrieved.queryEmbedding.quality,
        contextSize: assembled.contextSize,
        contextPreview: assembled.contextText.slice(0, 600),
      },
      warnings: generated.warnings,
    };

    const latency = Date.now() - started;
    this.observability.log({
      queryId,
      timestamp: new Date().toISOString(),
      userRole: userContext.role ?? "Unknown",
      query,
      retrievedChunkIds: citations.map((item) => item.chunkId),
      retrievalScores: citations.map((item) => item.score),
      topK,
      filters,
      contextSize: assembled.contextSize,
      provider: retrieved.queryEmbedding.provider,
      model: retrieved.queryEmbedding.model,
      answer: response.answer,
      citations,
      confidence: response.confidence,
      warnings: response.warnings,
      latency,
    });

    return response;
  }
}

module.exports = {
  RagQueryService,
};
