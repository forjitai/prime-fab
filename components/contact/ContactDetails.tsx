import { MapPin, Phone, MessageCircle, Navigation } from "lucide-react";
import { site } from "@/config/site";

/** Name, address, phone, WhatsApp and directions — single source for NAP consistency. */
export function ContactDetails({ onDark = false }: { onDark?: boolean }) {
  const link = onDark ? "hover:text-white underline-offset-4 hover:underline" : "prose-link";
  const icon = onDark ? "text-accent" : "text-secondary";
  return (
    <address className="grid gap-4 not-italic">
      <p className="flex gap-3">
        <MapPin aria-hidden className={`mt-1 shrink-0 ${icon}`} size={18} />
        <span>
          <span className="sr-only">{site.name}, </span>
          {site.address.full}
        </span>
      </p>
      <p className="flex gap-3">
        <Phone aria-hidden className={`mt-1 shrink-0 ${icon}`} size={18} />
        <a href={site.contact.phoneHref} data-event="phone_click" className={link}>
          {site.contact.phoneDisplay}
        </a>
      </p>
      <p className="flex gap-3">
        <MessageCircle aria-hidden className={`mt-1 shrink-0 ${icon}`} size={18} />
        <a
          href={site.contact.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          data-event="whatsapp_click"
          className={link}
        >
          WhatsApp {site.contact.whatsappDisplay}
        </a>
      </p>
      <p className="flex gap-3">
        <Navigation aria-hidden className={`mt-1 shrink-0 ${icon}`} size={18} />
        <a href={site.address.directionsHref} target="_blank" rel="noopener noreferrer" className={link}>
          Get directions on Google Maps
        </a>
      </p>
    </address>
  );
}
