import { site } from "@/config/site";

/** All known profile facts. Rows with no verified value are dropped. */
export function factsheetRows(): [string, string][] {
  const p = site.profile;
  const rows: [string, string | null][] = [
    ["Business name", site.name],
    ["Products", "uPVC windows and doors"],
    ["Nature of business", p.natureOfBusiness],
    ["Established", p.established],
    ["Legal status", p.legalStatus],
    ["Contact person", p.contactPerson],
    ["Team size", p.teamSize],
    ["Service area", p.serviceArea],
    ["Address", site.address.full],
    ["Phone", site.contact.phoneDisplay],
    ["GST no.", p.gst],
    ["Payment modes", p.paymentModes],
  ];
  return rows.filter((r): r is [string, string] => Boolean(r[1]));
}

export function CompanyFactsheet() {
  return (
    <table className="w-full border-collapse border border-line bg-card text-left">
      <caption className="sr-only">{site.name} company profile</caption>
      <tbody>
        {factsheetRows().map(([k, v]) => (
          <tr key={k} className="border-b border-line last:border-0">
            <th scope="row" className="w-2/5 bg-section px-4 py-3 align-top font-medium text-muted sm:w-1/3">
              {k}
            </th>
            <td className="px-4 py-3 font-medium text-heading">{v}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
