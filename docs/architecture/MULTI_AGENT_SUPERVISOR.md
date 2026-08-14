# Multi-Agent Supervisor

## Responsibilities
- request understanding
- deterministic task decomposition
- specialist agent selection
- task dispatch (sequential)
- result aggregation
- review trigger
- final consolidation and confidence publication

## Selection Strategy
Deterministic keyword-to-agent mapping:
- Jira/AC/defect/story -> QA Analyst
- RAG/quality/knowledge -> RAG Knowledge Agent
- test case/scenario/regression/coverage -> Test Analyst

## Output
Supervisor produces:
- plan ID
- selected agents
- rationale
- consolidated response
- audit metadata

