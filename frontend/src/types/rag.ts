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

export interface RagEvaluationCaseResult {
  caseId: string;
  question: string;
  role: string;
  category: string;
  expectedSources: string[];
  expectedAnswer: string;
  expectedTraceabilityIds: string[];
  answer: string;
  citations: RagCitation[];
  retrievedSources: string[];
  metrics: {
    contextPrecision: number;
    contextRecall: number;
    faithfulness: number;
    answerRelevance: number;
    groundedness: number;
  };
  overallScore: number;
  status: "PASS" | "WARN" | "FAIL";
  warnings: string[];
  failureCategory: string | null;
}

export interface RagEvaluationRun {
  runId: string;
  timestamp: string;
  datasetId: string;
  datasetVersion: string;
  ragVersion: string;
  modelVersion: string;
  promptVersion: string;
  embeddingVersion: string;
  evaluatorVersion: string;
  embeddingProvider: string;
  embeddingModel: string;
  generationProvider: string;
  generationModel: string;
  totalCases: number;
  passedCases: number;
  warnCases: number;
  failedCases: number;
  metrics: {
    contextPrecision: number;
    contextRecall: number;
    faithfulness: number;
    answerRelevance: number;
    groundedness: number;
    overallScore: number;
  };
  qualityGate: {
    status: "PASS" | "WARN" | "FAIL";
    thresholds: Record<string, number>;
    failures: string[];
    warnings: string[];
  };
  results: RagEvaluationCaseResult[];
}

export interface RagEvaluationComparison {
  comparisonId: string;
  baseRunId: string;
  targetRunId: string;
  timestamp: string;
  trend: "IMPROVED" | "REGRESSED" | "UNCHANGED";
  passDelta: number;
  failDelta: number;
  delta: Record<
    string,
    {
      before: number;
      after: number;
      delta: number;
      trend: "IMPROVED" | "REGRESSED" | "UNCHANGED";
    }
  >;
}
