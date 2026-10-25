import type { Metadata } from "next";
import { Check } from "lucide-react";
import { about } from "@/content/pages";
import { company } from "@/content/company";
import { catalog } from "@/content/catalog";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageFrame } from "@/components/media/ImageFrame";
import { CompanyFactsheet } from "@/components/about/CompanyFactsheet";
import { EnquiryForm } from "@/components/forms/EnquiryForm";

export const metadata: Metadata = {
  title: { absolute: `${about.meta.title} | uPVC Windows & Doors, Yentiganahalli` },
  description: about.meta.description,
  alternates: { canonical: "/about" },
  openGraph: { title: about.meta.title, description: about.meta.description, url: "/about" },
};

/** Text section that renders only when the owner has supplied content. */
function TextSection({ id, title, paras, tone }: { id: string; title: string; paras: string[]; tone: "light" | "alt" }) {
  if (!paras.length) return null;
  return (
    <Section tone={tone} labelledBy={id}>
      <SectionHeading id={id} title={title} />
      <div className="grid max-w-3xl gap-4 text-lg">
        {paras.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </Section>
  );
}

export default function AboutPage() {
  // Alternate backgrounds only across sections that actually render.
  let n = 0;
  const tone = () => (n++ % 2 ? "light" : "alt") as "light" | "alt";

  return (
    <>
      <PageHero title={about.title} intro={about.intro} crumbs={[{ label: "About", href: "/about" }]} />

      {/* Story + company profile */}
      <Section labelledBy="profile-title">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="grid max-w-xl gap-5 text-lg">
              {about.story.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            {/* Replace with a real workshop or team photo: public/images/about-workshop.webp */}
            <ImageFrame alt="PRIME FAB workshop" ratio="4/3" chamfer className="mt-10" sizes="(min-width:1024px) 50vw, 100vw" />
          </div>
          <div>
            <h2 id="profile-title" className="t-h3 mb-4 text-2xl">
              Company profile
            </h2>
            <CompanyFactsheet />
          </div>
        </div>
      </Section>

      {/* How we work (PROPOSED copy) */}
      <Section tone={tone()} labelledBy="approach-title">
        <SectionHeading id="approach-title" title={about.approachTitle} />
        <ul className="grid gap-px overflow-hidden border border-line bg-line md:grid-cols-3">
          {about.approach.map((a) => (
            <li key={a.title} className="bg-card p-6 sm:p-8">
              <span aria-hidden className="mb-5 block h-1 w-8 bg-accent" />
              <h3 className="t-h3">{a.title}</h3>
              <p className="mt-2">{a.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Optional sections — each appears only once the owner supplies content (content/company.ts) */}
      {company.whyUs.length > 0 && (
        <Section tone={tone()} labelledBy="whyus-title">
          <SectionHeading id="whyus-title" title="Why choose us" />
          <ul className="grid gap-3 sm:grid-cols-2">
            {company.whyUs.map((w) => (
              <li key={w} className="flex gap-3 text-lg">
                <Check aria-hidden className="mt-1 shrink-0 text-accent-strong" />
                {w}
              </li>
            ))}
          </ul>
        </Section>
      )}
      {company.team.length > 0 && <TextSection id="team-title" title="Our team" paras={company.team} tone={tone()} />}
      {company.quality.length > 0 && <TextSection id="quality-title" title="Quality" paras={company.quality} tone={tone()} />}
      {company.facilities.length > 0 && (
        <Section tone={tone()} labelledBy="facilities-title">
          <SectionHeading id="facilities-title" title="Our workshop and facilities" />
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {company.facilities.map((f) => (
              <li key={f.src}>
                <figure>
                  <ImageFrame src={f.src} alt={f.caption} ratio="4/3" />
                  <figcaption className="t-caption mt-2">{f.caption}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </Section>
      )}
      {company.clients.length > 0 && (
        <Section tone={tone()} labelledBy="clients-title">
          <SectionHeading id="clients-title" title="Some of our clients" />
          <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {company.clients.map((c) => (
              <li key={c} className="border border-line bg-card px-4 py-3 font-medium text-heading">
                {c}
              </li>
            ))}
          </ul>
        </Section>
      )}

      {/* Enquiry form (reference: About ends with "Tell us what you are looking for") */}
      <Section tone={tone()} labelledBy="about-enquiry-title">
        <div className="mx-auto max-w-2xl border border-line bg-card p-6 sm:p-8">
          <h2 id="about-enquiry-title" className="t-h3 text-2xl">
            Tell us what you are looking for
          </h2>
          <p className="t-caption mt-1 mb-6">Fill in your requirement and we&apos;ll call you back with a quote.</p>
          <EnquiryForm idPrefix="about" inquiryTypes={catalog.map((c) => c.name)} />
        </div>
      </Section>
    </>
  );
}
