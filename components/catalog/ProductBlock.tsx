import { Phone, Download, ThumbsUp } from "lucide-react";
import { site } from "@/config/site";
import type { CatalogItem } from "@/content/catalog";
import { ImageFrame } from "@/components/media/ImageFrame";
import { ButtonLink } from "@/components/ui/Button";
import { QuoteButton } from "@/components/quote/QuoteButton";

/** One catalogue entry: name, photos, price (only if supplied), details table, description, quote buttons. */
export function ProductBlock({ item, priority = false }: { item: CatalogItem; priority?: boolean }) {
  const [main, ...thumbs] = item.images ?? [];
  const rows: [string, string][] = [
    ["Material", "uPVC"],
    ["Type", item.name.replace(/^uPVC /, "")],
    ["Opening style", item.openingStyle],
    ["Made to", "Your opening size"],
    ...(item.specs ?? []),
  ];

  return (
    <article id={item.slug} aria-labelledby={`${item.slug}-title`} className="scroll-mt-24 border border-line bg-card">
      <header className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-5 py-4 sm:px-7">
        <h2 id={`${item.slug}-title`} className="t-h3 text-xl sm:text-2xl">
          {item.name}
        </h2>
        <ButtonLink
          href={site.contact.phoneHref}
          variant="ghost"
          className="!min-h-10 !px-4 !py-2 text-sm"
          icon={<Phone aria-hidden size={16} />}
          data-event="phone_click"
        >
          Request callback
        </ButtonLink>
      </header>

      <div className="grid gap-6 p-5 sm:p-7 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-8">
        <div>
          <ImageFrame src={main} alt={item.name} ratio="4/3" priority={priority} sizes="(min-width:768px) 40vw, 100vw" />
          <div className="mt-3 grid grid-cols-3 gap-3">
            {[0, 1, 2].map((n) => (
              <ImageFrame key={n} src={thumbs[n]} alt={`${item.name} photo ${n + 2}`} ratio="1/1" sizes="12vw" />
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <p className="text-lg font-semibold text-heading">
            {item.price ? (
              <>
                Approx. {item.price} <span className="t-caption font-normal">(final price depends on size and options)</span>
              </>
            ) : (
              "Price on request"
            )}
          </p>
          <QuoteButton product={item.name} className="mt-4 self-start">
            Get Best Quote
          </QuoteButton>

          <h3 className="mt-7 font-bold text-heading">Product details</h3>
          <table className="mt-2 w-full border-collapse text-left text-[0.9375rem]">
            <tbody>
              {rows.map(([k, v]) => (
                <tr key={k} className="border-b border-line last:border-0">
                  <th scope="row" className="w-2/5 py-2 pr-4 align-top font-medium text-muted">
                    {k}
                  </th>
                  <td className="py-2 text-heading">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <p className="mt-5">{item.description}</p>
          <p className="mt-2">
            <span className="font-medium text-heading">Good for:</span> {item.usedFor}
          </p>
          {item.brochure && (
            <a href={item.brochure} download className="prose-link mt-4 inline-flex items-center gap-1.5 self-start">
              <Download aria-hidden size={16} />
              Download brochure (PDF)
            </a>
          )}
        </div>
      </div>

      <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-line bg-section px-5 py-4 sm:px-7">
        <p className="font-medium text-heading">Interested in the {item.name}?</p>
        <QuoteButton
          product={item.name}
          variant="secondary"
          className="!min-h-10 !px-4 !py-2 text-sm"
          icon={<ThumbsUp aria-hidden size={16} />}
        >
          Yes, I&apos;m interested
        </QuoteButton>
      </footer>
    </article>
  );
}
