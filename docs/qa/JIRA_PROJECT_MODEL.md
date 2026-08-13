# Jira Project Model

## Project
- Name: CareFlow Health
- Key: `CFH`
- Type: Software / QA / AI Engineering

## Issue Types
- Epic
- Story
- Task
- Sub-task
- Bug
- Test
- Test Execution
- Improvement
- AI Evaluation
- AI Defect
- AI Experiment

## Issue Hierarchy
- Epic -> Story -> Task/Sub-task
- Story -> Acceptance Criteria -> Test Scenario -> Test Case -> Test Data -> Test Execution -> Defect
- Requirement -> AI Use Case -> AI Component -> Evaluation Dataset -> Evaluation Run -> AI Defect -> Remediation

## Priorities
- P0 - Critical
- P1 - High
- P2 - Medium
- P3 - Low

## Components
- Frontend
- UX
- Accessibility
- Playwright
- Cucumber
- Test Data
- Test Management
- RAG
- RAG Evaluation
- AI Observability
- MCP
- Agent
- Multi-Agent
- AI Security
- AI Guardrails
- Jenkins
- Reporting
- Documentation

## Labels
`frontend`, `healthcare`, `qa`, `automation`, `playwright`, `cucumber`, `bdd`, `regression`, `smoke`, `accessibility`, `responsive`, `rag`, `ragas`, `observability`, `mcp`, `agent`, `agentic-ai`, `multi-agent`, `langgraph`, `ai-security`, `guardrails`, `llmops`, `jenkins`, `release`, `defect`

## Stable ID Policy
- Preserve existing approved IDs: `BR-*`, `FR-*`, `EPIC-*`, `US-*`, `AC-*`, `TS-*`, `TC-*`, `TD-*`.
- Use `CFH-` prefixed operational IDs for new management artifacts when needed.
- Never renumber or overwrite prior requirement and traceability IDs.

## Sprint Model
- Duration: 2 weeks
- Naming: `CFH Sprint <number>`
- Planning: backlog refinement and commitment before sprint start
- Daily Tracking: blocker-first update and ownership check
- Review: story demonstration and QA evidence review
- Retrospective: action items tracked as Improvement issues
- Carry-over: explicit re-estimation and recommit, no silent rollover

## Release Model
- `CFH Release 1.0`
- `CFH Release 1.1`
- `CFH AI-QA Release 1.0`

Each release includes:
- Objective
- Scope
- Entry criteria
- Exit criteria
- QA sign-off
- Automation status
- AI evaluation status
- Known defects
- Release notes
