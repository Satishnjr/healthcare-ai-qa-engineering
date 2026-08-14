import type { AgentRuntimeResponse, AgentRuntimeSamples } from "../types/agent";

let sampleCache: AgentRuntimeSamples | null = null;

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

export async function loadAgentSamples(): Promise<AgentRuntimeSamples> {
  if (sampleCache) {
    return sampleCache;
  }
  sampleCache = await fetchJson<AgentRuntimeSamples>("/agent/runtime-samples.json");
  return sampleCache;
}

function normalize(value: string): string {
  return value.trim().toLowerCase();
}

function clone<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}

export async function runAgentTaskDemo({
  request,
  role,
}: {
  request: string;
  role: string;
}): Promise<AgentRuntimeResponse> {
  const samples = await loadAgentSamples();
  const normalizedRequest = normalize(request);
  const exact = samples.samples.find(
    (sample) => normalize(sample.request) === normalizedRequest && sample.role === role,
  );
  if (exact) {
    return clone(exact.response);
  }

  const byRole = samples.samples.find((sample) => sample.role === role);
  if (byRole) {
    const response = clone(byRole.response);
    response.taskId = `TASK-DEMO-${Date.now()}`;
    response.responseId = `RESP-DEMO-${Date.now()}`;
    response.answer = `No exact sample matched your request. Closest deterministic result:\n${response.answer}`;
    response.warnings = [...response.warnings, "SAMPLE_MATCH_FALLBACK"];
    return response;
  }

  const fallback = samples.samples[0];
  return clone(fallback.response);
}
