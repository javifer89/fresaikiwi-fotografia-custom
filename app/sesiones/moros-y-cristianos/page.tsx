"use client";

import { Container } from "@/components/container";
import { Heading, Subheading } from "@/components/heading";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function MorosCristianosPage() {
  return (
    <main className="min-h-screen" style={{backgroundColor: '#FDF8F4'}}>
      <Container>
        <Link 
          href="/sesiones" 
          className="inline-flex items-center gap-2 text-[#D48888] hover:text-[#E8A4A4] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a Sesiones
        </Link>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1 bg-[#E8A4A4]/20 text-[#D48888] rounded-full text-sm mb-4">
              Sesión Especial
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{fontFamily: "'Rouge Script', cursive", color: '#3D3D3D'}}>Moros y Cristianos</h2>
            <p className="text-lg text-gray-600 mt-4 leading-relaxed" style={{fontFamily: "'Roboto', sans-serif"}}>
              Una sesión fotográfica que celebra la tradición y el color de las fiestas de Moros y Cristianos. 
              Capturamos la elegancia de los trajes típicos, la riqueza de los desfiles y la emoción de esta 
              celebración única.
            </p>
            <div className="mt-8 space-y-4">
              <h3 className="font-semibold mb-3" style={{fontFamily: "'Roboto', sans-serif", color: '#D48888'}}>¿Qué incluye esta sesión?</h3>
              <ul className="space-y-2 text-gray-600" style={{fontFamily: "'Roboto', sans-serif"}}>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{backgroundColor: '#E8A4A4'}}></span>
                  Duración de 1.5 horas de sesión
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{backgroundColor: '#E8A4A4'}}></span>
                  20 fotografías editadas en alta resolución
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{backgroundColor: '#E8A4A4'}}></span>
                  Asesoramiento de estilo y poses
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{backgroundColor: '#E8A4A4'}}></span>
                  Galería privada online para compartir
                </li>
              </ul>
            </div>
            <Link 
              href="/reservas"
              className="inline-block mt-8 px-8 py-3 rounded-full transition-all hover:scale-105" style={{backgroundColor: '#E8A4A4', color: 'white', fontFamily: "'Roboto', sans-serif"}}
            >
              Reservar esta sesión
            </Link>
          </div>
          
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80" 
              alt="Sesión Moros y Cristianos"
              className="w-full h-[500px] object-cover"
            />
            
          </div>
        </div>
      </Container>
    </main>
  );
}
