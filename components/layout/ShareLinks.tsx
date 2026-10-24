import { site } from "@/config/site";

/** Plain share links (no third-party scripts or tracking). */
export function ShareLinks() {
  const url = encodeURIComponent(site.url);
  const text = encodeURIComponent(`${site.name} — uPVC windows and doors, ${site.address.locality}`);
  const links = [
    { label: "WhatsApp", href: `https://wa.me/?text=${text}%20${url}` },
    { label: "Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${url}` },
    { label: "X", href: `https://twitter.com/intent/tweet?url=${url}&text=${text}` },
    { label: "LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${url}` },
  ];
  return (
    <div>
      <h2 className="mb-3 font-bold text-white">Share this site</h2>
      <ul className="flex flex-wrap gap-2">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Share on ${l.label}`}
              className="inline-block border border-white/25 px-3 py-1.5 text-sm hover:border-white hover:text-white"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
