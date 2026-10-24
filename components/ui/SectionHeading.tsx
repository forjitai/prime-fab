import type { ReactNode } from "react";

export function SectionHeading({
  id,
  title,
  intro,
  align = "left",
  onDark = false,
  as: Tag = "h2",
}: {
  id?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  onDark?: boolean;
  as?: "h1" | "h2";
}) {
  return (
    <div className={`mb-10 max-w-3xl sm:mb-14 ${align === "center" ? "mx-auto text-center" : ""}`}>
      {/* Short amber rule: a weld seam above each section title */}
      <span
        aria-hidden
        className={`mb-5 block h-1 w-12 bg-accent ${align === "center" ? "mx-auto" : ""}`}
      />
      <Tag id={id} className={Tag === "h1" ? "t-display text-heading" : `t-h2 ${onDark ? "!text-white" : ""}`}>
        {title}
      </Tag>
      {intro && <p className={`t-lead mt-5 ${onDark ? "text-white/80" : ""}`}>{intro}</p>}
    </div>
  );
}
