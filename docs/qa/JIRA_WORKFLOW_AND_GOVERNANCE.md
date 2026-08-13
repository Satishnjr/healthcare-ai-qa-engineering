# Jira Workflow and Governance

## Workflow States
- BACKLOG
- READY
- IN PROGRESS
- CODE REVIEW
- READY FOR QA
- QA IN PROGRESS
- BLOCKED
- FAILED
- RETEST
- DONE
- CLOSED

## Valid Transitions
- BACKLOG -> READY
- READY -> IN PROGRESS
- IN PROGRESS -> CODE REVIEW
- CODE REVIEW -> READY FOR QA
- READY FOR QA -> QA IN PROGRESS
- QA IN PROGRESS -> DONE
- QA IN PROGRESS -> FAILED
- FAILED -> RETEST
- RETEST -> DONE
- RETEST -> FAILED
- DONE -> CLOSED

## Exceptional Transition Rule
- BLOCKED can be entered from any active state and can return to the previous active state after blocker resolution.

## Governance Rules
- Every Story references `US-*` and linked acceptance criteria.
- Every Test/Test Execution references `TS-*`, `TC-*`, and `TD-*` as applicable.
- Every Bug includes reproducible steps and traceability links.
- Every AI Defect includes dataset/run/version evidence.
- Every P0/P1 item includes owner, ETA, and daily update notes.

## Definition of Ready
- Scope, owner, priority, component, dependencies, and acceptance criteria are clear.
- Upstream/downstream traceability links are present.

## Definition of Done
- Required reviews and QA checks complete.
- Traceability chain is intact.
- Evidence links are attached.
- Item is moved to DONE or CLOSED per release governance.
