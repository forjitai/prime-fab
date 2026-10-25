import Link from "next/link";
import { ChevronRight, MapPin, Phone, MessageCircle } from "lucide-react";
import { site } from "@/config/site";
import { QuoteButton } from "@/components/quote/QuoteButton";
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
        <div className="grid h-full content-start gap-6">
          <nav aria-label="Products" className="border border-line bg-card p-6">
            <h2 className="t-h3 mb-5 border-b-2 border-accent pb-3">Products &amp; Services</h2>
            {tree}
          </nav>
          <section aria-labelledby="sidebar-contact" className="sticky top-24 border border-line bg-primary p-6 text-white/80">
            <h2 id="sidebar-contact" className="t-h3 mb-4 !text-white">
              Contact {site.name}
            </h2>
            {site.profile.contactPerson && <p className="mb-3 font-semibold text-white">{site.profile.contactPerson}</p>}
            <p className="flex gap-2 text-sm">
              <MapPin aria-hidden size={16} className="mt-0.5 shrink-0 text-accent" />
              {site.address.full}
            </p>
            <a href={site.contact.phoneHref} data-event="phone_click" className="mt-3 flex items-center gap-2 font-semibold text-white hover:underline">
              <Phone aria-hidden size={16} className="text-accent" />
              {site.contact.phoneDisplay}
            </a>
            <a
              href={site.contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              data-event="whatsapp_click"
              className="mt-2 flex items-center gap-2 hover:text-white hover:underline"
            >
              <MessageCircle aria-hidden size={16} className="text-accent" />
              WhatsApp us
            </a>
            <QuoteButton className="mt-5 w-full">Get Best Quote</QuoteButton>
          </section>
        </div>
      </aside>
    </>
  );
}
