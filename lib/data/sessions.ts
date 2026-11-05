/**
 * Centralized session data - Single source of truth for all session info
 * Import from here in: navbar, sessions-grid, sesiones/page, session-filters, sesiones/[slug]
 */

export type IconName = "Heart" | "Star" | "Camera" | "Users" | "Gift" | "Music" | "Crown";

export interface SessionImage {
  src: string;
  alt: string;
  /**
   * Preserved legacy behaviour: these sources rendered with `unoptimized` before the
   * session pages were unified. Optimizing them is a separate, verifiable change.
   */
  unoptimized?: boolean;
}

export interface SessionData {
  name: string;
  slug: string;
  /** Short text used by the home bento grid and the sessions listing cards. */
  description: string;
  price: string;
  image: string;
  imageAlt: string;
  icon: IconName;
  /** Ohmyphoto booking URL (optional, opens in a new tab). */
  bookingUrl?: string;
  /** Label shown above the title on the detail page. */
  badge: string;
  /** Long intro paragraph on the detail page. */
  intro: string;
  includes: readonly string[];
  /** Two-column gallery with lightbox. Empty when the session uses a single image. */
  gallery: readonly SessionImage[];
  /** Single image used instead of a gallery. */
  heroImage?: SessionImage;
  galleryAspect?: "square" | "portrait";
  seoTitle: string;
  seoDescription: string;
}

const ASSETS = "https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/public/assets";

