"use client";

import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { Heart, Star, Camera, Users, Gift, Music, Crown, ExternalLink } from "lucide-react";
import { SessionFilters } from "@/components/session-filters";
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

export default function SesionesPage() {
  return (
    <main className="min-h-screen">
      {/* Sessions Section */}
      <section className="py-16" style={{ backgroundColor: 'var(--crema)' }}>
        <Container>
          <SessionFilters />

          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{ fontFamily: "'Rouge Script', cursive", color: 'var(--gris)' }}>
            Nuestras Sesiones
          </h1>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto" style={{ fontFamily: "'Roboto', sans-serif" }}>
            Cada momento es único. Descubre nuestras sesiones fotográficas diseñadas para capturar la esencia de tu historia.
          </p>

          {/* Sessions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sessions.map((session) => {
              const IconComponent = iconComponents[session.icon];
              return (
                <Link
                  key={session.slug}
                  href={`/sesiones/${session.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={session.image}
                      alt={session.name}
                      fill
                      sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      placeholder="blur"
                      blurDataURL={BLUR_PLACEHOLDER}
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-white/90">
                        <IconComponent className="w-4 h-4" style={{ color: 'var(--fresa)' }} />
                        <span style={{ fontFamily: "'Roboto', sans-serif" }}>{session.name}</span>
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2" style={{ fontFamily: "'Roboto', sans-serif" }}>
                      {session.description}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                      <p className="font-semibold" style={{ color: 'var(--kiwi)', fontFamily: "'Roboto', sans-serif" }}>
                        {session.price}
                      </p>
                      {session.bookingUrl && (
                        <a
                          href={session.bookingUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full transition-colors"
                          style={{ backgroundColor: 'var(--fresa-light)', color: 'var(--fresa-dark)' }}
                        >
                          Reservar
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}