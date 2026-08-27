"use client";

import { useEffect, useState } from "react";

/* --- Paleta de colores de la web --- */
const FRESA = "#E8A4A4";
const FRESA_LIGHT = "#F5D5D5";
const FRESA_DARK = "#D48888";
const KIWI = "#7BAE7F";
const KIWI_LIGHT = "#D4EAD7";
const BG_MAIN = "#2A2A2A"; // gris oscuro mejorado contraste

const COOKIE_NAME = "cookie_policy";
const COOKIE_EXPIRY_DAYS = 30;

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(true);
  const [accepted, setAccepted] = useState<boolean | null>(null); // null = no decidido, true = aceptar, false = rechazar

  // Comprobar cookie existente al montar
  useEffect(() => {
    const cookie = document.cookie.match(/^(|; )*cookie_policy=([^;]*)/);
    if (cookie) {
      const value = cookie[2];
      setAccepted(value === "accept");
      setShowBanner(false);
    }
  }, []);

  // Guardar cookie en el navegador
  const setCookie = (value: string) => {
    const date = new Date();
    date.setDate(date.getDate() + COOKIE_EXPIRY_DAYS);
    document.cookie = `${COOKIE_NAME}=${value};expires=${date.toUTCString()};path=/;samesite=strict`;
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        background: BG_MAIN,
        color: "#fff",
        padding: "1rem",
            paddingBottom: "calc(1rem + env(safe-area-inset-bottom))",
        fontSize: "0.875rem",
        zIndex: 9999,
        borderTop: "1px solid #444",
        fontFamily: "'Roboto', sans-serif",
      }}
    >
      <p style={{ margin: 0 }}>
        Utilizamos cookies para mejorar tu experiencia en nuestro sitio. Al hacer clic en “Aceptar”, consentimos el uso de todas las cookies. <a
          href="/politica-de-cookies"
          style={{
            color: "#aaffc0",
            textDecoration: "underline",
          }}
        >
          Política de cookies
        </a>.
      </p>

      <div
        style={{
          display: "flex",
          gap: "1rem",
          marginTop: "0.5rem",
          justifyContent: "flex-end",
        }}
      >
        {/* Botón Aceptar – color FRESA con hover Tailwind */}
        <button
          className="bg-[#E8A4A4] text-white px-4 py-2 rounded-md cursor-pointer font-medium text-sm transition-colors hover:bg-[#D48888]"
          onClick={() => {
            setCookie("accept");
            setAccepted(true);
            setShowBanner(false);
          }}
        >
          Aceptar
        </button>

        {/* Botón Rechazar – color KIWI con hover Tailwind */}
        <button
          className="bg-[#7BAE7F] text-white px-4 py-2 rounded-md cursor-pointer font-medium text-sm transition-colors hover:bg-[#6a9c6e]"
          onClick={() => {
            setCookie("reject");
            setAccepted(false);
            setShowBanner(false);
          }}
        >
          Rechazar
        </button>
      </div>
    </div>
  );
}