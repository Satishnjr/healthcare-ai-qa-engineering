import type { RagQueryInput, RagQueryResponse } from "../types/rag";

interface RuntimeIndexRecord {
  chunkId: string;
  documentId: string;
  chunkIndex: number;
  content: string;
  sourceSystem: string;
  sourceType: string;
  sourceId: string;
  title: string;
  traceabilityIds: string[];
  labels: string[];
  accessScope: string;
  sensitivity: string;
  embedding: number[];
}

interface RuntimeIndex {
  metadata: {
    generatedAt: string;
    embeddingProvider: string;
    embeddingModel: string;
    embeddingQuality: string;
  };
  records: RuntimeIndexRecord[];
}

let cachedIndex: RuntimeIndex | null = null;
const MIN_EVIDENCE_SCORE = 0.1;
const MIN_TOKEN_OVERLAP = 2;
const STOP_WORDS = new Set([
  "a",
  "an",
  "and",
  "are",
  "as",
  "at",
  "be",
  "by",
  "for",
  "from",
  "how",
  "in",
  "is",
  "it",
  "of",
  "on",
  "or",
  "that",
  "the",
  "to",
  "was",
  "what",
  "when",
  "where",
  "which",
  "who",
  "with",
]);

function tokenize(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .split(/\s+/)
    .filter((token) => token && !STOP_WORDS.has(token));
}

function vectorize(text: string, dimension = 64): number[] {
  const vector = Array.from({ length: dimension }, () => 0);
  for (const token of tokenize(text)) {
    let hash = 0;
    for (let i = 0; i < token.length; i += 1) {
      hash = (hash * 31 + token.charCodeAt(i)) % 2147483647;
    }
    vector[hash % dimension] += 1;
  }
  const norm = Math.sqrt(vector.reduce((sum, item) => sum + item * item, 0));
  if (norm === 0) {
    return vector;
  }
  return vector.map((value) => value / norm);
}

function cosineSimilarity(a: number[], b: number[]) {
  if (a.length !== b.length) {
    return 0;
  }
  let dot = 0;
  let normA = 0;
  let normB = 0;
  for (let i = 0; i < a.length; i += 1) {
    dot += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }
  if (normA === 0 || normB === 0) {
    return 0;
  }
  return dot / (Math.sqrt(normA) * Math.sqrt(normB));
}

function allowedScopes(role: string): Set<string> {
  if (role === "Patient") {
    return new Set(["public"]);
  }
  if (role === "Healthcare Administrator") {
    return new Set(["public", "team", "admin"]);
  }
  return new Set(["public", "team"]);
}

