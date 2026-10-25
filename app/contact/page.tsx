import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { contact } from "@/content/pages";
import { catalog } from "@/content/catalog";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Container";
import { ContactTable } from "@/components/contact/ContactTable";
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
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <div>
            <h2 className="t-h3 mb-5 text-2xl">{contact.detailsTitle}</h2>
            <ContactTable />
          </div>

          <div className="border border-line bg-card p-6 sm:p-8">
            <h2 className="t-h3 text-2xl">{contact.formTitle}</h2>
            <div className="mt-4 mb-6 border-l-4 border-accent bg-section p-4">
              <p className="font-medium text-heading">{contact.guidanceIntro}</p>
              <ul className="mt-2 grid gap-1.5">
                {contact.guidance.map((g) => (
                  <li key={g} className="flex gap-2">
                    <CheckCircle2 aria-hidden size={18} className="mt-0.5 shrink-0 text-accent-strong" />
                    {g}
                  </li>
                ))}
              </ul>
            </div>
            <EnquiryForm
              idPrefix="contact"
              inquiryTypes={catalog.map((c) => c.name)}
              messagePlaceholder={contact.messagePlaceholder}
            />
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
