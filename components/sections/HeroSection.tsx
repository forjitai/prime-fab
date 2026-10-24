import { MapPin, Phone, MessageCircle } from "lucide-react";
import { site } from "@/config/site";
import { home } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { EnquiryForm } from "@/components/forms/EnquiryForm";

/** Decorative blueprint grid. Purely visual. */
function Blueprint() {
  return (
    <svg aria-hidden className="pointer-events-none absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id="bp-grid" width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M32 0H0V32" fill="none" stroke="white" strokeOpacity="0.05" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#bp-grid)" />
    </svg>
  );
}

export function HeroSection() {
  const types = site.offerings.map((o) => o.title);
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden bg-primary text-white">
      <Blueprint />
      <Container className="relative grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:py-24">
        <div>
          <p className="mb-6 inline-flex items-center gap-2 text-white/80">
            <MapPin aria-hidden size={18} className="text-accent" />
            {home.hero.location}
          </p>
          <h1 id="hero-title" className="t-display text-white">
            {home.hero.heading}
          </h1>
          <p className="t-lead mt-6 max-w-xl text-white/80">{home.hero.intro}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
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
        </div>

        <div className="chamfer-lg bg-card p-6 text-body shadow-2xl sm:p-8" id="enquiry">
          <h2 className="t-h3 mb-1 text-2xl">{home.hero.formTitle}</h2>
          <p className="t-caption mb-6">We reply by phone. Fields marked optional can be left blank.</p>
          <EnquiryForm inquiryTypes={types} compact />
        </div>
      </Container>
    </section>
  );
}
