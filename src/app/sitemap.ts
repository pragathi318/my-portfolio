import type { MetadataRoute } from "next";

// Keep in sync with SITE_URL in layout.tsx
const SITE_URL = "https://pragathigaripally.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
