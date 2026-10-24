/**
 * PRIME FAB — central business configuration.
 * Change details here and they update across the whole site.
 * Only verified information belongs in this file.
 */

const phoneDigits = "918861555722"; // +91 88615 55722 (from client brief)

// ⚠ UNVERIFIED: the brief gives a different number for WhatsApp
// (…557722 vs …555722). Confirm with the client before launch.
const whatsappDigits = "918861557722";

const addressLine = "387X+RM9, Yentiganahalli, Karnataka 562123, India";

export const site = {
  name: "PRIME FAB",
  tagline: "uPVC windows and doors",
  // Confirmed by client 25 Oct 2026: uPVC windows and doors only.
  description:
    "PRIME FAB makes uPVC windows and doors in Yentiganahalli, Karnataka. Call or WhatsApp to discuss your requirement.",
  // Explicit URL wins; on Vercel, fall back to the project's production domain automatically.
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),

  contact: {
    phoneDisplay: "+91 88615 55722",
    phoneHref: `tel:+${phoneDigits}`,
    whatsappDisplay: "+91 88615 57722",
    whatsappHref: `https://wa.me/${whatsappDigits}`,
    whatsappVerified: false,
    email: null as string | null, // not provided — do not invent
  },

  address: {
    full: addressLine,
    plusCode: "387X+RM9",
    locality: "Yentiganahalli",
    region: "Karnataka",
    postalCode: "562123",
    country: "IN",
    // Directions by Plus Code + locality; verified in Phase 6.
    directionsHref: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(addressLine)}`,
  },

  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    {
      label: "Products",
      href: "/products",
      children: [
        { label: "uPVC windows", href: "/products/upvc-windows" },
        { label: "uPVC doors", href: "/products/upvc-doors" },
      ],
    },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ],

  /**
   * Confirmed products (client, 25 Oct 2026). Each becomes a homepage card,
   * a /products/<slug> page. Copy lives in content/products.ts; each slug also needs
   * a two-line route file at app/products/<slug>/page.tsx (copy an existing one).
   * Add `image` once photos are supplied, e.g. "/images/products/upvc-windows.webp".
   */
  offerings: [
    {
      slug: "upvc-windows",
      title: "uPVC windows",
      summary: "Windows made to the size of your openings, for new homes and replacements.",
      image: undefined,
    },
    {
      slug: "upvc-doors",
      title: "uPVC doors",
      summary: "Doors made to measure for your entrances, balconies and other openings.",
      image: undefined,
    },
  ] as { slug: string; title: string; summary: string; image?: string }[],

  // schema.org type for LocalBusiness JSON-LD (business category now confirmed).
  businessType: "HomeAndConstructionBusiness",

  legal: [{ label: "Privacy policy", href: "/privacy-policy" }],

  // Search engines are blocked until this is "true" in production (set at launch).
  allowIndexing: process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true",

  analytics: {
    gaId: process.env.NEXT_PUBLIC_GA_ID ?? "", // empty = analytics off
  },
} as const;

export type NavItem = (typeof site.nav)[number];
