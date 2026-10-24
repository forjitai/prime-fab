import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "onDark";

const base =
  "inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold transition-colors min-h-12 disabled:opacity-60 disabled:cursor-not-allowed";

const variants: Record<Variant, string> = {
  primary: "chamfer bg-accent text-on-accent hover:bg-accent-strong",
  secondary: "chamfer bg-primary text-on-primary hover:bg-primary-hover",
  ghost: "border-2 border-primary text-primary hover:bg-primary hover:text-on-primary rounded-[var(--radius)]",
  onDark: "border-2 border-white/70 text-white hover:bg-white hover:text-primary rounded-[var(--radius)]",
};

type CommonProps = { variant?: Variant; icon?: ReactNode; children: ReactNode; className?: string };

/** Internal or external link styled as a button. External links (tel:, https:) use a plain <a>. */
export function ButtonLink({
  href,
  variant = "primary",
  icon,
  children,
  className = "",
  ...rest
}: CommonProps & { href: string } & Omit<ComponentProps<"a">, "href" | "className" | "children">) {
  const cls = `${base} ${variants[variant]} ${className}`;
  const isInternal = href.startsWith("/");
  if (isInternal) {
    return (
      <Link href={href} className={cls} {...rest}>
        {icon}
        {children}
      </Link>
    );
  }
  const isWeb = href.startsWith("http");
  return (
    <a href={href} className={cls} {...(isWeb ? { target: "_blank", rel: "noopener noreferrer" } : {})} {...rest}>
      {icon}
      {children}
    </a>
  );
}

export function Button({
  variant = "primary",
  icon,
  children,
  className = "",
  ...rest
}: CommonProps & Omit<ComponentProps<"button">, "className" | "children">) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {icon}
      {children}
    </button>
  );
}
