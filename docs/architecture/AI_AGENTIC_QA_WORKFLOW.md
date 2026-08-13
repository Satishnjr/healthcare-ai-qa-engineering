# AI Agentic QA Workflow

## End-to-End Future Workflow
Requirement
-> RAG Retrieval
-> Requirement Analysis Agent
-> Test Scenario Agent
-> Test Case Agent
-> Test Data Agent
-> Automation Agent
-> Playwright Execution
-> Execution Observation
-> Failure Analysis Agent
-> Defect Agent
-> Regression Selection Agent
-> Test Reporting Agent
-> Human Review
-> Final QA Decision

## Control-Type Mapping
| Stage | Control Type |
|---|---|
| Requirement, canonical IDs, approval checkpoints | Human-controlled |
| Deterministic smoke execution | Deterministic |
| Candidate generation and prioritization | AI-assisted |
| Multi-step orchestration and failure reasoning | Agentic |

## Example Execution
1. Input `TC-TS-003-008-01` arrives with strategy `AI_ASSISTED_AUTOMATION`.
2. RAG retrieves related US/AC/TS/test-data docs.
3. Automation Agent proposes bounded parameter set.
4. Test Execution Agent runs approved deterministic script.
5. Failure Analysis Agent groups failure with historical signals.
6. Defect Agent drafts issue with evidence references.
7. Human reviewer approves defect severity and final action.

## Step 1.15 Boundary
This workflow is architecture-only in Step 1.15. No runtime multi-agent system is implemented here.