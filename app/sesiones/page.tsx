import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Heart, Star, Camera, Users, Gift, Music, Crown, ExternalLink } from "lucide-react";
import { Container } from "@/components/container";
import { SessionFilters } from "@/components/session-filters";
import { sessions } from "@/lib/data/sessions";

export const metadata: Metadata = {
  title: "Sesiones fotográficas",
  description:
    "Sesiones de embarazo, newborn, comunión, cumpleaños, familia, Navidad y Moros y Cristianos en Villajoyosa, Alicante. Descubre qué incluye cada una.",
  alternates: { canonical: "/sesiones" },
};

// Tiny 10x10 blurred placeholder for session images
const BLUR_PLACEHOLDER = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/AB//2Q==";

const iconComponents = {
  Heart,
  Star,
  Camera,
  Users,
  Gift,
  Music,
  Crown,
} as const;

const FRESA = "#E8A4A4";
const FRESA_DARK = "#D48888";
const KIWI = "#7BAE7F";
const CREMA = "#FDF8F4";
//TODO: REVISAR PRECIOS SESIONES EN CADA CARD DEL GRID DE SESIONES
const sessions = [
  {
    name: "Embarazo",
    slug: "embarazo",
    description: "Captura la esencia de la espera. Un momento único para recordar la belleza de la maternidad.",
    price: "Desde 120€",
    image: "https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/public/assets/LAURA-1 copia.jpg",
    icon: Heart
  },
  {
    name: "Newborn",
    slug: "newborn",
    description: "Los primeros días del bebé, un tesoro. Capturamos cada detalle diminuto con ternura.",
    price: "Desde 150€",
    image: "https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/public/assets/MARC-41 copia.jpg",
    icon: Star
  },
  {
    name: "Cumpleaños",
    slug: "cumpleanos",
    description: "Cada año merece ser celebrado. Sesiones temáticas con decoración personalizada.",
    price: "Desde 100€",
    image: "https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/public/assets/CARLOTA_2ANYS-147.jpg",
    icon: Gift
  },
  {
    name: "Comunión",
    slug: "comunion",
    description: "Un día especial para siempre. Fotos elegantes que reflejan la importancia del momento.",
    price: "Desde 180€",
    image: "https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/public/assets/EDURNE_EXTERIORS-135.jpg",
    icon: Crown
  },
  {
    name: "Navidad",
    slug: "navidad",
    description: "Magia y tradición familiar. Decoración festiva para recuerdos inolvidables.",
    price: "Desde 90€",
    image: "https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/public/assets/PROBA_DECORAT-22 copia 2.jpg",
    icon: Star
  },
  {
    name: "Familia",
    slug: "familia",
    description: "Vínculos que duran siempre. Momentos auténticos de conexión familiar.",
    price: "Desde 130€",
    image: "https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/public/assets/PAM_FAMILY-40.jpg",
    icon: Users
  },
  // {
  //   name: "Musical",
  //   slug: "musical",
  //   description: "Pasión y ritmo en imagen. Portfolios profesionales para músicos y artistas.",
  //   price: "Desde 160€",
  //   image: "https://lrggyvioreorxttbasgi.supabase.co/storage/v1/object/public/app-assets/15730/images/1775852254429-sesion-musical.jpg",
  //   icon: Music
  // },
  // {
  //   name: "Moros y Cristianos",
  //   slug: "moros-y-cristianos",
  //   description: "Tradición y orgullo local. Honramos la riqueza cultural de nuestras fiestas.",
  //   price: "Desde 140€",
  //   image: "https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/public/assets/ROSA_CAPI-1.jpg",
  //   icon: Camera
  // }
];

export default function SesionesPage() {
  return (
    <div className="min-h-screen">
      {/* Sessions Section */}
      <section className="py-16" style={{ backgroundColor: "var(--crema)" }}>
        <Container>
          <SessionFilters />

          <h1
            className="text-4xl md:text-5xl font-bold text-center mb-4"
            style={{ fontFamily: "var(--font-rouge), cursive", color: "var(--gris)" }}
          >
            Nuestras Sesiones
          </h1>
          <p
            className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-roboto), sans-serif" }}
          >
            Cada momento es único. Descubre nuestras sesiones fotográficas diseñadas para capturar la
            esencia de tu historia.
          </p>

          {/* Sessions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sessions.map((session) => {
              const IconComponent = iconComponents[session.icon];
              return (
                <div
                  key={session.slug}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
                >
                  {/* The booking link lives outside the card link: nesting anchors is invalid HTML. */}
                  <Link href={`/sesiones/${session.slug}`} className="flex flex-col flex-grow">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={session.image}
                        alt={session.imageAlt}
                        fill
                        sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        placeholder="blur"
                        blurDataURL={BLUR_PLACEHOLDER}
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-white/90">
                          <IconComponent className="w-4 h-4" style={{ color: "var(--fresa)" }} />
                          <span style={{ fontFamily: "var(--font-roboto), sans-serif" }}>{session.name}</span>
                        </span>
                      </div>
                    </div>
                    <div className="p-5 flex flex-col flex-grow">
                      <p
                        className="text-sm text-gray-600 mb-3 line-clamp-2"
                        style={{ fontFamily: "var(--font-roboto), sans-serif" }}
                      >
                        {session.description}
                      </p>
                    </div>
                  </Link>

                  <div className="flex items-center justify-between px-5 pb-5 pt-4 border-t border-gray-100">
                    <p
                      className="font-semibold"
                      style={{ color: "var(--kiwi)", fontFamily: "var(--font-roboto), sans-serif" }}
                    >
                      {session.price}
                    </p>
                    {session.bookingUrl && (
                      <a
                        href={session.bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full transition-colors"
                        style={{ backgroundColor: "var(--fresa-light)", color: "var(--fresa-dark)" }}
                      >
                        Reservar
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

    </div>
  );
}
