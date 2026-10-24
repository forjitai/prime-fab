# Implementation Roadmap

_Phase 1 · 24 Oct 2026_

## Phase status

| # | Phase | Status | Blocked on |
|---|---|---|---|
| 1 | Reference audit | Done, with limitations below | Your approval |
| 2 | Brand & design system | Not started | Approval; logo decision |
| 3 | Homepage | Not started | Confirmed offerings; reference screenshots |
| 4 | Inner pages | Not started | Approved sitemap |
| 5 | Photos & media | Not started | Your photos |
| 6 | Contact details | Not started | Phone/WhatsApp mismatch (see below) |
| 7 | SEO | Planned (seo-plan.md) | Business category, service area |
| 8 | Performance & a11y | Not started | — |
| 9 | Testing (Playwright) | Not started | — |
| 10 | GitHub | Not started | GitHub access |
| 11 | Vercel | Not started | Vercel project/team confirmation |
| 12 | Handover | Not started | — |

## Audit limitations

1. `/simta-ad/` is blocked to automated tools by the reference site's robots.txt, so its layout was not crawled.
2. The rest of the reference site renders only with JavaScript, so section order, fonts, spacing, sliders and footer were not observable.

**Fix:** please send full-page screenshots of the landing page (desktop and mobile). Phone screenshots are fine — scroll and capture top to bottom. I'll record the section order and styling from those.

## Needed from you before Phase 3

1. **What PRIME FAB makes or does.** e.g. uPVC windows/doors, aluminium, steel fabrication, gates, grills, sheds? The list drives products pages, images and SEO.
2. **Phone vs WhatsApp number mismatch:** the brief lists phone **+91 88615 55722** but WhatsApp **91 88615 57722** (…5557… vs …5555…). Which is correct, or are they two different numbers?
3. **Logo:** do you have one? If not, I'll design a clean text wordmark.
4. **Photos** of your work, workshop and finished jobs.
5. **Service area** (towns/cities you cover).
6. **Form submissions:** where should enquiries go? Options: email (needs an address + free Resend/Web3Forms account), or WhatsApp-only with no form.
7. **Accounts:** GitHub account to push to; Vercel account/team to deploy on (I can see a Vercel connection here — I'll confirm which team before using it).

## Proposed project structure

```
prime-fab-website/
  app/            routes (page.tsx per page), sitemap.ts, robots.ts, not-found.tsx
  components/     Header, MobileNav, Footer, Button, SectionHeading, ProductCard,
                  Gallery, CTASection, Breadcrumbs, ContactDetails, EnquiryForm, WhatsAppButton
  config/site.ts  business name, address, phone, WhatsApp, maps URL, nav, offerings
  styles/         globals.css with theme CSS variables
  public/images/  optimised photos
  docs/           these documents
```
