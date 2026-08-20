"use client";

import Link from "next/link";
import { Heart, Camera, Award } from "lucide-react";

const FRESA = "#E8A4A4";
const FRESA_LIGHT = "#F5D5D5";
const FRESA_DARK = "#D48888";
const KIWI = "#7BAE7F";
const KIWI_LIGHT = "#D4EAD7";
const CREMA = "#FDF8F4";
const GRIS = "#3D3D3D";
const GRIS_CLARO = "#6B6B6B";

export function AboutPreview() {
  return (
    <section className="py-24 px-4 md:px-8" style={{ backgroundColor: CREMA }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/sign/assets/PAM_FAMILY-40.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85ODI1NjIyOS0wNDlhLTRkMTgtYTIxNi0wNmIwOTkwODZiMjgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvUEFNX0ZBTUlMWS00MC5qcGciLCJpYXQiOjE3NzYwOTI0NDUsImV4cCI6MTgwNzYyODQ0NX0.nOgA2qWnmCYQM3aRFcSyIjeyKYKdOmfnsgww9OVzfMY"
                alt="Equipo Fresaikiwi Fotografía"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div
              className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl -z-10"
              style={{ backgroundColor: KIWI_LIGHT }}
            />
            <div
              className="absolute -top-6 -left-6 w-24 h-24 rounded-full -z-10"
              style={{ backgroundColor: FRESA_LIGHT }}
            />
          </div>

          {/* Content */}
          <div>
            <span
              className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full"
              style={{ backgroundColor: FRESA_LIGHT, color: FRESA_DARK }}
            >
              Sobre Nosotros
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: GRIS }}
            >
              Capturando momentos únicos desde el corazón
            </h2>
            <p className="text-lg mb-6" style={{ color: GRIS_CLARO }}>
              En <strong style={{ color: FRESA_DARK }}>Fresaikiwi Fotografía</strong> somos un estudio
              especializado en fotografía familiar y de eventos ubicado en Valencia. Nuestra filosofía
              se basa en capturar la esencia y emoción de cada momento, creando recuerdos que duran
              toda la vida.
            </p>
            <p className="mb-8" style={{ color: GRIS_CLARO }}>
              Cada sesión es una historia esperando ser contada. Nos encanta trabajar con familias,
              mujeres embarazadas, recién nacidos y celebrar momentos especiales como comuniones y
              cumpleaños.
            </p>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 rounded-xl" style={{ backgroundColor: 'white' }}>
                <Camera className="w-8 h-8 mx-auto mb-2" style={{ color: FRESA }} />
                <p className="text-2xl font-bold" style={{ color: GRIS }}>
                  +500
                </p>
                <p className="text-xs" style={{ color: GRIS_CLARO }}>
                  Sesiones
                </p>
              </div>
              <div className="text-center p-4 rounded-xl" style={{ backgroundColor: 'white' }}>
                <Heart className="w-8 h-8 mx-auto mb-2" style={{ color: KIWI }} />
                <p className="text-2xl font-bold" style={{ color: GRIS }}>
                  +200
                </p>
                <p className="text-xs" style={{ color: GRIS_CLARO }}>
                  Familias
                </p>
              </div>
              <div className="text-center p-4 rounded-xl" style={{ backgroundColor: 'white' }}>
                <Award className="w-8 h-8 mx-auto mb-2" style={{ color: FRESA }} />
                <p className="text-2xl font-bold" style={{ color: GRIS }}>
                  5
                </p>
                <p className="text-xs" style={{ color: GRIS_CLARO }}>
                  Años
                </p>
              </div>
            </div>

            <Link
              href="/sobre-nosotros"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all hover:scale-105"
              style={{ backgroundColor: KIWI, color: 'white' }}
            >
              Conoce más sobre nosotros
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
