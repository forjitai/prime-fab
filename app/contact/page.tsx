import type { Metadata } from "next";
import { site } from "@/config/site";
import { contact } from "@/content/pages";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Container";
import { ContactDetails } from "@/components/contact/ContactDetails";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { MapEmbed } from "@/components/contact/MapEmbed";

export const metadata: Metadata = {
  title: { absolute: `${contact.meta.title} | Yentiganahalli, Karnataka` },
  description: contact.meta.description,
  alternates: { canonical: "/contact" },
  openGraph: { title: contact.meta.title, description: contact.meta.description, url: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero title={contact.title} intro={contact.intro} crumbs={[{ label: "Contact", href: "/contact" }]} />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <h2 className="t-h3 mb-6 text-2xl">{contact.detailsTitle}</h2>
            <p className="mb-6 text-lg font-semibold text-heading">{site.name}</p>
            <ContactDetails />
          </div>
          <div className="border border-line bg-card p-6 sm:p-8">
            <h2 className="t-h3 mb-6 text-2xl">{contact.formTitle}</h2>
            <EnquiryForm inquiryTypes={site.offerings.map((o) => o.title)} />
          </div>
        </div>
      </Section>

      <Section labelledBy="map-title" className="!pt-0">
        <h2 id="map-title" className="t-h3 mb-6 text-2xl">
          {contact.mapTitle}
        </h2>
        <div className="aspect-[4/3] sm:aspect-[16/7]">
          <MapEmbed />
        </div>
      </Section>
    </>
  );
}
