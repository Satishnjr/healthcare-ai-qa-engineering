# UI Component Architecture

## Strategy
Use composable, reusable, testable components with strict separation between shared primitives and domain feature composition.

## Component Categories
- Shared primitives: button, input, select, checkbox, radio, date input.
- Shared composites: table, pagination, badge, alert, toast, empty/error/skeleton.
- Layout: app shell, auth layout, page container, section header.
- Navigation: sidebar menu, topbar, breadcrumb, quick-action panel.
- Forms: field wrapper, validation message, grouped inputs, submit actions.
- Domain components: patient summary card, appointment status badge, provider schedule panel, billing/insurance cards.

## Reuse Rules
- Extend shared components before creating feature-specific variants.
- Domain components compose shared primitives, not duplicate them.
- Keep business behavior in feature/page layer; keep generic rendering in components.

## Proposed Folder Structure

```text
frontend/
  src/
    app/
    components/
    layouts/
    pages/
    routes/
    features/
    hooks/
    services/
    state/
    types/
    utils/
    data/
    constants/
    styles/
    test-utils/
```

## Testability Expectations
- Components expose stable semantics and optional `data-testid`.
- Interactive states (loading/disabled/error) are explicit and deterministic.
- Accessibility requirements are part of component contracts.

