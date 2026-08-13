# Project Management Foundation

## Objective
Define a repository-local, enterprise-style project management and delivery foundation for CareFlow Health without installing Jira, Confluence, or Jenkins.

## Step 1.10 Scope
- Documentation and configuration contracts only.
- No runtime implementation of Jira-like, Confluence-like, or Jenkins-like tools.
- No backend, API, database, or real healthcare integrations.

## Implemented in This Step
- Jira-like project model and governance contracts.
- Jira-like dashboard and KPI specification.
- Confluence-like information architecture and governance contracts.
- Jenkins-like CI/CD architecture contract and stage classification.
- AI quality gates and AI defect management contract.
- AI delivery model linking requirement to evaluation and remediation.
- Repository-local configuration seed under `config/project-management/`.

## Not Implemented in This Step
- Live Jira/Confluence/Jenkins installation or integration.
- Playwright/Cucumber runtime execution.
- RAG/MCP/LangGraph/agent runtime pipelines.

## Project Metadata
- Project Name: CareFlow Health
- Project Key: CFH
- Project Type: Software / QA / AI Engineering
- Sprint Cadence: 2 weeks
- Delivery Approach: traceability-first and evidence-driven

## Primary Contract References
- `docs/qa/JIRA_PROJECT_MODEL.md`
- `docs/qa/JIRA_DASHBOARD_SPECIFICATION.md`
- `docs/qa/JIRA_WORKFLOW_AND_GOVERNANCE.md`
- `docs/qa/CONFLUENCE_INFORMATION_ARCHITECTURE.md`
- `docs/qa/CONFLUENCE_GOVERNANCE.md`
- `docs/qa/JENKINS_PIPELINE_ARCHITECTURE.md`
- `docs/qa/AI_QUALITY_GATES.md`
- `docs/qa/AI_DEFECT_MANAGEMENT.md`
- `docs/qa/AI_PROJECT_DELIVERY_MODEL.md`
