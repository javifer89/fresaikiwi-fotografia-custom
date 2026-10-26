import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Reservas",
  description:
    "Reserva tu sesión fotográfica con Fresaikiwi: elige fecha, confirma disponibilidad y prepara tu sesión en Villajoyosa, Alicante.",
  alternates: { canonical: "/reservas" },
};

const FRESA_DARK = "#D48888";
const KIWI = "#7BAE7F";
const CREMA = "#FDF8F4";

// Same behaviour the previous window.open() call had, without a client component.
const BOOKING_URL = "https://ohmyphoto.app/reservas/489/2317/fresaikiwifotografia";

export default function ReservasPage() {
  return (
    <div className="min-h-screen">
      {/* Booking Section */}
      <section className="py-16" style={{ backgroundColor: CREMA }}>
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1
              className="text-4xl md:text-5xl font-bold text-center mb-4"
              style={{ fontFamily: "var(--font-rouge), cursive", color: "#3D3D3D" }}
            >
              Reservas
            </h1>
            <p
              className="text-center text-gray-600 mb-12"
              style={{ fontFamily: "var(--font-roboto), sans-serif" }}
            >
              ¡Da el primer paso hacia tu sesión perfecta!
            </p>

            {/* Process Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#E8A4A4] text-white flex items-center justify-center text-xl font-bold">
                  1
                </div>
                <h2
                  className="font-semibold mb-2"
                  style={{ color: FRESA_DARK, fontFamily: "var(--font-roboto), sans-serif" }}
                >
                  Rellena el formulario
                </h2>
                <p className="text-sm text-gray-600" style={{ fontFamily: "var(--font-roboto), sans-serif" }}>
                  Dinos qué tipo de sesión buscas y tus preferencias
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#7BAE7F] text-white flex items-center justify-center text-xl font-bold">
                  2
                </div>
                <h2
                  className="font-semibold mb-2"
                  style={{ color: KIWI, fontFamily: "var(--font-roboto), sans-serif" }}
                >
                  Te contactamos
                </h2>
                <p className="text-sm text-gray-600" style={{ fontFamily: "var(--font-roboto), sans-serif" }}>
                  Confirmaremos la disponibilidad
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#E8A4A4] text-white flex items-center justify-center text-xl font-bold">
                  3
                </div>
                <h2
                  className="font-semibold mb-2"
                  style={{ color: FRESA_DARK, fontFamily: "var(--font-roboto), sans-serif" }}
                >
                  ¡Listo!
                </h2>
                <p className="text-sm text-gray-600" style={{ fontFamily: "var(--font-roboto), sans-serif" }}>
                  Reservamos tu fecha y empezamos a planificar la sesión
                </p>
              </div>
            </div>

            {/* Booking Section */}
            <div className="bg-white p-4 md:p-6 rounded-2xl shadow-xl overflow-hidden text-center">
              <h2
                className="text-3xl font-bold mb-6"
                style={{ fontFamily: "var(--font-rouge), cursive", color: "#3D3D3D" }}
              >
                Reserva tu sesión
              </h2>

              <p className="text-gray-600 mb-8" style={{ fontFamily: "var(--font-roboto), sans-serif" }}>
                Haz clic en el botón para abrir el sistema de reservas en una nueva ventana
              </p>

              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#E8A4A4] hover:bg-[#D48888] text-white font-bold py-4 px-10 rounded-2xl text-lg transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 inline-flex items-center gap-3"
                style={{ fontFamily: "var(--font-roboto), sans-serif" }}
              >
                <span aria-hidden="true">📅</span>
                Reservar ahora <span aria-hidden="true">→</span>
                <span className="sr-only">(se abre en una pestaña nueva)</span>
              </a>

              <div
                className="mt-4 text-sm text-gray-500"
                style={{ fontFamily: "var(--font-roboto), sans-serif" }}
              >
                <span>↗ Se abrirá en una nueva pestaña</span>
              </div>
            </div>

            {/* Info Cards */}
            <div className="flex justify-center mt-12">
              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg max-w-2xl w-full">
                <Calendar className="w-8 h-8 text-[#E8A4A4] flex-shrink-0" />
                <div>
                  <h2
                    className="font-semibold text-[#D48888] mb-1"
                    style={{ fontFamily: "var(--font-roboto), sans-serif" }}
                  >
                    Antelación
                  </h2>
                  <p
                    className="text-sm text-gray-600"
                    style={{ fontFamily: "var(--font-roboto), sans-serif" }}
                  >
                    Recomendamos reservar con 2-4 semanas de antelación para asegurar
                    disponibilidad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

    </div>
  );
}
