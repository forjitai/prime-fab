# PRIME FAB website

Next.js (App Router) + TypeScript + Tailwind CSS. Hosted on Vercel.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run start
npm run lint
```

## Where things live

| What | Where |
|---|---|
| Business name, phone, WhatsApp, address, nav | `config/site.ts` |
| Theme colours, chamfer size | `app/globals.css` (`:root`) |
| Reusable components | `components/` |
| Design system preview | `/style-guide` |
| Project docs (audit, plans, inventories) | `docs/` |

## Environment variables

| Name | Required | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Yes in production | Canonical URLs, sitemap, Open Graph |
| `NEXT_PUBLIC_ALLOW_INDEXING` | At launch | Set to `true` to let Google index the site; anything else blocks indexing |
| `NEXT_PUBLIC_GA_ID` | No | Google Analytics 4 ID; analytics off when empty |
| `ENQUIRY_ENDPOINT` | No | Server-side form relay URL; form shows "call or WhatsApp" when unset |
| `ENQUIRY_ACCESS_KEY` | No | Key for that relay (server only, never exposed) |

Never commit `.env*` files.
