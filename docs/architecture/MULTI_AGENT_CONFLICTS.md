# Multi-Agent Conflict Detection

## Goal
Detect and represent contradictions or coverage gaps instead of silently choosing one agent output.

## Conflict Model
Each conflict stores:
- `conflictId`
- `type`
- `agents`
- `description`
- `severity`
- `resolutionStatus` (`OPEN`, `RESOLVED`, `ESCALATED`)

## Step 10 Deterministic Rules
- missing citation for non-empty findings
- QA vs RAG mismatch for same topic
- acceptance criteria evidence vs missing test coverage recommendation

