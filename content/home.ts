/**
 * Homepage copy. Edit text here — no need to touch components.
 *
 * Lines tagged PROPOSED are wording written for PRIME FAB that the client has
 * NOT yet confirmed. Replace or approve each before launch (see docs/content-approval.md).
 */

export const home = {
  meta: {
    title: "PRIME FAB | uPVC Windows & Doors in Yentiganahalli, Karnataka",
    description:
      "PRIME FAB makes uPVC windows and doors to measure in Yentiganahalli, Karnataka 562123. Call +91 88615 55722 or WhatsApp for a quote.",
  },

  hero: {
    heading: "uPVC windows and doors, made to your measurements",   // PROPOSED
    intro:
      "Tell us about your openings. Call, WhatsApp or send the form, and PRIME FAB will get back to you to talk it through and quote.", // PROPOSED
    location: "Yentiganahalli, Karnataka",
    formTitle: "Ask for a quote",
  },

  offerings: {
    heading: "What we make",
    intro: "PRIME FAB makes uPVC windows and doors. Tap either one for details.", // PROPOSED
  },

  process: {
    heading: "How a job works",                                       // PROPOSED — whole section
    steps: [
      { title: "Tell us what you need", text: "Call, WhatsApp or use the form. Photos or rough sizes of your openings help." },
      { title: "Discuss and quote", text: "We go over the details with you and give you a price before any work starts." },
      { title: "We make it", text: "Your windows and doors are made to the agreed sizes and finish." },
      { title: "Handover", text: "We hand over the finished work and answer any questions." },
    ],
  },

  gallery: {
    heading: "Recent work",
    intro: "A few jobs from the workshop.",                           // PROPOSED
    cta: "See all photos",
  },

  findUs: {
    heading: "Visit or call",
    intro: "Find PRIME FAB using the address below, or call ahead and we'll guide you in.", // PROPOSED
  },

  cta: {
    title: "Need new windows or doors?",
    text: "Call or WhatsApp PRIME FAB to talk it through.",
  },
} as const;
