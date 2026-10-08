"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart, Star, Camera, Users, Gift, Music, Crown, ExternalLink } from "lucide-react";
import { sessions } from "@/lib/data/sessions";

// Tiny 10x10 blurred placeholder for session images
const BLUR_PLACEHOLDER = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/AB//2Q==";

const iconComponents = {
  Heart,
  Star,
  Camera,
  Users,
  Gift,
  Music,
  Crown,
} as const;

export function SessionsGrid() {
  return (
    <section className="py-24 px-4 md:px-8" style={{ backgroundColor: 'var(--crema)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full"
                style={{ backgroundColor: 'var(--fresa-light)', color: 'var(--fresa-dark)' }}>
            Nuestras Sesiones
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: 'var(--gris)' }}
          >
            Cada momento merece su historia
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--gris-claro)' }}>
            Descubre nuestras sesiones fotográficas diseñadas para capturar la esencia de cada etapa especial de tu vida
          </p>
        </div>

        {/* Sessions Grid - Bento Style */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {sessions.map((session, index) => {
            const Icon = iconComponents[session.icon];
            const isLarge = index === 0 || index === 3;

            return (
              <div
                key={session.slug}
                className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                  isLarge ? 'col-span-2 row-span-2' : ''
                }`}
              >
                {/* Image + Link to session page */}
                <Link
                  href={`/sesiones/${session.slug}`}
                  className="block relative"
                  aria-label={`Ver detalles de ${session.name}`}
                >
                  <div className={`relative ${isLarge ? 'aspect-square' : 'aspect-square'}`}>
                    <Image
                      src={session.image}
                      alt={session.name}
                      fill
                      sizes="(min-width: 768px) 25vw, 50vw"
                      placeholder="blur"
                      blurDataURL={BLUR_PLACEHOLDER}
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6">
                      <div className="mb-2">
                        <Icon className="w-5 h-5 md:w-6 md:h-6 text-white/80" />
                      </div>
                      <h3
                        className={`font-bold text-white mb-1 ${isLarge ? 'text-2xl md:text-3xl' : 'text-lg md:text-xl'}`}
                        style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.4)' }}
                      >
                        {session.name}
                      </h3>
                      <p className={`text-white/80 ${isLarge ? 'text-base md:text-lg' : 'text-sm'}`}>
                        {session.description}
                      </p>

                      {/* Hover Arrow */}
                      <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="inline-flex items-center gap-2 text-sm font-medium text-white">
                          Ver más
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>

                {/* Booking Button - outside the Link, positioned absolutely */}
                {session.bookingUrl && (
                  <a
                    href={session.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-4 right-4 mt-3 opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-full text-white z-10"
                    style={{ backgroundColor: 'var(--fresa)' }}
                  >
                    Reservar
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            href="/sesiones"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium transition-all hover:scale-105 hover:shadow-xl"
            style={{ backgroundColor: 'var(--kiwi)', color: 'white' }}
          >
            Ver todas las sesiones
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
