import type { MetadataRoute } from "next";
import { research } from "@/content/research";
import { site } from "@/content/site";

/** Lists every page for search engines. Served at /sitemap.xml. */
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/research",
    "/projects",
    "/publications",
    ...research
      .filter((entry) => entry.detailPage)
      .map((entry) => `/research/${entry.id}`),
  ];
  return paths.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
