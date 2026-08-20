/**
 * Site Configuration - EDIT THIS FILE to customize your site
 * All metadata, OG images, and branding read from here automatically.
 */

export const siteConfig = {
  // Basic Info
  name: "Fresaikiwi Fotografía",
  tagline: "Capturando momentos irrepetibles",
  description:
    "Estudio de fotografía especializado en sesiones de embarazo, newborn, comuniones, bodas y sesiones familiares en Villajoyosa. Cada imagen cuenta una historia única.",
  
  // Contact Info
  phone: "633 52 08 62",
  email: "info@fresaikiwifotografia.com",
  address: "Villajoyosa, Alicante",

  // Site URL (replaced automatically on deploy)
  url: process.env.NEXT_PUBLIC_URL || "https://fresaikiwi-fotografia.com",

  // Layout: navbar is hidden by default. Set to true for marketing/landing sites.
  showNavbar: true,

  // Navigation links (only used when showNavbar is true)
  navLinks: [
    { title: "Sobre nosotros", link: "/sobre-nosotros" },
    { title: "Sesiones", link: "/sesiones" },
    { title: "Reservas", link: "/reservas" },
    { title: "Contacto", link: "/contacto" }
  ] as { title: string; link: string }[],

  // SEO Keywords
  keywords: ["fotografía Valencia", "sesión fotográfica", "embarazo", "newborn", "comunión", "fotógrafo Valencia"],

  // Author/Company
  author: "Fresaikiwi",
  company: "Fresaikiwi Fotografía",

  // Social
  twitter: "@yourtwitter",

  // OG Image: set to a generated image URL for rich link previews
  ogImage: "",

  // Theme colors for OG image (fallback when ogImage is empty)
  ogBackground: "#020022",
  ogAccent1: "#1a1a4e",
  ogAccent2: "#2d1b4e",
};

export type SiteConfig = typeof siteConfig;
