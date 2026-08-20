"use client";

export const dynamic = "force-dynamic";

import { HeroCarousel } from "@/components/hero-carousel";
import { SessionsGrid } from "@/components/sessions-grid";
import { ContactCTA } from "@/components/contact-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <HeroCarousel />
      <SessionsGrid />
      <ContactCTA />
      <Footer />
    </main>
  );
}