export const sessions: readonly SessionData[] = [
  {
    name: "Embarazo",
    slug: "embarazo",
    description: "Captura la esencia de la espera. Un momento único para recordar la belleza de la maternidad.",
    price: "Desde 120€",
    image: `${ASSETS}/LAURA-1 copia.jpg`,
    imageAlt: "Sesión de embarazo en estudio, Villajoyosa",
    icon: "Heart",
    bookingUrl: "https://ohmyphoto.app/booking/fresaikiwi-embarazo",
    badge: "Belleza Maternal",
    intro:
      "El momento más mágico de la vida merece ser capturado con sensibilidad y arte. Nuestras sesiones de embarazo celebran la belleza, la fuerza y el amor que sientes por tu bebé. Utilizamos iluminación suave y tonos naturales para crear imágenes que atesorarás para siempre.",
    includes: [
      "Duración de 2 horas de sesión",
      "30 fotografías editadas en alta resolución",
      "Vestuario y accesorios incluidos",
      "Maquillaje profesional opcional",
    ],
    galleryAspect: "portrait",
    gallery: [
      { src: `${ASSETS}/RAQUEL_EMB_PROBA-78%20copia.jpg`, alt: "Sesión de embarazo en Villajoyosa, foto 1", unoptimized: true },
      { src: `${ASSETS}/ELENA_EMB-134%20copia%202.jpg`, alt: "Sesión de embarazo en Villajoyosa, foto 2", unoptimized: true },
      { src: `${ASSETS}/EUGE_EMB-8.jpg`, alt: "Sesión de embarazo en Villajoyosa, foto 3", unoptimized: true },
      { src: `${ASSETS}/CRIS_SANZ-16%20copia.jpg`, alt: "Sesión de embarazo en Villajoyosa, foto 4", unoptimized: true },
    ],
    seoTitle: "Sesión de embarazo en Villajoyosa",
    seoDescription:
      "Sesión de embarazo en estudio: 2 horas, 30 fotografías editadas y vestuario incluido. Fotógrafa en Villajoyosa, Alicante.",
  },
  {
    name: "Newborn",
    slug: "newborn",
    description: "Los primeros días del bebé, un tesoro. Capturamos cada detalle diminuto con ternura.",
    price: "Desde 150€",
    image: `${ASSETS}/MARC-41 copia.jpg`,
    imageAlt: "Sesión newborn de recién nacido en Villajoyosa",
    icon: "Star",
    bookingUrl: "https://ohmyphoto.app/booking/fresaikiwi-newborn",
    badge: "Primeros Días",
    intro:
      "Los primeros días de vida son fugaces e irrepetibles. Capturamos la ternura, la delicadeza y el amor de los recién nacidos en sesiones íntimas y seguras.",
    includes: [
      "Duración de 3-4 horas (pausas para bebé)",
      "40 fotografías editadas en alta resolución",
      "Props y mantitas incluidas",
    ],
    galleryAspect: "square",
    gallery: [
      { src: `${ASSETS}/EIRE-35-copia.avif`, alt: "Sesión newborn en Villajoyosa, foto 1", unoptimized: true },
      { src: `${ASSETS}/MARC-41 copia.jpg`, alt: "Sesión newborn en Villajoyosa, foto 2" },
      { src: `${ASSETS}/GONZALO_NB-103 copia.jpg`, alt: "Sesión newborn en Villajoyosa, foto 3" },
      { src: `${ASSETS}/MIA_NB-18 copia.jpg`, alt: "Sesión newborn en Villajoyosa, foto 4" },
    ],
    seoTitle: "Sesión newborn en Villajoyosa",
    seoDescription:
      "Sesión newborn para recién nacidos: 3-4 horas con pausas, 40 fotografías editadas y props incluidos. Estudio en Villajoyosa, Alicante.",
  },
  {
    name: "Cumpleaños",
    slug: "cumpleanos",
    description: "Cada año merece ser celebrado. Sesiones temáticas con decoración personalizada.",
    price: "Desde 100€",
    image: `${ASSETS}/CARLOTA_2ANYS-147.jpg`,
    imageAlt: "Sesión de cumpleaños infantil con decoración temática",
    icon: "Camera",
    bookingUrl: "https://ohmyphoto.app/booking/fresaikiwi-cumpleanos",
    badge: "Celebración",
    intro:
      "Cada cumpleaños es único y merece ser celebrado con fotografías especiales. Desde primeras comuniones hasta bodas, capturamos la alegría, los colores y la magia de cada celebración.",
    includes: [
      "Duración de 1-2 horas de sesión",
      "20 fotografías editadas en alta resolución",
      "Decoración temática incluida",
      "Cakesmash y globo opcional",
    ],
    galleryAspect: "square",
    gallery: [
      { src: `${ASSETS}/ALEJANDRO_SMASH-240.jpg`, alt: "Sesión de cumpleaños y cakesmash, foto 1", unoptimized: true },
      { src: `${ASSETS}/EMMA_2-82.jpg`, alt: "Sesión de cumpleaños y cakesmash, foto 2", unoptimized: true },
      { src: `${ASSETS}/TRISTAN-209.jpg`, alt: "Sesión de cumpleaños y cakesmash, foto 3", unoptimized: true },
      { src: `${ASSETS}/EMMA%201%20copia.jpg`, alt: "Sesión de cumpleaños y cakesmash, foto 4", unoptimized: true },
    ],
    seoTitle: "Cumpleaños y cakesmash en Villajoyosa",
    seoDescription:
      "Sesión de cumpleaños con decoración temática en Villajoyosa: 1-2 horas, 20 fotografías editadas y cakesmash opcional.",
  },
  {
    name: "Comunión",
    slug: "comunion",
    description: "Un día especial para siempre. Fotos elegantes que reflejan la importancia del momento.",
    price: "Desde 180€",
    image: `${ASSETS}/EDURNE_EXTERIORS-135.jpg`,
    imageAlt: "Sesión de comunión en exterior",
    icon: "Crown",
    bookingUrl: "https://ohmyphoto.app/booking/fresaikiwi-comunion",
    badge: "Moments Mágicos",
    intro:
      "La comunión es un momento único e irrepetible. Capturamos la esencia, la ternura y la alegría de este día tan especial en sesiones elegantes y naturales.",
    includes: [
      "Duración de 2-3 horas en exterior",
      "50 fotografías editadas en alta resolución",
      "Asesoramiento de vestuario incluido",
    ],
    galleryAspect: "square",
    gallery: [
      { src: `${ASSETS}/txdd0wl8fjegett8criy.avif`, alt: "Sesión de comunión en exterior, foto 1", unoptimized: true },
      { src: `${ASSETS}/FINALS_MARC_COMU-126 copia.jpg`, alt: "Sesión de comunión en exterior, foto 2" },
      { src: `${ASSETS}/SYRA_EXTERIORS-69 copia.jpg`, alt: "Sesión de comunión en exterior, foto 3" },
      { src: `${ASSETS}/SYRA_EXTERIORS-110.jpg`, alt: "Sesión de comunión en exterior, foto 4" },
    ],
    seoTitle: "Sesión de comunión en Villajoyosa",
    seoDescription:
      "Sesión de comunión en exterior: 2-3 horas, 50 fotografías editadas y asesoramiento de vestuario. Fotógrafa en Villajoyosa, Alicante.",
  },
  {
    name: "Navidad",
    slug: "navidad",
    description: "Magia y tradición familiar. Decoración festiva para recuerdos inolvidables.",
    price: "Desde 90€",
    image: `${ASSETS}/PROBA_DECORAT-22 copia 2.jpg`,
    imageAlt: "Sesión de Navidad con set decorado",
    icon: "Star",
    bookingUrl: "https://ohmyphoto.app/booking/fresaikiwi-navidad",
    badge: "Temporada Especial",
    intro:
      "La magia de la Navidad merece ser inmortalizada. Sesiones temáticas con decoración festiva, luces cálidas y la calidez de esta época del año. Incluye sets especiales con nieve artificial, regalos y el árbol de Navidad.",
    includes: [
      "Duración de 1 hora de sesión",
      "15 fotografías editadas en alta resolución",
      "Set decorado con temática navideña",
      "Prints digitales y opción de impresiones",
    ],
    galleryAspect: "square",
    gallery: [
      { src: `${ASSETS}/PROBA_DECORAT-33_WEB.jpg`, alt: "Sesión de Navidad en estudio, foto 1", unoptimized: true },
      { src: `${ASSETS}/ISARD_NADAL-67.jpg`, alt: "Sesión de Navidad en estudio, foto 2", unoptimized: true },
      { src: `${ASSETS}/EMMA_ELFA-1%20copia%20%281%29.jpg`, alt: "Sesión de Navidad en estudio, foto 3", unoptimized: true },
      { src: `${ASSETS}/PROBA_DECORAT-22%20copia%202%20%281%29.jpg`, alt: "Sesión de Navidad en estudio, foto 4", unoptimized: true },
    ],
    seoTitle: "Sesión de Navidad en Villajoyosa",
    seoDescription:
      "Sesión de Navidad con set decorado: 1 hora, 15 fotografías editadas y opción de impresiones. Estudio en Villajoyosa, Alicante.",
  },
  {
    name: "Familia",
    slug: "familia",
    description: "Vínculos que duran siempre. Momentos auténticos de conexión familiar.",
    price: "Desde 130€",
    image: `${ASSETS}/PAM_FAMILY-40.jpg`,
    imageAlt: "Sesión de familia en exterior",
    icon: "Users",
    bookingUrl: "https://ohmyphoto.app/booking/fresaikiwi-familia",
    badge: "Familia",
    intro:
      "Las mejores historias se cuentan en familia. Capturamos la esencia de su vínculo, los momentos de complicidad y el amor que une a las familias. Ya sea en nuestro estudio o en ubicación exterior, creamos recuerdos que durarán toda la vida.",
    includes: [
      "Duración de 1.5 horas de sesión",
      "25 fotografías editadas en alta resolución",
      "Poses naturales y espontáneas",
      "Opción de ubicación (estudio o exterior)",
    ],
    gallery: [],
    heroImage: { src: `${ASSETS}/PAM_FAMILY-40.jpg`, alt: "Sesión de familia en exterior" },
    seoTitle: "Sesión de familia en Villajoyosa",
    seoDescription:
      "Sesión de familia en estudio o exterior: 1,5 horas, 25 fotografías editadas y poses naturales. Villajoyosa, Alicante.",
  },
  {
    name: "Musical",
    slug: "musical",
    description: "Pasión y ritmo en imagen. Portfolios profesionales para músicos y artistas.",
    price: "Desde 160€",
    image: "https://lrggyvioreorxttbasgi.supabase.co/storage/v1/object/public/app-assets/15730/images/1775852254429-sesion-musical.jpg",
    imageAlt: "Sesión musical para artistas y performers",
    icon: "Music",
    bookingUrl: "https://ohmyphoto.app/booking/fresaikiwi-musical",
    badge: "Performing Arts",
    intro:
      "Para jóvenes artistas y performers que quieren capturar su pasión por la música y el teatro. Sesiones dinámicas con iluminación teatral, vestuario de escenario y poses profesionales. Perfecto para crear un portfolio artístico o simplemente celebrar el talento.",
    includes: [
      "Duración de 1.5 horas de sesión",
      "25 fotografías editadas en alta resolución",
      "Iluminación teatral profesional",
      "Asesoramiento de poses y expresión",
    ],
    gallery: [],
    heroImage: {
      src: "https://lrggyvioreorxttbasgi.supabase.co/storage/v1/object/public/app-assets/15730/images/1775852254429-sesion-musical.jpg",
      alt: "Sesión musical para artistas y performers",
    },
    seoTitle: "Sesión musical en Villajoyosa",
    seoDescription:
      "Sesión musical para artistas y performers en Villajoyosa (Alicante): 1,5 horas, 25 fotografías editadas, iluminación teatral y asesoramiento de poses.",
  },
  {
    name: "Moros y Cristianos",
    slug: "moros-y-cristianos",
    description: "Tradición y orgullo local. Honramos la riqueza cultural de nuestras fiestas.",
    price: "Desde 140€",
    image: `${ASSETS}/ROSA_CAPI-1.jpg`,
    imageAlt: "Sesión de Moros y Cristianos con traje típico",
    icon: "Camera",
    bookingUrl: "https://ohmyphoto.app/booking/fresaikiwi-moros-cristianos",
    badge: "Sesión Especial",
    intro:
      "Una sesión fotográfica que celebra la tradición y el color de las fiestas de Moros y Cristianos. Capturamos la elegancia de los trajes típicos, la riqueza de los desfiles y la emoción de esta celebración única.",
    includes: [
      "Duración de 1.5 horas de sesión",
      "20 fotografías editadas en alta resolución",
      "Asesoramiento de estilo y poses",
      "Galería privada online para compartir",
    ],
    gallery: [],
    heroImage: { src: `${ASSETS}/ROSA_CAPI-1.jpg`, alt: "Sesión de Moros y Cristianos con traje típico" },
    seoTitle: "Moros y Cristianos en Villajoyosa",
    seoDescription:
      "Sesión de Moros y Cristianos: 1,5 horas, 20 fotografías editadas y galería privada online. Villajoyosa, Alicante.",
  },
] as const;

export type Session = (typeof sessions)[number];

export function getSession(slug: string): SessionData | undefined {
  return sessions.find((session) => session.slug === slug);
}

// Helper to get sessions for navbar dropdown (minimal data)
export const sessionsForNav = sessions.map(({ name, slug }) => ({ name, slug }));

// Helper to get sessions for filters (value, label, icon name)
export const sessionsForFilters = sessions.map(({ slug, name, icon }) => ({
  value: slug,
  label: name,
  iconName: icon,
}));
