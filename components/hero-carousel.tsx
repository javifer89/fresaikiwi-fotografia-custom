"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Sesiones de Embarazo",
    subtitle: "Captura la belleza de esta etapa única",
    image: "https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/public/assets/ALEJANDRI_9M-43.jpg"
  },
  {
    id: 2,
    title: "Comuniones y Celebraciones",
    subtitle: "Recuerdos especiales para días únicos",
    image: "https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/public/assets/CARLOTA_2ANYS-147.jpg"
  },
  {
    id: 3,
    title: "Exteriores y Familia",
    subtitle: "Sesiones al aire libre llenas de luz",
    image: "https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/public/assets/EDURNE_EXTERIORS-135.jpg"
  },
  {
    id: 4,
    title: "Sesiones Infantiles",
    subtitle: "La magia de la infancia en cada foto",
    image: "https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/public/assets/LAURA-1 copia.jpg"
  },
  {
    id: 5,
    title: "Retratos con Estilo",
    subtitle: "Captura tu esencia y personalidad",
    image: "https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/public/assets/MARC-41 copia.jpg"
  },
  {
    id: 6,
    title: "Sesiones Familiares",
    subtitle: "Momentos en familia para siempre",
    image: "https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/public/assets/PAM_FAMILY-40.jpg"
  },
  {
    id: 7,
    title: "Decorados y Temáticas",
    subtitle: "Creaciones únicas para cada sesión",
    image: "https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/public/assets/PROBA_DECORAT-22 copia 2.jpg"
  }
];

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [loadedSlides, setLoadedSlides] = useState<Set<number>>(
    () => new Set([0]),
  );

  // Mounts a slide so next/image starts loading it (render + browser prefetch).
  const requestSlide = useCallback((index: number) => {
    setLoadedSlides((prev) => {
      if (prev.has(index)) return prev;
      const next = new Set(prev);
      next.add(index);
      return next;
    });
  }, []);

  const goToSlide = useCallback(
    (index: number) => {
      if (index === currentSlide || isFading) return;
      requestSlide(index);
      setIsFading(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setTimeout(() => {
          setIsFading(false);
        }, 100);
      }, 800);
    },
    [currentSlide, isFading, requestSlide],
  );

  const handleNext = useCallback(
    () => goToSlide((currentSlide + 1) % slides.length),
    [currentSlide, goToSlide],
  );

  const handlePrev = useCallback(
    () => goToSlide((currentSlide - 1 + slides.length) % slides.length),
    [currentSlide, goToSlide],
  );

  useEffect(() => {
    if (isFading) return;
    const timer = setInterval(handleNext, 5000);
    return () => clearInterval(timer);
  }, [isFading, handleNext]);

  // Prefetch the following slide while the current one is visible,
  // so the crossfade is smooth and only 1-2 images are loaded at once.
  useEffect(() => {
    requestSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, requestSlide]);

  return (
    <section className="relative h-screen w-full overflow-hidden -mt-20">
      {/* Fade Background Images */}
      {slides.map((slide, index) => {
        if (!loadedSlides.has(index)) return null;

        return (
          <div
            key={slide.id}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{
              opacity: currentSlide === index ? (isFading ? 0 : 1) : 0,
            }}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              sizes="100vw"
              priority={index === 0} fetchPriority={index === 0 ? "high" : undefined}
              className="object-cover"
            />
          </div>
        );
      })}

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/25 backdrop-blur-sm text-white hover:bg-white/40 transition-all z-20"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/25 backdrop-blur-sm text-white hover:bg-white/40 transition-all z-20"
        aria-label="Slide siguiente"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}