import type { MetadataRoute } from "next";
import { RESUME_DATA } from "@/data/resume-data";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: new URL("/sitemap.xml", RESUME_DATA.siteUrl).href,
  };
}
