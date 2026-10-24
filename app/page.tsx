import { Phone } from "lucide-react";
import { site } from "@/config/site";
import { Section } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

// Temporary holding page. Replaced by the full homepage in Phase 3.
export default function HomePage() {
  return (
    <Section>
      <h1 className="t-display max-w-4xl text-heading">{site.name}</h1>
      <p className="t-lead mt-6 max-w-2xl">{site.description}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink href={site.contact.phoneHref} icon={<Phone aria-hidden size={18} />}>
          Call {site.contact.phoneDisplay}
        </ButtonLink>
        <ButtonLink href="/style-guide" variant="ghost">
          View design system
        </ButtonLink>
      </div>
    </Section>
  );
}
