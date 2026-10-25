import { Phone } from "lucide-react";
import { site } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/brand/Logo";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-header">
      <Container className="flex h-20 items-center justify-between gap-4">
        <Logo />
        <DesktopNav />
        <div className="flex items-center gap-2">
          <a
            href={site.contact.phoneHref}
            data-event="phone_click"
            className="chamfer hidden items-center gap-2 bg-accent px-4 py-2.5 font-semibold text-on-accent hover:bg-accent-strong sm:inline-flex"
          >
            <Phone aria-hidden size={18} />
            {site.contact.phoneDisplay}
          </a>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
