import { site } from "@/config/site";

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

/**
 * Organization + WebSite. Uses only verified details.
 * Business category confirmed (uPVC windows & doors) → LocalBusiness subtype.
 * No opening hours, coordinates, ratings or prices: none supplied.
 */
export function SiteJsonLd() {
  const org = {
    "@context": "https://schema.org",
    "@type": site.businessType,
    "@id": `${site.url}/#organization`,
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: site.contact.phoneHref.replace("tel:", ""),
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.plusCode,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    hasMap: site.address.directionsHref,
    makesOffer: site.offerings.map((o) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: o.title, url: `${site.url}/products/${o.slug}` },
    })),
  };
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    name: site.name,
    url: site.url,
    publisher: { "@id": `${site.url}/#organization` },
  };
  return <JsonLd data={[org, website]} />;
}
