import type { MetadataRoute } from "next";
import { RESUME_DATA } from "@/data/resume-data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: RESUME_DATA.siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
