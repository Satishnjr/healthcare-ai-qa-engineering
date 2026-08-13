class ContextAssembler {
  assemble(chunks, options = {}) {
    const maxContextChars = options.maxContextChars ?? 1800;
    const unique = new Map();

    for (const chunk of chunks) {
      if (!unique.has(chunk.chunkId)) {
        unique.set(chunk.chunkId, chunk);
      }
    }

    const ordered = [...unique.values()].sort(
      (left, right) => right.score - left.score || left.chunkId.localeCompare(right.chunkId),
    );

    const selected = [];
    let used = 0;
    for (const chunk of ordered) {
      const nextLength = chunk.content.length;
      if (used + nextLength > maxContextChars && selected.length > 0) {
        continue;
      }
      selected.push(chunk);
      used += nextLength;
      if (used >= maxContextChars) {
        break;
      }
    }

    const contextText = selected
      .map((chunk, index) => `[#${index + 1}] (${chunk.sourceSystem}:${chunk.sourceId}) ${chunk.content}`)
      .join("\n\n");

    return {
      chunks: selected,
      contextText,
      contextSize: used,
    };
  }
}

module.exports = {
  ContextAssembler,
};
