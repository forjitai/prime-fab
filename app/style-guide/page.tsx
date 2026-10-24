import type { Metadata } from "next";
import { Phone } from "lucide-react";
import { site } from "@/config/site";
import { Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button, ButtonLink } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ProductCard, ImageCard } from "@/components/cards/ProductCard";
import { Gallery } from "@/components/media/Gallery";
import { CTASection } from "@/components/sections/CTASection";
import { ContactDetails } from "@/components/contact/ContactDetails";
import { EnquiryForm } from "@/components/forms/EnquiryForm";

// Internal design-system preview. Never indexed, never in the sitemap.
export const metadata: Metadata = {
  title: "Style guide",
  robots: { index: false, follow: false },
};

const swatches = [
  ["--color-primary", "Primary · ink navy"],
  ["--color-secondary", "Secondary · steel"],
  ["--color-accent", "Accent · weld amber"],
  ["--color-section", "Section background"],
  ["--color-heading", "Headings"],
  ["--color-body", "Body text"],
  ["--color-border", "Borders"],
  ["--color-link", "Links"],
] as const;

export default function StyleGuidePage() {
  return (
    <>
      <Section tone="dark" className="!py-12">
        <Breadcrumbs items={[{ label: "Style guide", href: "/style-guide" }]} />
        <h1 className="t-display mt-6 text-white">Design system</h1>
        <p className="t-lead mt-4 max-w-2xl text-white/80">
          Every colour, type size and component used on the {site.name} website. Change colours in
          <code className="mx-1 bg-white/10 px-1.5">app/globals.css</code>and business details in
          <code className="mx-1 bg-white/10 px-1.5">config/site.ts</code>.
        </p>
      </Section>

      <Section labelledBy="sg-colour">
        <SectionHeading id="sg-colour" title="Colour" intro="Navy carries the brand, amber is reserved for actions so calls to action are always the easiest thing to find." />
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {swatches.map(([v, label]) => (
            <li key={v}>
              <div className="chamfer h-24 border border-line" style={{ background: `var(${v})` }} />
              <p className="mt-2 font-medium text-heading">{label}</p>
              <p className="t-caption">{v}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="alt" labelledBy="sg-type">
        <SectionHeading id="sg-type" title="Typography" intro="One family, Archivo, used at two widths: expanded for headlines, normal for reading." />
        <div className="grid gap-8">
          <div><p className="t-caption mb-2">Display / H1</p><p className="t-display text-heading">Built square, built to last</p></div>
          <div><p className="t-caption mb-2">Section heading / H2</p><p className="t-h2">Work we take on</p></div>
          <div><p className="t-caption mb-2">Subheading / H3</p><p className="t-h3">Measured on site, made in our workshop</p></div>
          <div className="max-w-2xl"><p className="t-caption mb-2">Lead</p><p className="t-lead">Introductory paragraphs use the lead size so the first thing people read on a page is easy to scan on a phone.</p></div>
          <div className="max-w-2xl"><p className="t-caption mb-2">Body</p><p>Body copy is 17px with generous line height and lines kept under 80 characters. <a href="#" className="prose-link">Inline links</a> are underlined so they are recognisable without colour.</p></div>
        </div>
      </Section>

      <Section labelledBy="sg-buttons">
        <SectionHeading id="sg-buttons" title="Buttons" intro="Primary actions get the chamfered amber plate; secondary actions are outlined." />
        <div className="flex flex-wrap gap-4">
          <ButtonLink href={site.contact.phoneHref} icon={<Phone aria-hidden size={18} />}>Call now</ButtonLink>
          <ButtonLink href="/contact" variant="secondary">Get a quote</ButtonLink>
          <ButtonLink href="/gallery" variant="ghost">See our work</ButtonLink>
          <Button disabled>Disabled</Button>
        </div>
        <div className="mt-6 flex flex-wrap gap-4 bg-primary p-6">
          <ButtonLink href="/contact">On dark: primary</ButtonLink>
          <ButtonLink href="/gallery" variant="onDark">On dark: outline</ButtonLink>
        </div>
      </Section>

      <Section tone="alt" labelledBy="sg-cards">
        <SectionHeading id="sg-cards" title="Product / service cards" intro="Sample cards with example text only — real offerings replace these in Phase 3." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ProductCard title="Example offering A" summary="One or two plain sentences on what it is and who it's for." href="/products" imageAlt="Example offering A" />
          <ProductCard title="Example offering B" summary="Cards share one height so rows stay aligned." href="/products" imageAlt="Example offering B" />
          <ProductCard title="Example offering C" summary="The whole card is clickable, with one link for screen readers." href="/products" imageAlt="Example offering C" />
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          <ImageCard alt="Workshop photo" caption="Image card with caption" ratio="3/2" />
          <ImageCard alt="Finished job" caption="Captions use the caption style" ratio="3/2" />
          <ImageCard alt="On-site installation" caption="Missing photos show a marked slot" ratio="3/2" />
        </div>
      </Section>

      <Section labelledBy="sg-gallery">
        <SectionHeading id="sg-gallery" title="Gallery" intro="Square grid, opens a full-screen viewer with arrow-key navigation once real photos are added." />
        <Gallery items={Array.from({ length: 6 }, (_, i) => ({ alt: `Project photo ${i + 1}` }))} />
      </Section>

      <Section tone="alt" labelledBy="sg-contact">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <SectionHeading id="sg-contact" title="Contact details & form" intro="Contact details come from one config file, so the address is identical everywhere." />
            <ContactDetails />
          </div>
          <div className="border border-line bg-card p-6 sm:p-8">
            <EnquiryForm />
          </div>
        </div>
      </Section>

      <CTASection title="Call-to-action band" text="Closes most pages with the two fastest ways to reach PRIME FAB." />
    </>
  );
}
