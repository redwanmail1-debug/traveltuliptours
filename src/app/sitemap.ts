import { MetadataRoute } from "next";
import { tours } from "@/lib/tourData";

const siteUrl = "https://traveltuliptours.nl";

export default function sitemap(): MetadataRoute.Sitemap {
  const tourPages = tours.map((tour) => ({
    url: `${siteUrl}/tours/${tour.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...tourPages,
  ];
}
