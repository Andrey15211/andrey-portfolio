import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { siteConfig } from "@/lib/site";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const localizedRoutes = routing.locales.map((locale) => ({
    url: `${siteConfig.url}/${locale}`,
    changeFrequency: "monthly" as const,
    priority: 1,
    alternates: {
      languages: {
        ru: `${siteConfig.url}/ru`,
        en: `${siteConfig.url}/en`,
      },
    },
  }));
  const projectRoutes = projects.flatMap((project) =>
    routing.locales.map((locale) => ({
      url: `${siteConfig.url}/${locale}/projects/${project.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      alternates: {
        languages: {
          ru: `${siteConfig.url}/ru/projects/${project.slug}`,
          en: `${siteConfig.url}/en/projects/${project.slug}`,
        },
      },
    })),
  );

  return [
    {
      url: siteConfig.url,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...localizedRoutes,
    ...projectRoutes,
  ];
}
