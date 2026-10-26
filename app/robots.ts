import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_URL || "https://fresaikiwifotografia.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Only routes with no public value belong here. Do not block /_next/:
      // Googlebot needs those assets to render the page.
      disallow: ["/api/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
