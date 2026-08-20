"use client";

import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Footer } from "@/components/footer";

export default function NewbornPage() {
  return (
    <>
      <main className="pt-24">
        <section className="relative h-[60vh] min-h-[400px] flex items-center">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=1920&h=1080&fit=crop" 
              alt="Sesión Newborn" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
          </div>
          <Container className="relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold text-white animate-fade-in-up">
              Sesión Newborn
            </h1>
            <p className="text-xl text-white/90 mt-4 max-w-xl animate-fade-in-up delay-100">
              Los primeros días de vida, capturados con ternura
            </p>
          </Container>
        </section>

        <section className="py-24 bg-[var(--surface)]">
          <Container>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <Heading size="small">Sobre la Sesión</Heading>
                <p className="text-gray-600 mt-4 leading-relaxed">
                  Las sesiones newborn se realizan durante los primeros 15 días de vida 
                  del bebé, cuando duermen profundamente y podemos colocarlos en las 
                  posturas más tiernas y seguras.
                </p>
                <p className="text-gray-600 mt-4 leading-relaxed">
                  Disponemos de todo tipo de accesorios, fundas y props para crear 
                  imágenes únicas y personalizadas. La seguridad del bebé es siempre 
                  nuestra prioridad absoluta.
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-xl font-semibold text-[var(--brand-dark)] mb-4">¿Qué incluye?</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[var(--accent)] rounded-full" />
                    Duración de 2-3 horas
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[var(--accent)] rounded-full" />
                    20-30 fotos editadas en alta resolución
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[var(--accent)] rounded-full" />
                    Props y accesorios incluidos
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[var(--accent)] rounded-full" />
                    Posados seguros y naturales
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[var(--accent)] rounded-full" />
                    Entrega en álbum digital
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=400&h=500&fit=crop",
                "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=400&h=500&fit=crop",
                "https://images.unsplash.com/photo-1518826778770-a729fb53327c?w=400&h=500&fit=crop",
                "https://images.unsplash.com/photo-1590439471364-192aa70c0b53?w=400&h=500&fit=crop"
              ].map((url, i) => (
                <img 
                  key={i} 
                  src={url} 
                  alt={`Newborn ${i + 1}`} 
                  className="rounded-xl shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300 w-full h-48 object-cover"
                />
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}