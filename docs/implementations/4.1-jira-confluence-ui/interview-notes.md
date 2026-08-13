# Step 4.1 Interview Notes

## How did you integrate Jira and Confluence into your AI QA platform?
I integrated Jira and Confluence as a realistic UI simulation layer inside the existing CareFlow frontend. Jira pages expose issue/test-case/defect/board workflows, and Confluence pages expose governed knowledge and metadata. I linked Jira issue detail to Confluence page detail bidirectionally and preserved traceability IDs across both views.

## Did you use real Jira and Confluence?
No. Step 4.1 is intentionally local/mock simulation only. No live Atlassian API calls, no real authentication, and no production credentials were used.

## How does Jira data become RAG knowledge?
In this step, Jira issue context is linked to Confluence knowledge pages with metadata fields (`documentId`, `sourceSystem`, `sourceId`, `traceabilityIds`, `labels`, `version`, `timestamp`, `accessScope`, `sensitivity`, `checksum`). The UI then exposes RAG-ready document status in the knowledge explorer. Runtime ingestion/retrieval is planned in Step 5.

## How do you maintain traceability?
I kept an explicit chain view and linked IDs across entities: User Story -> Jira Issue -> Confluence Page -> Test Scenario -> Test Case -> Test Data -> BDD -> Automation -> Execution -> Defect -> RAG Knowledge -> Future MCP Tool -> Future AI Agent.

## How would an AI agent use Jira?
A future agent would consume traceability-linked Jira context and evidence metadata to propose actions such as impact analysis, regression scope suggestions, and failure triage. In Step 4.1, this is boundary-only and not runtime-enabled.

## How would an MCP server expose Jira tools?
MCP tools would map to controlled operations such as search/get issue, link knowledge, and fetch traceability context. Step 4/4.1 define the UI and contract boundaries where these tools will attach; actual MCP runtime is planned in Step 7.

## How would you prevent an agent from modifying Jira without approval?
By enforcing human-in-the-loop controls and policy gates:
- read-only default for agent actions,
- explicit approval workflow for state-changing operations,
- audit trail for every action and rationale,
- no-fabrication and evidence-backed constraints,
- scoped role authorization checks.

## One-Line Summary
Step 4.1 delivered a production-like Jira+Confluence QA simulation UI with traceability and AI-ready governance boundaries, without claiming live Atlassian or runtime AI capabilities.
