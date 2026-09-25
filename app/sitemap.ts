import type { MetadataRoute } from "next";
import { APP_SITE_URL } from "@/lib/constants";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: APP_SITE_URL, changeFrequency: "weekly", priority: 1 },
    {
      url: `${APP_SITE_URL}/photo`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${APP_SITE_URL}/illustration`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];
}
