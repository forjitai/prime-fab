import type { Metadata } from "next";
import { gallery } from "@/content/pages";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Container";
import { Gallery } from "@/components/media/Gallery";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: gallery.meta.title,
  description: gallery.meta.description,
  alternates: { canonical: "/gallery" },
  openGraph: { title: `${gallery.meta.title} | PRIME FAB`, description: gallery.meta.description, url: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero title={gallery.title} intro={gallery.intro} crumbs={[{ label: "Photos", href: "/gallery" }]} />
      <Section>
        <Gallery items={gallery.items} />
      </Section>
      <CTASection title={gallery.cta.title} text={gallery.cta.text} />
    </>
  );
}
