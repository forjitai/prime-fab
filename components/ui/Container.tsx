import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

type SectionTone = "light" | "alt" | "dark";

const toneClass: Record<SectionTone, string> = {
  light: "bg-page",
  alt: "bg-section",
  dark: "bg-section-dark text-white/80",
};

export function Section({
  children,
  tone = "light",
  id,
  className = "",
  labelledBy,
}: {
  children: ReactNode;
  tone?: SectionTone;
  id?: string;
  className?: string;
  labelledBy?: string;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`py-16 sm:py-20 lg:py-28 ${toneClass[tone]} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
