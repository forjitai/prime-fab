# Design Audit

_Phase 1 · 24 Oct 2026_

## Confirmed from the reference

| Item | Finding | Source |
|---|---|---|
| Brand / theme colour | `#2E3192` (deep indigo-blue), used as browser theme colour | `<meta name="theme-color">` |
| Positioning tone | Premium, architectural, engineering-led | Tagline + H1 |
| Hero | Full-bleed media hero with poster image (video background), large H1, short supporting line with three trust stats | Pre-render + poster asset |
| Logo treatment | Logo + wordmark + small tagline line | Pre-render |
| Information architecture | Deep product catalogue (category → sub-type), heavy trust/proof pages | sitemap.xml |
| Conversion focus | Separate ad landing page + thank-you page, i.e. enquiry-form-led | robots.txt |

## Not observed (needs browser view)

Section order and dimensions · spacing scale · font families and sizes · button styles · card layouts · image crops · sliders/animations · header behaviour on scroll · mobile menu · footer structure.

These cannot be recorded honestly from my tools: the landing page is robots-blocked and the rest renders only in a browser.

## Typical structure of this kind of page (for discussion — NOT an audit finding)

Window/door ad landing pages in India commonly follow: sticky header with call button → hero with enquiry form → trust stats strip → product cards → why-choose-us icons → process steps → project gallery → FAQ → final CTA → footer + floating WhatsApp button. I'd use this as the PRIME FAB starting layout **only if** your screenshots confirm the reference matches, or you approve it.

## Proposed direction for PRIME FAB (Phase 2 input, to approve later)

- **Palette:** a deep industrial navy as primary, a warm accent for CTAs (e.g. amber/orange), light grey section backgrounds — distinct from the reference's indigo so PRIME FAB doesn't look like a copy. All set as CSS variables.
- **Type:** a strong geometric sans for headings, a highly legible sans for body, both via `next/font`.
- **Feel:** large photography, generous whitespace, crisp cards, subtle scroll reveals respecting reduced-motion.
