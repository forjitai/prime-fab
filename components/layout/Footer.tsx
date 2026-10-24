import Link from "next/link";
import { site } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/brand/Logo";
import { ContactDetails } from "@/components/contact/ContactDetails";

async function currentYear() {
  "use cache";
  return new Date().getFullYear();
}

export async function Footer() {
  const year = await currentYear();
  return (
    <footer className="bg-primary text-white/75">
      <Container className="grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1.4fr] lg:py-20">
        <div className="max-w-sm">
          <Logo onDark />
          <p className="mt-5">{site.description}</p>
        </div>

        <nav aria-label="Footer">
          <h2 className="mb-4 font-bold text-white">Pages</h2>
          <ul className="grid gap-2">
            {[...site.nav, ...site.legal].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white hover:underline">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="mb-4 font-bold text-white">Contact</h2>
          <ContactDetails onDark />
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="py-6 text-sm">
          © {year} {site.name}. All rights reserved.
        </Container>
      </div>
    </footer>
  );
}
