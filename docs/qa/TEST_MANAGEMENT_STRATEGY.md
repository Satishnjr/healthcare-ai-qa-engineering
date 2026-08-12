# Test Management Strategy

## Objective
Define enterprise-style test planning, suite management, execution lifecycle, and defect workflow for CareFlow Health.

## Suite Strategy
- Smoke Suite: critical P0/P1 workflows.
- Sanity Suite: targeted post-change confidence checks.
- Functional Suite: feature-complete behavior checks.
- Negative Suite: invalid/error behavior validation.
- Accessibility Suite: keyboard/label/focus checks.
- Responsive Suite: viewport behavior checks.
- Cross-browser Suite: Chromium/Firefox/WebKit parity checks.
- Role-based Suite: persona visibility/action constraints.
- Regression Suite: broad risk-controlled recurring validation.

## Execution Lifecycle
Not Run -> In Progress -> Passed / Failed / Blocked -> Retest -> Closed

## Defect Lifecycle
New -> Triaged -> Assigned -> In Progress -> Fixed -> Ready for QA -> Retest -> Closed
Reopened flow: Closed/Retest -> Reopened -> Assigned.

## Entry/Exit Criteria
- Entry: approved artifacts + stable test data IDs.
- Exit: execution evidence captured; failures triaged; critical defects resolved or accepted by risk decision.

## Metrics
- Execution pass rate
- Defect leakage trend
- Defect severity distribution
- Smoke stability trend
- Regression duration and flake rate
- Requirement coverage ratio
