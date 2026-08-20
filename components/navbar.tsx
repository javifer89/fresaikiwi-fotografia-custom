"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Camera } from "lucide-react";

const FRESA = "#E8A4A4";
const FRESA_DARK = "#D48888";
const FRESA_LIGHT = "#F5D5D5";
const KIWI = "#7BAE7F";
const KIWI_LIGHT = "#D4EAD7";
const GRIS = "#3D3D3D";

const sessions = [
  { name: "Embarazo", slug: "embarazo" },
  { name: "Newborn", slug: "newborn" },
  { name: "Cumpleaños", slug: "cumpleanos" },
  { name: "Comunión", slug: "comunion" },
  { name: "Navidad", slug: "navidad" },
  { name: "Familia", slug: "familia" },
  { name: "Musical", slug: "musical" },
  { name: "Moros y Cristianos", slug: "moros-y-cristianos" },
];

export function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sessionsDropdownOpen, setSessionsDropdownOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-1"
      style={{ backgroundColor: 'rgba(253, 253, 253, 0.95)', backdropFilter: 'blur(10px)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img 
              src="https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/sign/assets/LOGO_WEB.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85ODI1NjIyOS0wNDlhLTRkMTgtYTIxNi0wNmIwOTkwODZiMjgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvTE9HT19XRUIucG5nIiwiaWF0IjoxNzc2MTAwNTU0LCJleHAiOjE4MDc2MzY1NTR9.ohXez3syn7cmcPraXd6NfzX2-gRdSdfMoqoIBdbUX84" 
              alt="Fresaikiwi Fotografía"
              className="h-16 md:h-20 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/sobre-nosotros"
              className="text-sm font-medium transition-colors hover:opacity-70"
              style={{ color: GRIS }}
            >
              Sobre nosotros
            </Link>

            {/* Sessions Dropdown */}
            <div className="relative">
              <button
                onClick={() => setSessionsDropdownOpen(!sessionsDropdownOpen)}
                className="flex items-center gap-1 text-sm font-medium transition-colors hover:opacity-70"
                style={{ color: GRIS }}
              >
                Sesiones
                <ChevronDown className={`w-4 h-4 transition-transform ${sessionsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {sessionsDropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-2 py-2 px-4 rounded-xl shadow-xl min-w-[200px]"
                  style={{ backgroundColor: 'white' }}
                  onMouseLeave={() => setSessionsDropdownOpen(false)}
                >
                  {sessions.map((session) => (
                    <Link
                      key={session.slug}
                      href={`/sesiones/${session.slug}`}
                      className="block py-2 px-3 text-sm rounded-lg transition-colors hover:bg-pink-50"
                      style={{ color: GRIS }}
                      onClick={() => setSessionsDropdownOpen(false)}
                    >
                      {session.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/reservas"
              className="px-5 py-2 rounded-full text-sm font-medium transition-all hover:scale-105"
              style={{ backgroundColor: FRESA, color: 'white' }}
            >
              Reservas
            </Link>

            <Link
              href="/contacto"
              className="text-sm font-medium transition-colors hover:opacity-70"
              style={{ color: GRIS }}
            >
              Contacto
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
            aria-label="Menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4" style={{ borderColor: FRESA_LIGHT }}>
            <div className="flex flex-col gap-2">
              <Link
                href="/sobre-nosotros"
                className="py-2 px-4 rounded-lg text-sm font-medium"
                style={{ color: GRIS }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Sobre nosotros
              </Link>

              <div className="py-2 px-4">
                <p className="text-xs font-semibold uppercase mb-2" style={{ color: KIWI }}>
                  Sesiones
                </p>
                <div className="pl-2 flex flex-col gap-1">
                  {sessions.map((session) => (
                    <Link
                      key={session.slug}
                      href={`/sesiones/${session.slug}`}
                      className="py-1 text-sm rounded-lg transition-colors"
                      style={{ color: GRIS }}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {session.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/reservas"
                className="py-2 px-4 rounded-lg text-sm font-medium text-center"
                style={{ backgroundColor: FRESA, color: 'white' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Reservas
              </Link>

              <Link
                href="/contacto"
                className="py-2 px-4 rounded-lg text-sm font-medium"
                style={{ color: GRIS }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contacto
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
