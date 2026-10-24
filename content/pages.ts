/**
 * Inner-page copy. Lines tagged PROPOSED await client approval
 * (listed in docs/content-approval.md). No invented facts.
 */

export const about = {
  meta: {
    title: "About PRIME FAB",
    description:
      "About PRIME FAB, a fabrication business in Yentiganahalli, Karnataka 562123. Call +91 88615 55722 to talk about your job.",
  },
  title: "About PRIME FAB",
  intro: "A fabrication business in Yentiganahalli, Karnataka.",
  // PROPOSED — replace with the owner's own story (when started, who runs it, what jobs you take on).
  story: [
    "PRIME FAB makes fabricated work to order for customers in and around Yentiganahalli.",
    "Every job starts with a conversation about what you need, the size and the finish, so you know the price before work begins.",
  ],
  approachTitle: "How we work",
  // PROPOSED
  approach: [
    { title: "Straight answers", text: "You talk directly to the people doing the work, by phone or WhatsApp." },
    { title: "Price agreed first", text: "You get a quote before anything is made." },
    { title: "Made to measure", text: "Work is fabricated to your sizes rather than off-the-shelf." },
  ],
  cta: { title: "Talk to PRIME FAB", text: "Call or WhatsApp to discuss your job." },
} as const;

export const products = {
  meta: {
    title: "Products and services",
    description:
      "Products and services from PRIME FAB, Yentiganahalli, Karnataka. Call +91 88615 55722 or WhatsApp for a quote.",
  },
  title: "Products and services",
  intro: "What PRIME FAB makes. Tap any item for details, or ask about something not listed.", // PROPOSED
  emptyNotice:
    "The full list of products and services is being added. In the meantime, call or WhatsApp to ask about any fabrication job.",
  cta: { title: "Not sure what you need?", text: "Describe the job and we'll tell you what's possible." },
} as const;

export const gallery = {
  meta: {
    title: "Gallery",
    description: "Photos of fabrication work by PRIME FAB, Yentiganahalli, Karnataka.",
  },
  title: "Gallery",
  intro: "Photos of finished jobs and work in progress.", // PROPOSED
  // Add photos to public/images/gallery and list them here: { src, alt, caption? }
  items: Array.from({ length: 9 }, (_, i) => ({ alt: `PRIME FAB project photo ${i + 1}` })) as {
    src?: string;
    alt: string;
    caption?: string;
  }[],
  cta: { title: "Want something similar?", text: "Send us a photo of what you have in mind." },
} as const;

export const contact = {
  meta: {
    title: "Contact PRIME FAB",
    description:
      "Contact PRIME FAB: 387X+RM9, Yentiganahalli, Karnataka 562123. Phone +91 88615 55722. Call, WhatsApp, get directions or send an enquiry.",
  },
  title: "Contact PRIME FAB",
  intro: "Call or WhatsApp for the quickest reply, or send the form and we'll call you back.",
  detailsTitle: "Phone, WhatsApp and address",
  formTitle: "Send an enquiry",
  mapTitle: "Find us",
} as const;
