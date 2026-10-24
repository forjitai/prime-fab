# Lighthouse Results

_Phase 8 · 25 Oct 2026 · Lighthouse 12, local production build (`next build && next start`), headless Chromium._
_Built with `NEXT_PUBLIC_ALLOW_INDEXING=true` so the SEO score reflects the launch configuration (the live preview is deliberately noindex until launch)._

Scores: Performance / Accessibility / Best Practices / SEO.

## Mobile (simulated slow 4G, mid-range phone)

| Page | Perf | A11y | Best pr. | SEO | LCP | CLS | TBT |
|---|---|---|---|---|---|---|---|
| / | 93 | 100 | 100 | 100 | 2.6 s | 0 | 230 ms |
| /about | 100 | 100 | 100 | 100 | 1.5 s | 0 | 90 ms |
| /products | 99 | 100 | 100 | 100 | 2.0 s | 0 | 70 ms |
| /gallery | 98 | 100 | 100 | 100 | 2.3 s | 0 | 90 ms |
| /contact | 90 | 100 | 100 | 100 | 2.6 s | 0 | 320 ms |
| /privacy-policy | 99 | 100 | 100 | 100 | 2.0 s | 0 | 70 ms |

## Desktop

All six pages: **100 / 100 / 100 / 100**, LCP 0.4–0.6 s, CLS 0, TBT ≤ 10 ms.

## Remaining notes

- **Home and Contact (mobile):** the largest element is the H1 headline; it repaints when the self-hosted Archivo font finishes loading, giving LCP ≈ 2.6 s (target 2.5 s). Both pages still score ≥ 90. Contact has extra blocking time from the enquiry form and map scripts.
- **~28 KiB unused / ~13 KiB legacy JavaScript** comes from the Next.js framework bundle, not site code.
- **Photos not yet added.** Scores will need re-checking once real images replace the "Photo needed" slots (they will use `next/image` with AVIF/WebP, fixed ratios and lazy loading).
- Google Maps could not load in the test environment, so the map iframe's cost on /contact and / is not reflected; it is lazy-loaded and below the fold.

## Accessibility checks done by hand (Phase 2–4)

- Skip-to-content link is the first Tab stop.
- Mobile menu: button has `aria-expanded`, closes on Escape and returns focus.
- Gallery viewer uses native `<dialog>` with arrow-key navigation and labelled buttons.
- Form fields have labels, errors are linked with `aria-describedby`, and the not-connected message uses `role="alert"`.
- Visible focus ring on all interactive elements; motion reduced under `prefers-reduced-motion`.
