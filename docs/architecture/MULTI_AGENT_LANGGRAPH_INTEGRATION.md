# Multi-Agent + LangGraph Integration

## Principle
Step 10 does not introduce a second workflow engine.
It reuses Step 9 graph execution and checkpointing infrastructure.

## Step 10 Graph Flow
`START -> supervisor_understanding -> supervisor_planning -> agent_selection -> qa_agent -> rag_agent -> test_agent -> review_agent -> conflict_check -> confidence -> approval_check -> finalization -> audit -> END`

## Conditional Routes
- skip specialist node if not selected
- bounded retry route when review status is insufficient/conflicting
- approval-required route to waiting state
- safe terminal route on execution failures/limits

## Resume and Approval
Checkpoint/resume/approve/reject operations are reused through Step 9 checkpoint paths and runtime mechanics.

