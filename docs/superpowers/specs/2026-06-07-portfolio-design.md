# Andrey Badalin Portfolio Design

## Direction

Build a dark premium portfolio as a technical dossier rather than a generic landing-page template. The visual system uses a deep navy base, restrained cyan and violet light, fine grid lines, section numbering, oversized editorial typography, and translucent surfaces only where they clarify grouping.

## Information Architecture

The single page contains a sticky header, hero, about, skills, eight case-study project cards, workflow, contact, and footer. Header links scroll to semantic section anchors. The hero exposes projects, GitHub, and contact actions without adding unsupported claims or fake metrics.

## Components and Data

Project and skill content live in typed data modules. Page sections are independent server components except the interactive mobile header. `ProjectCard` owns the shared project anatomy while project-specific accent tokens create visual variation.

## Responsive Behavior

Desktop uses an asymmetric two-column editorial grid. Project cards alternate featured spans to avoid a repetitive card wall. Tablet collapses complex rows, and mobile becomes a single readable column with a compact navigation menu and full-width primary actions.

## Accessibility and Motion

Use semantic landmarks, visible focus states, descriptive external-link labels, sufficient contrast, and correctly labeled navigation controls. Motion is limited to hover elevation, subtle background drift, and entrance-safe CSS transitions, all disabled through `prefers-reduced-motion`.

## Verification

Run ESLint and the production Next.js build first. Only after they pass, run the development server and inspect desktop and mobile using CloakBrowser. Fix visible layout, spacing, contrast, responsive, and interaction problems without broad redesign.
