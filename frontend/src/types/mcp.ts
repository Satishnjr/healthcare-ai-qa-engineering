export interface McpToolSchemaEntry {
  type: string;
  optional?: boolean;
  enum?: string[];
}

export interface McpToolDefinition {
  name: string;
  description: string;
  inputSchema: Record<string, McpToolSchemaEntry>;
  outputSchema: {
    type: string;
    required: string[];
  };
}

export interface McpToolCatalog {
  generatedAt: string;
  runtime: string;
  tools: McpToolDefinition[];
}

export interface McpToolCallEnvelope {
  requestId: string;
  status: string;
  tool: string;
  role?: string;
  authorization?: {
    allowed: boolean;
    requiredScope: string;
  };
  result?: unknown;
  audit?: unknown;
  error?: {
    code?: string;
    message?: string;
    tool?: string;
    requestId?: string;
  };
}

export interface McpSampleResults {
  generatedAt: string;
  sampleCalls: Record<string, McpToolCallEnvelope>;
}
