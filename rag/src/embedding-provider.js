const { tokenize } = require("./math");

class DeterministicEmbeddingProvider {
  constructor(options = {}) {
    this.dimension = options.dimension ?? 64;
    this.provider = "deterministic-fallback";
    this.model = "hashing-v1";
    this.quality = "DEVELOPMENT_FALLBACK";
  }

  vectorize(text) {
    const vector = Array.from({ length: this.dimension }, () => 0);
    const tokens = tokenize(text);

    for (const token of tokens) {
      let hash = 0;
      for (let i = 0; i < token.length; i += 1) {
        hash = (hash * 31 + token.charCodeAt(i)) % 2147483647;
      }
      const index = hash % this.dimension;
      vector[index] += 1;
    }

    const norm = Math.sqrt(vector.reduce((sum, value) => sum + value * value, 0));
    if (norm === 0) {
      return vector;
    }

    return vector.map((value) => value / norm);
  }

  embedDocuments(chunks) {
    return chunks.map((chunk) => ({
      ...chunk,
      embedding: this.vectorize(chunk.content),
      embeddingProvider: this.provider,
      embeddingModel: this.model,
      embeddingQuality: this.quality,
    }));
  }

  embedQuery(query) {
    return {
      vector: this.vectorize(query),
      provider: this.provider,
      model: this.model,
      quality: this.quality,
    };
  }
}

module.exports = {
  DeterministicEmbeddingProvider,
};
