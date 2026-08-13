# Confluence Governance

## Ownership
- Product space: Product Owner / Business Analyst
- Requirements + QA spaces: QA Architect / Test Lead
- Automation + DevOps spaces: QA Automation Lead / DevOps Engineer
- AI space: AI QA Engineer / AI Architect

## Naming Convention
- `<Domain> - <Artifact Name>` (example: `QA - Test Data Strategy`).
- Preserve stable traceability IDs in page content.

## Versioning
- Major version for structural changes.
- Minor version for clarified content.
- Patch version for typo or formatting updates.

## Review Process
- Draft -> Review -> Approved -> Superseded/Archived
- Each review records reviewer, date, and action summary.

## Traceability Rules
- Requirements pages include links to QA artifacts.
- QA pages include upstream requirement IDs.
- AI pages include dataset, run, and quality-gate references.

## Search Metadata
- Mandatory tags: module, feature, component, priority, test-suite, AI-domain.
- Alias tags allowed for user-language search terms.

## Knowledge Lifecycle
- Create: new domain or artifact.
- Maintain: update on each implementation step.
- Deprecate: mark superseded and provide replacement.
- Archive: preserve for audit and interview history.