async function loadIndex(): Promise<RuntimeIndex> {
  if (cachedIndex) {
    return cachedIndex;
  }
  const response = await fetch("/rag/runtime-index.json", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
  if (!response.ok) {
    throw new Error(`Unable to load RAG index: ${response.status}`);
  }
  cachedIndex = (await response.json()) as RuntimeIndex;
  return cachedIndex;
}

function buildCitationRoute(citation: { sourceSystem: string; sourceId: string }) {
  if (citation.sourceSystem === "jira") {
    return `/jira/issues/${citation.sourceId}`;
  }
  if (citation.sourceSystem === "confluence") {
    return `/confluence/pages/${citation.sourceId}`;
  }
  if (citation.sourceSystem === "repository" && citation.sourceId === "requirements-traceability") {
    return "/traceability";
  }
  return "/knowledge";
}

export async function queryRagKnowledge(input: RagQueryInput): Promise<RagQueryResponse> {
  const startedAt = performance.now();
  const index = await loadIndex();

  const query = input.query.trim();
  if (!query) {
    return {
      queryId: "query-empty",
      answer: "Please provide a question.",
      citations: [],
      retrievedDocuments: [],
      confidence: 0,
      retrievalMetadata: {
        topK: input.topK ?? 5,
        filters: input.filters ?? {},
        provider: index.metadata.embeddingProvider,
        model: index.metadata.embeddingModel,
        embeddingQuality: index.metadata.embeddingQuality,
        contextSize: 0,
        contextPreview: "",
      },
      warnings: ["EMPTY_QUERY"],
    };
  }

  const topK = input.topK ?? 5;
  const queryVector = vectorize(query);
  const scope = allowedScopes(input.userRole);

  const filteredByScope = index.records.filter((record) => scope.has(record.accessScope));
  const filteredByMetadata = filteredByScope.filter((record) => {
    if (!input.filters) {
      return true;
    }
    if (input.filters.sourceSystem && input.filters.sourceSystem !== record.sourceSystem) {
      return false;
    }
    if (input.filters.sourceType && input.filters.sourceType !== record.sourceType) {
      return false;
    }
    if (input.filters.label && !record.labels.includes(input.filters.label)) {
      return false;
    }
    return true;
  });

  const scored = filteredByMetadata
    .map((record) => ({
      ...record,
      score: cosineSimilarity(queryVector, record.embedding),
      overlapCount: (() => {
        const queryTokens = new Set(tokenize(query));
        const contentTokens = new Set(tokenize(record.content));
        let overlap = 0;
        queryTokens.forEach((token) => {
          if (contentTokens.has(token)) {
            overlap += 1;
          }
        });
        return overlap;
      })(),
    }))
    .filter((record) => record.overlapCount >= MIN_TOKEN_OVERLAP)
    .sort((left, right) => right.score - left.score || left.chunkId.localeCompare(right.chunkId))
    .slice(0, topK);

  const highSignal = scored.filter((record) => record.score >= MIN_EVIDENCE_SCORE);
  if (highSignal.length === 0) {
    return {
      queryId: `query-${Math.round(startedAt)}`,
      answer:
        "I could not find sufficient evidence in the indexed CareFlow knowledge base to answer this question.",
      citations: [],
      retrievedDocuments: [],
      confidence: 0,
      retrievalMetadata: {
        topK,
        filters: input.filters ?? {},
        provider: index.metadata.embeddingProvider,
        model: index.metadata.embeddingModel,
        embeddingQuality: index.metadata.embeddingQuality,
        contextSize: 0,
        contextPreview: "",
      },
      warnings: ["NO_EVIDENCE"],
    };
  }

  const citations = highSignal.map((record) => ({
    chunkId: record.chunkId,
    documentId: record.documentId,
    sourceSystem: record.sourceSystem,
    sourceType: record.sourceType,
    sourceId: record.sourceId,
    score: Number(record.score.toFixed(6)),
    traceabilityIds: record.traceabilityIds,
    labels: record.labels,
    route: buildCitationRoute(record),
  }));

  const answerLines = highSignal.slice(0, 3).map((record, indexLine) => {
    const snippet = record.content.replace(/\s+/g, " ").slice(0, 210);
    return `${indexLine + 1}. ${snippet}`;
  });

  return {
    queryId: `query-${Math.round(startedAt)}`,
    answer: `Based on retrieved CareFlow evidence:\n${answerLines.join("\n")}`,
    citations,
    retrievedDocuments: citations.map((citation) => ({
      chunkId: citation.chunkId,
      documentId: citation.documentId,
      score: citation.score,
      sourceSystem: citation.sourceSystem,
      sourceType: citation.sourceType,
      sourceId: citation.sourceId,
    })),
    confidence: Number(
      (
        highSignal.reduce((sum, item) => sum + item.score, 0) /
        Math.max(1, highSignal.length)
      ).toFixed(2),
    ),
    retrievalMetadata: {
      topK,
      filters: input.filters ?? {},
      provider: index.metadata.embeddingProvider,
      model: index.metadata.embeddingModel,
      embeddingQuality: index.metadata.embeddingQuality,
      contextSize: highSignal.reduce((sum, chunk) => sum + chunk.content.length, 0),
      contextPreview: highSignal.map((item) => item.content).join("\n").slice(0, 600),
    },
    warnings: [],
  };
}
