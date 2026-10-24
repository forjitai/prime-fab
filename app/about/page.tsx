import type { Metadata } from "next";
import { about } from "@/content/pages";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageFrame } from "@/components/media/ImageFrame";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: { absolute: `${about.meta.title} | uPVC Windows & Doors, Yentiganahalli` },
  description: about.meta.description,
  alternates: { canonical: "/about" },
  openGraph: { title: about.meta.title, description: about.meta.description, url: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero title={about.title} intro={about.intro} crumbs={[{ label: "About", href: "/about" }]} />

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="grid max-w-xl gap-5 text-lg">
            {about.story.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          {/* Replace with a real workshop or team photo: public/images/about-workshop.webp */}
          <ImageFrame alt="PRIME FAB workshop" ratio="4/3" chamfer sizes="(min-width:1024px) 50vw, 100vw" />
        </div>
      </Section>

      <Section tone="alt" labelledBy="approach-title">
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

      <CTASection title={about.cta.title} text={about.cta.text} />
    </>
  );
}
