import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { site } from "@/config/site";

export type Crumb = { label: string; href: string };

/** Visible breadcrumb trail + matching BreadcrumbList JSON-LD. The last crumb is the current page. */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all = [{ label: "Home", href: "/" }, ...items];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: new URL(c.href, site.url).toString(),
    })),
  };
  return (
    <nav aria-label="Breadcrumb" className="t-caption">
      <ol className="flex flex-wrap items-center gap-1.5">
        {all.map((c, i) => {
          const last = i === all.length - 1;
          return (
            <li key={c.href} className="flex items-center gap-1.5">
              {last ? (
                <span aria-current="page" className="text-current opacity-90">
                  {c.label}
                </span>
              ) : (
                <Link href={c.href} className="underline-offset-4 hover:underline">
                  {c.label}
                </Link>
              )}
              {!last && <ChevronRight aria-hidden size={14} />}
            </li>
          );
        })}
      </ol>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </nav>
  );
}
