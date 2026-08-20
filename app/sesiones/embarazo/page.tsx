"use client";

import { Container } from "@/components/container";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, X } from "lucide-react";
import { useState } from "react";

const embarazoImages = [
  "https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/public/assets/RAQUEL_EMB_PROBA-78 copia.jpg",
  "https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/public/assets/ELENA_EMB-134 copia 2.jpg",
  "https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/public/assets/EUGE_EMB-8.jpg",
  "https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/public/assets/CRIS_SANZ-16 copia.jpg"
];

export default function EmbarazoPage() {
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
        
        <div className="grid lg:grid-cols-2 gap-12 lg:items-start mb-16">
          <div>
            <span className="inline-block px-4 py-1 rounded-full text-sm mb-4" style={{backgroundColor: 'rgba(232,164,164,0.2)', color: '#D48888'}}>
              Belleza Maternal
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{fontFamily: "'Rouge Script', cursive", color: '#3D3D3D'}}>Embarazo</h1>
            <p className="text-lg mt-4 leading-relaxed" style={{color: '#666', fontFamily: "'Roboto', sans-serif"}}>
              El momento más mágico de la vida merece ser capturado con sensibilidad y arte. 
              Nuestras sesiones de embarazo celebran la belleza, la fuerza y el amor que sientes 
              por tu bebé. Utilizamos iluminación suave y tonos naturales para crear imágenes 
              que atesorarás para siempre.
            </p>
            <div className="mt-8 space-y-4">
              <h3 className="font-semibold mb-3" style={{fontFamily: "'Roboto', sans-serif", color: '#D48888'}}>¿Qué incluye esta sesión?</h3>
              <ul className="space-y-2" style={{color: '#666', fontFamily: "'Roboto', sans-serif"}}>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{backgroundColor: '#E8A4A4'}}></span>
                  Duración de 2 horas de sesión
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{backgroundColor: '#E8A4A4'}}></span>
                  30 fotografías editadas en alta resolución
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{backgroundColor: '#E8A4A4'}}></span>
                  Vestuario y accesorios incluidos
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{backgroundColor: '#E8A4A4'}}></span>
                  Maquillaje profesional opcional
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
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', alignItems: 'start'}}>
            {embarazoImages.map((src, index) => (
              <div 
                key={index}
                onClick={() => openLightbox(index)}
                onMouseEnter={(e) => {
                  const img = e.currentTarget.querySelector('img') as HTMLImageElement;
                  if (img) img.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  const img = e.currentTarget.querySelector('img') as HTMLImageElement;
                  if (img) img.style.transform = 'scale(1)';
                }}
                style={{
                  position: 'relative',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  aspectRatio: '1/1',
                  backgroundColor: '#f0f0f0'
                }}
              >
                <Image 
                  src={src} 
                  alt={`Embarazo ${index + 1}`}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover transition-transform duration-300"
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
          <Image 
            src={embarazoImages[selectedImage]} 
            alt="Ampliada"
            width={1600}
            height={1600}
            sizes="90vw"
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
}
