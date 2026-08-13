# Knowledge Export Contract

## Purpose
Define deterministic export format from Confluence knowledge artifacts to future RAG ingestion.

## Export Shape
```json
{
  "documentId": "CFH-PAGE-001",
  "sourceSystem": "confluence",
  "sourceId": "CFH-US-005",
  "title": "Patient Search - Medical Record Number",
  "content": "...",
  "contentType": "markdown",
  "labels": ["requirement", "patient-search", "qa"],
  "traceabilityIds": ["US-003-003", "TS-003-007", "TC-TS-003-007-01"],
  "jiraKeys": ["CFH-US-005"],
  "version": 1,
  "timestamp": "2026-08-13T10:30:00Z",
  "accessScope": "team",
  "sensitivity": "internal",
  "checksum": "sha256:..."
}
```

## Step 4 Implementation
- Implemented deterministic exporter in `mcp/jira-confluence-foundation/src/services/knowledge-export-service.js`.
- Export supports single document and label-based batch retrieval.

## Not Implemented
- Embeddings generation.
- Vector database ingestion.
- LLM querying.
- RAG runtime retrieval.
