const { tokenize } = require("./math");

class DeterministicGenerationProvider {
  constructor() {
    this.provider = "deterministic-grounded-generator";
    this.model = "extractive-v1";
  }

  generate({ query, chunks }) {
    if (!chunks.length) {
      return {
        answer:
          "I could not find sufficient evidence in the indexed CareFlow knowledge base to answer this question.",
        confidence: 0,
        warnings: ["NO_EVIDENCE"],
      };
    }

    const queryTokens = new Set(tokenize(query));
    const scored = chunks.map((chunk) => {
      const chunkTokens = tokenize(chunk.content);
      const overlap = chunkTokens.filter((token) => queryTokens.has(token)).length;
      return {
        chunk,
        overlap,
      };
    });

    scored.sort((left, right) => right.overlap - left.overlap || right.chunk.score - left.chunk.score);

    const top = scored.slice(0, Math.min(3, scored.length)).map((entry) => entry.chunk);
    const evidenceText = top
      .map((chunk, index) => {
        const snippet = chunk.content.replace(/\s+/g, " ").slice(0, 220);
        return `${index + 1}. ${snippet}`;
      })
      .join("\n");

    const confidence = Math.min(
      0.98,
      Number((top.reduce((sum, chunk) => sum + chunk.score, 0) / top.length).toFixed(2)),
    );

    return {
      answer: `Based on retrieved CareFlow evidence:\n${evidenceText}`,
      confidence,
      warnings: [],
    };
  }
}

module.exports = {
  DeterministicGenerationProvider,
};
