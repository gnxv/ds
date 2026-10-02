import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://fiolet-gel.ru";

  return [
    { url: base, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/r-sleek`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/solarium`, changeFrequency: "monthly", priority: 0.9 },
  ];
}
