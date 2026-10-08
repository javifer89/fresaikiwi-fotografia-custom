"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { heroSlides } from "@/lib/site-config";

const slides = heroSlides;

// Tiny 10x10 blurred placeholder (base64 data URL) - generic neutral blur
const BLUR_PLACEHOLDER = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/AB//2Q==";

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
    <section className="relative h-screen w-full overflow-hidden -mt-30">
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
              priority={index === 0}
              fetchPriority={index === 0 ? "high" : undefined}
              placeholder="blur"
              blurDataURL={BLUR_PLACEHOLDER}
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
            className={`w-3 h-3 rounded-full transition-all ${index === currentSlide
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