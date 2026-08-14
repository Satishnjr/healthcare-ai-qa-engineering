import type { AgentGraphSamples, AgentGraphState } from "../types/agent";

let graphCache: AgentGraphSamples | null = null;

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

function clone<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}

export async function loadGraphSamples(): Promise<AgentGraphSamples> {
  if (graphCache) {
    return graphCache;
  }
  graphCache = await fetchJson<AgentGraphSamples>("/agent/graph-samples.json");
  return graphCache;
}

function toSampleKey(request: string, role: string) {
  const normalized = request.toLowerCase();
  if (role === "Patient") {
    return "accessDenied";
  }
  if (normalized.includes("create jira issue")) {
    return "waiting";
  }
  if (normalized.includes("update confluence")) {
    return "rejected";
  }
  if (normalized.includes("lunar surgery") || normalized.includes("mars")) {
    return "noEvidence";
  }
  if (normalized.includes("approve")) {
    return "approved";
  }
  return "success";
}

export async function runGraphDemo({
  request,
  role,
}: {
  request: string;
  role: string;
}): Promise<AgentGraphState> {
  const samples = await loadGraphSamples();
  const key = toSampleKey(request, role);
  const sample = samples.samples[key] ?? samples.samples.success;
  return clone(sample);
}
