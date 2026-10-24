# Page Inventory — Reference Site

_Phase 1 · 24 Oct 2026_

## How pages were inspected

| Method | Result |
|---|---|
| Fetch `/simta-ad/` (the supplied URL) | **Blocked** — the site's robots.txt disallows automated access to this path. Not crawled, by design. |
| Fetch `/`, `/about-us`, `/contact-us`, `/products/upvc-windows-manufacturer` | Allowed, but every route returns the **same pre-render shell**: logo, tagline, H1, one intro paragraph, a "You need to enable JavaScript" notice. All real content renders client-side. |
| `robots.txt`, `sitemap.xml`, `llms.txt` | Fully readable — used for the page list and page purposes. |
| Public web search | Background facts only (company origin, product range). |

**Consequence:** I can confirm *which* pages exist and *what each is for*, but not their visual section order, spacing, sliders or footer, because those only appear after JavaScript runs in a real browser. Nothing below is invented — unknown items are marked "Not observed".

## Per-page record

| Page | Purpose (from llms.txt) | Visible in pre-render | Section order |
|---|---|---|---|
| `/simta-ad/` | Paid ad landing page | Not accessed (robots) | Not observed |
| `/` | Brand overview | Hero poster image, logo, tagline "Crafting Architectural Excellence", H1 about being a premium windows & doors maker, one-line stats summary (years, fabricators, warranty) | Not observed beyond hero |
| `/about-us` | Heritage, vision, milestones | Same shell as homepage | Not observed |
| `/contact-us` | Consultations, quotes | Same shell | Not observed (form fields unknown) |
| Product category pages (10) | Describe each product family | Same shell | Not observed |
| Product sub-type pages (9) | Casement / sliding / special etc. | Not fetched (same SPA) | Not observed |
| Company pages (why-choose-us, values, infrastructure, quality, leadership, branches, partner, careers, life-at) | As named | Not fetched | Not observed |
| Content pages (blog, case-study, press, testimonials, awards, gallery, downloads) | As named | Not fetched | Not observed |
| Legal (privacy, terms, disclaimer) | As named | Not fetched | Not observed |

## Navigation, footer, forms, mobile menu

Not observed — rendered by JavaScript. Pre-render contains only the logo link to `/`.

## Interactive elements & media

- Homepage hero uses a **poster image for a video** (`/media/hero-poster-v4.webp`), indicating a background video hero.
- Other sliders/animations: not observed.

## Technical observations (useful for our SEO plan)

- Reference is a client-rendered single-page app; every route serves the **homepage's** canonical and meta description. Crawlers without JS see near-identical pages. PRIME FAB will avoid this by statically rendering each page with its own metadata (Next.js App Router).
- Landing/thank-you pages are correctly blocked from indexing — we'll copy that pattern.
