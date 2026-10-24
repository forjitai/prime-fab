/**
 * Product detail page copy. Confirmed: PRIME FAB makes uPVC windows and doors.
 * Lines tagged PROPOSED need the owner's confirmation (styles offered,
 * colours, glass options, whether installation is included). No specs,
 * prices, warranties or certifications are stated until supplied.
 */

export type ProductContent = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  title: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
  askAbout: string[];
};

export const productContent: ProductContent[] = [
  {
    slug: "upvc-windows",
    metaTitle: "uPVC Windows in Yentiganahalli, Karnataka | PRIME FAB",
    metaDescription:
      "uPVC windows made to measure by PRIME FAB, Yentiganahalli, Karnataka 562123. Call +91 88615 55722 or WhatsApp for a quote.",
    title: "uPVC windows",
    intro: "Windows made by PRIME FAB to fit the openings in your home or building.", // PROPOSED
    sections: [
      {
        heading: "Made to your sizes",
        body: [
          // PROPOSED
          "Each window is made to the measurements of your opening, whether it's a new building or a replacement for old wooden or metal frames.",
        ],
      },
      {
        heading: "Why people choose uPVC",
        body: [
          // General material properties of uPVC, not PRIME FAB-specific claims.
          "uPVC frames don't rust like steel or rot like wood, and they only need wiping down to keep clean.",
        ],
      },
    ],
    // PROPOSED — questions customers can raise when they call.
    askAbout: ["Window styles and opening types", "Frame colours", "Glass options", "Mesh for mosquitoes", "Timelines and pricing"],
  },
  {
    slug: "upvc-doors",
    metaTitle: "uPVC Doors in Yentiganahalli, Karnataka | PRIME FAB",
    metaDescription:
      "uPVC doors made to measure by PRIME FAB, Yentiganahalli, Karnataka 562123. Call +91 88615 55722 or WhatsApp for a quote.",
    title: "uPVC doors",
    intro: "Doors made by PRIME FAB for entrances, balconies and other openings.", // PROPOSED
    sections: [
      {
        heading: "Made to your sizes",
        body: [
          // PROPOSED
          "Each door is made to fit your opening, so it suits both new construction and replacing an existing door.",
        ],
      },
      {
        heading: "Why people choose uPVC",
        body: [
          // General material properties of uPVC, not PRIME FAB-specific claims.
          "uPVC doesn't rust or rot and isn't damaged by termites, which makes it practical for balconies and wet areas.",
        ],
      },
    ],
    askAbout: ["Door styles and opening types", "Frame colours", "Glass and panel options", "Locks and handles", "Timelines and pricing"],
  },
];

export function getProduct(slug: string) {
  return productContent.find((p) => p.slug === slug);
}
