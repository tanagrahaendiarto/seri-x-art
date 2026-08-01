import type { MetadataRoute } from "next";
import { competitions } from "@/data/competitions";
import { openRecruitment } from "@/data/openRecruitment";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...competitions.map(({ slug }) => ({
      url: `${siteUrl}/competition/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...openRecruitment.map(({ slug }) => ({
      url: `${siteUrl}/recruitment/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
