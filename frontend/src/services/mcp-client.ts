import type {
  McpSampleResults,
  McpToolCallEnvelope,
  McpToolCatalog,
} from "../types/mcp";

let catalogCache: McpToolCatalog | null = null;
let sampleCache: McpSampleResults | null = null;

async function fetchJson<T>(path: string): Promise<T> {
  const response = await fetch(path, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
  if (!response.ok) {
    throw new Error(`Unable to load ${path}: ${response.status}`);
  }
  return (await response.json()) as T;
}

export async function loadMcpToolCatalog(): Promise<McpToolCatalog> {
  if (catalogCache) {
    return catalogCache;
  }
  catalogCache = await fetchJson<McpToolCatalog>("/mcp/tool-catalog.json");
  return catalogCache;
}

export async function loadMcpSampleResults(): Promise<McpSampleResults> {
  if (sampleCache) {
    return sampleCache;
  }
  sampleCache = await fetchJson<McpSampleResults>("/mcp/sample-results.json");
  return sampleCache;
}

function mapToolToSampleKey(toolName: string, role: string) {
  if (toolName === "search_jira" && role === "Patient") {
    return "unauthorized_jira_patient";
  }
  if (toolName === "search_jira") {
    return "search_jira";
  }
  if (toolName === "get_traceability") {
    return "get_traceability";
  }
  if (toolName === "query_rag") {
    return "query_rag";
  }
  if (toolName === "get_rag_evaluation") {
    return "get_rag_evaluation";
  }
  return "search_jira";
}

export async function invokeMcpToolDemo(
  toolName: string,
  role = "Doctor"
): Promise<McpToolCallEnvelope> {
  const samples = await loadMcpSampleResults();
  const sampleKey = mapToolToSampleKey(toolName, role);
  const envelope = samples.sampleCalls[sampleKey];
  if (!envelope) {
    throw new Error(`No MCP sample result mapped for ${toolName}`);
  }
  return {
    ...envelope,
    tool: toolName,
  };
}
