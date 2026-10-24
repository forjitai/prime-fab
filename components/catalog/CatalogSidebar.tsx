import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { categories, itemsIn, type CategorySlug } from "@/content/catalog";

/** "Products & Services" category tree. Sticky on desktop; collapsible on phones. */
export function CatalogSidebar({ current }: { current?: CategorySlug }) {
  const tree = (
    <ul className="grid gap-5">
      {categories.map((c) => (
        <li key={c.slug}>
          <Link
            href={`/products/${c.slug}`}
            aria-current={current === c.slug ? "page" : undefined}
            className={`flex items-center justify-between font-bold ${current === c.slug ? "text-heading" : "text-body hover:text-heading"}`}
          >
            {c.name}
            <ChevronRight aria-hidden size={16} />
          </Link>
          <ul className="mt-2 grid gap-1 border-l-2 border-line pl-3">
            {itemsIn(c.slug).map((i) => (
              <li key={i.slug}>
                <Link href={`/products/${c.slug}#${i.slug}`} className="block py-1 text-[0.9375rem] hover:text-heading hover:underline">
                  {i.name.replace(/^uPVC /, "")}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <details className="mb-8 border border-line bg-card lg:hidden">
        <summary className="cursor-pointer px-5 py-4 font-bold text-heading">Products &amp; Services</summary>
        <nav aria-label="Products" className="border-t border-line px-5 py-4">
          {tree}
        </nav>
      </details>
      <aside className="hidden lg:block">
        <nav aria-label="Products" className="sticky top-24 border border-line bg-card p-6">
          <h2 className="t-h3 mb-5 border-b-2 border-accent pb-3">Products &amp; Services</h2>
          {tree}
        </nav>
      </aside>
    </>
  );
}
