const { ingestAndIndex } = require("./indexer");
const { createRagRuntime } = require("./rag-runtime-boundary");

module.exports = {
  ingestAndIndex,
  createRagRuntime,
};
