# Andrey Badalin Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a polished, responsive Next.js portfolio that presents Andrey Badalin and eight replaceable case-study links.

**Architecture:** Use a single App Router page composed from focused section components. Keep portfolio content in typed data files and implement the visual system with Tailwind utilities plus a small global CSS layer for tokens, background effects, and shared patterns.

**Tech Stack:** Next.js, React, TypeScript, Tailwind CSS, Lucide React, ESLint

---

### Task 1: Project Foundation

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `next.config.ts`
- Create: `postcss.config.mjs`
- Create: `eslint.config.mjs`
- Create: `.gitignore`
- Create: `.env.example`

- [ ] Add scripts for `dev`, `build`, `start`, and `lint`.
- [ ] Configure strict TypeScript, Next.js, Tailwind/PostCSS, and ESLint.
- [ ] Install dependencies with `npm install`.

### Task 2: Typed Portfolio Content

**Files:**
- Create: `src/data/projects.ts`
- Create: `src/data/skills.ts`

- [ ] Define typed project status, accent, stack, and replaceable URL fields.
- [ ] Add all eight required case studies with unique descriptions and visual accents.
- [ ] Add the five required skill groups.

### Task 3: Page Components

**Files:**
- Create: `src/components/Header.tsx`
- Create: `src/components/HeroSection.tsx`
- Create: `src/components/AboutSection.tsx`
- Create: `src/components/SkillsSection.tsx`
- Create: `src/components/ProjectCard.tsx`
- Create: `src/components/ProjectsSection.tsx`
- Create: `src/components/WorkflowSection.tsx`
- Create: `src/components/ContactSection.tsx`
- Create: `src/components/Footer.tsx`
- Create: `src/components/SectionHeading.tsx`

- [ ] Build an accessible sticky header and mobile navigation.
- [ ] Build each semantic page section from the approved content.
- [ ] Keep project card rendering reusable and data-driven.

### Task 4: Visual System and Composition

**Files:**
- Create: `src/app/globals.css`
- Create: `src/app/layout.tsx`
- Create: `src/app/page.tsx`

- [ ] Add metadata, fonts, color tokens, focus treatment, and reduced-motion support.
- [ ] Compose the page using the technical-dossier editorial grid.
- [ ] Implement desktop, tablet, and mobile layouts.

### Task 5: Documentation and Verification

**Files:**
- Create: `README.md`

- [ ] Document features, stack, local setup, Vercel deployment, and all case studies.
- [ ] Run `npm run lint` and resolve errors.
- [ ] Run `npm run build` and resolve critical errors.
- [ ] Start the dev server and inspect desktop/mobile with CloakBrowser.
- [ ] Fix visible UI and responsive defects, then repeat lint/build.
