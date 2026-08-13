# UI Testability Architecture

## Objective
Enable stable future Playwright + TypeScript + Cucumber automation through deterministic UI contracts.

## Locator Strategy
1. Accessible semantic selectors (`getByRole`, `getByLabel`).
2. Stable `data-testid` only where needed.
3. Avoid brittle CSS and XPath selectors.

## data-testid Convention
Pattern:
`<module>-<entity>-<element>-<type>`

Examples:
- `patient-search-input`
- `patient-search-submit-button`
- `patient-result-row`

Rules:
- lowercase kebab-case.
- one stable functional purpose per hook.
- no random or generated test IDs.

## Deterministic Contracts
- Deterministic mock data IDs and sort order.
- Predictable URLs and query parameter behavior.
- Predictable loading/error/empty messages.

## Test Boundaries
- Page root hooks for each route.
- Section hooks for complex modules.
- Page object boundaries by route family.
- Fixture boundaries for role/data scenarios.

## Execution Hygiene
- Browser/session isolation per scenario.
- Reset synthetic state and role context between tests.
- Cleanup transient UI state in hooks.

## Cucumber and AI Relevance
- Clear page object APIs keep step definitions readable.
- Stable UI contracts improve downstream AI failure analysis and defect triage.

