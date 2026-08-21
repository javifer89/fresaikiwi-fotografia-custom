"use client";

import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { FormspreeForm } from "@/components/formspree-form";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

const FRESA = "#E8A4A4";
const FRESA_DARK = "#D48888";
const KIWI = "#7BAE7F";
const CREMA = "#FDF8F4";

export default function ContactoPage() {
  return (
    <main className="min-h-screen">
      {/* Contact Section */}
      <section className="py-16" style={{backgroundColor: CREMA}}>
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{fontFamily: "'Rouge Script', cursive", color: '#3D3D3D'}}>
            Contacto
          </h1>
          <p className="text-center text-gray-600 mb-12" style={{fontFamily: "'Roboto', sans-serif"}}>
            Estamos aquí para ayudarte
          </p>
          
          {/* Top Section - Info + Map side by side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Left: Contact Info */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6" style={{fontFamily: "'Rouge Script', cursive", color: '#3D3D3D'}}>
                Información de contacto
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full" style={{backgroundColor: `${FRESA}20`}}>
                    <MapPin className="w-6 h-6" style={{color: FRESA}} />
                  </div>
                  <div>
                    <h4 className="font-semibold" style={{color: FRESA_DARK, fontFamily: "'Roboto', sans-serif"}}>Dirección</h4>
                    <p className="text-gray-600" style={{fontFamily: "'Roboto', sans-serif"}}>C/ Constitución nº20, local izquierda, 03570<br/>La Vila Joiosa, Alicante</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full" style={{backgroundColor: `${KIWI}20`}}>
                    <Phone className="w-6 h-6" style={{color: KIWI}} />
                  </div>
                  <div>
                    <h4 className="font-semibold" style={{color: KIWI, fontFamily: "'Roboto', sans-serif"}}>Teléfono</h4>
                    <p className="text-gray-600" style={{fontFamily: "'Roboto', sans-serif"}}>(+34) 633 52 08 62</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full" style={{backgroundColor: `${FRESA}20`}}>
                    <Mail className="w-6 h-6" style={{color: FRESA}} />
                  </div>
                  <div>
                    <h4 className="font-semibold" style={{color: FRESA_DARK, fontFamily: "'Roboto', sans-serif"}}>Email</h4>
                    <a href="mailto:info@fresaikiwifotografia.com" className="text-gray-600 hover:underline" style={{fontFamily: "'Roboto', sans-serif"}}>
                      info@fresaikiwifotografia.com
                    </a>
                  </div>
                </div>
                
                {/* Social Links */}
                <div className="pt-4 border-t border-gray-100">
                  <h4 className="font-semibold mb-4" style={{color: FRESA_DARK, fontFamily: "'Roboto', sans-serif"}}>Síguenos</h4>
                  <div className="flex gap-4">
                    <a href="https://www.instagram.com/fresaikiwi_fotografia/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all hover:scale-110 flex items-center justify-center" style={{color: '#E1306C'}}>
                      <Instagram className="w-6 h-6" />
                    </a>
                    <a href="https://www.facebook.com/fresaikiwi.fotografia.3" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all hover:scale-110 flex items-center justify-center" style={{color: '#1877F2'}}>
                      <Facebook className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Map */}
            <div className="bg-white p-4 rounded-2xl shadow-lg overflow-hidden h-[400px] lg:h-auto">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d390.26204477840867!2d-0.23027608422429072!3d38.50848851283724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd62191ee4c716fd%3A0xc21e2879ce5b91cc!2sFresaikiwi%20Fotografia!5e0!3m2!1ses!2ses!4v1709248393387!5m2!1ses!2ses"
                width="100%" 
                height="100%" 
                style={{border:0, display:'block'}}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Fresaikiwi Fotografía"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-center mb-6" style={{fontFamily: "'Rouge Script', cursive", color: '#3D3D3D'}}>
                Envíanos un mensaje
              </h3>
              <FormspreeForm
                fields={[
                  { name: "nombre", label: "Nombre", type: "text", required: true },
                  { name: "email", label: "Email", type: "email", required: true },
                  { name: "telefono", label: "Teléfono", type: "tel" },
                  { name: "mensaje", label: "Mensaje", type: "textarea", required: true }
                ]}
                submitText="Enviar mensaje"
                successMessage="¡Gracias por contactarnos! Te responderemos pronto."
              />
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
