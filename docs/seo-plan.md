# SEO Plan

_Phase 1 · 24 Oct 2026 · No rankings are guaranteed._

## Lessons from the reference

- Good: blocks ad/thank-you pages from indexing; publishes a clean sitemap.
- Weak: client-side rendering means every route serves the homepage's canonical, title and description to crawlers. PRIME FAB will statically render every page with unique metadata.

## Technical foundation (Next.js App Router)

- Static generation for all pages; `metadata` / `generateMetadata` per route.
- `app/sitemap.ts` → `/sitemap.xml` (indexable canonical URLs only).
- `app/robots.ts` → allow all; disallow `/thank-you`, `/api/`.
- Self-referencing canonicals; `metadataBase` from env var `NEXT_PUBLIC_SITE_URL`.
- Custom 404 (`app/not-found.tsx`), returning a real 404 status.
- One H1 per page; logical H2/H3.
- `next/image` with explicit sizes, AVIF/WebP, lazy below the fold, priority hero.

## Structured data (JSON-LD)

| Type | When |
|---|---|
| Organization, WebSite | Phase 3, site-wide |
| BreadcrumbList | Inner pages |
| LocalBusiness (or more specific, e.g. HomeAndConstructionBusiness) | **Only after you confirm the business category** |
| Product | Only with accurate product info — no prices/ratings invented |

Address in schema will use only the supplied text. No coordinates, hours or reviews unless you provide them.

## Local SEO

- Consistent NAP on every page footer + contact page: PRIME FAB · 387X+RM9, Yentiganahalli, Karnataka 562123 · +91 8861555722.
- Google Maps link built from the Plus Code (`https://www.google.com/maps/search/?api=1&query=387X%2BRM9%2C+Yentiganahalli%2C+Karnataka+562123`) — to be verified in Phase 6.
- Service-area copy (e.g. nearby towns / Bengaluru region) only once you confirm the areas you serve.
- Recommend creating/claiming a Google Business Profile with the same NAP.

## Keyword approach (draft — depends on confirmed offerings)

Primary pattern: `<offering> in <area>` (e.g. "uPVC windows near Nelamangala"), written naturally into H1/H2/intro copy — not stuffed.

## Measurement

- GA4 via `NEXT_PUBLIC_GA_ID` (not loaded if empty). Events: `phone_click`, `whatsapp_click`, `form_submit`, `cta_click`.
- Search Console: verification via DNS or meta tag after deploy; submit sitemap.
