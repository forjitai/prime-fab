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
  // Neutral until offerings are confirmed. Edit once services are known.
  tagline: "Fabrication you can build on",
  description:
    "PRIME FAB is a fabrication business in Yentiganahalli, Karnataka. Call or WhatsApp to discuss your requirement.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",

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
    // Product sub-links are added here once offerings are confirmed.
    { label: "Products", href: "/products", children: [] as { label: string; href: string }[] },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ],

  /**
   * Confirmed products / services. EMPTY until the client confirms them.
   * Each entry becomes a homepage card, a nav link and a /products/[slug] page.
   * Example: { slug: "steel-gates", title: "Steel gates", summary: "…", image: "/images/products/steel-gates.webp" }
   */
  offerings: [] as { slug: string; title: string; summary: string; image?: string }[],

  legal: [{ label: "Privacy policy", href: "/privacy-policy" }],

  analytics: {
    gaId: process.env.NEXT_PUBLIC_GA_ID ?? "", // empty = analytics off
  },
} as const;

export type NavItem = (typeof site.nav)[number];
