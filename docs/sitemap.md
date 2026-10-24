# Sitemap — Reference Audit & Proposed PRIME FAB Sitemap

_Phase 1 deliverable · Audit date: 24 Oct 2026_

## 1. What the reference URL is

`https://simtaastrix.com/simta-ad/` is a **standalone paid-advertising landing page** (Google Ads traffic, `utm_source=google&utm_medium=cpc`), sitting on top of a **larger corporate website** (`simtaastrix.com`).

Evidence:
- The reference site's `robots.txt` explicitly disallows `/simta-ad`, `/simta-lp`, `/landing-page`, `/thank-you` — they are kept out of search on purpose.
- `/simta-ad` is **not** in the reference XML sitemap.
- The corporate site has 41 indexable URLs (below).

**Access limitation:** the reference site's robots.txt disallows automated access to `/simta-ad`, so I did not crawl that page. Its section-by-section layout is therefore **not yet recorded**. See "Needed from you" in `implementation-roadmap.md`.

## 2. Reference corporate site — full URL list (from its public sitemap.xml)

### Core
| URL | Purpose |
|---|---|
| `/` | Homepage |
| `/about-us` | Company story |
| `/why-choose-us` | Differentiators |
| `/our-values` | Values |
| `/infrastructure` | Factory / manufacturing |
| `/quality` | Quality & certifications |
| `/leadership` | Leadership team |
| `/branches` | Branch locations |
| `/contact-us` | Contact |
| `/partner-with-us` | Dealer / fabricator enquiries |
| `/careers`, `/life-at-simta` | Recruitment |

### Products (3 levels: category → sub-type)
| Category | Sub-pages |
|---|---|
| `/products/upvc-windows-manufacturer` | casement, sliding, special-type windows |
| `/products/upvc-doors-manufacturer` | casement, sliding, special-type doors |
| `/products/upvc-profile-manufacturer` | — |
| `/products/aluminium-doors-manufacturer` | — |
| `/products/aluminium-windows-manufacturer` | — |
| `/products/aluminium-facade-manufacturer` | — |
| `/products/abs-doors-manufacturer` | — |
| `/products/steel-doors-manufacturer` | — |
| `/products/upvc-interior-application-manufacturer` | TV unit, modular kitchen, modular wardrobes |
| `/products/upvc-interior-profile-manufacturer` | — |

### Content & proof
`/blog`, `/case-study`, `/press-release`, `/testimonials`, `/awards`, `/gallery`, `/downloads`

### Legal
`/privacy-policy`, `/terms-and-conditions`, `/disclaimer`

### Not indexed (robots-disallowed)
`/simta-ad`, `/simta-lp`, `/landing-page`, `/thank-you`

## 3. Proposed PRIME FAB sitemap (for approval)

Scaled to a single-location business. Pages marked ⏸ are only built once you confirm the information exists — nothing is invented.

```
/                       Home (landing-page style: hero + enquiry, offerings, why us, process, gallery preview, CTA)
/about                  About PRIME FAB
/products               Products / Services overview            ← needs your confirmed list
/products/[slug]        One detail page per CONFIRMED offering  ⏸
/gallery                Project / work photos                   ⏸ needs your photos
/contact                Address, call, WhatsApp, directions, enquiry form
/privacy-policy         Required because the form collects personal data
/thank-you              Form success page (noindex, excluded from sitemap)
/404                    Custom not-found page
```

Optional, only if you have real content:
- `/why-choose-us` (otherwise kept as a homepage section)
- `/testimonials` (only genuine customer reviews)
- `/quality` or `/infrastructure` (only real facility photos/facts)

Not proposed (no basis for a single-site business): branches, careers, leadership, press releases, awards, downloads, blog. Can be added later.

**Ad landing page:** not required (confirmed by client, 24 Oct 2026). No separate ad page will be built; the homepage is a normal, indexable corporate homepage. The reference's landing-page *design* is still used as the visual benchmark for the homepage.
