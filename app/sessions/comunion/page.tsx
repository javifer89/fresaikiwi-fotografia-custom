"use client";

import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Footer } from "@/components/footer";

export default function ComunionPage() {
  return (
    <>
      <main className="pt-24">
        <section className="relative h-[60vh] min-h-[400px] flex items-center">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=1920&h=1080&fit=crop" 
              alt="SesiÃ³n ComuniÃ³n" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
          </div>
          <Container className="relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold text-white animate-fade-in-up">
              SesiÃ³n ComuniÃ³n
            </h1>
            <p className="text-xl text-white/90 mt-4 max-w-xl animate-fade-in-up delay-100">
              Un dÃ­a especial merece recuerdos Ãºnicos
            </p>
          </Container>
        </section>

        <section className="py-24 bg-[var(--surface)]">
          <Container>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <Heading size="sm">Sobre la SesiÃ³n</Heading>
                <p className="text-gray-600 mt-4 leading-relaxed">
                  La comuniÃ³n es un momento Ãºnico que merece ser capturado con elegancia. 
                  Ofrecemos sesiones tanto en estudio como en exterior, con locations 
                  cuidadosamente seleccionados.
                </p>
                <p className="text-gray-600 mt-4 leading-relaxed">
                  Trabajamos con un estilo clÃ¡sico y atemporal que harÃ¡ que estas 
                  fotografÃ­as sean tesoros familiares para siempre.
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-xl font-semibold text-[var(--brand-dark)] mb-4">Â¿QuÃ© incluye?</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[var(--accent)] rounded-full" />
                    SesiÃ³n de 2-3 horas
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[var(--accent)] rounded-full" />
                    30+ fotos editadas en alta resoluciÃ³n
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[var(--accent)] rounded-full" />
                    Cambio de outfits incluido
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[var(--accent)] rounded-full" />
                    UbicaciÃ³n premium a elegir
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[var(--accent)] rounded-full" />
                    Ãlbum familiar incluido
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "https://images.unsplash.com/photo-1596063666088-5d8c8c5b2e18?w=400&h=500&fit=crop",
                "https://images.unsplash.com/photo-1488716820095-cbe80883c496?w=400&h=500&fit=crop",
                "https://images.unsplash.com/photo-1544124499-58912cbddaad?w=400&h=500&fit=crop",
                "https://images.unsplash.com/photo-1520549233664-03f65c1d1327?w=400&h=500&fit=crop"
              ].map((url, i) => (
                <img 
                  key={i} 
                  src={url} 
                  alt={`ComuniÃ³n ${i + 1}`} 
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