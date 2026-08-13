# Automation Governance

## Objective
Define how CareFlow QA uses deterministic automation, AI-assisted automation, agentic automation, and human approval without mixing responsibilities.

## Core Principles
- Preserve synthetic-data-only policy.
- Do not automate for coverage vanity; automate for reliability and risk reduction.
- Deterministic suite must stay small, stable, and continuously runnable.
- AI/agent workflows must emit structured evidence, never fabricated outcomes.
- High-risk healthcare workflows require human review before final action.

## Governance Scope
- Deterministic Playwright+Cucumber baseline (Step 1.13/1.14 subset).
- Classification-first strategy for all remaining test cases.
- AI-agent handoff contracts and observability contracts for future runtime.

## Decision Matrix
| Test Type | Preferred Approach | Reason |
|---|---|---|
| Stable login/navigation smoke | Deterministic Playwright | Repeatable and low ambiguity |
| Stable module workflow with bounded data | Deterministic or AI-assisted | Deterministic assertions + parameter expansion |
| Dynamic scenario generation variants | AI-assisted / AI agent | Large variation space |
| Cross-artifact failure triage | AI agent candidate | Requires multi-source reasoning |
| Test data permutation generation | AI agent candidate | High combinatorial volume |
| Production-impacting execution | Human approval required | Safety and governance |
| Healthcare-sensitive decision support | Human-in-the-loop | High-risk domain |

## Automation Strategy Boundaries
### Deterministic Automation
- Required for core smoke/regression subset (target 15-25 scenarios).
- Must use stable locators (`data-testid`, semantic role/label locators).
- Must run with deterministic synthetic test data.

### AI-Assisted Automation
- Used to accelerate scenario parameterization and candidate expansion.
- Output must still be executed via deterministic test runner.
- Human approval required for high-risk/P0 or ambiguous generated steps.

### Agentic Automation (Future)
- Multi-step planning, retrieval, tool calling, and evidence synthesis.
- Must follow handoff/input/output contracts.
- Must not perform unsafe/destructive actions without explicit human approval.

### Manual Coverage
- Reserved for UX nuance, visual judgment, ambiguous requirements, and blocked UI flows.
- Manual outcomes must be documented with evidence references.

## When NOT to Automate
- UI path not implemented (UI gap).
- Backend/API dependency not available.
- Requirement ambiguity unresolved.
- High flakiness with no deterministic control.
- Risk of unsafe action without approval gate.

## Stability Requirements
- Deterministic suite pass rate target: configurable, monitored per commit.
- Flaky tests are quarantined with issue tracking; no silent retries to hide instability.
- Retry policy: `0` by default for deterministic suite; retries only with explicit rationale.

## Locator and Data Standards
- Prefer `data-testid` first, then role/label locators.
- Avoid brittle selectors (deep CSS chains, generated class names, xpath unless justified).
- Synthetic deterministic data only; no PHI, no production credentials.

## Environment and Execution Standards
- Browser matrix: Chromium primary; Firefox/WebKit when binaries available.
- Full regression is intentionally deferred in governance-first steps.
- Minimal targeted validations are preferred for documentation/governance-only changes.

## Failure Evidence Requirements
- Screenshot, trace, video path (when available).
- Scenario metadata: test case ID, scenario ID, role, browser, environment, timestamp.
- Structured summary output for AI-ready post-analysis.

## Traceability Requirements
`BRD -> PRD -> Epic -> User Story -> Acceptance Criteria -> Test Scenario -> Test Case -> Test Data -> BDD -> Step Definition -> POM -> Execution Result -> Failure Artifact -> AI Agent Handoff`

## Tagging Strategy
- Keep deterministic tags: `@smoke`, `@regression`, `@functional`, `@validation`, `@accessibility`, `@responsive`, `@role`.
- Keep traceability tags: `@tc-*`, `@ts-*`, `@ac-*`.
- Future agent tags must include strategy and approval hints.

## Ownership Model
- QA Automation Engineer owns deterministic suite integrity.
- AI Engineering tracks handoff contracts, observability schema, and evaluation readiness.
- Product/QA lead approves policy changes to automation strategy.

## Human Approval Rules
Mandatory approval for:
- Security-sensitive actions.
- Destructive operations.
- Healthcare-sensitive interpretations.
- Low-confidence or conflicting evidence outcomes.
- Production-impacting execution decisions.