/**
 * Optional About-page sections (reference: Team · Quality · Why us · Infrastructure · Clients).
 *
 * EVERY section is hidden while empty. Fill in only what the owner supplies —
 * never invent team sizes, machinery, certifications or client names.
 *
 * Examples of what to put:
 *   team:          ["Our fabricators have …", "…"]
 *   quality:       ["We check every frame for …"]
 *   whyUs:         ["Made to your exact sizes", "…"]          (short bullet points)
 *   facilities:    [{ src: "/images/about/workshop.webp", caption: "Our workshop" }]
 *   clients:       ["Name of a housing project", "…"]          (only with the client's permission)
 */
export const company = {
  team: [] as string[],
  quality: [] as string[],
  whyUs: [] as string[],
  facilities: [] as { src: string; caption: string }[],
  clients: [] as string[],
};
