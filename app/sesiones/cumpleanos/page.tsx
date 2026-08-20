"use client";

import { Container } from "@/components/container";
import Link from "next/link";
import { ArrowLeft, X, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";

const galleryImages = [
  "https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/public/assets/ALEJANDRO_SMASH-240.jpg",
  "https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/public/assets/EMMA_2-82.jpg",
  "https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/public/assets/TRISTAN-209.jpg",
  "https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/public/assets/EMMA 1 copia.jpg",
];

export default function CumpleanosPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [allLoaded, setAllLoaded] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  useEffect(() => {
    let loadedCount = 0;
    galleryImages.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === galleryImages.length) {
          setAllLoaded(true);
        }
      };
    });
  }, []);

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#FDF8F4' }}>
      <Container>
        <Link
          href="/sesiones"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: '#D48888',
            transition: 'color 0.2s',
            fontFamily: "'Roboto', sans-serif",
            marginBottom: '32px',
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#E8A4A4'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#D48888'}
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a Sesiones
        </Link>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', alignItems: 'start' }}>
          <div>
            <span style={{
              display: 'inline-block',
              padding: '4px 16px',
              backgroundColor: 'rgba(232, 164, 164, 0.2)',
              color: '#D48888',
              borderRadius: '9999px',
              fontSize: '14px',
              fontFamily: "'Roboto', sans-serif",
            }}>
              Celebración
            </span>
            <h1 style={{
              fontSize: '48px',
              fontFamily: "'Rouge Script', cursive",
              color: '#3D3D3D',
              marginTop: '16px',
              marginBottom: '16px',
            }}>
              Cumpleaños
            </h1>
            <p style={{
              fontSize: '18px',
              color: '#666',
              lineHeight: '1.7',
              fontFamily: "'Roboto', sans-serif",
              marginTop: '16px',
            }}>
              Cada cumpleaños es único y merece ser celebrado con fotografías especiales. 
              Desde primeras comuniones hasta bodas, capturamos la alegría, los colores 
              y la magia de cada celebración.
            </p>
            <div style={{ marginTop: '32px' }}>
              <h3 style={{
                fontFamily: "'Roboto', sans-serif",
                color: '#D48888',
                fontWeight: '600',
                marginBottom: '12px',
              }}>¿Qué incluye esta sesión?</h3>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                fontFamily: "'Roboto', sans-serif",
                color: '#666',
              }}>
                {[
                  'Duración de 1-2 horas de sesión',
                  '20 fotografías editadas en alta resolución',
                  'Decoración temática incluida',
                  'Cakesmash y globo opcional',
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#E8A4A4', flexShrink: 0 }}></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href="/reservas"
              style={{
                display: 'inline-block',
                marginTop: '32px',
                padding: '12px 32px',
                borderRadius: '9999px',
                backgroundColor: '#E8A4A4',
                color: 'white',
                fontFamily: "'Roboto', sans-serif",
                transition: 'transform 0.2s, background-color 0.2s',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.backgroundColor = '#D48888';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.backgroundColor = '#E8A4A4';
              }}
            >
              Reservar esta sesión
            </Link>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '12px',
          }}>
            {!allLoaded && (
              <div style={{
                gridColumn: '1 / -1',
                gridRow: '1 / -1',
                aspectRatio: '1/1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f5f0eb',
                borderRadius: '12px',
              }}>
                <Loader2 className="w-8 h-8 animate-spin" style={{color: '#D48888'}} />
              </div>
            )}
            {galleryImages.map((src, index) => (
              <div
                key={index}
                onClick={() => openLightbox(index)}
                style={{
                  aspectRatio: '1/1',
                  overflow: 'hidden',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                }}
              >
                <img
                  src={src}
                  alt={`Cumpleaños ${index + 1}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.3s ease',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
            ))}
          </div>
        </div>
      </Container>

      {lightboxOpen && (
        <div
          onClick={() => setLightboxOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            cursor: 'pointer',
          }}
        >
          <img
            src={galleryImages[currentImage]}
            alt="Lightbox"
            style={{
              maxWidth: '90vw',
              maxHeight: '90vh',
              objectFit: 'contain',
              borderRadius: '8px',
            }}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={() => setLightboxOpen(false)}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              cursor: 'pointer',
              fontSize: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            ×
          </button>
        </div>
      )}
    </main>
  );
}
