"use client";

import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Footer } from "@/components/footer";

export default function NavidadPage() {
  return (
    <>
      <main className="pt-24">
        <section className="relative h-[60vh] min-h-[400px] flex items-center">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1512389142860-9c449e58a814?w=1920&h=1080&fit=crop" 
              alt="SesiÃ³n Navidad" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
          </div>
          <Container className="relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold text-white animate-fade-in-up">
              SesiÃ³n Navidad
            </h1>
            <p className="text-xl text-white/90 mt-4 max-w-xl animate-fade-in-up delay-100">
              La magia de la Navidad en cada imagen
            </p>
          </Container>
        </section>

        <section className="py-24 bg-[var(--surface)]">
          <Container>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <Heading size="sm">Sobre la SesiÃ³n</Heading>
                <p className="text-gray-600 mt-4 leading-relaxed">
                  Las sesiones navideÃ±as son perfectas para crear recuerdos familiares 
                  con el espÃ­ritu de la Ã©poca. Disponemos de decoraciones profesionales 
                  que transformarÃ¡n cada imagen en un recuerdo mÃ¡gico.
                </p>
                <p className="text-gray-600 mt-4 leading-relaxed">
                  Ofrecemos diferentes estilos: desde clÃ¡sico con Ã¡rbol y luces, 
                  hasta moderno con elementos minimalistas y elegantes.
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-xl font-semibold text-[var(--brand-dark)] mb-4">Â¿QuÃ© incluye?</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[var(--accent)] rounded-full" />
                    DuraciÃ³n de 1 hora
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[var(--accent)] rounded-full" />
                    15-20 fotos editadas en alta resoluciÃ³n
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[var(--accent)] rounded-full" />
                    DecoraciÃ³n navideÃ±a profesional
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[var(--accent)] rounded-full" />
                    Outfit navideÃ±o disponible
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[var(--accent)] rounded-full" />
                    Prints navideÃ±os incluidos
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "https://images.unsplash.com/photo-1543589077-47d81606c1bf?w=400&h=500&fit=crop",
                "https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=400&h=500&fit=crop",
                "https://images.unsplash.com/photo-1512389142860-9c449e58a814?w=400&h=500&fit=crop",
                "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=400&h=500&fit=crop"
              ].map((url, i) => (
                <img 
                  key={i} 
                  src={url} 
                  alt={`Navidad ${i + 1}`} 
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