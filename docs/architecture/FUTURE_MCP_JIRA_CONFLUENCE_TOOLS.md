# Future MCP Jira Confluence Tools

## Step 4 Purpose
Document MCP-ready tool boundary for future implementation without implementing MCP runtime.

## Planned Tools

| Tool | Purpose | Inputs | Outputs | Auth | Validation | Audit | Error Handling |
|---|---|---|---|---|---|---|---|
| `search_jira` | Search Jira issues | query, filters | issue list | `read:jira` | filter and query checks | op + correlationId | INVALID_INPUT, UNAUTHORIZED, SOURCE_UNAVAILABLE |
| `get_jira_issue` | Fetch canonical Jira issue | issueKey | issue object | `read:jira` | issueKey format | traceability-linked log | NOT_FOUND, UNAUTHORIZED |
| `search_confluence` | Search pages | title/label/traceability | page list | `read:confluence` | selector checks | op + correlationId | INVALID_INPUT, UNAUTHORIZED |
| `get_confluence_page` | Fetch one page | documentId | page object | `read:confluence` | document format | source-linked log | NOT_FOUND, UNAUTHORIZED |
| `search_test_cases` | map requirements to tests | jiraKey/scenario/ac | testCaseIds | `read:qa` | at least one selector | mapping audit | INVALID_INPUT, NOT_FOUND |
| `get_traceability` | reverse lookup across chain | traceabilityId | linked entities | `read:qa` | required id | traceability audit | INVALID_INPUT, NOT_FOUND |

## Security and Governance
- Least-privilege authorization by tool.
- Sensitive actions require explicit approval gates.
- Every tool operation must emit audit metadata with correlation ID.
- No direct free-form execution.
