/**
 * Centralized session data - Single source of truth for all session info
 * Import from here in: navbar, sessions-grid, sesiones/page, session-filters
 */

export type IconName = "Heart" | "Star" | "Camera" | "Users" | "Gift" | "Music" | "Crown";

export interface SessionData {
  name: string;
  slug: string;
  description: string;
  price: string;
  image: string;
  icon: IconName;
  bookingUrl?: string; // Ohmyphoto booking URL (optional, opens in new tab)
}

export const sessions: readonly SessionData[] = [
  {
    name: "Embarazo",
    slug: "embarazo",
    description: "Captura la esencia de la espera. Un momento único para recordar la belleza de la maternidad.",
    price: "Desde 120€",
    image: "https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/public/assets/LAURA-1 copia.jpg",
    icon: "Heart",
    bookingUrl: "https://ohmyphoto.app/booking/fresaikiwi-embarazo"
  },
  {
    name: "Newborn",
    slug: "newborn",
    description: "Los primeros días del bebé, un tesoro. Capturamos cada detalle diminuto con ternura.",
    price: "Desde 150€",
    image: "https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/public/assets/MARC-41 copia.jpg",
    icon: "Star",
    bookingUrl: "https://ohmyphoto.app/booking/fresaikiwi-newborn"
  },
  {
    name: "Cumpleaños",
    slug: "cumpleanos",
    description: "Cada año merece ser celebrado. Sesiones temáticas con decoración personalizada.",
    price: "Desde 100€",
    image: "https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/public/assets/CARLOTA_2ANYS-147.jpg",
    icon: "Camera",
    bookingUrl: "https://ohmyphoto.app/booking/fresaikiwi-cumpleanos"
  },
  {
    name: "Comunión",
    slug: "comunion",
    description: "Un día especial para siempre. Fotos elegantes que reflejan la importancia del momento.",
    price: "Desde 180€",
    image: "https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/public/assets/EDURNE_EXTERIORS-135.jpg",
    icon: "Crown",
    bookingUrl: "https://ohmyphoto.app/booking/fresaikiwi-comunion"
  },
  {
    name: "Navidad",
    slug: "navidad",
    description: "Magia y tradición familiar. Decoración festiva para recuerdos inolvidables.",
    price: "Desde 90€",
    image: "https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/public/assets/PROBA_DECORAT-22 copia 2.jpg",
    icon: "Star",
    bookingUrl: "https://ohmyphoto.app/booking/fresaikiwi-navidad"
  },
  {
    name: "Familia",
    slug: "familia",
    description: "Vínculos que duran siempre. Momentos auténticos de conexión familiar.",
    price: "Desde 130€",
    image: "https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/public/assets/PAM_FAMILY-40.jpg",
    icon: "Users",
    bookingUrl: "https://ohmyphoto.app/booking/fresaikiwi-familia"
  },
  {
    name: "Musical",
    slug: "musical",
    description: "Pasión y ritmo en imagen. Portfolios profesionales para músicos y artistas.",
    price: "Desde 160€",
    image: "https://lrggyvioreorxttbasgi.supabase.co/storage/v1/object/public/app-assets/15730/images/1775852254429-sesion-musical.jpg",
    icon: "Music",
    bookingUrl: "https://ohmyphoto.app/booking/fresaikiwi-musical"
  },
  {
    name: "Moros y Cristianos",
    slug: "moros-y-cristianos",
    description: "Tradición y orgullo local. Honramos la riqueza cultural de nuestras fiestas.",
    price: "Desde 140€",
    image: "https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/public/assets/ROSA_CAPI-1.jpg",
    icon: "Camera",
    bookingUrl: "https://ohmyphoto.app/booking/fresaikiwi-moros-cristianos"
  }
] as const;

export type Session = typeof sessions[number];

// Helper to get sessions for navbar dropdown (minimal data)
export const sessionsForNav = sessions.map(({ name, slug }) => ({ name, slug }));

// Helper to get sessions for filters (value, label, icon name)
export const sessionsForFilters = sessions.map(({ slug, name, icon }) => ({
  value: slug,
  label: name,
  iconName: icon
}));