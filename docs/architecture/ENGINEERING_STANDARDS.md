# Engineering Standards

## Core Principles
1. Frontend-only healthcare application
2. No backend / REST / GraphQL
3. UI automation only
4. Synthetic healthcare data only
5. No real PHI
6. Production-like engineering practices
7. Modular architecture and separation of concerns
8. Reusability, maintainability, testability
9. Security by design
10. Accessibility awareness
11. Documentation as implementation output
12. Step-by-step reproducible delivery
13. No fabricated test results or evidence

## Architecture Standards
- Respect directory ownership boundaries (`frontend`, `automation`, `rag`, `mcp`, `agent`, `mock-systems`, `knowledge`, `docs`).
- Cross-boundary coupling requires documented rationale.
- Components marked PLANNED are not treated as implemented.

## Frontend Standards
- React + TypeScript + Vite + React Router (planned).
- Layering: Components -> Pages -> State -> Domain models -> Mock/local persistence.
- No backend clients or API repositories.

## TypeScript Standards
- Strict typing, avoid `any` where possible.
- Explicit types for public interfaces/domain models.
- Small focused functions/components, meaningful names.
- Prefer `const`, avoid hidden global state.

## Python Standards
- Type hints, clear modules, structured logging, explicit error handling.
- Env-based configuration, no hardcoded secrets/API keys.
- Prefer virtual environments; avoid global installs.

## Automation Standards
- Playwright + Cucumber BDD + POM (planned).
- Stable locators, explicit assertions, deterministic data.
- No arbitrary waits and no brittle selector strategy.

## BDD Standards
- Business-readable scenarios, minimal implementation detail.
- Independent scenarios, careful reuse of steps.
- Tagging and story mapping when applicable.

## RAG Standards
- Pipeline: loader -> parser -> chunker -> metadata -> embeddings -> vector store -> retriever -> context -> LLM.
- Ground answers to retrieved context; report insufficient context when needed.

## MCP Standards
- FastMCP, validated inputs, structured outputs, explicit permissions, testable tools.

## Agent Standards
- LangGraph stateful flow: intent -> planning -> retrieval -> tooling -> validation -> analysis -> response.
- Observable decisions and execution metadata; no hidden reasoning exposure.

## Security Standards
- Never commit secrets, credentials, tokens, keys, PHI.
- Use `.env`/`.env.example` pattern when needed; never commit `.env`.

## Git Standards
- Branches: `main`, `feature/*`, `bugfix/*`, `chore/*`, `docs/*`.
- Commits: `<type>(<scope>): <description>`.
- Focused commits only, no unrelated changes.

## Documentation Standards
- Each step must include `prompt.md`, `README.md`, `implementation-report.pdf`, `interview-notes.md`, and `response.md`.
- Prompt and response stored verbatim.

## Testing Standards
- Test at appropriate layer; never fabricate outcomes.
- Keep test data/config/test logic separate.

## Data Standards
- Synthetic IDs/data only (`PAT-*`, `DOC-*`, `APT-*`).
- Deterministic datasets preferred.
