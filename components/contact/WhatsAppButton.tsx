import { MessageCircle } from "lucide-react";
import { site } from "@/config/site";

/** Floating WhatsApp shortcut, bottom-right on every page. */
export function WhatsAppButton() {
  return (
    <a
      href={site.contact.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      data-event="whatsapp_click"
      aria-label={`Chat with ${site.name} on WhatsApp`}
      className="fixed bottom-5 right-5 z-30 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
    >
      <MessageCircle aria-hidden size={28} />
    </a>
  );
}
