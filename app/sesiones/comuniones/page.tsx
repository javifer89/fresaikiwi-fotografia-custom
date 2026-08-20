"use client";

import { Container } from "@/components/container";
import Link from "next/link";
import { ArrowLeft, X } from "lucide-react";
import { useState } from "react";

const comunionesImages = [
  "https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/sign/assets/txdd0wl8fjegett8criy.avif?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85ODI1NjIyOS0wNDlhLTRkMTgtYTIxNi0wNmIwOTkwODZiMjgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvdHhkZDB3bDhmamVnZXR0OGNyaXkuYXZpZiIsImlhdCI6MTc3NzEwMjgxMCwiZXhwIjoxODA4NjM4ODEwfQ.qQnfkWjfly8_FQstLMt_Q4qIdHCyvHkHPh47gC5cg60",
  "https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/sign/assets/FINALS_MARC_COMU-126%20copia.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85ODI1NjIyOS0wNDlhLTRkMTgtYTIxNi0wNmIwOTkwODZiMjgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvRklOQUxTX01BUkNfQ09NVS0xMjYgY29waWEuanBnIiwiaWF0IjoxNzc3MTAyOTQwLCJleHAiOjE4MDg2Mzg5NDB9.NBfz4qh6goY6r0mlbn9KtBaGBxkhUnS0RKryTdkI8XQ",
  "https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/sign/assets/SYRA_EXTERIORS-69%20copia.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85ODI1NjIyOS0wNDlhLTRkMTgtYTIxNi0wNmIwOTkwODZiMjgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvU1lSQV9FWFRFUklPUlMtNjkgY29waWEuanBnIiwiaWF0IjoxNzc3MTAyODM3LCJleHAiOjE4MDg2Mzg4Mzd9.GVBWGeh6VyS8jR_bw1E5p52ExREIobEPV7x9vT0JeEs",
  "https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/sign/assets/SYRA_EXTERIORS-110.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85ODI1NjIyOS0wNDlhLTRkMTgtYTIxNi0wNmIwOTkwODZiMjgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvU1lSQV9FWFRFUklPUlMtMTEwLmpwZyIsImlhdCI6MTc3NzEwMjkwOSwiZXhwIjoxODA4NjM4OTA5fQ.s3Vv18MvHX1Kf0JOEt-FeH-dPjAR6fKrPGqlID5BXaA"
];

export default function ComunionesPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <main className="min-h-screen" style={{backgroundColor: '#FDF8F4'}}>
      <Container>
        <Link 
          href="/sesiones" 
          className="inline-flex items-center gap-2 mb-8 transition-colors"
          style={{color: '#D48888'}}
        >
          <ArrowLeft className="w-4 h-4" />
          <span style={{fontFamily: "'Roboto', sans-serif"}}>Volver a Sesiones</span>
        </Link>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <span className="inline-block px-4 py-1 rounded-full text-sm mb-4" style={{backgroundColor: 'rgba(232,164,164,0.2)', color: '#D48888'}}>
              Comuniones
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{fontFamily: "'Rouge Script', cursive", color: '#3D3D3D'}}>Comuniones</h1>
            <p className="text-lg mt-4 leading-relaxed" style={{color: '#666', fontFamily: "'Roboto', sans-serif"}}>
              Un momento único y especial que merece ser capturado para siempre. 
              Capturamos la esencia y la alegría de este día tan importante.
            </p>
            <div className="mt-8 space-y-4">
              <h3 className="font-semibold mb-3" style={{fontFamily: "'Roboto', sans-serif", color: '#D48888'}}>¿Qué incluye esta sesión?</h3>
              <ul className="space-y-2" style={{color: '#666', fontFamily: "'Roboto', sans-serif"}}>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{backgroundColor: '#E8A4A4'}}></span>
                  Duración de 2-3 horas
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{backgroundColor: '#E8A4A4'}}></span>
                  50 fotografías editadas en alta resolución
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{backgroundColor: '#E8A4A4'}}></span>
                  Ubicación a elegir (exterior o estudio)
                </li>
              </ul>
            </div>
            <Link 
              href="/reservas"
              className="inline-block mt-8 px-8 py-3 rounded-full transition-all hover:scale-105"
              style={{backgroundColor: '#E8A4A4', color: 'white', fontFamily: "'Roboto', sans-serif"}}
            >
              Reservar esta sesión
            </Link>
          </div>
          
          {/* Galería de fotos en la columna derecha */}
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px'}}>
            {comunionesImages.map((src, index) => (
              <div 
                key={index}
                onClick={() => openLightbox(index)}
                style={{
                  position: 'relative',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  aspectRatio: '1/1',
                  backgroundColor: '#f0f0f0'
                }}
              >
                <img 
                  src={src} 
                  alt={`Comunión ${index + 1}`}
                  loading="lazy"
                  style={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease'
                  }}
                  className="hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Lightbox */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{backgroundColor: 'rgba(0,0,0,0.9)'}}
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-4 right-4 p-2 text-white hover:text-[#E8A4A4] transition-colors"
            onClick={closeLightbox}
          >
            <X className="w-8 h-8" />
          </button>
          <img 
            src={comunionesImages[selectedImage]} 
            alt="Ampliada"
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
}
