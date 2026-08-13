# UI Design System

## Principles
- Enterprise healthcare SaaS visual language.
- Consistency, clarity, accessibility, and reuse.
- Token-driven styling and component contracts.

## Foundations

### Typography
- Font stack: "Segoe UI", "Inter", "Roboto", Arial, sans-serif.
- Scale: Display, H1, H2, H3, Body, Small, Caption.

### Spacing
- 4px base unit.
- Token scale: 4, 8, 12, 16, 24, 32, 40, 48.

### Layout and Grid
- Max widths: 1440 (wide), 1280 (standard).
- 12-column desktop, 8-column tablet, 4-column mobile.

### Color Direction
- Neutral + healthcare blue/teal accents.
- Semantic colors: success, warning, error, info.
- WCAG AA contrast target.

## Component Contracts
- Buttons, inputs, selects, checkboxes, radios, date controls.
- Tables, cards, tabs, breadcrumbs, badges.
- Alerts, notifications, modals, drawers, tooltips.
- Pagination, loading indicators, skeletons.
- Empty states, error states, confirmation dialogs.

## Component States
- default, hover, active, focus, disabled, loading, error.

## Tokenization Strategy
- Central tokens for color, spacing, typography, radius, elevation, z-index.
- Planned token location: `frontend/src/styles/tokens.css`.

## Governance
- New components require accessibility and testability review.
- Extend existing primitives before creating one-off variants.

