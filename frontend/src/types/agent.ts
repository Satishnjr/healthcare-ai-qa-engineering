export interface AgentTask {
  taskId: string;
  originalRequest: string;
  taskType: string;
  entities: Array<{ type: string; value: string }>;
  confidence: number;
}

export interface AgentPlanStep {
  order: number;
  tool: string;
  purpose: string;
}

export interface AgentPlan {
  planId: string;
  taskId: string;
  steps: AgentPlanStep[];
}

export interface AgentToolCall {
  requestId: string;
  tool: string;
  status: string;
  source: string;
  durationMs: number;
}

export interface AgentEvidence {
  evidenceId: string;
  sourceSystem: string;
  sourceType: string;
  sourceId: string;
  content: string;
  score: number;
  traceabilityIds: string[];
}

export interface AgentCitation {
  sourceSystem: string;
  sourceId: string;
  documentId?: string | null;
  chunkId?: string | null;
}

export interface AgentConfidence {
  score: number;
  band: string;
  formula: string;
}

export interface AgentApproval {
  required: boolean;
  action: string | null;
  reason: string;
  status: string;
}

export interface AgentRuntimeResponse {
  responseId: string;
  taskId: string;
  status: string;
  answer: string;
  taskType: string;
  plan: AgentPlan;
  toolCalls: AgentToolCall[];
  evidence: AgentEvidence[];
  citations: AgentCitation[];
  confidence: AgentConfidence;
  warnings: string[];
  approval: AgentApproval;
  generatedAt: string;
}

export interface AgentSample {
  key: string;
  request: string;
  role: string;
  response: AgentRuntimeResponse;
}

export interface AgentRuntimeSamples {
  generatedAt: string;
  provider: string;
  samples: AgentSample[];
}

export interface AgentGraphNodeEvent {
  node: string;
  status: string;
  timestamp: string;
  details?: {
    durationMs?: number;
  };
}

export interface AgentGraphTransition {
  from: string;
  to: string;
  reason: string;
  timestamp: string;
}

export interface AgentGraphState {
  graphRunId: string;
  taskId: string | null;
  currentNode: string;
  executionStatus: string;
  finalStatus: string;
  approvalStatus: string;
  toolCalls: AgentToolCall[];
  evidence: AgentEvidence[];
  confidence: AgentConfidence;
  response: AgentRuntimeResponse | null;
  nodeHistory: AgentGraphNodeEvent[];
  transitionHistory: AgentGraphTransition[];
  errors: Array<{ code: string; message: string }>;
}

export interface AgentGraphSamples {
  generatedAt: string;
  runtime: string;
  samples: Record<string, AgentGraphState>;
}

export interface MultiAgentEvidence {
  evidenceId: string;
  sourceSystem: string;
  sourceType: string;
  sourceId: string;
  citation: string;
  score: number;
  agentId: string;
}

export interface MultiAgentConflict {
  conflictId: string;
  type: string;
  agents: string[];
  description: string;
  severity: string;
  resolutionStatus: string;
}

export interface MultiAgentResult {
  agentId: string;
  agentType: string;
  taskId: string;
  status: string;
  objective: string;
  toolsUsed: string[];
  evidence: MultiAgentEvidence[];
  findings: string[];
  recommendations: string[];
  citations: AgentCitation[];
  confidence: AgentConfidence;
  durationMs: number;
}

export interface MultiAgentState {
  multiAgentRunId: string;
  requestId: string;
  role: string;
  originalRequest: string;
  currentPhase: string;
  executionStatus: string;
  finalStatus: string;
  approvalStatus: string;
  selectedAgents: string[];
  supervisorPlan: {
    rationale: string[];
  };
  agentStatuses: Record<string, string>;
  agentResults: Record<string, MultiAgentResult>;
  evidence: MultiAgentEvidence[];
  conflicts: MultiAgentConflict[];
  citations: AgentCitation[];
  confidence: AgentConfidence;
  finalResponse: {
    answer: string;
    status: string;
  } | null;
  warnings: string[];
  errors: Array<{ code: string; message: string }>;
  auditMetadata: {
    multiAgentRunId: string;
    agentTaskIds: string[];
    mcpRequestIds: string[];
  };
}

export interface MultiAgentSamples {
  generatedAt: string;
  runtime: string;
  samples: Record<string, MultiAgentState>;
}
