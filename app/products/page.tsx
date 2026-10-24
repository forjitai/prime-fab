import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { categories, itemsIn } from "@/content/catalog";
import { products } from "@/content/pages";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { CatalogSidebar } from "@/components/catalog/CatalogSidebar";
import { ImageFrame } from "@/components/media/ImageFrame";
import { QuoteButton } from "@/components/quote/QuoteButton";
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
      <section className="bg-section py-10 sm:py-14">
        <Container className="grid gap-8 lg:grid-cols-[17rem_minmax(0,1fr)] lg:gap-10">
          <CatalogSidebar />
          <div className="grid content-start gap-12">
            {categories.map((c) => (
              <section key={c.slug} aria-labelledby={`cat-${c.slug}`}>
                <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
                  <h2 id={`cat-${c.slug}`} className="t-h2">
                    {c.name}
                  </h2>
                  <Link href={`/products/${c.slug}`} className="inline-flex items-center gap-1.5 font-semibold text-heading hover:underline">
                    View all {c.name.toLowerCase().replace("upvc", "uPVC")}
                    <ArrowRight aria-hidden size={18} />
                  </Link>
                </div>
                <ul className="grid grid-cols-2 gap-4 md:grid-cols-3">
                  {itemsIn(c.slug).map((i) => (
                    <li key={i.slug} className="flex flex-col border border-line bg-card">
                      <Link href={`/products/${c.slug}#${i.slug}`} className="group block">
                        <ImageFrame src={i.images?.[0]} alt={i.name} ratio="4/3" sizes="(min-width:768px) 25vw, 50vw" />
                        <h3 className="px-4 pt-3 font-bold leading-snug text-heading group-hover:underline">{i.name}</h3>
                      </Link>
                      <p className="t-caption px-4 pt-1">{i.price ?? "Price on request"}</p>
                      <div className="mt-auto p-4 pt-3">
                        <QuoteButton product={i.name} variant="secondary" className="!min-h-10 w-full !px-3 !py-2 text-sm">
                          Get Quote
                        </QuoteButton>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </Container>
      </section>
      <CTASection title={products.cta.title} text={products.cta.text} />
    </>
  );
}
