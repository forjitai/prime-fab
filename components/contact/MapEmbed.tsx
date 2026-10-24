import { site } from "@/config/site";

/**
 * Google Maps embed located by Plus Code + locality (no invented coordinates).
 * Lazy-loaded so it doesn't slow the first screen.
 */
export function MapEmbed() {
  const q = encodeURIComponent(`${site.address.plusCode}, ${site.address.locality}, ${site.address.region} ${site.address.postalCode}`);
  return (
    <div className="chamfer-lg relative h-full min-h-80 overflow-hidden border border-line bg-section lg:min-h-full">
      <iframe
        title={`Map showing ${site.name} in ${site.address.locality}`}
        src={`https://maps.google.com/maps?q=${q}&z=15&output=embed`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 h-full w-full border-0"
      />
    </div>
  );
}
