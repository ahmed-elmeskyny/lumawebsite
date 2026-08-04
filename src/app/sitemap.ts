import type { MetadataRoute } from "next";
import { storeConfig } from "@/config/store";
import { blogPosts } from "@/data/blogPosts";
import { editionStories } from "@/data/editionStories";
import { getStandaloneProducts } from "@/lib/catalogue";

/** Static routes, highest commercial value first. */
const STATIC_ROUTES = [
  { path: "/", priority: 1 },
  { path: "/socks", priority: 0.9 },
  { path: "/editions", priority: 0.9 },
  { path: "/our-story", priority: 0.6 },
  { path: "/blog", priority: 0.6 },
  { path: "/size-guide", priority: 0.5 },
  { path: "/faq", priority: 0.5 },
  { path: "/shipping-returns", priority: 0.4 },
  { path: "/contact", priority: 0.4 },
  { path: "/privacy", priority: 0.2 },
  { path: "/terms", priority: 0.2 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = storeConfig.siteUrl.replace(/\/$/, "");
  const lastModified = new Date();

  return [
    ...STATIC_ROUTES.map((route) => ({
      url: `${base}${route.path}`,
      lastModified,
      priority: route.priority,
    })),
    ...editionStories.map((story) => ({
      url: `${base}/editions/${story.handle}`,
      lastModified,
      priority: 0.9,
    })),
    ...getStandaloneProducts().map((product) => ({
      url: `${base}/products/${product.handle}`,
      lastModified,
      priority: 0.8,
    })),
    ...blogPosts.map((post) => ({
      url: `${base}/blog/${post.slug}`,
      lastModified,
      priority: 0.5,
    })),
  ];
}
