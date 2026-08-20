"use client";

import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { Heart, Camera, Sparkles } from "lucide-react";

const FRESA = "#E8A4A4";
const FRESA_LIGHT = "#F5D5D5";
const FRESA_DARK = "#D48888";
const KIWI = "#7BAE7F";
const KIWI_LIGHT = "#D4EAD7";
const CREMA = "#FDF8F4";
const GRIS = "#3D3D3D";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Our Story - sin hero */}
      <section className="py-16 md:py-24" style={{backgroundColor: CREMA}}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full" style={{backgroundColor: FRESA_LIGHT, color: FRESA_DARK}}>
                Nuestra Historia
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{fontFamily: "'Cormorant Garamond', serif", color: GRIS}}>
                Fresaikiwi Fotografía
              </h2>
              <p className="text-lg leading-relaxed mb-6" style={{color: '#6B6B6B'}}>
                Somos un estudio fotográfico ubicado en Villajoyosa, especializado en capturar los momentos más especiales de tu vida. Nuestro nombre, Fresaikiwi, refleja nuestra filosofía: la combinación perfecta entre dulzura y frescura.
              </p>
              <p className="text-lg leading-relaxed mb-6" style={{color: '#6B6B6B'}}>
                Con años de experiencia, nos hemos dedicado a crear recuerdos únicos y emotivos 
                para familias de toda la región. Cada sesión es una oportunidad para capturar el tiempo 
                y crear arte que durará generaciones.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/sign/assets/IMG_9035-copia-bin-800x1024.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85ODI1NjIyOS0wNDlhLTRkMTgtYTIxNi0wNmIwOTkwODZiMjgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvSU1HXzkwMzUtY29waWEtYmluLTgwMHgxMDI0LmpwZyIsImlhdCI6MTc3NjA5ODk5MSwiZXhwIjoxODA3NjM0OTkxfQ.u6XBdTz7AujG0s1Z-z2xAX_BGmGHVuONaSJFHTvsWd4" 
                  alt="Estudio Fresaikiwi"
                  className="w-full h-[500px] md:h-[600px] object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-20">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{fontFamily: "'Cormorant Garamond', serif", color: '#3D3D3D'}}>
              Nuestros Valores
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{backgroundColor: `${FRESA}33`}}>
                <Camera className="w-8 h-8" style={{color: FRESA}} />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{color: FRESA_DARK}}>Pasión</h3>
              <p className="text-gray-600">Amamos lo que hacemos y eso se refleja en cada fotografía que tomamos.</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{backgroundColor: `${KIWI}33`}}>
                <Heart className="w-8 h-8" style={{color: KIWI}} />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{color: KIWI}}>Dedicación</h3>
              <p className="text-gray-600">Cada sesión recibe nuestra atención total y personalizado para ti.</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{backgroundColor: `${FRESA}33`}}>
                <Sparkles className="w-8 h-8" style={{color: FRESA}} />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{color: FRESA_DARK}}>Creatividad</h3>
              <p className="text-gray-600">Buscamos siempre la innovación y ideas frescas para tus fotos.</p>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
