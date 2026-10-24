# Functional Test Report

_Phase 9 · 25 Oct 2026 · Playwright 1.63, Chromium · `npm run test:e2e`_

**Result: 46 passed, 0 failed, 5 skipped** (skips are viewport-specific tests that don't apply to that size).

Viewports: desktop 1440×900, tablet 820×1180 (touch), mobile Pixel 7.

## What is tested (`tests/e2e/site.spec.ts`)

| Area | Checks | Result |
|---|---|---|
| All 6 pages | HTTP 200 · one H1 · title · description · canonical · no horizontal scroll · no broken images · no "SIMTA" text · JSON-LD parses · NAP in footer · page refresh · no JS errors or failed requests | ✅ ×3 viewports |
| Metadata | Titles and descriptions unique across pages | ✅ |
| Navigation | Every menu item reached from desktop nav and mobile menu; mobile menu closes after tap | ✅ |
| Mobile menu | Opens, `aria-expanded`, locks page scroll, closes on Escape, focus returns to button | ✅ (mobile, tablet) |
| Footer | Every internal footer link returns 200 | ✅ |
| Call | `tel:+918861555722` present | ✅ |
| WhatsApp | `wa.me/91…` link, opens in new tab with `noopener`; floating button on every page | ✅ |
| Directions | Google Maps directions URL containing Plus Code `387X+RM9` | ✅ |
| Enquiry form | Empty submit flags name/phone/message · bad phone and email rejected · entered values kept · valid submit with no backend shows "call or WhatsApp" and **never** a success message | ✅ |
| Home hero | Submit button above the fold at 1440×900 | ✅ (desktop) |
| Keyboard | Skip link is first Tab stop and jumps to main content | ✅ (desktop) |
| 404 | Unknown URL returns 404, custom page, noindex | ✅ |
| robots.txt / sitemap.xml | Served; pre-launch blocks all; sitemap lists all 6 pages, excludes style guide | ✅ |
| Style guide | noindex | ✅ |

## Bugs found and fixed

1. **Mobile menu stayed open** when tapping the link for the page you're already on → menu now closes on any link tap.
2. **404 page had a duplicate robots tag** of its own → removed; Next.js adds noindex automatically.

## Notes (not bugs)

- Next.js 16 keeps the previous page mounted but hidden for instant back/forward navigation, so the DOM briefly holds two H1s after client-side navigation; only one is visible and the server HTML always has one.
- Before launch the 404 page carries two `noindex` tags (Next's own + the site-wide pre-launch block). The second disappears when `NEXT_PUBLIC_ALLOW_INDEXING=true`.

## Not yet testable

| Item | Why | When |
|---|---|---|
| Gallery lightbox (open, arrows, close) | No photos yet, so no viewer opens | After photos (Phase 5) |
| Google Maps embed shows the right spot | Google is unreachable from the test environment | Owner to check on live site |
| WhatsApp opens the right chat | Number unconfirmed (…57722 vs …55722) | After confirmation |
| Form actually delivers an email | No form service configured | After `ENQUIRY_ENDPOINT` is set |
| Product detail pages | No confirmed offerings yet | After offerings |
