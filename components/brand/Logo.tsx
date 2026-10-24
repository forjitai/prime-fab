import Link from "next/link";
import { site } from "@/config/site";

/**
 * Text wordmark until the client supplies a logo.
 * The amber mark is a chamfered steel plate — the brand's signature cut corner.
 */
export function Logo({ onDark = false }: { onDark?: boolean }) {
  return (
    <Link href="/" className="inline-flex items-center gap-2.5" aria-label={`${site.name} — home`}>
      <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden>
        <path d="M0 0H22L30 8V30H0Z" fill="var(--color-accent)" />
        <path d="M7 8H17V12H11V15H16V19H11V23H7Z" fill="var(--color-primary)" />
      </svg>
      <span
        className={`text-xl font-extrabold tracking-tight ${onDark ? "text-white" : "text-heading"}`}
        style={{ fontStretch: "125%" }}
      >
        PRIME<span className="font-medium"> FAB</span>
      </span>
    </Link>
  );
}
