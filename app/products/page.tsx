import type { Metadata } from "next";
import { ClipboardList } from "lucide-react";
import { site } from "@/config/site";
import { products } from "@/content/pages";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Container";
import { ProductCard } from "@/components/cards/ProductCard";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: { absolute: `${products.meta.title} | PRIME FAB` },
  description: products.meta.description,
  alternates: { canonical: "/products" },
  openGraph: { title: products.meta.title, description: products.meta.description, url: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      <PageHero title={products.title} intro={products.intro} crumbs={[{ label: "Products", href: "/products" }]} />
      <Section>
        {site.offerings.length > 0 ? (
          <div className={`grid gap-6 sm:grid-cols-2 ${site.offerings.length > 2 ? "lg:grid-cols-3" : ""}`}>
            {site.offerings.map((o) => (
              <ProductCard
                key={o.slug}
                title={o.title}
                summary={o.summary}
                href={`/products/${o.slug}`}
                image={o.image}
                imageAlt={o.title}
              />
            ))}
          </div>
        ) : (
          <div className="flex gap-4 border-2 border-dashed border-line p-6 sm:p-8">
            <ClipboardList aria-hidden className="mt-1 shrink-0 text-secondary" />
            <p>{products.emptyNotice}</p>
          </div>
        )}
      </Section>
      <CTASection title={products.cta.title} text={products.cta.text} />
    </>
  );
}
