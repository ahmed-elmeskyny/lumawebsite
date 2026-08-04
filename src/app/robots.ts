import type { MetadataRoute } from "next";
import { storeConfig } from "@/config/store";

export default function robots(): MetadataRoute.Robots {
  const base = storeConfig.siteUrl.replace(/\/$/, "");
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // The cart is per-visitor and the API is not a page.
      disallow: ["/cart", "/api/"],
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
