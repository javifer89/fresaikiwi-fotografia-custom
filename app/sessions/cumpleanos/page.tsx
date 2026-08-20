"use client";

import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Footer } from "@/components/footer";

export default function CumpleanosPage() {
  return (
    <>
      <main className="pt-24">
        <section className="relative h-[60vh] min-h-[400px] flex items-center">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1920&h=1080&fit=crop" 
              alt="Sesión Cumpleaños" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
          </div>
          <Container className="relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold text-white animate-fade-in-up">
              Sesión Cumpleaños
            </h1>
            <p className="text-xl text-white/90 mt-4 max-w-xl animate-fade-in-up delay-100">
              Celebra cada año con fotos llenas de alegría
            </p>
          </Container>
        </section>

        <section className="py-24 bg-[var(--surface)]">
          <Container>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <Heading size="small">Sobre la Sesión</Heading>
                <p className="text-gray-600 mt-4 leading-relaxed">
                  Las sesiones de cumpleaños son perfectas para capturar la esencia 
                  de cada edad. Desde el primer cumpleaños con su tarta protagonista 
                  hasta cumpleaños temáticos llenos de diversión.
                </p>
                <p className="text-gray-600 mt-4 leading-relaxed">
                  Podemos crear sesiones con temática personalizada, decoración 
                  temática y todos los detalles que hagan especial ese día.
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-xl font-semibold text-[var(--brand-dark)] mb-4">¿Qué incluye?</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[var(--accent)] rounded-full" />
                    Duración de 1-2 horas
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[var(--accent)] rounded-full" />
                    25+ fotos editadas en alta resolución
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[var(--accent)] rounded-full" />
                    Decoración temática disponible
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[var(--accent)] rounded-full" />
                    Foto con tarta especial
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[var(--accent)] rounded-full" />
                    Impresiones incluidas
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?w=400&h=500&fit=crop",
                "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=400&h=500&fit=crop",
                "https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?w=400&h=500&fit=crop",
                "https://images.unsplash.com/photo-1513346940221-6f673d174eea?w=400&h=500&fit=crop"
              ].map((url, i) => (
                <img 
                  key={i} 
                  src={url} 
                  alt={`Cumpleaños ${i + 1}`} 
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