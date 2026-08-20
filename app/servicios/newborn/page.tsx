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
  "https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/sign/assets/EIRE-35-copia.avif?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85ODI1NjIyOS0wNDlhLTRkMTgtYTIxNi0wNmIwOTkwODZiMjgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvRUlSRS0zNS1jb3BpYS5hdmlmIiwiaWF0IjoxNzc2OTU1MjI2LCJleHAiOjE4MDg0OTEyMjZ9.xeQ1DDRyMoz7zTsb2v6lFHCBOz72-lmxKykmg4gaINU",
  "https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/sign/assets/MARC-41%20copia.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85ODI1NjIyOS0wNDlhLTRkMTgtYTIxNi0wNmIwOTkwODZiMjgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvTUFSQy00MSBjb3BpYS5qcGciLCJpYXQiOjE3NzY5NTUyNzYsImV4cCI6MTgwODQ5MTI3Nn0.gnBwy2tri5elf0vQ0cyOZffraLaxRQEmk_0BPJG5M60",
  "https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/sign/assets/GONZALO_NB-103%20copia.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85ODI1NjIyOS0wNDlhLTRkMTgtYTIxNi0wNmIwOTkwODZiMjgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvR09OWkFMT19OQi0xMDMgY29waWEuanBnIiwiaWF0IjoxNzc2OTU1Mzc3LCJleHAiOjE4MDg0OTEzNzd9.5c5ssosS1xlykqYo8lNDYUYnIDFMpK-NdFk47noWwH0",
  "https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/sign/assets/MIA_NB-18%20copia.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85ODI1NjIyOS0wNDlhLTRkMTgtYTIxNi0wNmIwOTkwODZiMjgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvTUlBX05CLTE4IGNvcGlhLmpwZyIsImlhdCI6MTc3Njk1NTM4OSwiZXhwIjoxODA4NDkxMzg5fQ.vd7K-MPIAUtIirqIF7zNTTQwXy_QJcMYF1ORlu2fwv8"
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
              alt="Newborn放大"
              fill
              className="object-contain"
              quality={90}
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{fontFamily: "'Rouge Script', cursive", color: GRIS}}>
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
