# Step 1.9 Interview Notes

## How do you design synthetic healthcare test data?
Use domain-realistic entities with strictly synthetic values, stable IDs, and category-driven datasets (positive, negative, boundary, role, state).

## How do you prevent PHI leakage?
Hard rules: never use real patient/provider/insurance data; never ingest production extracts; enforce synthetic-only review checks.

## How do you manage test data in frontend-only applications?
Use versioned fixture catalogs, deterministic seed files, and scenario-driven local dataset selection without backend dependence.

## How do you make test data deterministic?
Stable dataset IDs, fixed ordering keys, static snapshots, and seeded pseudo-random generation for reproducible variants.

## How do you manage regression suites?
Maintain baseline datasets and map suites by risk, priority, and tags with explicit smoke/regression partitions.

## How would Jira integrate with this framework?
Track `US/AC/TS/TC/TD` references in issue metadata, execution states, defect workflows, and dashboard metrics.

## How would Confluence integrate with this project?
Provide structured knowledge spaces mapped to repository artifacts and traceability IDs for searchable operational documentation.

## How would Jenkins execute the QA pipeline?
Pipeline stages orchestrate build/start/test/report/archive with future AI-analysis handoff and evidence publishing.

## How would RAG use test-management documents?
RAG indexes strategy, traceability, and catalog docs to answer requirement-test-data and execution-coverage questions.

## How would MCP expose QA tools?
Future MCP tools query requirements, test cases, test data, and execution summaries through stable contracts.

## How would multiple AI agents use test data?
Agents consume `TD-*` mappings for generation, prioritization, selection, and failure analysis workflows with explainable decisions.
