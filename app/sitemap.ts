import { MetadataRoute } from "next";
import { sessions } from "@/lib/data/sessions";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  // Defensive: an env value with a trailing slash would produce "//" URLs.
  const baseUrl = siteConfig.url.replace(/\/$/, "");
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/sesiones`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/reservas`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contacto`, lastModified, changeFrequency: "yearly", priority: 0.8 },
    { url: `${baseUrl}/sobre-nosotros`, lastModified, changeFrequency: "yearly", priority: 0.6 },
    { url: `${baseUrl}/accesibilidad`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/aviso-legal`, lastModified, changeFrequency: "yearly", priority: 0.2 },
    { url: `${baseUrl}/privacidad`, lastModified, changeFrequency: "yearly", priority: 0.2 },
    { url: `${baseUrl}/politica-de-cookies`, lastModified, changeFrequency: "yearly", priority: 0.2 },
  ];

  const sessionRoutes: MetadataRoute.Sitemap = sessions.map((session) => ({
    url: `${baseUrl}/sesiones/${session.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...sessionRoutes];
}
