import { MapPin, Phone, MessageCircle, MessageSquare, Navigation, Map } from "lucide-react";
import { site } from "@/config/site";

/** Reference-style contact details table: one row per way to reach PRIME FAB. */
export function ContactTable() {
  const ext = { target: "_blank", rel: "noopener noreferrer" } as const;
  const rows: { label: string; icon: React.ReactNode; value: React.ReactNode }[] = [
    ...(site.profile.contactPerson
      ? [{ label: "Contact person", icon: null, value: <span className="font-semibold">{site.profile.contactPerson}</span> }]
      : []),
    {
      label: "Address",
      icon: <MapPin aria-hidden size={18} />,
      value: (
        <>
          <span className="font-semibold">{site.name}</span>
          <br />
          {site.address.full}
          <span className="mt-2 flex flex-wrap gap-x-5 gap-y-1">
            <a href={site.address.mapHref} {...ext} className="prose-link inline-flex items-center gap-1">
              <Map aria-hidden size={15} /> View map
            </a>
            <a href={site.address.directionsHref} {...ext} className="prose-link inline-flex items-center gap-1">
              <Navigation aria-hidden size={15} /> Get directions
            </a>
          </span>
        </>
      ),
    },
    {
      label: "Call us",
      icon: <Phone aria-hidden size={18} />,
      value: (
        <a href={site.contact.phoneHref} data-event="phone_click" className="prose-link font-semibold">
          {site.contact.phoneDisplay}
        </a>
      ),
    },
    {
      label: "WhatsApp",
      icon: <MessageCircle aria-hidden size={18} />,
      value: (
        <a href={site.contact.whatsappHref} {...ext} data-event="whatsapp_click" className="prose-link">
          {site.contact.whatsappDisplay}
        </a>
      ),
    },
    {
      label: "Send SMS",
      icon: <MessageSquare aria-hidden size={18} />,
      value: (
        <a href={site.contact.smsHref} data-event="sms_click" className="prose-link">
          {site.contact.phoneDisplay}
        </a>
      ),
    },
  ];

  return (
    <table className="w-full border-collapse border border-line bg-card text-left">
      <caption className="sr-only">Contact details</caption>
      <tbody>
        {rows.map((r) => (
          <tr key={r.label} className="border-b border-line last:border-0">
            <th scope="row" className="w-px whitespace-nowrap bg-section px-4 py-3.5 align-top font-medium text-muted sm:w-[38%]">
              <span className="flex items-center gap-2">
                <span className="hidden text-secondary sm:inline">{r.icon}</span>
                {r.label}
              </span>
            </th>
            <td className="px-4 py-3.5 text-heading">{r.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
