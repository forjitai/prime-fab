import type { MetadataRoute } from "next";
import { site } from "@/config/site";

/** Only canonical, indexable, BUILT routes. Add each page here as it's completed. */
const routes = ["/"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: new URL(path, site.url).toString(),
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
