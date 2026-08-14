# LangGraph Edges

## Base Flow
`START -> task_understanding -> planning -> tool_selection -> tool_execution -> evidence_collection -> evidence_validation -> reasoning -> response_generation -> confidence_evaluation -> approval_check -> finalization -> audit -> END`

## Conditional Flow
- evidence insufficient -> tool re-selection (bounded)
- tool failures -> re-selection (bounded)
- approval required -> `WAITING_FOR_APPROVAL`
- max step/tool/timeout failures -> safe finalization and audit
