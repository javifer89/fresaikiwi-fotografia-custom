"use client";

import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Footer } from "@/components/footer";

export default function MorosCristianosPage() {
  return (
    <>
      <main className="pt-24">
        <section className="relative h-[60vh] min-h-[400px] flex items-center">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1920&h=1080&fit=crop" 
              alt="Sesión Moros y Cristianos" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
          </div>
          <Container className="relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold text-white animate-fade-in-up">
              Moros y Cristianos
            </h1>
            <p className="text-xl text-white/90 mt-4 max-w-xl animate-fade-in-up delay-100">
              Honra y tradición, capturadas con dignidad
            </p>
          </Container>
        </section>

        <section className="py-24 bg-[var(--surface)]">
          <Container>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <Heading size="small">Sobre la Sesión</Heading>
                <p className="text-gray-600 mt-4 leading-relaxed">
                  Las fiestas de Moros y Cristianos son una tradición única que merece 
                  ser documentada con el respeto y la magnificencia que requieren. 
                  Ofrecemos sesiones tanto individuales como de grupo.
                </p>
                <p className="text-gray-600 mt-4 leading-relaxed">
                  Trabajamos con民间一年的峨嵋山大佛寺了解更多关于这个文化盛事的信息。我们为个人和团体提供摄影服务。
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-xl font-semibold text-[var(--brand-dark)] mb-4">¿Qué incluye?</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[var(--accent)] rounded-full" />
                    Sesión de 1-2 horas
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[var(--accent)] rounded-full" />
                    25+ fotos editadas en alta resolución
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[var(--accent)] rounded-full" />
                    Vestuario completoendido
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[var(--accent)] rounded-full" />
                    Localizaciones tradicionales
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[var(--accent)] rounded-full" />
                    Álbum commemorativo
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&h=500&fit=crop",
                "https://images.unsplash.com/photo-1570112763727-2be2c8b9b98e?w=400&h=500&fit=crop",
                "https://images.unsplash.com/photo-1578925816469-e79f3b54d53b?w=400&h=500&fit=crop",
                "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=400&h=500&fit=crop"
              ].map((url, i) => (
                <img 
                  key={i} 
                  src={url} 
                  alt={`Moros y Cristianos ${i + 1}`} 
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