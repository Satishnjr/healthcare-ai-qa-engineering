# AI Agent Tool Selection

## Objective
Select minimum MCP tools required per task category.

## Current Mapping
- `JIRA_LOOKUP`: `search_jira`, `get_jira_issue`
- `CONFLUENCE_LOOKUP`: `search_confluence`, `get_confluence_page`
- `TRACEABILITY_LOOKUP`: `search_jira`, `get_traceability`, `search_confluence`
- `RAG_QUERY`: `query_rag`
- `RAG_EVALUATION_ANALYSIS`: `get_rag_evaluation`, `query_rag`
- `TEST_CASE_ANALYSIS`: `search_test_cases`
- `AUTOMATION_RECOMMENDATION`: `search_test_cases`, `get_qa_knowledge`, `get_rag_context`
- `GENERAL_QA_KNOWLEDGE`: `get_qa_knowledge`

## Guarded Execution
Tool calling always routes through Step 7 MCP runtime authorization.
