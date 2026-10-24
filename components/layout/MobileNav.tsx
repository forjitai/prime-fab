"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { site } from "@/config/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const panelId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Close when the route changes.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={toggleRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((o) => !o)}
        className="inline-flex h-11 w-11 items-center justify-center text-heading"
      >
        {open ? <X aria-hidden /> : <Menu aria-hidden />}
      </button>

      <div
        id={panelId}
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-18 z-40 overflow-y-auto bg-primary px-4 pb-10 pt-6 text-white"
      >
        <nav aria-label="Mobile">
          <ul className="divide-y divide-white/10">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className="block py-4 text-2xl font-bold"
                  style={{ fontStretch: "115%" }}
                >
                  {item.label}
                </Link>
                {"children" in item && item.children.length > 0 && (
                  <ul className="pb-3 pl-4">
                    {item.children.map((c) => (
                      <li key={c.href}>
                        <Link href={c.href} onClick={() => setOpen(false)} className="block py-2 text-white/80">
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-8 grid gap-3">
          <a
            href={site.contact.phoneHref}
            data-event="phone_click"
            className="chamfer flex items-center justify-center gap-2 bg-accent py-4 font-semibold text-on-accent"
          >
            <Phone aria-hidden size={18} /> Call {site.contact.phoneDisplay}
          </a>
          <a
            href={site.contact.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            data-event="whatsapp_click"
            className="flex items-center justify-center gap-2 border-2 border-white/70 py-4 font-semibold"
          >
            <MessageCircle aria-hidden size={18} /> WhatsApp us
          </a>
        </div>
      </div>
    </div>
  );
}
