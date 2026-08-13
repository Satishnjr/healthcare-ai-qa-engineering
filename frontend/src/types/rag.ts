export interface RagCitation {
  chunkId: string;
  documentId: string;
  sourceSystem: string;
  sourceType: string;
  sourceId: string;
  score: number;
  traceabilityIds: string[];
  labels: string[];
  route?: string;
}

export interface RagQueryResponse {
  queryId: string;
  answer: string;
  citations: RagCitation[];
  retrievedDocuments: Array<{
    chunkId: string;
    documentId: string;
    score: number;
    sourceSystem: string;
    sourceType: string;
    sourceId: string;
  }>;
  confidence: number;
  retrievalMetadata: {
    topK: number;
    filters: Record<string, string>;
    provider: string;
    model: string;
    embeddingQuality: string;
    contextSize: number;
    contextPreview: string;
  };
  warnings: string[];
}

export interface RagQueryInput {
  query: string;
  topK?: number;
  filters?: Record<string, string>;
  userRole: string;
}
