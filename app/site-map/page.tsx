import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/config/site";
import { categories, itemsIn } from "@/content/catalog";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Site map",
  description: `Every page on the ${site.name} website: uPVC windows, uPVC doors, photos and contact details.`,
  alternates: { canonical: "/site-map" },
};

export default function SiteMapPage() {
  const linkCls = "prose-link";
  return (
    <>
      <PageHero title="Site map" crumbs={[{ label: "Site map", href: "/site-map" }]} />
      <Section>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h2 className="t-h3 mb-3">Pages</h2>
            <ul className="grid gap-2">
              {[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Products", href: "/products" }, { label: "Photos", href: "/gallery" }, { label: "Contact", href: "/contact" }, { label: "Privacy policy", href: "/privacy-policy" }].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkCls}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {categories.map((c) => (
            <div key={c.slug}>
              <h2 className="t-h3 mb-3">
                <Link href={`/products/${c.slug}`} className={linkCls}>
                  {c.name}
                </Link>
              </h2>
              <ul className="grid gap-2">
                {itemsIn(c.slug).map((i) => (
                  <li key={i.slug}>
                    <Link href={`/products/${c.slug}#${i.slug}`} className={linkCls}>
                      {i.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
