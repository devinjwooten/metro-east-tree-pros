import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

const routes = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/services", changeFrequency: "monthly", priority: 0.9 },
  { path: "/services/tree-removal", changeFrequency: "monthly", priority: 0.9 },
  { path: "/services/tree-trimming", changeFrequency: "monthly", priority: 0.9 },
  { path: "/services/stump-grinding", changeFrequency: "monthly", priority: 0.9 },
  { path: "/services/emergency-tree-service", changeFrequency: "monthly", priority: 0.9 },
  { path: "/services/storm-cleanup", changeFrequency: "monthly", priority: 0.9 },
  { path: "/about", changeFrequency: "yearly", priority: 0.6 },
  { path: "/gallery", changeFrequency: "monthly", priority: 0.6 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.7 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: new URL(route.path, siteUrl).toString(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
