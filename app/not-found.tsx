import type { Metadata } from "next";
import { Phone } from "lucide-react";
import { site } from "@/config/site";
import { Section } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

// Next.js adds the noindex robots tag to not-found responses automatically.
export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <Section>
      <p className="t-caption">Error 404</p>
      <h1 className="t-display mt-3 max-w-3xl text-heading">This page doesn&apos;t exist</h1>
      <p className="t-lead mt-5 max-w-xl">
        The link may be old or mistyped. Go back to the homepage, or call {site.name} if you were looking for something
        specific.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink href="/" variant="secondary">
          Go to homepage
        </ButtonLink>
        <ButtonLink href={site.contact.phoneHref} variant="ghost" icon={<Phone aria-hidden size={18} />}>
          Call {site.contact.phoneDisplay}
        </ButtonLink>
      </div>
    </Section>
  );
}
