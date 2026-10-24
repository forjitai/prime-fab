import type { MetadataRoute } from "next";
import { site } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  if (!site.allowIndexing) return { rules: { userAgent: "*", disallow: "/" } };
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/style-guide", "/thank-you", "/api/"] },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
