import type { Metadata } from "next";
import { ClipboardList } from "lucide-react";
import { site } from "@/config/site";
import { home } from "@/content/home";
import { Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProductCard } from "@/components/cards/ProductCard";
import { Gallery } from "@/components/media/Gallery";
import { CTASection } from "@/components/sections/CTASection";
import { ContactDetails } from "@/components/contact/ContactDetails";
import { MapEmbed } from "@/components/contact/MapEmbed";
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

      {/* What we make */}
      <Section labelledBy="offerings-title">
        <SectionHeading id="offerings-title" title={home.offerings.heading} intro={home.offerings.intro} />
        {site.offerings.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
          // Pre-launch only: shown until offerings are added in config/site.ts.
          <div className="flex gap-4 border-2 border-dashed border-line p-6 sm:p-8">
            <ClipboardList aria-hidden className="mt-1 shrink-0 text-secondary" />
            <p>
              Your products and services will appear here as cards with photos once you confirm them.
              Until then, visitors can ask about any job by phone or WhatsApp.
            </p>
          </div>
        )}
      </Section>

      {/* How a job works — a genuine sequence, so numbered */}
      <Section tone="alt" labelledBy="process-title">
        <SectionHeading id="process-title" title={home.process.heading} />
        <ol className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {home.process.steps.map((s, i) => (
            <li key={s.title} className="bg-card p-6 sm:p-8">
              <span
                aria-hidden
                className="block text-5xl font-extrabold leading-none text-accent"
                style={{ fontStretch: "125%" }}
              >
                {i + 1}
              </span>
              <h3 className="t-h3 mt-6">{s.title}</h3>
              <p className="mt-2">{s.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Recent work */}
      <Section labelledBy="gallery-title">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading id="gallery-title" title={home.gallery.heading} intro={home.gallery.intro} />
          <ButtonLink href="/gallery" variant="ghost" className="mb-10 self-start sm:mb-14 sm:self-auto">
            {home.gallery.cta}
          </ButtonLink>
        </div>
        <Gallery items={galleryPreview} />
      </Section>

      {/* Find us */}
      <Section tone="alt" labelledBy="findus-title">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <div>
            <SectionHeading id="findus-title" title={home.findUs.heading} intro={home.findUs.intro} />
            <ContactDetails />
          </div>
          <MapEmbed />
        </div>
      </Section>

      <CTASection title={home.cta.title} text={home.cta.text} />
    </>
  );
}
