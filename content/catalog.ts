/**
 * PRIME FAB product catalogue — the single list behind every product page,
 * the sidebar, the homepage grid, the quick links and the quote form.
 *
 * ⚠ TO CONFIRM WITH CLIENT: client confirmed "uPVC windows and doors only" but has
 * not yet said WHICH types. These are the common uPVC types sold in India. Delete
 * any PRIME FAB doesn't make, add any missing, and set `confirmed: true`.
 *
 * Descriptions explain what each TYPE is (how it opens, where it's used) — they are
 * general facts, not PRIME FAB claims. No prices, specs, brands or warranties until supplied.
 * Add `price` (e.g. "₹ 450 / sq ft") and `images` when the client provides them.
 */

export type CategorySlug = "upvc-windows" | "upvc-doors";

export type CatalogItem = {
  slug: string;
  name: string;
  category: CategorySlug;
  openingStyle: string;
  description: string;
  usedFor: string;
  price?: string;
  images?: string[];
  confirmed: boolean;
};

export const categories: { slug: CategorySlug; name: string; singular: string; intro: string }[] = [
  {
    slug: "upvc-windows",
    name: "uPVC Windows",
    singular: "uPVC window",
    intro: "uPVC windows made to the size of your openings. Choose a type below and tap Get Best Quote.",
  },
  {
    slug: "upvc-doors",
    name: "uPVC Doors",
    singular: "uPVC door",
    intro: "uPVC doors made to the size of your openings. Choose a type below and tap Get Best Quote.",
  },
];

export const catalog: CatalogItem[] = [
  // ---- Windows ----
  {
    slug: "upvc-sliding-window",
    name: "uPVC Sliding Window",
    category: "upvc-windows",
    openingStyle: "Sliding (2 or 3 track)",
    description: "Glass panels slide sideways on tracks, so the window opens without swinging into the room or outside.",
    usedFor: "Bedrooms, living rooms and balconies where space is tight",
    confirmed: false,
  },
  {
    slug: "upvc-casement-window",
    name: "uPVC Casement Window",
    category: "upvc-windows",
    openingStyle: "Side-hinged, opens outward or inward",
    description: "Hinged at the side and opens fully like a door, letting in the most air of any window type.",
    usedFor: "Rooms that need good ventilation",
    confirmed: false,
  },
  {
    slug: "upvc-fixed-window",
    name: "uPVC Fixed Window",
    category: "upvc-windows",
    openingStyle: "Does not open",
    description: "A frame with fixed glass for light and view only. Often combined with opening sections.",
    usedFor: "Staircases, large glazed walls, above doors",
    confirmed: false,
  },
  {
    slug: "upvc-tilt-and-turn-window",
    name: "uPVC Tilt and Turn Window",
    category: "upvc-windows",
    openingStyle: "Tilts in at the top, or swings in from the side",
    description: "One handle switches between tilting open for ventilation and swinging fully open for cleaning.",
    usedFor: "Apartments and upper floors",
    confirmed: false,
  },
  {
    slug: "upvc-top-hung-window",
    name: "uPVC Top Hung Window",
    category: "upvc-windows",
    openingStyle: "Hinged at the top, opens outward",
    description: "Opens outward from the bottom, so it can stay open for air even when it's raining lightly.",
    usedFor: "Kitchens and small openings",
    confirmed: false,
  },
  {
    slug: "upvc-ventilator-window",
    name: "uPVC Ventilator",
    category: "upvc-windows",
    openingStyle: "Small top-hung or louvre opening",
    description: "A small window for steady airflow and privacy, often with frosted glass and an exhaust fan cut-out.",
    usedFor: "Bathrooms and toilets",
    confirmed: false,
  },
  {
    slug: "upvc-sliding-window-with-mesh",
    name: "uPVC Sliding Window with Mosquito Mesh",
    category: "upvc-windows",
    openingStyle: "Sliding, with a separate mesh shutter",
    description: "A sliding window with an extra track for a mosquito mesh shutter, so you can keep the glass open and insects out.",
    usedFor: "Bedrooms and any room kept open for air",
    confirmed: false,
  },
  // ---- Doors ----
  {
    slug: "upvc-sliding-door",
    name: "uPVC Sliding Door",
    category: "upvc-doors",
    openingStyle: "Sliding (2 or 3 track)",
    description: "Large glass panels slide sideways, giving a wide opening without a door swinging into the room.",
    usedFor: "Balconies, terraces and living rooms",
    confirmed: false,
  },
  {
    slug: "upvc-casement-door",
    name: "uPVC Casement Door",
    category: "upvc-doors",
    openingStyle: "Hinged, single or double leaf",
    description: "A hinged door that swings open like a regular door, available with full glass or part panel.",
    usedFor: "Balconies, utility areas and side entrances",
    confirmed: false,
  },
  {
    slug: "upvc-french-door",
    name: "uPVC French Door",
    category: "upvc-doors",
    openingStyle: "Two hinged leaves opening from the centre",
    description: "A pair of glazed doors that open from the middle with no central post, for a wide, open look.",
    usedFor: "Living rooms opening onto gardens or balconies",
    confirmed: false,
  },
  {
    slug: "upvc-slide-and-fold-door",
    name: "uPVC Slide and Fold Door",
    category: "upvc-doors",
    openingStyle: "Panels fold and stack to one side",
    description: "Several panels fold against each other and slide aside, opening almost the full width of the wall.",
    usedFor: "Wide openings to terraces and gardens",
    confirmed: false,
  },
  {
    slug: "upvc-mesh-door",
    name: "uPVC Mosquito Mesh Door",
    category: "upvc-doors",
    openingStyle: "Hinged or sliding mesh shutter",
    description: "A uPVC-framed mesh door that keeps insects out while letting air through.",
    usedFor: "Kitchens, balconies and main doors",
    confirmed: false,
  },
];

export const itemsIn = (c: CategorySlug) => catalog.filter((i) => i.category === c);
export const categoryOf = (c: CategorySlug) => categories.find((x) => x.slug === c)!;
export const itemHref = (i: CatalogItem) => `/products/${i.category}#${i.slug}`;
