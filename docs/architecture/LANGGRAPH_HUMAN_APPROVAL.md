# LangGraph Human Approval

## Reuse Strategy
Step 9 reuses Step 8 approval policy manager; no duplicate approval subsystem is created.

## Waiting State
Approval-required tasks transition to `WAITING_FOR_APPROVAL` with persisted state.

## Resume Paths
- approve -> resume to finalization/audit
- reject -> safe partial/finalized response with no destructive execution
