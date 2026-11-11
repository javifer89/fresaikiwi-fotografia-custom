"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { sessions } from "@/lib/data/sessions";
import { heroSlides } from "@/lib/site-config";

const WHATSAPP_URL =
  "https://wa.me/34633520862?text=" +
  encodeURIComponent("Hola! Me gustaría reservar una sesión fotográfica");

const MAX_OFFSET = 40;

/**
 * Closing CTA band with a background photo and a subtle parallax.
 *
 * The offset is clamped to ±40px and the background is pre-scaled, so the
 * image always covers the band. The listener is passive and throttled with
 * requestAnimationFrame; reduced motion leaves the background still.
 */
export function ParallaxCta() {
  const sectionRef = useRef<HTMLElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const background = backgroundRef.current;
    if (!section || !background) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = section.getBoundingClientRect();
      const viewport = window.innerHeight;
      if (rect.bottom < 0 || rect.top > viewport) return;

      // -1 when the band is below the fold, +1 when it has scrolled above it.
      const progress =
        (viewport / 2 - (rect.top + rect.height / 2)) / (viewport / 2 + rect.height / 2);
      const offset = Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, progress * MAX_OFFSET));

      background.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0) scale(1.2)`;
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const backgroundImage =
    sessions.find((session) => session.slug === "familia")?.image ?? heroSlides[0].image;

  return (
    <section
      ref={sectionRef}
      aria-labelledby="cta-final-title"
      className="relative isolate overflow-hidden"
    >
      <div ref={backgroundRef} className="parallax-cta-bg absolute inset-0 -z-10">
        <Image
          src={backgroundImage}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(120deg, rgba(61, 61, 61, 0.88) 0%, rgba(61, 61, 61, 0.62) 55%, rgba(61, 61, 61, 0.45) 100%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-3xl px-6 py-24 text-center md:py-28">
        <Reveal>
          <span
            className="text-xs uppercase tracking-[0.35em] md:text-sm"
            style={{ fontFamily: "var(--font-roboto), sans-serif", color: "var(--fresa-light)" }}
          >
            Fresaikiwi Fotografía
          </span>
          <h2
            id="cta-final-title"
            className="mt-5 text-fluid-2xl font-bold text-white"
            style={{ fontFamily: "var(--font-cormorant), serif", textShadow: "1px 1px 8px rgba(0,0,0,0.35)" }}
          >
            Regala recuerdos que <span className="italic">se quedan</span>
          </h2>
          <p
            className="mx-auto mt-5 max-w-xl text-lg text-white/85"
            style={{ fontFamily: "var(--font-roboto), sans-serif" }}
          >
            Sesiones en estudio o en exterior en La Vila Joiosa. Cuéntanos qué momento
            quieres recordar y lo preparamos contigo.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/reservas"
              className="inline-flex items-center justify-center rounded-full px-8 py-4 font-medium text-white shadow-lg transition-transform hover:scale-105"
              style={{ backgroundColor: "var(--fresa)", fontFamily: "var(--font-roboto), sans-serif" }}
            >
              Reservar mi sesión
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-8 py-4 font-medium text-white transition-transform hover:scale-105"
              style={{ fontFamily: "var(--font-roboto), sans-serif" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                />
              </svg>
              Escríbenos por WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
