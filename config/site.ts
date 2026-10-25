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
    smsHref: `sms:+${phoneDigits}`,
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
    mapHref: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressLine)}`,
  },

  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    {
      label: "Products",
      href: "/products",
      children: [
        { label: "uPVC Windows", href: "/products/upvc-windows" },
        { label: "uPVC Doors", href: "/products/upvc-doors" },
      ],
    },
    { label: "Photos", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ],

  /**
   * Product categories (client confirmed uPVC windows & doors, 25 Oct 2026).
   * The individual window/door types live in content/catalog.ts.
   */
  offerings: [
    { slug: "upvc-windows", title: "uPVC Windows", summary: "Sliding, casement, fixed, tilt and turn, top hung, ventilators and mesh windows.", image: undefined },
    { slug: "upvc-doors", title: "uPVC Doors", summary: "Sliding, casement, French, slide and fold and mosquito mesh doors.", image: undefined },
  ] as { slug: string; title: string; summary: string; image?: string }[],

  /**
   * Business profile box (homepage, About). Leave null to hide a row — never guess.
   */
  profile: {
    natureOfBusiness: null as string | null, // e.g. "Manufacturer", "Manufacturer and installer"
    established: null as string | null, // e.g. "2019"
    gst: null as string | null, // e.g. "29XXXXX0000X1ZX"
    contactPerson: null as string | null, // e.g. "Name (Owner)"
    legalStatus: null as string | null, // e.g. "Proprietorship", "Partnership"
    teamSize: null as string | null, // e.g. "10 to 15 people"
    serviceArea: null as string | null, // e.g. "Bengaluru Rural and Bengaluru Urban"
    paymentModes: null as string | null, // e.g. "Cash, UPI, bank transfer"
  },

  // schema.org type for LocalBusiness JSON-LD (business category now confirmed).
  businessType: "HomeAndConstructionBusiness",

  legal: [
    { label: "Site map", href: "/site-map" },
    { label: "Privacy policy", href: "/privacy-policy" },
  ],

  // Search engines are blocked until this is "true" in production (set at launch).
  allowIndexing: process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true",

  analytics: {
    gaId: process.env.NEXT_PUBLIC_GA_ID ?? "", // empty = analytics off
  },
} as const;

export type NavItem = (typeof site.nav)[number];
