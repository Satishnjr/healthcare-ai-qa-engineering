const path = require("path");
const { ingestAndIndex } = require("./indexer");
const { readJson } = require("./fs-utils");
const { LocalVectorStore } = require("./vector-store");
const { DeterministicEmbeddingProvider } = require("./embedding-provider");
const { Retriever } = require("./retriever");
const { ContextAssembler } = require("./context-assembler");
const { DeterministicGenerationProvider } = require("./generation-provider");
const { RagObservabilityLogger } = require("./observability");
const { RagQueryService } = require("./rag-query-service");
const { runtimeIndexDir } = require("./runtime-paths");

function parseArgs(argv) {
  const args = { query: "", role: "Doctor", topK: 5 };
  for (let i = 0; i < argv.length; i += 1) {
    const current = argv[i];
    if (!args.query && !current.startsWith("--")) {
      args.query = current;
      continue;
    }
    if (current === "--role") {
      args.role = argv[i + 1] ?? args.role;
      i += 1;
      continue;
    }
    if (current === "--topK") {
      args.topK = Number(argv[i + 1] ?? args.topK);
      i += 1;
    }
  }
  return args;
}

function ensureIndex() {
  const summaryPath = path.join(runtimeIndexDir, "ingestion-summary.json");
  try {
    readJson(summaryPath);
  } catch {
    ingestAndIndex();
  }
}

function main() {
  const { query, role, topK } = parseArgs(process.argv.slice(2));
  if (!query) {
    process.stderr.write("Usage: npm run rag:query -- \"<question>\" [--role Doctor] [--topK 5]\n");
    process.exit(1);
  }

  ensureIndex();

  const vectorStore = new LocalVectorStore();
  const embeddingProvider = new DeterministicEmbeddingProvider({ dimension: 64 });
  const retriever = new Retriever(vectorStore, embeddingProvider);
  const assembler = new ContextAssembler();
  const generator = new DeterministicGenerationProvider();
  const observability = new RagObservabilityLogger();

  const service = new RagQueryService({
    retriever,
    contextAssembler: assembler,
    generator,
    observability,
  });

  const result = service.query({
    query,
    topK,
    userContext: { role },
    filters: {},
  });

  process.stdout.write(`${JSON.stringify({ query, role, ...result }, null, 2)}\n`);
}

main();
