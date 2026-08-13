const { stableId } = require("./hash");

function splitWithWindow(text, chunkSize, overlap) {
  const chunks = [];
  const source = String(text || "");
  if (!source.trim()) {
    return chunks;
  }

  let start = 0;
  while (start < source.length) {
    const end = Math.min(source.length, start + chunkSize);
    const content = source.slice(start, end).trim();
    if (content) {
      chunks.push({
        start,
        end,
        content,
      });
    }
    if (end >= source.length) {
      break;
    }
    start = Math.max(0, end - overlap);
  }

  return chunks;
}

function chunkDocuments(documents, options = {}) {
  const chunkSize = options.chunkSize ?? 420;
  const overlap = options.overlap ?? 70;
  const chunks = [];

  for (const document of documents) {
    const windows = splitWithWindow(document.content, chunkSize, overlap);
    windows.forEach((window, index) => {
      const chunkId = stableId(
        "CHUNK",
        document.documentId,
        String(index),
        String(window.start),
        String(window.end),
      );

      chunks.push({
        chunkId,
        documentId: document.documentId,
        chunkIndex: index,
        content: window.content,
        chunkStart: window.start,
        chunkEnd: window.end,
        sourceSystem: document.sourceSystem,
        sourceType: document.sourceType,
        sourceId: document.sourceId,
        title: document.title,
        traceabilityIds: document.traceabilityIds,
        labels: document.labels,
        accessScope: document.accessScope,
        sensitivity: document.sensitivity,
        metadata: {
          ...document.metadata,
          version: document.version,
          timestamp: document.timestamp,
          checksum: document.checksum,
        },
      });
    });
  }

  return chunks;
}

module.exports = {
  chunkDocuments,
};
