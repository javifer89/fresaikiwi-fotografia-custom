"use client";

import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Footer } from "@/components/footer";

export default function EmbarazoPage() {
  return (
    <>
      <main className="pt-24">
        <section className="relative h-[60vh] min-h-[400px] flex items-center">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1544126592-807ade215a0b?w=1920&h=1080&fit=crop" 
              alt="Sesión Embarazo" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
          </div>
          <Container className="relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold text-white animate-fade-in-up">
              Sesión Embarazo
            </h1>
            <p className="text-xl text-white/90 mt-4 max-w-xl animate-fade-in-up delay-100">
              Capturamos la belleza y emoción de esta etapa única
            </p>
          </Container>
        </section>

        <section className="py-24 bg-[var(--surface)]">
          <Container>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <Heading size="small">Sobre la Sesión</Heading>
                <p className="text-gray-600 mt-4 leading-relaxed">
                  Las sesiones de embarazo son una forma hermosa de celebrar y recordar 
                  esta etapa tan especial. Trabajamos con luz natural para conseguir 
                  imágenes suaves, elegantes y llenas de emoción.
                </p>
                <p className="text-gray-600 mt-4 leading-relaxed">
                  Ofrecemos diferentes paquetes adaptados a tus necesidades, desde 
                  sesiones íntimas en estudio hasta sesiones al aire libre con diferentes 
                  vestuarios y setups.
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
                    15-20 fotos editadas en alta resolución
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[var(--accent)] rounded-full" />
                    Asesoramiento de vestuario
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[var(--accent)] rounded-full" />
                    Ubicación a elegir (estudio o exterior)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[var(--accent)] rounded-full" />
                    Galería privada online
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=400&h=500&fit=crop",
                "https://images.unsplash.com/photo-1555089957-2c2aa3f8e93b?w=400&h=500&fit=crop",
                "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=400&h=500&fit=crop",
                "https://images.unsplash.com/photo-1618566482355-9c4f8f42908e?w=400&h=500&fit=crop"
              ].map((url, i) => (
                <img 
                  key={i} 
                  src={url} 
                  alt={`Embarazo ${i + 1}`} 
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