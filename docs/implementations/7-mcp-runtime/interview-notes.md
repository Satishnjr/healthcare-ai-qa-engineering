# Step 7 Interview Notes

## What did you build in Step 7?
I implemented a deterministic local MCP runtime that turns existing Jira/Confluence/traceability/RAG capabilities into governed MCP tools, with a real server, client harness, schema validation, authorization, and audit logging.

## Is this a real MCP runtime or documentation-only?
It is runtime implementation. The server runs locally over stdio, exposes tool discovery and tool calling, and is validated by runtime tests and a client/server harness test.

## Which tools were implemented?
- search_jira
- get_jira_issue
- search_confluence
- get_confluence_page
- get_traceability
- search_test_cases
- get_rag_context
- query_rag
- get_rag_evaluation
- get_qa_knowledge

## How did you avoid duplicating earlier steps?
I reused existing Step 4 repositories/adapters/services, Step 5 RAG runtime boundary, and Step 6 evaluation artifacts. Step 7 wraps those boundaries through MCP contracts.

## How is authorization handled?
Tools enforce role-scope authorization before execution:
- Patient: public
- Doctor/Nurse/Receptionist: public + team
- Healthcare Administrator: public + team + admin
Unauthorized calls return structured `ACCESS_DENIED`.

## How is observability/audit handled?
Each tool call writes structured NDJSON telemetry including requestId, role, tool, status, duration, source systems, and returned count.

## How does frontend show MCP if transport is stdio?
Frontend uses deterministic generated MCP artifacts for browser-safe demo (`/mcp`). Runtime server/client validation remains in Node tests and harness.

## Did you implement AI agents in Step 7?
No. Step 7 intentionally stops at MCP runtime and tool-calling foundation. Agent runtime remains Step 8.
