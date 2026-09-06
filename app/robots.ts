import type { MetadataRoute } from "next";
import { getAppUrl, isIndexingAllowed } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  const appUrl = getAppUrl();
  const allowIndexing = isIndexingAllowed();

  if (!allowIndexing) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
      sitemap: `${appUrl}/sitemap.xml`,
    };
  }

  return {
    rules: {
      userAgent: "*",
      // Blanket allow rule ensures search engines and AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended) can index public routes
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${appUrl}/sitemap.xml`,
  };
}
