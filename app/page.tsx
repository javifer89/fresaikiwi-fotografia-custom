import type { Metadata } from "next";
import { HeroCarousel } from "@/components/hero-carousel";
import { SessionsGrid } from "@/components/sessions-grid";
import { ContactCTA } from "@/components/contact-cta";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <div className="py-12">
      {/* The hero is image-only, so the page had no h1 at all. */}
      <h1 className="sr-only">
        Fotografía de embarazo, newborn, comunión y familia en Villajoyosa
      </h1>
      <HeroCarousel />
      <SessionsGrid />
      <ContactCTA />
    </div>
  );
}
