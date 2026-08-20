"use client";

import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { Calendar, Gift } from "lucide-react";

const FRESA = "#E8A4A4";
const FRESA_DARK = "#D48888";
const KIWI = "#7BAE7F";
const CREMA = "#FDF8F4";

export default function ReservasPage() {
  return (
    <main className="min-h-screen">
      {/* Booking Section */}
      <section className="py-16" style={{backgroundColor: CREMA}}>
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{fontFamily: "'Rouge Script', cursive", color: '#3D3D3D'}}>
              Reservas
            </h1>
            <p className="text-center text-gray-600 mb-12" style={{fontFamily: "'Roboto', sans-serif"}}>
              ¡Da el primer paso hacia tu sesión perfecta!
            </p>

            {/* Process Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#E8A4A4] text-white flex items-center justify-center text-xl font-bold">1</div>
                <h3 className="font-semibold mb-2" style={{color: FRESA_DARK, fontFamily: "'Roboto', sans-serif"}}>Rellena el formulario</h3>
                <p className="text-sm text-gray-600" style={{fontFamily: "'Roboto', sans-serif"}}>Dinos qué tipo de sesión buscas y tus preferencias</p>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#7BAE7F] text-white flex items-center justify-center text-xl font-bold">2</div>
                <h3 className="font-semibold mb-2" style={{color: KIWI, fontFamily: "'Roboto', sans-serif"}}>Te contactamos</h3>
                <p className="text-sm text-gray-600" style={{fontFamily: "'Roboto', sans-serif"}}>Confirmaremos disponibilidad y te enviaremos presupuesto</p>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#E8A4A4] text-white flex items-center justify-center text-xl font-bold">3</div>
                <h3 className="font-semibold mb-2" style={{color: FRESA_DARK, fontFamily: "'Roboto', sans-serif"}}>¡Listo!</h3>
                <p className="text-sm text-gray-600" style={{fontFamily: "'Roboto', sans-serif"}}>Reservamos tu fecha y empezamos a planificar</p>
              </div>
            </div>

            {/* Booking iframe */}
            <div className="bg-white p-4 md:p-6 rounded-2xl shadow-xl overflow-hidden">
              <h2 className="text-3xl font-bold text-center mb-6" style={{fontFamily: "'Rouge Script', cursive", color: '#3D3D3D'}}>
                Reserva tu sesión
              </h2>
              <iframe 
                src="https://ohmyphoto.app/reservas/489/1061/fresaikiwifotografia"
                width="100%" 
                height="800" 
                style={{border:0, display: 'block'}} 
                loading="lazy" 
                allowFullScreen
                title="Sistema de reservas Fresaikiwi Fotografía"
              />
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg">
                <Calendar className="w-8 h-8 text-[#E8A4A4] flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-[#D48888] mb-1" style={{fontFamily: "'Roboto', sans-serif"}}>Antelación</h4>
                  <p className="text-sm text-gray-600" style={{fontFamily: "'Roboto', sans-serif"}}>Recomendamos reservar con 2-4 semanas de antelación para asegurar disponibilidad.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg">
                <Gift className="w-8 h-8 text-[#7BAE7F] flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-[#7BAE7F] mb-1" style={{fontFamily: "'Roboto', sans-serif"}}>Descuentos</h4>
                  <p className="text-sm text-gray-600" style={{fontFamily: "'Roboto', sans-serif"}}>Si reservas múltiples sesiones o nos recomiendas, ¡obtén descuentos especiales!</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
