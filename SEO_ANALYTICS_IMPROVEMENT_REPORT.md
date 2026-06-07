# SEO And Analytics Improvement Report

## Scope

Changes are limited to the `andrey-portfolio` repository. No Google Analytics,
cookie scripts, consent banners, or third-party SEO libraries were added.

## Metadata

The localized `[locale]` layout now provides:

- locale-specific title and description for `/ru` and `/en`;
- keywords for Junior Frontend / Fullstack positioning;
- author and creator information;
- an absolute `metadataBase`;
- canonical, RU/EN alternate, and `x-default` URLs;
- localized Open Graph website metadata;
- Twitter `summary_large_image` metadata;
- index/follow directives and expanded Googlebot preview permissions.

The existing locale layout continues to set `<html lang="ru">` or
`<html lang="en">` from the validated route parameter.

## Open Graph Preview

`src/app/[locale]/opengraph-image.tsx` uses the Next.js `ImageResponse`
file convention to generate a 1200×630 PNG for each locale.

The preview contains:

- Андрей Бадалин / Andrey Badalin;
- Junior Frontend / Fullstack Developer positioning;
- eight deployed case studies;
- GitHub + Vercel;
- a restrained dark tech-style visual treatment.

Twitter metadata reuses the same generated image instead of maintaining a
duplicate image route.

## Favicon

`src/app/icon.svg` adds a simple tech-style portfolio icon based on the `AB`
initials.

## Vercel Web Analytics

`@vercel/analytics` is installed and `<Analytics />` is rendered in the root
locale layout. Analytics requires Web Analytics to be enabled for the deployed
Vercel project.

## Sitemap And Robots

- `src/app/sitemap.ts` includes `/`, `/ru`, and `/en` with localized alternates.
- `src/app/robots.ts` allows indexing, identifies the canonical host, and links
  to `/sitemap.xml`.

## Verification

The required commands and their final results are recorded after implementation:

- `npm install`: passed; dependencies are up to date.
- `npm run lint --if-present`: passed with no ESLint errors.
- `npm run typecheck --if-present`: passed with no TypeScript errors.
- `npm run build`: passed with Next.js 16.2.7.
- `npm audit`: passed with 0 vulnerabilities.

Additional verification:

- `npm run test:e2e`: 8/8 tests passed, including RU/EN routes, language
  switching, desktop navigation, project links, and mobile overflow/navigation.
- CloakBrowser loaded and captured both locale pages successfully.
- `/` redirects to `/ru`.
- localized Open Graph PNGs, `/sitemap.xml`, `/robots.txt`, and `/icon.svg`
  returned HTTP 200 with the expected content types.

## Post-Deployment Checks

1. Enable Web Analytics in the Vercel project dashboard.
2. Open `/ru` and `/en` and inspect title, description, canonical, hreflang,
   Open Graph, and Twitter tags.
3. Verify `/sitemap.xml` and `/robots.txt` return HTTP 200.
4. Verify `/ru/opengraph-image` and `/en/opengraph-image` return 1200×630 PNGs.
5. Test the deployed URL in LinkedIn Post Inspector, Facebook Sharing Debugger,
   and an X/Twitter card preview tool.
6. Confirm page views appear in Vercel Analytics after production traffic.
