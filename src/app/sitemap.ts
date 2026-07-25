import type { MetadataRoute } from "next";
import { INSIGHTS_DATA } from "@/data/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://leadglobalconsults.com";
  const now  = new Date();

  const insightRoutes: MetadataRoute.Sitemap = INSIGHTS_DATA.map((insight) => ({
    url: `${base}/insights/${insight.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [
    { url: base,                     lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/about`,          lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/programs`,       lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/consulting`,     lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/testimonials`,   lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/faq`,            lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/insights`,       lastModified: now, changeFrequency: "weekly",  priority: 0.7 },
    { url: `${base}/contact`,        lastModified: now, changeFrequency: "yearly",  priority: 0.8 },
    ...insightRoutes,
  ];
}
