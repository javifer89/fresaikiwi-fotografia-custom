"use client";

import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { Heart, Star, Camera, Users, Gift, Music, Crown } from "lucide-react";

const FRESA = "#E8A4A4";
const FRESA_DARK = "#D48888";
const KIWI = "#7BAE7F";
const CREMA = "#FDF8F4";

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
  {
    name: "Musical",
    slug: "musical",
    description: "Pasión y ritmo en imagen. Portfolios profesionales para músicos y artistas.",
    price: "Desde 160€",
    image: "https://lrggyvioreorxttbasgi.supabase.co/storage/v1/object/public/app-assets/15730/images/1775852254429-sesion-musical.jpg",
    icon: Music
  },
  {
    name: "Moros y Cristianos",
    slug: "moros-y-cristianos",
    description: "Tradición y orgullo local. Honramos la riqueza cultural de nuestras fiestas.",
    price: "Desde 140€",
    image: "https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/public/assets/ROSA_CAPI-1.jpg",
    icon: Camera
  }
];

export default function SesionesPage() {
  return (
    <main className="min-h-screen">
      {/* Sessions Section */}
      <section className="py-16" style={{backgroundColor: CREMA}}>
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{fontFamily: "'Rouge Script', cursive", color: '#3D3D3D'}}>
            Nuestras Sesiones
          </h1>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto" style={{fontFamily: "'Roboto', sans-serif"}}>
            Cada momento es único. Descubre nuestras sesiones fotográficas diseñadas para capturar la esencia de tu historia.
          </p>

          {/* Sessions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sessions.map((session) => {
              const IconComponent = session.icon;
              return (
                <Link
                  key={session.slug}
                  href={`/sesiones/${session.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={session.image}
                      alt={session.name}
                      fill
                      sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-white/90">
                        <IconComponent className="w-4 h-4" style={{color: FRESA}} />
                        <span style={{fontFamily: "'Roboto', sans-serif"}}>{session.name}</span>
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2" style={{fontFamily: "'Roboto', sans-serif"}}>
                      {session.description}
                    </p>
                    <p className="font-semibold" style={{color: KIWI, fontFamily: "'Roboto', sans-serif"}}>
                      {session.price}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
