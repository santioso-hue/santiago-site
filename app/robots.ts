import type { MetadataRoute } from "next";
import { site } from "@/content/site";

/** Allow all crawlers and point them at the sitemap. Served at /robots.txt. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
