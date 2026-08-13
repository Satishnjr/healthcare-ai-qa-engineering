# CareFlow Health Automation Framework (Step 1.14)

Playwright + Cucumber BDD regression automation expansion for the CareFlow frontend.

## Scope
- UI automation framework foundation only
- Frontend-only synthetic data workflows
- No backend/API automation

## Stack
- Playwright (Chromium/Firefox/WebKit)
- Cucumber BDD
- TypeScript

## Structure
- `features/`: Gherkin feature files
- `src/pages/`: Page Object Model
- `src/steps/`: Step definitions
- `src/hooks/`: Cucumber hooks
- `src/data/`: deterministic role/user test data
- `src/reporters/`: HTML report generation
- `reports/`, `screenshots/`, `videos/`, `traces/`, `test-results/`: artifacts

## Environment
Copy `.env.example` values into your environment:
- `BASE_URL` (default `http://127.0.0.1:5173`)
- `BROWSER` (`chromium`, `firefox`, `webkit`)

## Install
```bash
cd automation
npm install
```

## Run
Start frontend first (`frontend`):
```bash
npm run dev -- --host 127.0.0.1 --port 5173
```

In `automation`:
```bash
npm run typecheck
npm run smoke:chromium
npm run regression:chromium
npm run report:summary
npm run report:html
```

Optional:
```bash
npm run smoke:firefox
npm run smoke:webkit
npm run regression:firefox
npm run regression:webkit
```

## Tags
Supported tags include:
- `@smoke`
- `@regression`
- `@functional`
- `@negative`
- `@validation`
- `@accessibility`
- `@responsive`
- `@cross-browser`
- `@role-based`

## Failure Evidence
On failure the framework captures:
- screenshot
- trace zip
- video (if available)
- failure metadata JSON in `reports/failure-artifacts`

Metadata includes scenario, tags, browser, URL, timestamp, error, and traceability IDs (`@tc-*`, `@ts-*`, `@ac-*`).
