"use client";

import { FormspreeForm } from "@/components/formspree-form";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const FRESA = "#E8A4A4";
const FRESA_LIGHT = "#F5D5D5";
const FRESA_DARK = "#D48888";
const KIWI = "#7BAE7F";
const KIWI_LIGHT = "#D4EAD7";
const CREMA = "#FDF8F4";

export function ContactCTA() {
  return (
    <section className="py-24 px-4 md:px-8" style={{ backgroundColor: CREMA }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full"
                style={{ backgroundColor: FRESA_LIGHT, color: FRESA_DARK }}>
            ¿Listo para tu sesión?
          </span>
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Rouge Script', cursive", color: '#3D3D3D' }}
          >
            Reserve su momento especial
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ fontFamily: "'Roboto', sans-serif", color: '#6B6B6B' }}>
            Rellene el formulario y nos pondremos en contacto con usted para planificar su sesión fotográfica perfecta
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <FormspreeForm
              fields={[
                { name: "nombre", label: "Nombre completo", type: "text", required: true },
                { name: "email", label: "Email", type: "email", required: true },
                { name: "telefono", label: "Teléfono", type: "tel", required: true },
                { name: "tipo_sesion", label: "Tipo de sesión", type: "select", options: ["Embarazo", "Newborn", "Cumpleaños", "Comunión", "Navidad", "Familia", "Musical", "Moros y Cristianos"], required: true },
                { name: "fecha_deseada", label: "Fecha deseada", type: "text" },
                { name: "mensaje", label: "Mensaje o comentarios", type: "textarea" }
              ]}
              submitText="Enviar Solicitud"
              successMessage="¡Gracias! Nos pondremos en contacto con usted en menos de 24 horas."
            />
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Info Cards */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:-translate-y-1 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl" style={{ backgroundColor: FRESA_LIGHT }}>
                  <MapPin className="w-6 h-6" style={{ color: FRESA_DARK }} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1" style={{ color: '#3D3D3D' }}>Ubicación</h3>
                  <p className="text-gray-600" style={{ fontFamily: "'Roboto', sans-serif" }}>Villajoyosa / La Vila Joiosa, Alicante</p>
                  <p className="text-sm text-gray-500" style={{ fontFamily: "'Roboto', sans-serif" }}>C/ Constitución nº20, local izquierda, 03570</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:-translate-y-1 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl" style={{ backgroundColor: KIWI_LIGHT }}>
                  <Phone className="w-6 h-6" style={{ color: KIWI }} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1" style={{ color: '#3D3D3D' }}>Teléfono</h3>
                  <p className="text-gray-600" style={{ fontFamily: "'Roboto', sans-serif" }}>(+34) 633 52 08 62</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:-translate-y-1 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl" style={{ backgroundColor: FRESA_LIGHT }}>
                  <Mail className="w-6 h-6" style={{ color: FRESA_DARK }} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1" style={{ color: '#3D3D3D' }}>Email</h3>
                  <p className="text-gray-600" style={{ fontFamily: "'Roboto', sans-serif" }}>info@fresaikiwifotografia.com</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:-translate-y-1 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl" style={{ backgroundColor: KIWI_LIGHT }}>
                  <Clock className="w-6 h-6" style={{ color: KIWI }} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1" style={{ color: '#3D3D3D' }}>Horario</h3>
                  <p className="text-gray-600" style={{ fontFamily: "'Roboto', sans-serif" }}>Lunes - Viernes: 10:00 - 19:00</p>
                  <p className="text-gray-600" style={{ fontFamily: "'Roboto', sans-serif" }}>Sábados: 10:00 - 14:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
