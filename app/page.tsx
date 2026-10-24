import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { site } from "@/config/site";
import { home } from "@/content/home";
import { catalog, categories, itemsIn, itemHref } from "@/content/catalog";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { HeroSection } from "@/components/sections/HeroSection";
import { ImageFrame } from "@/components/media/ImageFrame";
import { QuoteButton } from "@/components/quote/QuoteButton";
import { Gallery } from "@/components/media/Gallery";
import { CTASection } from "@/components/sections/CTASection";
import { ContactDetails } from "@/components/contact/ContactDetails";
import { MapEmbed } from "@/components/contact/MapEmbed";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { SiteJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: { absolute: home.meta.title },
  description: home.meta.description,
  alternates: { canonical: "/" },
  openGraph: { title: home.meta.title, description: home.meta.description, url: "/" },
};

// Gallery preview: add real files under public/images/gallery and list them here.
const galleryPreview = Array.from({ length: 6 }, (_, i) => ({ alt: `PRIME FAB project photo ${i + 1}` }));

export default function HomePage() {
  return (
    <>
      <SiteJsonLd />
      <HeroSection />

      {/* Quick-link strip, like the reference */}
      <nav aria-label={home.quickLinksTitle} className="border-b border-line bg-card">
        <Container className="flex gap-2 overflow-x-auto py-3 [scrollbar-width:thin]">
          {catalog.slice(0, 8).map((i) => (
            <Link
              key={i.slug}
              href={itemHref(i)}
              className="shrink-0 border border-line px-3 py-1.5 text-sm font-medium whitespace-nowrap text-heading hover:border-primary"
            >
              {i.name}
            </Link>
          ))}
        </Container>
      </nav>

      {/* Product range */}
      <Section tone="alt" labelledBy="range-title">
        <SectionHeading id="range-title" title={home.range.heading} intro={home.range.intro} />
        <div className="grid gap-14">
          {categories.map((c) => (
            <section key={c.slug} aria-labelledby={`home-${c.slug}`}>
              <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
                <h3 id={`home-${c.slug}`} className="t-h3 text-2xl">
                  {c.name}
                </h3>
                <Link href={`/products/${c.slug}`} className="inline-flex items-center gap-1.5 font-semibold text-heading hover:underline">
                  View all
                  <ArrowRight aria-hidden size={18} />
                </Link>
              </div>
              <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                {itemsIn(c.slug).map((i) => (
                  <li key={i.slug} className="flex flex-col border border-line bg-card">
                    <Link href={itemHref(i)} className="group block">
                      <ImageFrame src={i.images?.[0]} alt={i.name} ratio="4/3" sizes="(min-width:1024px) 22vw, 50vw" />
                      <h4 className="px-4 pt-3 font-bold leading-snug text-heading group-hover:underline">{i.name}</h4>
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
      </Section>

      {/* About + enquiry form */}
      <Section labelledBy="enquiry-title">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <div>
            <SectionHeading title={home.about.heading} />
            <p className="max-w-xl text-lg">{home.about.text}</p>
            <ButtonLink href="/about" variant="ghost" className="mt-6">
              {home.about.more}
            </ButtonLink>
          </div>
          <div className="border border-line bg-card p-6 shadow-sm sm:p-8">
            <h2 id="enquiry-title" className="t-h3 text-2xl">
              {home.enquiry.heading}
            </h2>
            <p className="t-caption mt-1 mb-6">{home.enquiry.intro}</p>
            <EnquiryForm idPrefix="home" inquiryTypes={catalog.map((c) => c.name)} />
          </div>
        </div>
      </Section>

      {/* Photos */}
      <Section tone="alt" labelledBy="gallery-title">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading id="gallery-title" title={home.gallery.heading} />
          <ButtonLink href="/gallery" variant="ghost" className="mb-10 self-start sm:mb-14 sm:self-auto">
            {home.gallery.cta}
          </ButtonLink>
        </div>
        <Gallery items={galleryPreview} />
      </Section>

      {/* Contact */}
      <Section labelledBy="findus-title">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <div>
            <SectionHeading id="findus-title" title={home.findUs.heading} intro={home.findUs.intro} />
            <p className="mb-4 text-lg font-semibold text-heading">{site.name}</p>
            <ContactDetails />
          </div>
          <MapEmbed />
        </div>
      </Section>

      <CTASection title={home.cta.title} text={home.cta.text} />
    </>
  );
}
