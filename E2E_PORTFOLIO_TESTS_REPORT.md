# E2E Portfolio Tests Report

## Added

- Added `@playwright/test` as a development dependency.
- Added `test:e2e`, `test:e2e:ui`, and `test:e2e:report` npm scripts.
- Added `playwright.config.ts` with a local Next.js dev server, Chromium,
  CI retries, trace collection on the first retry, and list/HTML reporters.
- Added Playwright output directories to `.gitignore`.

## Test Coverage

The suite in `tests/e2e/portfolio.spec.ts` verifies:

- `/ru` and `/en` load successfully without HTTP 404 responses, page errors,
  or console errors.
- The hero and projects section are visible in both locales.
- Desktop navigation reaches the About, Skills, Projects, and Workflow
  sections.
- RU/EN switching opens the equivalent localized portfolio page.
- All eight expected project cards and titles are present.
- Every project card has GitHub and Vercel Live Demo links with valid `href`,
  `target="_blank"`, and `rel="noreferrer"` attributes.
- A 390x844 viewport has no horizontal overflow.
- The mobile navigation button and menu are accessible.

External GitHub and Vercel pages are not opened, so the suite does not depend
on third-party availability or response times.

## Local Verification

Completed on June 7, 2026:

| Command | Result |
| --- | --- |
| `npm install` | Passed; Playwright dependency installed |
| `npm run lint --if-present` | Passed |
| `npm run typecheck --if-present` | Passed |
| `npm test --if-present` | Passed; no unit-test script is currently defined |
| `npm run build` | Passed |
| `npm run test:e2e` | Passed; 8 tests in Chromium |
| `npm audit` | Passed; 0 vulnerabilities |

## CI Changes

The existing `.github/workflows/ci.yml` now runs:

1. `npm ci`
2. `npm run lint --if-present`
3. `npm run typecheck --if-present`
4. `npm test --if-present`
5. `npm run build`
6. `npx playwright install --with-deps chromium`
7. `npm run test:e2e`

The workflow remains scoped to this repository and does not run tests in the
other portfolio repositories.

## After Push

Verify in GitHub Actions that:

- the npm cache restores correctly with the updated lockfile;
- Chromium and its Linux system dependencies install successfully;
- the Next.js development server starts within the configured timeout;
- all eight Playwright tests pass on Ubuntu;
- the HTML report and trace are available for diagnosis if a CI retry fails.
