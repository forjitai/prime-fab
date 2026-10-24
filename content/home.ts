/**
 * Homepage copy. Edit text here — no need to touch components.
 *
 * Lines tagged PROPOSED are wording written for PRIME FAB that the client has
 * NOT yet confirmed. Replace or approve each before launch (see docs/content-approval.md).
 * Layout follows the client's reference (upvcalphawindows.com): welcome + business
 * profile, quick links, product range, about, enquiry form, photos, contact.
 */

export const home = {
  meta: {
    title: "PRIME FAB | uPVC Windows & Doors in Yentiganahalli, Karnataka",
    description:
      "PRIME FAB makes uPVC windows and doors to measure in Yentiganahalli, Karnataka 562123: sliding, casement, French, mesh and more. Call +91 88615 55722 for a quote.",
  },

  hero: {
    heading: "Welcome to PRIME FAB",
    intro:
      "uPVC windows and doors made to the size of your openings. Tell us what you need and get a quote by phone or WhatsApp.", // PROPOSED
    location: "Yentiganahalli, Karnataka",
    profileTitle: "Business profile",
  },

  quickLinksTitle: "Popular products",

  range: {
    heading: "Our product range",
    intro: "Tap a type to see details, or ask for a quote straight away.", // PROPOSED
  },

  about: {
    heading: "About PRIME FAB",
    // PROPOSED — replace with the owner's own words.
    text: "PRIME FAB makes uPVC windows and doors to order for homes and buildings in and around Yentiganahalli. Every job starts with your opening sizes and what you need, and you get a price before anything is made.",
    more: "More about us",
  },

  enquiry: {
    heading: "Tell us what you are looking for",
    intro: "Fill in your requirement and we'll call you back with a quote.",
  },

  gallery: {
    heading: "Photo gallery",
    cta: "See all photos",
  },

  findUs: {
    heading: "Contact us",
    intro: "Call or WhatsApp for the quickest reply, or visit using the directions below.", // PROPOSED
  },

  cta: {
    title: "Need new windows or doors?",
    text: "Call or WhatsApp PRIME FAB to talk it through.",
  },
} as const;
