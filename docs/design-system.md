# PRIME FAB Design System

> **Updated 25 Oct 2026:** colours now come from the client's logo — green `#1b4d33`, gold `#d29a45`, sandstone `#f3eadc` / `#f4ece0`. Logo mark traced to `public/logo-mark.svg` from `brand/logo-original.jpg` (`brand/trace-logo.py`). Replace with the designer's original vector file when available.

_Phase 2 · 24 Oct 2026 · Live preview at `/style-guide` (noindex, not in sitemap)_

## Idea

Fabrication is about cut steel, welds and straight edges. The one signature element is a **chamfered corner** — the clipped top-right corner of a cut steel plate — used on primary buttons, the logo mark and large images. Everything else is kept quiet and square. The amber colour is reserved for actions, so "Call" and "Send enquiry" are always the easiest things to find.

## Colours — change in `app/globals.css` (`:root`)

| Variable | Default | Used for |
|---|---|---|
| `--color-primary` | `#14213d` ink navy | Footer, dark sections, secondary buttons, mobile menu |
| `--color-secondary` | `#4a5a6b` steel | Icons, secondary text |
| `--color-accent` | `#f2a93b` weld amber | Primary buttons, section rules, active nav underline |
| `--color-accent-strong` | `#e09520` | Amber hover |
| `--color-page` / `--color-section` | `#ffffff` / `#f3f5f8` | Alternating section backgrounds |
| `--color-heading` / `--color-body` / `--color-muted` | navy / `#3a4656` / `#6b7786` | Text |
| `--color-border` | `#d9dee4` | Lines, card borders, inputs |
| `--color-link` / `--color-link-hover` | `#1f4fa3` / navy | Inline links |
| `--color-focus` | `#1f6feb` | Keyboard focus ring |
| `--chamfer` | `14px` | Size of the cut corner |

Changing a value updates every component; no component hard-codes a brand colour.

## Typography

One family, **Archivo** (variable, self-hosted, SIL Open Font License), used at two widths:

| Class | Use | Size |
|---|---|---|
| `.t-display` | H1 | 36→72px, width 125%, weight 800 |
| `.t-h2` | Section headings | 28→44px, width 115%, weight 750 |
| `.t-h3` | Card & sub headings | 20px, weight 700 |
| `.t-lead` | Intro paragraphs | 17→20px |
| body | Reading text | 17px, line-height 1.65 |
| `.t-caption` | Captions, small print | 14px |

## Components (`components/`)

| Component | File | Notes |
|---|---|---|
| Header | `layout/Header.tsx` | Sticky; logo, nav, call button |
| Desktop nav | `layout/DesktopNav.tsx` | Active underline; dropdown ready for product links |
| Mobile nav | `layout/MobileNav.tsx` | Full-screen panel, Esc closes, call + WhatsApp |
| Footer | `layout/Footer.tsx` | Pages, legal, contact details |
| Logo | `brand/Logo.tsx` | Text wordmark until a real logo is supplied |
| Buttons | `ui/Button.tsx` | primary / secondary / ghost / onDark; link or button |
| Section + container | `ui/Container.tsx` | light / alt / dark tones |
| Section heading | `ui/SectionHeading.tsx` | Amber rule + title + intro |
| Breadcrumbs | `ui/Breadcrumbs.tsx` | Also outputs BreadcrumbList JSON-LD |
| Product / image cards | `cards/ProductCard.tsx` | Fixed-ratio images, whole-card link |
| Image frame | `media/ImageFrame.tsx` | `next/image`, fixed ratio; shows "Photo needed" if no file |
| Gallery | `media/Gallery.tsx` | Grid + accessible lightbox (`<dialog>`) |
| CTA band | `sections/CTASection.tsx` | Call + WhatsApp |
| Contact details | `contact/ContactDetails.tsx` | Single source for name/address/phone |
| WhatsApp button | `contact/WhatsAppButton.tsx` | Floating, every page |
| Enquiry form | `forms/EnquiryForm.tsx` + `app/actions/enquiry.ts` | Server-side validation; never shows success unless delivery succeeds |

## Business details — `config/site.ts`

Name, phone, WhatsApp, address, directions link, navigation and analytics ID all live here.

## Analytics hooks

Clickable elements carry `data-event` attributes (`phone_click`, `whatsapp_click`, `form_submit`) for GA4 wiring in Phase 7.
