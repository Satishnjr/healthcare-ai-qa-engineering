# MCP Tool Catalog (Step 7)

## Implemented Tools
1. `search_jira`
2. `get_jira_issue`
3. `search_confluence`
4. `get_confluence_page`
5. `get_traceability`
6. `search_test_cases`
7. `get_rag_context`
8. `query_rag`
9. `get_rag_evaluation`
10. `get_qa_knowledge`

## Tool Discovery
- Server exposes all tools through `tools/list`.
- Client harness validates tool count and required names.

## Input Validation
- All tools use schema validation from `src/schemas/tool-schemas.js`.
- Invalid payloads return `INVALID_INPUT`.

## Output Structure
- Tool outputs include source metadata and deterministic evidence fields.
- No fabricated data is returned for missing entities or no-evidence cases.

## Resources
Read-only resources are exposed for:
- QA knowledge summary
- Jira issues
- Confluence pages
- Traceability snapshot
- Latest RAG evaluation
