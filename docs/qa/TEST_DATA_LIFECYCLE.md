# Test Data Lifecycle

## Lifecycle Stages
1. Design: define `TD-*` IDs and data intent.
2. Creation: build synthetic deterministic fixtures.
3. Validation: verify format, completeness, and non-PHI constraints.
4. Publication: store in versioned repository paths.
5. Selection: bind datasets to test cases/suites.
6. Execution: load data via fixtures/hooks.
7. Reset/Cleanup: restore deterministic baseline.
8. Review: periodic relevance and quality checks.
9. Deprecation: retire and replace dataset IDs with migration mapping.

## Ownership
- Primary owner: QA/Test Data Lead.
- Reviewers: QA Architect + Automation Lead.

## Deterministic Controls
- Fixed IDs
- Fixed ordering keys
- Versioned snapshots
- Seeded generation when randomization is used
