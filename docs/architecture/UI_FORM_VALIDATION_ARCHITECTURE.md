# UI Form and Validation Architecture

## Principles
- Deterministic, clear, accessible validation behavior.
- Reuse shared validation utilities across forms.

## Validation Types
- Required-field validation.
- Format validation (email, phone, identifiers, date).
- Boundary validation (length/range/date bounds).
- Cross-field validation (date ranges, dependent fields, conflict simulation).

## Edge-Case Handling
- Duplicate input checks (simulated data context).
- Special character and Unicode handling by field policy.
- Long-value constraints with explicit messaging.
- Date/time consistency and invalid value handling.

## Validation Timing
- Blur-level field checks.
- Submit-level full-form checks.
- Immediate validation for constrained fields where needed.

## Error Messaging
- Stable, deterministic error message catalog.
- Inline field messages + optional summary for complex forms.
- Actionable phrasing (what to fix).

## Accessibility
- `aria-invalid` and `aria-describedby` for invalid controls.
- Focus to first invalid field after submit.
- Error summaries announced via accessible regions.

## QA Alignment
Validation contract is aligned with existing negative/boundary/error/a11y test case groups.

