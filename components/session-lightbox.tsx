"use client";

import { useState } from "react";
import Image from "next/image";

type Slide = {
  id: number;
  src: string;
  alt: string;
};

type SessionLightboxProps = {
  images: Slide[];
  columns?: 2 | 3 | 4;
  aspectRatio?: "square" | "portrait" | "landscape";
};

export function SessionLightbox({ 
  images, 
  columns = 2, 
  aspectRatio = "square" 
}: SessionLightboxProps) {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  const closeLightbox = () => setOpen(false);

  const aspectClass = aspectRatio === "square" ? "aspect-square" 
    : aspectRatio === "portrait" ? "aspect-[3/4]" 
    : "aspect-video";

  const gridCols = `grid-cols-1 sm:grid-cols-2 ${columns >= 3 ? "lg:grid-cols-3" : ""} ${columns === 4 ? "xl:grid-cols-4" : ""}`;

  return (
    <>
      <div className={`grid gap-4 ${gridCols}`} role="list" aria-label="Galería de imágenes">
        {images.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => openLightbox(index)}
            className={`block w-full relative overflow-hidden rounded-xl cursor-pointer shadow-md hover:shadow-xl transition-shadow group bg-gray-100`}
            aria-label={`Ver imagen ${index + 1}: ${slide.alt}`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes={`(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw`}
              className={`object-cover ${aspectClass} transition-transform duration-300 group-hover:scale-105`}
            />
          </button>
        ))}
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center pt-20"
          style={{ backgroundColor: 'rgba(0,0,0,0.95)' }}
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Vista ampliada de imagen"
        >
          <button
            className="absolute top-4 left-4 p-2 text-white hover:bg-black/20 transition-colors rounded-full"
            onClick={closeLightbox}
            aria-label="Cerrar lightbox"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18M18 6L6 18" />
            </svg>
          </button>

          <div className="relative w-full max-w-full max-h-[90vh] px-4">
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="rounded-lg max-w-full max-h-[90vh] object-contain"
              width={1600}
              height={1600}
              sizes="90vw"
            />

            {images.length > 1 && (
              <>
                <button
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white hover:bg-black/20 transition-colors rounded-full"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex((curr) => (curr - 1 + images.length) % images.length);
                  }}
                  aria-label="Imagen anterior"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 5l-7 7-7-7" />
                  </svg>
                </button>
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white hover:bg-black/20 transition-colors rounded-full"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex((curr) => (curr + 1) % images.length);
                  }}
                  aria-label="Siguiente imagen"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                </button>
              </>
            )}

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((slide, i) => (
                <button
                  key={slide.id}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    i === currentIndex ? "bg-white scale-125" : "bg-white/30 hover:bg-white/60"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(i);
                  }}
                  aria-label={`Ver imagen ${i + 1}`}
                  aria-current={i === currentIndex ? "true" : "false"}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}