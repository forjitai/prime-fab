import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/config/site";
import { categoryOf, itemsIn, type CategorySlug } from "@/content/catalog";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { CatalogSidebar } from "./CatalogSidebar";
import { ProductBlock } from "./ProductBlock";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";

export function categoryMetadata(slug: CategorySlug): Metadata {
  const c = categoryOf(slug);
  const types = itemsIn(slug)
    .map((i) => i.name.replace(/^uPVC /, "").toLowerCase())
    .slice(0, 4)
    .join(", ");
  const title = `${c.name} in Yentiganahalli, Karnataka | ${site.name}`;
  const description = `${c.name} by ${site.name}: ${types} and more, made to measure. Yentiganahalli, Karnataka 562123. Call ${site.contact.phoneDisplay} for a quote.`;
  const path = `/products/${slug}`;
  return { title: { absolute: title }, description, alternates: { canonical: path }, openGraph: { title, description, url: path } };
}

export function CategoryPage({ slug }: { slug: CategorySlug }) {
  const c = categoryOf(slug);
  const items = itemsIn(slug);
  // ItemList of the types on this page — names only; no prices or ratings.
  const listLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: c.name,
    itemListElement: items.map((i, n) => ({
      "@type": "ListItem",
      position: n + 1,
      name: i.name,
      url: `${site.url}/products/${slug}#${i.slug}`,
    })),
  };

  return (
    <>
      <JsonLd data={listLd} />
      <PageHero
        title={c.name}
        intro={c.intro}
        crumbs={[
          { label: "Products", href: "/products" },
          { label: c.name, href: `/products/${slug}` },
        ]}
      />
      <section className="bg-section py-10 sm:py-14">
        <Container className="grid gap-8 lg:grid-cols-[17rem_minmax(0,1fr)] lg:gap-10">
          <CatalogSidebar current={slug} />
          <div className="grid content-start gap-8">
            <nav aria-label={`${c.name} types`} className="flex flex-wrap gap-2">
              {items.map((i) => (
                <Link
                  key={i.slug}
                  href={`#${i.slug}`}
                  className="border border-line bg-card px-3 py-1.5 text-sm font-medium text-heading hover:border-primary"
                >
                  {i.name.replace(/^uPVC /, "")}
                </Link>
              ))}
            </nav>
            {items.map((i, n) => (
              <ProductBlock key={i.slug} item={i} priority={n === 0} />
            ))}
          </div>
        </Container>
      </section>
      <CTASection title={`Get a quote for ${c.name.toLowerCase().replace("upvc", "uPVC")}`} text="Send your sizes or a photo of the opening on WhatsApp, or call us." />
    </>
  );
}
