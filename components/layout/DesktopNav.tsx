"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { site } from "@/config/site";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function DesktopNav() {
  const pathname = usePathname();
  return (
    <nav aria-label="Main" className="hidden lg:block">
      <ul className="flex items-center gap-1">
        {site.nav.map((item) => {
          const active = isActive(pathname, item.href);
          const children = "children" in item ? item.children : [];
          return (
            <li key={item.href} className="group relative">
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`flex items-center gap-1 px-3 py-2 font-medium transition-colors hover:text-heading ${
                  active ? "text-heading" : "text-body"
                }`}
              >
                {item.label}
                {children.length > 0 && <ChevronDown aria-hidden size={16} />}
                <span
                  aria-hidden
                  className={`absolute inset-x-3 -bottom-px h-0.5 bg-accent transition-transform ${
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
              {children.length > 0 && (
                <ul className="invisible absolute left-0 top-full min-w-60 border border-line bg-card py-2 opacity-0 shadow-lg transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  {children.map((c) => (
                    <li key={c.href}>
                      <Link href={c.href} className="block px-4 py-2 hover:bg-section">
                        {c.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
