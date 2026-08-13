# AI Observability Contract

## Purpose
Define mandatory telemetry fields for future AI-assisted and agentic QA execution.

## Required Fields
- `agent_execution_id`
- `task_id`
- `trace_id`
- `model`
- `model_version`
- `prompt_version`
- `retrieved_documents`
- `retrieved_chunk_ids`
- `tool_calls`
- `tool_latency_ms`
- `execution_latency_ms`
- `token_usage`
- `failure_events`
- `retry_count`
- `final_decision`
- `confidence`
- `human_approval_required`
- `human_approval_actor`
- `human_approval_timestamp`

## Reference Schema
```json
{
  "agent_execution_id": "string",
  "task_id": "string",
  "trace_id": "string",
  "model": "string",
  "model_version": "string",
  "prompt_version": "string",
  "retrieved_documents": ["doc-id"],
  "retrieved_chunk_ids": ["chunk-id"],
  "tool_calls": [{"name": "string", "status": "success|fail", "latency_ms": 0}],
  "execution_latency_ms": 0,
  "token_usage": {"input": 0, "output": 0},
  "failure_events": [{"type": "string", "message": "string"}],
  "retry_count": 0,
  "final_decision": "PASS|FAIL|BLOCKED|NEEDS_HUMAN_REVIEW",
  "confidence": 0.0,
  "human_approval_required": false,
  "human_approval_actor": "string|null",
  "human_approval_timestamp": "ISO-8601|null"
}
```

## Governance Rules
- Traceability IDs must be present for all execution events.
- Observability data must never include PHI/secrets.
- Missing critical telemetry marks execution as non-compliant.

## Step 1.15 Boundary
Contract-only. No observability backend is implemented in this step.