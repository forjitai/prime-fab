"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useId, useMemo, useRef, useState } from "react";
import { Search } from "lucide-react";
import { catalog, itemHref } from "@/content/catalog";

/** Simple product search over the catalogue. Results are plain links; Enter opens the first match. */
export function ProductSearch({ onDark = false, onNavigate }: { onDark?: boolean; onNavigate?: () => void }) {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const listId = useId();
  const inputId = useId();
  const wrap = useRef<HTMLDivElement>(null);

  const results = useMemo(() => {
    const terms = q.toLowerCase().trim().split(/\s+/).filter(Boolean);
    if (!terms.length) return [];
    return catalog.filter((i) => {
      const hay = `${i.name} ${i.openingStyle} ${i.usedFor}`.toLowerCase();
      return terms.every((t) => hay.includes(t));
    });
  }, [q]);

  const go = (href: string) => {
    setOpen(false);
    setQ("");
    onNavigate?.();
    router.push(href);
  };

  return (
    <div
      ref={wrap}
      className="relative"
      onBlur={(e) => {
        if (!wrap.current?.contains(e.relatedTarget as Node)) setOpen(false);
      }}
      onKeyDown={(e) => e.key === "Escape" && setOpen(false)}
    >
      <form
        role="search"
        onSubmit={(e) => {
          e.preventDefault();
          if (results[0]) go(itemHref(results[0]));
        }}
      >
        <label htmlFor={inputId} className="sr-only">
          Search products
        </label>
        <Search
          aria-hidden
          size={18}
          className={`pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 ${onDark ? "text-white/60" : "text-muted"}`}
        />
        <input
          id={inputId}
          type="search"
          value={q}
          placeholder="Search windows, doors…"
          autoComplete="off"
          aria-controls={listId}
          onChange={(e) => {
            setQ(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          className={`h-11 w-full border pl-10 pr-3 ${
            onDark
              ? "border-white/30 bg-white/10 text-white placeholder:text-white/60"
              : "border-line bg-card text-heading placeholder:text-muted focus:border-primary"
          }`}
        />
      </form>
      {open && q.trim() && (
        <div
          id={listId}
          className="absolute inset-x-0 top-full z-50 mt-1 max-h-80 overflow-y-auto border border-line bg-card py-1 text-body shadow-lg"
        >
          {results.length ? (
            <ul aria-label="Matching products">
              {results.map((i) => (
                <li key={i.slug}>
                  <Link
                    href={itemHref(i)}
                    onClick={() => go(itemHref(i))}
                    className="block px-4 py-2.5 hover:bg-section focus:bg-section"
                  >
                    <span className="font-medium text-heading">{i.name}</span>
                    <span className="t-caption block">{i.openingStyle}</span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="px-4 py-3" role="status">
              No match. Try &ldquo;sliding&rdquo; or &ldquo;door&rdquo;, or call us.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
