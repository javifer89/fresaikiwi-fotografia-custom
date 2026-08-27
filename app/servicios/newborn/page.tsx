"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { X, ZoomIn } from "lucide-react";

const FRESA = "#E8A4A4";
const FRESA_DARK = "#D48888";
const GRIS = "#3D3D3D";

const newbornImages = [
  "https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/public/assets/EIRE-35-copia.avif",
  "https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/public/assets/MARC-41 copia.jpg",
  "https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/public/assets/GONZALO_NB-103 copia.jpg",
  "https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/public/assets/MIA_NB-18 copia.jpg"
];

export default function NewbornPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="min-h-screen">
      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-[#E8A4A4] transition-colors p-2"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="relative max-w-5xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage}
              alt="Newborn"
              fill
              className="object-contain"
              quality={90}
              unoptimized={selectedImage.includes('.avif')}
            />
          </div>
        </div>
      )}

      {/* Description + Gallery side by side */}
      <section className="py-12 md:py-16" style={{backgroundColor: '#FDF8F4'}}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left: Text content */}
            <div className="lg:sticky lg:top-24">
              <h1 className="text-fluid-2xl font-bold mb-6" style={{fontFamily: "'Rouge Script', cursive", color: GRIS}}>
                Sesión de Newborn
              </h1>
              <p className="text-lg leading-relaxed mb-8" style={{color: '#6B6B6B', fontFamily: "'Roboto', sans-serif"}}>
                Los primeros días de vida son únicos e irrepetibles. Nuestras sesiones newborn 
                capturan la ternura, la suavidad y la magia de los bebés más pequeños con 
                técnicas seguras y resultados hermosos que tendrás para siempre.
              </p>
              <div className="flex flex-col gap-3 mb-8">
                <div className="bg-white px-6 py-3 rounded-full shadow-lg">
                  <span className="font-semibold" style={{color: FRESA_DARK, fontFamily: "'Roboto', sans-serif"}}>Duración: 2-3 horas</span>
                </div>
                <div className="bg-white px-6 py-3 rounded-full shadow-lg">
                  <span className="font-semibold" style={{color: FRESA_DARK, fontFamily: "'Roboto', sans-serif"}}>20+ fotos editadas</span>
                </div>
                <div className="bg-white px-6 py-3 rounded-full shadow-lg">
                  <span className="font-semibold" style={{color: FRESA_DARK, fontFamily: "'Roboto', sans-serif"}}>Props incluidos</span>
                </div>
              </div>
            </div>

            {/* Right: Gallery grid */}
            <div className="grid grid-cols-2 gap-3">
              {newbornImages.map((src, index) => (
                <div 
                  key={index}
                  className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-lg group cursor-pointer"
                  onClick={() => setSelectedImage(src)}
                >
                  <Image
                    src={src}
                    alt={`Newborn ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    unoptimized={src.includes('.avif')}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-2">
                      <ZoomIn className="w-5 h-5" style={{color: FRESA_DARK}} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-12" style={{backgroundColor: FRESA}}>
        <Container>
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{fontFamily: "'Rouge Script', cursive"}}>
              ¿Lista para reservar tu sesión?
            </h3>
            <p className="text-white/90 mb-8 max-w-xl mx-auto" style={{fontFamily: "'Roboto', sans-serif"}}>
              Contacta con nosotras y empecemos a planificar tu sesión newborn.
            </p>
            <Link
              href="/reservas"
              className="inline-block bg-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              style={{color: FRESA_DARK, fontFamily: "'Roboto', sans-serif"}}
            >
              Reservar ahora
            </Link>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
