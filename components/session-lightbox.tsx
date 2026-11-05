"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

type Slide = {
  id: number;
  src: string;
  alt: string;
  unoptimized?: boolean;
};

type SessionLightboxProps = {
  images: Slide[];
  columns?: 2 | 3 | 4;
  aspectRatio?: "square" | "portrait" | "landscape";
};

const FOCUSABLE_SELECTOR =
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

export function SessionLightbox({
  images,
  columns = 2,
  aspectRatio = "square",
}: SessionLightboxProps) {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const closeLightbox = useCallback(() => setOpen(false), []);

  const goTo = useCallback(
    (next: number) => {
      if (images.length === 0) return;
      setCurrentIndex(((next % images.length) + images.length) % images.length);
    },
    [images.length],
  );

  const openLightbox = (index: number, trigger: HTMLButtonElement) => {
    triggerRef.current = trigger;
    setCurrentIndex(index);
    setOpen(true);
  };

  // Scroll lock + focus handoff. Kept separate from the key handler so that
  // moving between slides does not yank focus back to the close button.
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      triggerRef.current?.focus();
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeLightbox();
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goTo(currentIndex - 1);
        return;
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        goTo(currentIndex + 1);
        return;
      }

      if (event.key !== "Tab") return;

      const focusables = dialogRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
      if (!focusables || focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, currentIndex, closeLightbox, goTo]);

  if (images.length === 0) return null;

  const aspectClass =
    aspectRatio === "square"
      ? "aspect-square"
      : aspectRatio === "portrait"
        ? "aspect-[3/4]"
        : "aspect-video";

  const gridCols = `grid-cols-1 sm:grid-cols-2 ${columns >= 3 ? "lg:grid-cols-3" : ""} ${columns === 4 ? "xl:grid-cols-4" : ""}`;

  return (
    <>
      <div className={`grid gap-3 ${gridCols}`} role="list" aria-label="Galería de imágenes">
        {images.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            onClick={(event) => openLightbox(index, event.currentTarget)}
            aria-haspopup="dialog"
            // The aspect ratio belongs on the wrapper: the <Image> below is
            // absolutely positioned by `fill` and would collapse the grid otherwise.
            className={`group relative block w-full overflow-hidden rounded-xl bg-gray-100 shadow-md transition-shadow hover:shadow-xl cursor-pointer ${aspectClass}`}
            aria-label={`Ver imagen ${index + 1}: ${slide.alt}`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              unoptimized={slide.unoptimized}
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {open && (
        <div
          ref={dialogRef}
          className="fixed inset-0 z-50 flex items-center justify-center pt-20"
          style={{ backgroundColor: "rgba(0,0,0,0.95)" }}
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={`Imagen ${currentIndex + 1} de ${images.length}`}
        >
          <button
            ref={closeButtonRef}
            type="button"
            className="absolute top-4 left-4 p-2 text-white hover:bg-black/20 transition-colors rounded-full"
            onClick={closeLightbox}
            aria-label="Cerrar lightbox"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>

          {/* Backdrop clicks close the dialog; clicks on the content must not. */}
          <div
            className="relative w-full max-w-full max-h-[90vh] px-4"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="rounded-lg max-w-full max-h-[90vh] object-contain"
              width={1600}
              height={1600}
              sizes="90vw"
              unoptimized={images[currentIndex].unoptimized}
            />

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white hover:bg-black/20 transition-colors rounded-full"
                  onClick={() => goTo(currentIndex - 1)}
                  aria-label="Imagen anterior"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  type="button"
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white hover:bg-black/20 transition-colors rounded-full"
                  onClick={() => goTo(currentIndex + 1)}
                  aria-label="Imagen siguiente"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((slide, i) => (
                <button
                  key={slide.id}
                  type="button"
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    i === currentIndex ? "bg-white scale-125" : "bg-white/30 hover:bg-white/60"
                  }`}
                  onClick={() => goTo(i)}
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
