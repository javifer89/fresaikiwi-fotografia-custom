"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";

const FRESA = "#E8A4A4";
const FRESA_DARK = "#D48888";
const GRIS = "#3D3D3D";

export default function NavidadPage() {
  return (
    <main className="min-h-screen">
      {/* Description - sin hero */}
      <section className="py-12 md:py-16" style={{backgroundColor: '#FDF8F4'}}>
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{fontFamily: "'Rouge Script', cursive", color: GRIS}}>
              Sesión de Navidad
            </h1>
            <p className="text-lg leading-relaxed mb-8" style={{color: '#6B6B6B', fontFamily: "'Roboto', sans-serif"}}>
              La Navidad es el momento perfecto para crear recuerdos familiares mágicos. 
              Nuestras sesiones navideñas capturan la calidez, el amor y la magia de esta 
              época del año con decoraciones profesionales y un ambiente festivo único.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-white px-6 py-3 rounded-full shadow-lg">
                <span className="font-semibold" style={{color: FRESA_DARK, fontFamily: "'Roboto', sans-serif"}}>Duración: 1-2 horas</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-full shadow-lg">
                <span className="font-semibold" style={{color: FRESA_DARK, fontFamily: "'Roboto', sans-serif"}}>15+ fotos editadas</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-full shadow-lg">
                <span className="font-semibold" style={{color: FRESA_DARK, fontFamily: "'Roboto', sans-serif"}}>Decoración Navideña</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Gallery Preview */}
      <section className="py-12">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl group">
              <Image
                src="https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/sign/assets/PROBA_DECORAT-22%20copia%202.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85ODI1NjIyOS0wNDlhLTRkMTgtYTIxNi0wNmIwOTkwODZiMjgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvUFJPQkFfREVDT1JBVC0yMiUyMGNvcGlhJTIwMi5qcGciLCJpYXQiOjE3NzYwOTg5OTEsImV4cCI6MTgwNzYzNDk5MX0.B5lE6F1aJ0mL6hG8Y_z2xAX_BGmGHVuONaSJFHTvsWd4"
                alt="Navidad 1"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl group">
              <Image
                src="https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/sign/assets/PROBA_DECORAT-22%20copia%202.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85ODI1NjIyOS0wNDlhLTRkMTgtYTIxNi0wNmIwOTkwODZiMjgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvUFJPQkFfREVDT1JBVC0yMiUyMGNvcGlhJTIwMi5qcGciLCJpYXQiOjE3NzYwOTg5OTEsImV4cCI6MTgwNzYzNDk5MX0.B5lE6F1aJ0mL6hG8Y_z2xAX_BGmGHVuONaSJFHTvsWd4"
                alt="Navidad 2"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl group">
              <Image
                src="https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/sign/assets/PROBA_DECORAT-22%20copia%202.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85ODI1NjIyOS0wNDlhLTRkMTgtYTIxNi0wNmIwOTkwODZiMjgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvUFJPQkFfREVDT1JBVC0yMiUyMGNvcGlhJTIwMi5qcGciLCJpYXQiOjE3NzYwOTg5OTEsImV4cCI6MTgwNzYzNDk5MX0.B5lE6F1aJ0mL6hG8Y_z2xAX_BGmGHVuONaSJFHTvsWd4"
                alt="Navidad 3"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-12" style={{backgroundColor: FRESA}}>
        <Container>
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{fontFamily: "'Rouge Script', cursive"}}>
              ¿Lista para reservar tu sesión?
            </h3>
            <p className="text-white/90 mb-8 max-w-xl mx-auto" style={{fontFamily: "'Roboto', sans-serif"}}>
              Contacta con nosotras y empecemos a planificar tu sesión navideña.
            </p>
            <Link
              href="/reservas"
              className="inline-block bg-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              style={{color: FRESA_DARK, fontFamily: "'Roboto', sans-serif"}}
            >
              Reservar ahora
            </Link>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
