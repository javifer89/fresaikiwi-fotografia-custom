/**
 * Site Configuration - EDIT THIS FILE to customize your site
 * All metadata, OG images, and branding read from here automatically.
 */

export interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}

export const heroSlides: readonly HeroSlide[] = [
  {
    id: 1,
    title: "Sesiones de Embarazo",
    subtitle: "Captura la belleza de esta etapa única",
    image: "https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/public/assets/ALEJANDRI_9M-43.jpg"
  },
  {
    id: 2,
    title: "Comuniones y Celebraciones",
    subtitle: "Recuerdos especiales para días únicos",
    image: "https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/public/assets/CARLOTA_2ANYS-147.jpg"
  },
  {
    id: 3,
    title: "Exteriores y Familia",
    subtitle: "Sesiones al aire libre llenas de luz",
    image: "https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/public/assets/EDURNE_EXTERIORS-135.jpg"
  },
  {
    id: 4,
    title: "Sesiones Infantiles",
    subtitle: "La magia de la infancia en cada foto",
    image: "https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/public/assets/LAURA-1 copia.jpg"
  },
  {
    id: 5,
    title: "Retratos con Estilo",
    subtitle: "Captura tu esencia y personalidad",
    image: "https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/public/assets/MARC-41 copia.jpg"
  },
  {
    id: 6,
    title: "Sesiones Familiares",
    subtitle: "Momentos en familia para siempre",
    image: "https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/public/assets/PAM_FAMILY-40.jpg"
  },
  {
    id: 7,
    title: "Decorados y Temáticas",
    subtitle: "Creaciones únicas para cada sesión",
    image: "https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/public/assets/PROBA_DECORAT-22 copia 2.jpg"
  }
] as const;

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