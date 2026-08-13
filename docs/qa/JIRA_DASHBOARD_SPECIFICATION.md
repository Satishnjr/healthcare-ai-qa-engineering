# Jira Dashboard Specification

## Purpose
Define product, QA, defect, automation, AI, and CI/CD dashboards for enterprise-style execution governance.

## Dashboard Status Key
- `IMPLEMENTED NOW`: metric definition and reporting contract exists in repository documentation/configuration.
- `PLANNED FUTURE`: runtime ingestion and live calculation will be implemented in future automation/AI/CI steps.

## Product Dashboard
| Metric | Status | Notes |
|---|---|---|
| Open Stories | IMPLEMENTED NOW | Defined in dashboard contract |
| Completed Stories | IMPLEMENTED NOW | Defined in dashboard contract |
| Sprint Progress | IMPLEMENTED NOW | Defined in dashboard contract |
| Release Progress | IMPLEMENTED NOW | Defined in dashboard contract |

## QA Dashboard
| Metric | Status | Notes |
|---|---|---|
| Total Test Cases | IMPLEMENTED NOW | Based on documented test case inventory |
| Executed / Passed / Failed / Blocked | IMPLEMENTED NOW | Contract defined for future execution records |
| Pass Percentage | IMPLEMENTED NOW | Formula and reporting requirement defined |
| Automation Coverage | PLANNED FUTURE | Needs automation runtime data |
| Regression Status | PLANNED FUTURE | Needs execution pipeline integration |
| Smoke Status | PLANNED FUTURE | Needs execution pipeline integration |

## Defect Dashboard
| Metric | Status | Notes |
|---|---|---|
| Open Defects | IMPLEMENTED NOW | Defect model and state definitions available |
| Critical Defects | IMPLEMENTED NOW | Priority model available |
| High Defects | IMPLEMENTED NOW | Priority model available |
| Reopened Defects | IMPLEMENTED NOW | Workflow supports reopen path |
| Defect Aging | PLANNED FUTURE | Requires timestamped issue runtime data |
| Defect Leakage | PLANNED FUTURE | Requires release-level production leakage data |

## Automation Dashboard
| Metric | Status | Notes |
|---|---|---|
| Total Automated Tests | PLANNED FUTURE | Runtime framework not implemented yet |
| Automation Pass Rate | PLANNED FUTURE | Runtime framework not implemented yet |
| Automation Failure Rate | PLANNED FUTURE | Runtime framework not implemented yet |
| Flaky Tests | PLANNED FUTURE | Runtime framework not implemented yet |
| Execution Duration | PLANNED FUTURE | Runtime pipeline not implemented yet |
| Browser-wise Results | PLANNED FUTURE | Cross-browser runtime not implemented yet |

## AI Dashboard
| Metric | Status | Notes |
|---|---|---|
| AI Use Cases | IMPLEMENTED NOW | Delivery model and taxonomy documented |
| RAG Evaluation Score | PLANNED FUTURE | Depends on evaluation pipeline |
| RAGAS Metrics | PLANNED FUTURE | Depends on RAGAS integration |
| Retrieval Quality / Faithfulness / Answer Relevancy | PLANNED FUTURE | Depends on RAG evaluation runtime |
| Context Precision / Context Recall | PLANNED FUTURE | Depends on RAG evaluation runtime |
| Agent Success / Tool Success / Agent Failure | PLANNED FUTURE | Depends on agent runtime telemetry |
| AI Defect Count | IMPLEMENTED NOW | AI defect model and issue type defined |
| Guardrail Violations | PLANNED FUTURE | Depends on guardrail runtime telemetry |
| Prompt Injection Attempts | PLANNED FUTURE | Depends on AI security runtime telemetry |
| Human Escalations | PLANNED FUTURE | Depends on HITL workflow runtime |
| AI Observability Alerts | PLANNED FUTURE | Depends on observability platform |

## CI/CD Dashboard
| Metric | Status | Notes |
|---|---|---|
| Build Success Rate | PLANNED FUTURE | Runtime pipeline not implemented yet |
| Failed Builds | PLANNED FUTURE | Runtime pipeline not implemented yet |
| Average Pipeline Duration | PLANNED FUTURE | Runtime pipeline not implemented yet |
| Latest Build | PLANNED FUTURE | Runtime pipeline not implemented yet |
| Latest Regression | PLANNED FUTURE | Runtime pipeline not implemented yet |
| Latest AI QA Evaluation | PLANNED FUTURE | Runtime pipeline not implemented yet |
