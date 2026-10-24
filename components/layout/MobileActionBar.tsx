"use client";

import { Phone, MessageCircle, FileText } from "lucide-react";
import { site } from "@/config/site";
import { openQuote } from "@/components/quote/QuoteDialog";

/** Sticky bottom bar on phones: the three fastest ways to enquire. */
export function MobileActionBar() {
  const cell = "flex flex-1 flex-col items-center justify-center gap-0.5 py-2 text-xs font-semibold";
  return (
    <nav
      aria-label="Quick contact"
      className="fixed inset-x-0 bottom-0 z-30 flex border-t border-line bg-page pb-[env(safe-area-inset-bottom)] shadow-[0_-4px_12px_rgb(0_0_0/0.06)] md:hidden"
    >
      <a href={site.contact.phoneHref} data-event="phone_click" className={`${cell} text-heading`}>
        <Phone aria-hidden size={20} />
        Call
      </a>
      <a
        href={site.contact.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        data-event="whatsapp_click"
        className={`${cell} text-[#128C7E]`}
      >
        <MessageCircle aria-hidden size={20} />
        WhatsApp
      </a>
      <button type="button" onClick={() => openQuote()} data-event="cta_click" className={`${cell} bg-accent text-on-accent`}>
        <FileText aria-hidden size={20} />
        Get Quote
      </button>
    </nav>
  );
}
