# Reference Analysis — upvcalphawindows.com

_25 Oct 2026 · Pages inspected: Home, About (profile.html), Products & Services (doors-and-windows.html), product category (upvc-window.html), service (window-installation-service.html), Photos, Contact (enquiry.html). Text extraction only — the reference's visual styling was not observable._

The reference is an **IndiaMART-hosted catalogue site**. Its value is the **structure**: every page funnels to "Get Best Quote". PRIME FAB keeps its own design system and copies no text, photos or data.

## Page-by-page gap analysis

| Reference feature | Where | PRIME FAB now | Plan |
|---|---|---|---|
| Top bar: location · GST · Send Email · phone | All pages | Not present | **R1** top bar: location, phone, WhatsApp; GST when supplied; no email (none given) |
| Product search box | All pages | Not present | **R1** client-side search over the catalogue |
| Main nav: Home · About · Products · Contact | All | ✅ plus Photos | Keep |
| Footer: Site Map · Photos · share icons | All | Site map ✅, no share | **R1** share links (WhatsApp, Facebook, X, LinkedIn) |
| Mobile quick actions | Mobile | Only floating WhatsApp | **R1** sticky bottom bar: Call · WhatsApp · Get Quote |
| Welcome + business profile | Home | ✅ (verified fields only) | Keep |
| Quick-link strip | Home | ✅ | Keep |
| Category tree sidebar | Product pages | ✅ | **R3** add contact block + photos to sidebar on inner pages |
| Product block: name, photos, price, details table, description, Get Best Quote, Request callback | Category pages | ✅ | Keep |
| "Yes! I am interested" closing CTA per product | Category pages | Not present | **R2** add |
| Richer details table (glass type, track, colour, hardware, mesh…) | Category pages | 4 safe rows | **R2** optional `specs` per item — shown only when supplied |
| Product brochure link | Some products | Not present | **R2** optional `brochure` per item |
| Photos grouped by product, each with name, price, Get Best Quote, link to product | Photos page | Generic grid | **R2** product-grouped photo page + general project photos |
| Company profile factsheet (nature of business, CEO, address, employees, GST date, legal status, turnover, banker, GST no., payment & shipment modes) | About | Not present | **R3** factsheet table; every row hidden until supplied |
| Our Team · Machinery · Quality · Why Us · Facilities · Clientele · Warehouse · Infrastructure | About | Story + "How we work" | **R3** optional sections, each hidden until text/photos supplied |
| Enquiry form at bottom of About | About | Not present | **R3** add |
| Contact details table + "describe your requirement like…" guidance | Contact | Details ✅ | **R4** add guidance prompts, SMS link, View map / Get directions |
| Installation service listing (location, mode, duration, type, payment) | Service page | Not present | **R4** only if PRIME FAB confirms it installs |

## Deliberately NOT copied

| Reference item | Reason |
|---|---|
| 12 city "Suppliers in Delhi/Noida/…" sections with duplicated text | Duplicate content; Google treats it as doorway spam |
| Response rate %, employee count, turnover, trust seals | IndiaMART-generated metrics; would be invented for PRIME FAB |
| Coordinates-based map link | Brief forbids inventing coordinates; Plus Code used instead |
| Aluminium, glass partition, skylight categories | PRIME FAB confirmed uPVC windows and doors only |
| Fake success message | Our form only says "sent" when delivery actually succeeds |

## Phases

| Phase | Scope | Needs from client |
|---|---|---|
| **R1** Global | Top bar · product search · mobile action bar · share links | Nothing |
| **R2** Products & photos | "Yes! I am interested" · optional specs & brochure · product-grouped Photos page | Photos, prices, specs (optional) |
| **R3** About & sidebar | Company profile factsheet · optional team/quality/why-us/infrastructure/clients · enquiry form · sidebar contact block | Profile details, story |
| **R4** Contact & services | Quote guidance · SMS · map links · installation service (if confirmed) | Do you install? |

Each phase: build → Playwright at phone/tablet/desktop → screenshots → push → Vercel status = success.
