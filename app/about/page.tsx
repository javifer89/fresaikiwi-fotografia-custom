"use client";

import { Container } from "@/components/container";
import { Footer } from "@/components/footer";

export default function AboutPage() {
  return (
    <>
      <main className="pt-24">
        <section className="py-24" style={{backgroundColor: '#FDF8F4'}}>
          <Container>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{fontFamily: "'Rouge Script', cursive", color: '#3D3D3D'}}>
                Sobre Nosotros
              </h2>
              <p className="text-lg text-gray-600">
                Conoce la historia detrás de Fresaikiwi Fotografía
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=600&h=800&fit=crop" 
                  alt="Estudio de fotografía" 
                  className="rounded-2xl shadow-xl w-full"
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold" style={{color: '#D48888'}}>
                  Nuestra Historia
                </h3>
                <p className="text-gray-600 leading-relaxed" style={{fontFamily: "'Roboto', sans-serif"}}>
                  Fresaikiwi Fotografía nació de la pasión por capturar momentos únicos y 
                  emociones genuinas. Cada sesión es una oportunidad para crear recuerdos 
                  que durarán toda la vida.
                </p>
                <p className="text-gray-600 leading-relaxed" style={{fontFamily: "'Roboto', sans-serif"}}>
                  Con años de experiencia en fotografía de familias, bebés y eventos especiales, 
                  nos especializamos en crear imágenes que cuentan historias y transmiten 
                  la esencia de cada familia.
                </p>
                <h3 className="text-2xl font-semibold pt-4" style={{color: '#D48888'}}>
                  Nuestro Estilo
                </h3>
                <p className="text-gray-600 leading-relaxed" style={{fontFamily: "'Roboto', sans-serif"}}>
                  Apostamos por un estilo natural y espontáneo, donde la luz natural y 
                  los gestos auténticos son nuestros grandes aliados.
                </p>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-24 bg-white">
          <Container>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold" style={{fontFamily: "'Rouge Script', cursive", color: '#3D3D3D'}}>Nuestros Valores</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Pasión", desc: "Amamos lo que hacemos y eso se refleja en cada imagen" },
                { title: "Autenticidad", desc: "Capturamos momentos reales y emociones genuinas" },
                { title: "Dedicación", desc: "Cada sesión recibe toda nuestra atención y cariño" }
              ].map((value, i) => (
                <div key={i} className="rounded-2xl p-8 text-center shadow-lg" style={{backgroundColor: '#FDF8F4'}}>
                  <h4 className="text-xl font-semibold mb-2" style={{color: '#D48888'}}>{value.title}</h4>
                  <p className="text-gray-600" style={{fontFamily: "'Roboto', sans-serif"}}>{value.desc}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
