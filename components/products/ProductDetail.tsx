import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Phone, MessageCircle } from "lucide-react";
import { site } from "@/config/site";
import { getProduct } from "@/content/products";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { ImageFrame } from "@/components/media/ImageFrame";
import { ProductCard } from "@/components/cards/ProductCard";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";

/**
 * Product detail page body + metadata helper. Each confirmed product has its own
 * fixed route (app/products/<slug>/page.tsx) so unknown product URLs are real 404s.
 */
export function productMetadata(slug: string): Metadata {
  const p = getProduct(slug);
  if (!p) return {};
  const path = `/products/${p.slug}`;
  return {
    title: { absolute: p.metaTitle },
    description: p.metaDescription,
    alternates: { canonical: path },
    openGraph: { title: p.metaTitle, description: p.metaDescription, url: path },
  };
}

export function ProductDetail({ slug }: { slug: string }) {
  const p = getProduct(slug);
  const offering = site.offerings.find((o) => o.slug === slug);
  if (!p || !offering) notFound();

  const others = site.offerings.filter((o) => o.slug !== slug);

  // Service (not Product): no price, availability or ratings are known, so none are stated.
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: p.title,
    serviceType: p.title,
    description: p.intro,
    provider: { "@id": `${site.url}/#organization` },
    areaServed: { "@type": "Place", name: `${site.address.locality}, ${site.address.region}` },
  };

  return (
    <>
      <JsonLd data={serviceLd} />
      <PageHero
        title={p.title}
        intro={p.intro}
        crumbs={[
          { label: "Products", href: "/products" },
          { label: p.title, href: `/products/${p.slug}` },
        ]}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div className="grid content-start gap-10">
            {p.sections.map((s) => (
              <div key={s.heading}>
                <h2 className="t-h3 text-2xl">{s.heading}</h2>
                {s.body.map((b) => (
                  <p key={b} className="mt-3 max-w-xl text-lg">
                    {b}
                  </p>
                ))}
              </div>
            ))}
            <div className="border-l-4 border-accent bg-section p-6">
              <h2 className="t-h3">Ask us about</h2>
              <ul className="mt-3 grid gap-1.5 sm:grid-cols-2">
                {p.askAbout.map((a) => (
                  <li key={a} className="flex gap-2">
                    <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-accent" />
                    {a}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={site.contact.phoneHref} icon={<Phone aria-hidden size={18} />} data-event="phone_click">
                  Call for a quote
                </ButtonLink>
                <ButtonLink
                  href={site.contact.whatsappHref}
                  variant="ghost"
                  icon={<MessageCircle aria-hidden size={18} />}
                  data-event="whatsapp_click"
                >
                  WhatsApp us
                </ButtonLink>
              </div>
            </div>
          </div>
          <div className="grid content-start gap-4">
            <ImageFrame src={offering.image} alt={`${p.title} by ${site.name}`} ratio="4/5" chamfer priority sizes="(min-width:1024px) 40vw, 100vw" />
            <div className="grid grid-cols-2 gap-4">
              <ImageFrame alt={`${p.title} detail photo 1`} ratio="1/1" sizes="20vw" />
              <ImageFrame alt={`${p.title} detail photo 2`} ratio="1/1" sizes="20vw" />
            </div>
          </div>
        </div>
      </Section>

      {others.length > 0 && (
        <Section tone="alt" labelledBy="other-title">
          <h2 id="other-title" className="t-h2 mb-10">
            Also from {site.name}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((o) => (
              <ProductCard key={o.slug} title={o.title} summary={o.summary} href={`/products/${o.slug}`} image={o.image} imageAlt={o.title} />
            ))}
          </div>
        </Section>
      )}

      <CTASection title={`Get a quote for ${p.title}`} text="Send your sizes or a photo of the opening by WhatsApp, or call us." />
    </>
  );
}
