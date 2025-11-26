import { MetadataRoute } from "next";
import { sets } from "@/data/sets";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://dpullpoint.com";

  const staticPages = [
    "/",
    "/collections",
    "/aviso-legal",
    "/politica-privacidad",
    "/politica-cookies",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1.0 : 0.8,
  }));

  const dynamicCollections = sets.map((set) => ({
    url: `${baseUrl}/collections/${set.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...staticPages, ...dynamicCollections];
}
