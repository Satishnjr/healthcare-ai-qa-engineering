# AI Agent Handoff Contract

## Purpose
Define canonical input/output contracts for future QA agents without implementing runtime APIs in Step 1.15.

## Handoff Input Contract (Schema)
```json
{
  "task_id": "string",
  "test_case_id": "TC-TS-000-000-00",
  "scenario_id": "TS-000-000",
  "user_story_id": "US-000-000",
  "acceptance_criteria_id": "AC-...",
  "test_data_id": "TD-...",
  "priority": "P0|P1|P2",
  "test_type": "Functional|Negative|Validation|...",
  "automation_strategy": "DETERMINISTIC_AUTOMATION|AI_ASSISTED_AUTOMATION|AI_AGENT_CANDIDATE|MANUAL|BACKEND_DEPENDENCY|UI_GAP|FUTURE",
  "target_environment": "local|qa|staging",
  "required_tools": ["playwright", "cucumber", "mcp:get_test_case"],
  "constraints": ["synthetic-data-only", "no-destructive-actions"],
  "human_approval_required": false
}
```

## Agent Pipeline Contract
1. Agent Input: validate schema and IDs.
2. Agent Planning: generate deterministic plan with constraints.
3. Agent Tool Selection: choose only permitted tools.
4. Agent Execution: run allowed steps.
5. Agent Observation: collect evidence and metadata.
6. Agent Result: structured status output.
7. Agent Recommendation: explicit next action.
8. Human Approval: required where policy indicates.
9. Final Status: PASS/FAIL/BLOCKED/NEEDS_HUMAN_REVIEW.

## Output Contract
```json
{
  "task_id": "string",
  "status": "PASS|FAIL|BLOCKED|NEEDS_HUMAN_REVIEW",
  "test_case_id": "TC-TS-000-000-00",
  "execution": {
    "started_at": "ISO-8601",
    "completed_at": "ISO-8601",
    "duration_ms": 0
  },
  "observations": ["string"],
  "evidence": [
    {
      "type": "screenshot|trace|video|log|report",
      "path": "string"
    }
  ],
  "failures": [
    {
      "step": "string",
      "message": "string"
    }
  ],
  "root_cause_hypothesis": "string",
  "recommended_action": "string",
  "confidence": 0.0,
  "human_review_required": false
}
```

## Non-Negotiable Rules
- No fabricated execution results.
- No fabricated evidence paths.
- No claimed run without real execution metadata.
- Confidence is advisory, not proof.
- Healthcare-sensitive conclusions always require human review.

## Governance Checks
- ID validation against traceability artifacts.
- Tool permission validation before execution.
- Policy compliance checks before final status emission.