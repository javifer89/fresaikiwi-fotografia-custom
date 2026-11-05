import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/container";
import { SessionLightbox } from "@/components/session-lightbox";
import { getSession, sessions } from "@/lib/data/sessions";
import { siteConfig } from "@/lib/site-config";

type SessionPageProps = {
  params: Promise<{ slug: string }>;
};

// Unknown slugs are a static 404 instead of a runtime render.
export const dynamicParams = false;

export function generateStaticParams() {
  return sessions.map((session) => ({ slug: session.slug }));
}

export async function generateMetadata({ params }: SessionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const session = getSession(slug);

  if (!session) {
    return {};
  }

  return {
    title: session.seoTitle,
    description: session.seoDescription,
    alternates: { canonical: `/sesiones/${session.slug}` },
    openGraph: {
      type: "article",
      locale: "es_ES",
      siteName: siteConfig.name,
      title: session.seoTitle,
      description: session.seoDescription,
      url: `/sesiones/${session.slug}`,
      images: [{ url: session.image, alt: session.imageAlt }],
    },
  };
}

export default async function SessionPage({ params }: SessionPageProps) {
  const { slug } = await params;
  const session = getSession(slug);

  if (!session) {
    notFound();
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--crema)" }}>
      <Container>
        <Link
          href="/sesiones"
          className="inline-flex items-center gap-2 mb-8 transition-colors"
          style={{ color: "var(--fresa-dark)" }}
        >
          <ArrowLeft className="w-4 h-4" />
          <span style={{ fontFamily: "var(--font-roboto), sans-serif" }}>Volver a Sesiones</span>
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 lg:items-start mb-16">
          <div>
            <span
              className="inline-block px-4 py-1 rounded-full text-sm mb-4"
              style={{ backgroundColor: "rgba(232,164,164,0.2)", color: "var(--fresa-dark)" }}
            >
              {session.badge}
            </span>

            <h1
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "var(--font-rouge), cursive", color: "var(--gris)" }}
            >
              {session.name}
            </h1>

            <p
              className="text-lg mt-4 leading-relaxed"
              style={{ color: "var(--gris-claro)", fontFamily: "var(--font-roboto), sans-serif" }}
            >
              {session.intro}
            </p>

            <div className="mt-8 space-y-4">
              <h2
                className="font-semibold mb-3"
                style={{ fontFamily: "var(--font-roboto), sans-serif", color: "var(--fresa-dark)" }}
              >
                ¿Qué incluye esta sesión?
              </h2>
              <ul
                className="space-y-2"
                style={{ color: "var(--gris-claro)", fontFamily: "var(--font-roboto), sans-serif" }}
              >
                {session.includes.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--fresa)" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/reservas"
              className="inline-block mt-8 px-8 py-3 rounded-full transition-all hover:scale-105"
              style={{
                backgroundColor: "var(--fresa)",
                color: "white",
                fontFamily: "var(--font-roboto), sans-serif",
              }}
            >
              Reservar esta sesión
            </Link>
          </div>

          {session.gallery.length > 0 ? (
            <SessionLightbox
              images={session.gallery.map((image, index) => ({
                id: index,
                src: image.src,
                alt: image.alt,
                unoptimized: image.unoptimized,
              }))}
              aspectRatio={session.galleryAspect ?? "square"}
            />
          ) : session.heroImage ? (
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px]">
              <Image
                src={session.heroImage.src}
                alt={session.heroImage.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          ) : null}
        </div>
      </Container>
    </div>
  );
}
