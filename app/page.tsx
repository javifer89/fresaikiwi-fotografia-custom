import type { Metadata } from "next";
import { HeroCarousel } from "@/components/hero-carousel";
import { SessionsGrid } from "@/components/sessions-grid";
import { ContactCTA } from "@/components/contact-cta";

const TITLE = "Fotógrafo en Villajoyosa | Fresaikiwi Fotografía";
const DESCRIPTION =
  "Estudio de fotografía en La Vila Joiosa (Alicante): sesiones de embarazo, newborn, comunión y familia. Descubre las sesiones y reserva la tuya.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
  },
};

export default function Home() {
  return (
    <div className="py-12">
      <HeroCarousel />

      {/* The hero is image-only: this is the page's only visible h1 and the
          only block that states the studio's location in plain text. */}
      <section className="px-4 pt-16 md:px-8" style={{ backgroundColor: "var(--crema)" }}>
        <div className="mx-auto max-w-3xl text-center">
          <h1
            className="mb-4 text-4xl font-bold md:text-5xl"
            style={{ fontFamily: "var(--font-cormorant), serif", color: "var(--gris)" }}
          >
            Fotografía de embarazo, newborn y familia en La Vila Joiosa
          </h1>
          <p
            className="text-lg leading-relaxed"
            style={{ fontFamily: "var(--font-roboto), sans-serif", color: "var(--gris-claro)" }}
          >
            Estudio de fotografía en La Vila Joiosa, Alicante. Sesiones de embarazo,
            newborn, comunión, familia y celebraciones, en estudio o en exterior.
          </p>
        </div>
      </section>

      <SessionsGrid />
      <ContactCTA />
    </div>
  );
}
