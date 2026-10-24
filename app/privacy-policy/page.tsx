import type { Metadata } from "next";
import { site } from "@/config/site";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: `How ${site.name} handles the details you share through this website.`,
  alternates: { canonical: "/privacy-policy" },
};

/*
 * Plain-language policy describing what this site actually does.
 * Not legal advice — the business owner should review it.
 * Update if analytics or a form service is switched on.
 */
function H({ children }: { children: React.ReactNode }) {
  return <h2 className="t-h3 mt-10 text-2xl">{children}</h2>;
}

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Privacy policy" crumbs={[{ label: "Privacy policy", href: "/privacy-policy" }]} />
      <Section>
        <div className="max-w-3xl [&_p]:mt-4 [&_li]:mt-2 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6">
          <p className="!mt-0">
            This policy explains what information {site.name} collects through this website and how it is used.
          </p>

          <H>What we collect</H>
          <p>If you send an enquiry through the form, we receive:</p>
          <ul>
            <li>your name and mobile number</li>
            <li>your email address, if you choose to give it</li>
            <li>what your enquiry is about and your message</li>
          </ul>
          <p>We don&apos;t ask for any other personal information, and you don&apos;t need an account to use this site.</p>

          <H>How we use it</H>
          <p>
            We use your details only to reply to your enquiry and to discuss or quote for your job. We don&apos;t sell
            your information or use it for unrelated marketing.
          </p>

          <H>Other services on this site</H>
          <ul>
            <li>
              <strong>Google Maps:</strong> the map is provided by Google, which may collect usage data under its own
              privacy policy.
            </li>
            <li>
              <strong>WhatsApp:</strong> if you contact us on WhatsApp, the conversation is handled by WhatsApp under
              its own privacy policy.
            </li>
            <li>
              <strong>Hosting:</strong> the site is hosted by Vercel, which keeps standard technical logs (such as IP
              address and browser type) to run and protect the service.
            </li>
          </ul>

          <H>Keeping and deleting your details</H>
          <p>
            We keep enquiry details only as long as needed to deal with your request. To ask what we hold about you, or
            to have it deleted, call us on{" "}
            <a href={site.contact.phoneHref} className="prose-link">
              {site.contact.phoneDisplay}
            </a>
            .
          </p>

          <H>Contact</H>
          <p>
            {site.name}, {site.address.full}. Phone{" "}
            <a href={site.contact.phoneHref} className="prose-link">
              {site.contact.phoneDisplay}
            </a>
            .
          </p>
        </div>
      </Section>
    </>
  );
}
