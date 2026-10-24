import { MapPin, Phone, MessageCircle } from "lucide-react";
import { site } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { ProductSearch } from "@/components/search/ProductSearch";

/** Thin info bar above the header (reference: location · GST · contact). Desktop/tablet only. */
export function TopBar() {
  return (
    <div className="hidden bg-primary text-sm text-white/80 md:block">
      <Container className="flex h-14 items-center justify-between gap-6">
        <p className="flex shrink-0 items-center gap-4">
          <span className="inline-flex items-center gap-1.5">
            <MapPin aria-hidden size={14} className="text-accent" />
            {site.address.locality}, {site.address.region}
          </span>
          {site.profile.gst && (
            <span>
              GST: <span className="text-white">{site.profile.gst}</span>
            </span>
          )}
        </p>
        <div className="w-full max-w-xs lg:max-w-sm">
          <ProductSearch onDark />
        </div>
        <p className="flex shrink-0 items-center gap-5">
          <a href={site.contact.phoneHref} data-event="phone_click" className="inline-flex items-center gap-1.5 hover:text-white">
            <Phone aria-hidden size={14} />
            {site.contact.phoneDisplay}
          </a>
          <a
            href={site.contact.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            data-event="whatsapp_click"
            className="inline-flex items-center gap-1.5 hover:text-white"
          >
            <MessageCircle aria-hidden size={14} />
            WhatsApp
          </a>
        </p>
      </Container>
    </div>
  );
}
