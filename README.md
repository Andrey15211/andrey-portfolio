# Andrey Badalin Portfolio

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Localization](https://img.shields.io/badge/localization-RU%20%2F%20EN-7c3aed)
![Vercel](https://img.shields.io/badge/deployed%20on-Vercel-black?logo=vercel)

A bilingual developer portfolio and central case-study hub for eight production-like web projects. It presents each project through the problem it solves, key features, technology stack, demonstrated skills, source repository, and live deployment.

## Live Demo

https://andrey-portfolio-liard.vercel.app

## Source Code

https://github.com/Andrey15211/andrey-portfolio

## Features

- Eight dedicated RU/EN project case-study pages with GitHub and Live Demo links
- Employer-friendly Problem, Solution, Key Features, Tech Stack, demonstrated skills, and quality sections
- Featured Projects section for CRM, analytics, booking, and team-workflow applications
- Professional AI Workflow section describing assisted and manually controlled work
- Development Standards section covering CI, documentation, audit, build, localization, and responsive checks
- Honest employer positioning for junior frontend, fullstack, web, and React/Next.js roles
- Responsive desktop, tablet, and mobile layouts
- Localized metadata, navigation, content, states, and accessibility labels
- Search-ready sitemap and robots directives
- Localized Open Graph and Twitter large-image previews
- Privacy-friendly Vercel Web Analytics without Google Analytics or cookies
- Reduced-motion support and keyboard-visible focus states

## Featured Projects

- **Bot Orders CRM**: CRM workflow, Telegram integration, customer context, and order lifecycle
- **Team Task Manager**: authentication, roles, assignments, statuses, and collaborative workflows
- **Sales Analytics Dashboard**: KPI presentation, charts, filtering, and business data analysis
- **Booking Service App**: service selection, calendar slots, authentication, and booking management

## Case Study Routes

Each project is available at `/ru/projects/<slug>` and
`/en/projects/<slug>`. Project cards and the Featured Projects section link to
the localized case-study route while retaining direct GitHub and Live Demo
actions.

## Tech Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- next-intl
- Lucide React
- ESLint
- GitHub Actions
- Vercel

## Localization

- Complete RU/EN interface localization
- Russian is the default language at `/ru`
- English version is available at `/en`
- Desktop and mobile language switchers
- Correct localized metadata and `<html lang>`
- User-facing strings are stored in `messages/ru.json` and `messages/en.json`

## SEO And Social Sharing

- Locale-aware titles, descriptions, keywords, canonical URLs, authorship, Open Graph, Twitter, and robots metadata
- Russian metadata at `/ru` and English metadata at `/en`
- Generated 1200×630 Open Graph preview with the developer name, role, eight deployed case studies, GitHub, and Vercel
- A shared large-image preview for Open Graph and Twitter cards
- Tech-style SVG favicon based on the `AB` portfolio initials
- `sitemap.xml` includes `/`, `/ru`, `/en`, and all 16 localized case-study URLs
- `robots.txt` allows indexing and references the sitemap

## Analytics

Vercel Web Analytics is integrated through `@vercel/analytics`. It is enabled
in the root locale layout and starts collecting production traffic after the
project is deployed on Vercel and Web Analytics is enabled for the project.
Google Analytics, cookie scripts, and consent banners are not used.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`; the root route redirects to `/ru`.

## Quality Checks

```bash
npm run lint --if-present
npm run typecheck --if-present
npm run build
npm run test:e2e
npm audit
```

GitHub Actions runs lint, type checks, tests, production build, and Playwright
end-to-end checks for repository changes.

## E2E Tests

Playwright tests cover the RU/EN routes, localized navigation and language
switching, all eight project cards, all 16 case-study pages, GitHub and Live
Demo link attributes, unknown project slugs, the mobile menu, horizontal
overflow, and basic runtime/404 failures.

```bash
npm run test:e2e
npm run test:e2e:ui
npm run test:e2e:report
```

The default command starts the local Next.js development server automatically
and runs the suite in Chromium.

## Deployment To Vercel

1. Import `https://github.com/Andrey15211/andrey-portfolio` into Vercel.
2. Use the detected Next.js framework preset.
3. Keep the default build command: `npm run build`.
4. Deploy without environment variables; this portfolio currently has no runtime secrets.
5. Enable Web Analytics in the Vercel project dashboard.
6. Verify `/sitemap.xml`, `/robots.txt`, `/ru/opengraph-image`, `/en/opengraph-image`, and representative RU/EN case-study pages after deployment.

## Screenshots

### Desktop

![Portfolio desktop view](docs/screenshots/desktop.png)

### RU/EN localization

![Portfolio English localization](docs/screenshots/localization.png)

## What This Project Demonstrates

- Case-study-oriented portfolio presentation
- Typed and reusable project data
- Localized Next.js App Router architecture
- Responsive, accessible UI implementation
- CI-backed production build workflow
- Clear separation between AI-assisted acceleration and manual engineering responsibility
- Ability to document, deploy, verify, and present multiple web projects as a coherent portfolio

## GitHub Profile

https://github.com/Andrey15211
