"use client";

import Link from "next/link";
import Image from "next/image";
import { Camera, Heart, Star } from "lucide-react";

const FRESA = "#E8A4A4";
const FRESA_DARK = "#D48888";
const FRESA_LIGHT = "#F5D5D5";
const KIWI = "#7BAE7F";
const KIWI_LIGHT = "#D4EAD7";
const CREMA = "#FDF8F4";
const GRIS = "#3D3D3D";
const GRIS_CLARO = "#6B6B6B";

const sessions = [
  {
    name: "Embarazo",
    slug: "embarazo",
    description: "Captura la esencia de la espera",
    image: "https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/public/assets/LAURA-1 copia.jpg",
    icon: Heart
  },
  {
    name: "Newborn",
    slug: "newborn",
    description: "Los primeros días, un tesoro",
    image: "https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/public/assets/MARC-41 copia.jpg",
    icon: Star
  },
  {
    name: "Cumpleaños",
    slug: "cumpleanos",
    description: "Cada año, una celebración",
    image: "https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/public/assets/CARLOTA_2ANYS-147.jpg",
    icon: Camera
  },
  {
    name: "Comunión",
    slug: "comunion",
    description: "Un día especial para siempre",
    image: "https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/public/assets/EDURNE_EXTERIORS-135.jpg",
    icon: Star
  },
  {
    name: "Navidad",
    slug: "navidad",
    description: "Magia y tradición familiar",
    image: "https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/public/assets/PROBA_DECORAT-22 copia 2.jpg",
    icon: Star
  },
  {
    name: "Familia",
    slug: "familia",
    description: "Vínculos que duran siempre",
    image: "https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/public/assets/PAM_FAMILY-40.jpg",
    icon: Heart
  },
  {
    name: "Musical",
    slug: "musical",
    description: "Pasión y ritmo en imagen",
    image: "https://lrggyvioreorxttbasgi.supabase.co/storage/v1/object/public/app-assets/15730/images/1775852254429-sesion-musical.jpg",
    icon: Camera
  },
  // {
  //   name: "Moros y Cristianos",
  //   slug: "moros-y-cristianos",
  //   description: "Tradición y orgullo local",
  //   image: "https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/public/assets/ROSA_CAPI-1.jpg",
  //   icon: Star
  // }
];

export function SessionsGrid() {
  return (
    <section className="py-24 px-4 md:px-8" style={{ backgroundColor: CREMA }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full"
                style={{ backgroundColor: FRESA_LIGHT, color: FRESA_DARK }}>
            Nuestras Sesiones
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: GRIS }}
          >
            Cada momento merece su historia
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: GRIS_CLARO }}>
            Descubre nuestras sesiones fotográficas diseñadas para capturar la esencia de cada etapa especial de tu vida
          </p>
        </div>

        {/* Sessions Grid - Bento Style */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {sessions.map((session, index) => {
            const Icon = session.icon;
            const isLarge = index === 0 || index === 3;

            return (
              <Link
                key={session.slug}
                href={`/sesiones/${session.slug}`}
                className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                  isLarge ? 'col-span-2 row-span-2' : ''
                }`}
              >
                {/* Image */}
                <div className={`relative ${isLarge ? 'aspect-square' : 'aspect-square'}`}>
                  <Image
                    src={session.image}
                    alt={session.name}
                    fill
                    sizes="(min-width: 768px) 25vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6">
                    <div className="mb-2">
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-white/80" />
                    </div>
                    <h3
                      className={`font-bold text-white mb-1 ${isLarge ? 'text-2xl md:text-3xl' : 'text-lg md:text-xl'}`}
                      style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.4)' }}
                    >
                      {session.name}
                    </h3>
                    <p className={`text-white/80 ${isLarge ? 'text-base md:text-lg' : 'text-sm'}`}>
                      {session.description}
                    </p>

                    {/* Hover Arrow */}
                    <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="inline-flex items-center gap-2 text-sm font-medium text-white">
                        Ver más
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            href="/sesiones"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium transition-all hover:scale-105 hover:shadow-xl"
            style={{ backgroundColor: KIWI, color: 'white' }}
          >
            Ver todas las sesiones
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
