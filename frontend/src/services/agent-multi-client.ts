import type { MultiAgentSamples, MultiAgentState } from "../types/agent";

let cache: MultiAgentSamples | null = null;

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

export async function loadMultiAgentSamples(): Promise<MultiAgentSamples> {
  if (cache) {
    return cache;
  }
  cache = await fetchJson<MultiAgentSamples>("/agent/multi-agent-samples.json");
  return cache;
}

function toSampleKey(request: string, role: string) {
  const normalized = request.toLowerCase();
  if (role === "Patient") {
    return "unauthorized";
  }
  if (normalized.includes("quality") || normalized.includes("rag")) {
    return "ragQuality";
  }
  if (normalized.includes("conflict")) {
    return "conflict";
  }
  if (normalized.includes("create jira issue") || normalized.includes("update jira")) {
    return "approval";
  }
  return "success";
}

export async function runMultiAgentDemo({
  request,
  role,
}: {
  request: string;
  role: string;
}): Promise<MultiAgentState> {
  const samples = await loadMultiAgentSamples();
  const key = toSampleKey(request, role);
  const selected = samples.samples[key] ?? samples.samples.success;
  const cloned = clone(selected);
  cloned.originalRequest = request;
  cloned.role = role;
  return cloned;
}

