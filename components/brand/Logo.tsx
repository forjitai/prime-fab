import Link from "next/link";

/**
 * PRIME FAB logo: the client's mark (vector-traced from their logo, public/logo-mark.svg)
 * plus the wordmark set in HTML so it stays sharp and readable.
 * On dark backgrounds the mark sits on a sandstone tile so the green frame stays visible.
 */
export function Logo({ onDark = false }: { onDark?: boolean }) {
  return (
    <Link href="/" className="inline-flex items-center gap-3">
      <span className={onDark ? "rounded-sm bg-header p-1.5" : ""}>
        {/* eslint-disable-next-line @next/next/no-img-element -- tiny static SVG; next/image adds nothing */}
        <img src="/logo-mark.svg" alt="" width={41} height={48} className="block h-12 w-auto" />
      </span>
      <span className="leading-none">
        <span
          className={`block text-[1.6rem] font-extrabold tracking-wide ${onDark ? "text-white" : "text-heading"}`}
          style={{ fontStretch: "112%" }}
        >
          PRIME FAB
        </span>
        <span className={`mt-1 block text-[0.7rem] font-bold tracking-wide uppercase ${onDark ? "text-white/80" : "text-heading/80"}`}>
          uPVC Windows &amp; Doors
        </span>
      </span>
    </Link>
  );
}
