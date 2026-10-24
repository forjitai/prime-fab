import { Phone, MessageCircle } from "lucide-react";
import { site } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

/** Dark closing band with call + WhatsApp. Copy is passed in per page. */
export function CTASection({ title, text }: { title: string; text?: string }) {
  return (
    <section aria-labelledby="cta-title" className="relative overflow-hidden bg-primary py-16 text-white sm:py-20">
      <span aria-hidden className="absolute inset-x-0 top-0 h-1 bg-accent" />
      <Container className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 id="cta-title" className="t-h2 !text-white">
            {title}
          </h2>
          {text && <p className="t-lead mt-4 text-white/80">{text}</p>}
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={site.contact.phoneHref} icon={<Phone aria-hidden size={18} />} data-event="phone_click">
            Call {site.contact.phoneDisplay}
          </ButtonLink>
          <ButtonLink
            href={site.contact.whatsappHref}
            variant="onDark"
            icon={<MessageCircle aria-hidden size={18} />}
            data-event="whatsapp_click"
          >
            WhatsApp us
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
