import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";

/** Dark title band for inner pages: breadcrumbs, H1, optional intro. */
export function PageHero({ title, intro, crumbs }: { title: string; intro?: ReactNode; crumbs: Crumb[] }) {
  return (
    <section className="relative overflow-hidden bg-primary text-white/80">
      <svg aria-hidden className="pointer-events-none absolute inset-0 h-full w-full">
        <defs>
          <pattern id="ph-grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M32 0H0V32" fill="none" stroke="white" strokeOpacity="0.05" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#ph-grid)" />
      </svg>
      <Container className="relative py-12 sm:py-16 lg:py-20">
        <Breadcrumbs items={crumbs} />
        <h1 className="t-display mt-6 max-w-4xl text-white">{title}</h1>
        {intro && <p className="t-lead mt-5 max-w-2xl">{intro}</p>}
      </Container>
    </section>
  );
}
