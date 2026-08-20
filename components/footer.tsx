"use client";

import Link from "next/link";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

const FRESA = "#E8A4A4";
const FRESA_LIGHT = "#F5D5D5";
const FRESA_DARK = "#D48888";
const KIWI = "#7BAE7F";
const KIWI_LIGHT = "#D4EAD7";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 px-4 md:px-8" style={{ backgroundColor: '#3D3D3D', color: '#F5F5F5' }}>
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-6 border-b border-white/10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <img 
                src="https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/sign/assets/LOGO_WEB.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85ODI1NjIyOS0wNDlhLTRkMTgtYTIxNi0wNmIwOTkwODZiMjgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvTE9HT19XRUIucG5nIiwiaWF0IjoxNzc2MTAwNTU0LCJleHAiOjE4MDc2MzY1NTR9.ohXez3syn7cmcPraXd6NfzX2-gRdSdfMoqoIBdbUX84" 
                alt="Fresaikiwi Fotografía"
                className="h-16 md:h-20 w-auto"
              />
            </Link>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/fresaikiwi_fotografia/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-pink-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/fresaikiwi.fotografia.3"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-[#E8A4A4] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4" style={{ color: FRESA_LIGHT }}>
              Navegación
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/sobre-nosotros" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Sobre nosotros
                </Link>
              </li>
              <li>
                <Link href="/sesiones" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Sesiones
                </Link>
              </li>
              <li>
                <Link href="/reservas" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Reservas
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Sessions */}
          <div>
            <h4 className="font-semibold mb-4" style={{ color: '#F5D5D5' }}>
              Sesiones
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/sesiones/embarazo" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Embarazo
                </Link>
              </li>
              <li>
                <Link href="/sesiones/newborn" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Newborn
                </Link>
              </li>
              <li>
                <Link href="/sesiones/comunion" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Comunión
                </Link>
              </li>
              <li>
                <Link href="/sesiones/familia" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Familia
                </Link>
              </li>
              <li>
                <Link href="/sesiones/navidad" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Navidad
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4" style={{ color: FRESA_LIGHT }}>
              Contacto
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: KIWI_LIGHT }} />
                <span className="text-sm text-gray-400" style={{fontFamily: "'Roboto', sans-serif"}}>
                  C/ Constitución nº20, local izquierda, 03570 La Vila Joiosa, Alicante
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" style={{ color: '#D4EAD7' }} />
                <a href="tel:+34633520862" className="text-sm text-gray-400 hover:text-white transition-colors" style={{fontFamily: "'Roboto', sans-serif"}}>
                  (+34) 633 52 08 62
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" style={{ color: KIWI_LIGHT }} />
                <a href="mailto:info@fresaikiwifotografia.com" className="text-sm text-gray-400 hover:text-white transition-colors" style={{fontFamily: "'Roboto', sans-serif"}}>
                  info@fresaikiwifotografia.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {currentYear} Fresaikiwi Fotografía. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <Link href="/privacidad" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Política de privacidad
            </Link>
            <Link href="/aviso-legal" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Aviso legal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
