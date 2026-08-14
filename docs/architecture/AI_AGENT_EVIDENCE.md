# AI Agent Evidence

## Evidence Contract
Each evidence record stores source metadata, traceability IDs, score, scope, and sensitivity.

## Collection
Evidence is derived from MCP tool outputs only. The agent does not invent Jira stories, Confluence pages, test cases, or RAG citations.

## Validation Status
- `VALID`
- `PARTIAL`
- `CONFLICTING`
- `INSUFFICIENT`
- `UNAUTHORIZED`

## No Evidence Behavior
`NO_EVIDENCE` response is returned with empty citations and low confidence.
