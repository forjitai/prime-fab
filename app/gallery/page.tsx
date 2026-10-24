import type { Metadata } from "next";
import Link from "next/link";
import { gallery } from "@/content/pages";
import { categories, itemsIn, itemHref } from "@/content/catalog";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageFrame } from "@/components/media/ImageFrame";
import { QuoteButton } from "@/components/quote/QuoteButton";
import { Gallery } from "@/components/media/Gallery";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: gallery.meta.title,
  description: gallery.meta.description,
  alternates: { canonical: "/gallery" },
  openGraph: { title: `${gallery.meta.title} | PRIME FAB`, description: gallery.meta.description, url: "/gallery" },
};

/**
 * Photos page, reference-style: one tile per product type, grouped by category,
 * each linking to its product and offering a quote. Product photos come from
 * content/catalog.ts (images[0]); project photos from content/pages.ts.
 */
export default function GalleryPage() {
  return (
    <>
      <PageHero title={gallery.title} intro={gallery.intro} crumbs={[{ label: "Photos", href: "/gallery" }]} />

      {categories.map((c, n) => (
        <Section key={c.slug} tone={n % 2 ? "light" : "alt"} labelledBy={`photos-${c.slug}`}>
          <SectionHeading id={`photos-${c.slug}`} title={c.name} />
          <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {itemsIn(c.slug).map((i) => (
              <li key={i.slug} className="flex flex-col border border-line bg-card">
                <Link href={itemHref(i)} className="group block">
                  <ImageFrame src={i.images?.[0]} alt={i.name} ratio="1/1" sizes="(min-width:1024px) 22vw, 50vw" />
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
        </Section>
      ))}

      <Section labelledBy="project-photos">
        <SectionHeading id="project-photos" title="Project photos" intro="Finished jobs and work in progress." />
        <Gallery items={gallery.items} />
      </Section>

      <CTASection title={gallery.cta.title} text={gallery.cta.text} />
    </>
  );
}
