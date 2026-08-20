"use client";

import Link from "next/link";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { Heart, Star, Camera, Users, Gift, Music, Crown } from "lucide-react";

const FRESA = "#E8A4A4";
const FRESA_DARK = "#D48888";
const KIWI = "#7BAE7F";
const CREMA = "#FDF8F4";

const sessions = [
  {
    name: "Embarazo",
    slug: "embarazo",
    description: "Captura la esencia de la espera. Un momento único para recordar la belleza de la maternidad.",
    price: "Desde 120€",
    image: "https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/sign/assets/LAURA-1%20copia.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85ODI1NjIyOS0wNDlhLTRkMTgtYTIxNi0wNmIwOTkwODZiMjgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvTEFVUkEtMSBjb3BpYS5qcGciLCJpYXQiOjE3NzYwOTI0MjMsImV4cCI6MTgwNzYyODQyM30.YvP_VZcEbbW-T34upOZWeXJ9JAkxs_r3IzmAWF840lI",
    icon: Heart
  },
  {
    name: "Newborn",
    slug: "newborn",
    description: "Los primeros días del bebé, un tesoro. Capturamos cada detalle diminuto con ternura.",
    price: "Desde 150€",
    image: "https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/sign/assets/MARC-41%20copia.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85ODI1NjIyOS0wNDlhLTRkMTgtYTIxNi0wNmIwOTkwODZiMjgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvTUFSQy00MSBjb3BpYS5qcGciLCJpYXQiOjE3NzYwOTI0MzIsImV4cCI6MTgwNzYyODQzMn0._yjDS0oRmOCS-sfz7iKD-LTHKb7DbGOsrbh_n34x4co",
    icon: Star
  },
  {
    name: "Cumpleaños",
    slug: "cumpleanos",
    description: "Cada año merece ser celebrado. Sesiones temáticas con decoración personalizada.",
    price: "Desde 100€",
    image: "https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/sign/assets/CARLOTA_2ANYS-147.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85ODI1NjIyOS0wNDlhLTRkMTgtYTIxNi0wNmIwOTkwODZiMjgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvQ0FSTE9UQV8yQU5ZUy0xNDcuanBnIiwiaWF0IjoxNzc2MDkyNDAzLCJleHAiOjE4MDc2Mjg0MDN9.3b3dSlrZMR10VmAx7nGUeVnbLDqiW6_U7HP041Om2FA",
    icon: Gift
  },
  {
    name: "Comunión",
    slug: "comunion",
    description: "Un día especial para siempre. Fotos elegantes que reflejan la importancia del momento.",
    price: "Desde 180€",
    image: "https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/sign/assets/CARLOTA_2ANYS-147.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85ODI1NjIyOS0wNDlhLTRkMTgtYTIxNi0wNmIwOTkwODZiMjgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvQ0FSTE9UQV8yQU5ZUy0xNDcuanBnIiwiaWF0IjoxNzc2MDkyNDAzLCJleHAiOjE4MDc2Mjg0MDN9.3b3dSlrZMR10VmAx7nGUeVnbLDqiW6_U7HP041Om2FA",
    icon: Crown
  },
  {
    name: "Navidad",
    slug: "navidad",
    description: "Magia y tradición familiar. Decoración festiva para recuerdos inolvidables.",
    price: "Desde 90€",
    image: "https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/sign/assets/PROBA_DECORAT-22%20copia%202.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85ODI1NjIyOS0wNDlhLTRkMTgtYTIxNi0wNmIwOTkwODZiMjgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvUFJPQkFfREVDT1JBVC0yMiBjb3BpYSAyLmpwZyIsImlhdCI6MTc3NjA5MjQ1NCwiZXhwIjoxODA3NjI4NDU0fQ.7TfvH9dthOKBTJZC_YacnTfZcjgVsOqQ6lpZ2jcRQtA",
    icon: Star
  },
  {
    name: "Familia",
    slug: "familia",
    description: "Vínculos que duran siempre. Momentos auténticos de conexión familiar.",
    price: "Desde 130€",
    image: "https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/sign/assets/PAM_FAMILY-40.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85ODI1NjIyOS0wNDlhLTRkMTgtYTIxNi0wNmIwOTkwODZiMjgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvUEFNX0ZBTUlMWS00MC5qcGciLCJpYXQiOjE3NzYwOTI0NDUsImV4cCI6MTgwNzYyODQ0NX0.nOgA2qWnmCYQM3aRFcSyIjeyKYKdOmfnsgww9OVzfMY",
    icon: Users
  },
  {
    name: "Musical",
    slug: "musical",
    description: "Pasión y ritmo en imagen. Portfolios profesionales para músicos y artistas.",
    price: "Desde 160€",
    image: "https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/sign/assets/EDURNE_EXTERIORS-135.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85ODI1NjIyOS0wNDlhLTRkMTgtYTIxNi0wNmIwOTkwODZiMjgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvRURVUk5FX0VYVEVSSU9SUy0xMzUuanBnIiwiaWF0IjoxNzc2MDkyNDExLCJleHAiOjE4MDc2Mjg0MTF9.FUhRkuf00p042F0JVcFHH3Ns2sHMssKBMHIiVcgMk4A",
    icon: Music
  },
  {
    name: "Moros y Cristianos",
    slug: "moros-y-cristianos",
    description: "Tradición y orgullo local. Honramos la riqueza cultural de nuestras fiestas.",
    price: "Desde 140€",
    image: "https://rxdpvfeqdbenrlupzewy.supabase.co/storage/v1/object/sign/assets/ROSA_CAPI-1.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85ODI1NjIyOS0wNDlhLTRkMTgtYTIxNi0wNmIwOTkwODZiMjgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvUk9TQV9DQVBJLTEuanBnIiwiaWF0IjoxNzc2MDk4ODM2LCJleHAiOjE4MDc2MzQ4MzZ9.C0Z2R8lZPnL2eKxT1mJYD8vW4h6sRgOiJcVFqNhBcRkA",
    icon: Camera
  }
];

export default function SesionesPage() {
  return (
    <main className="min-h-screen">
      {/* Sessions Section */}
      <section className="py-16" style={{backgroundColor: CREMA}}>
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{fontFamily: "'Rouge Script', cursive", color: '#3D3D3D'}}>
            Nuestras Sesiones
          </h1>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto" style={{fontFamily: "'Roboto', sans-serif"}}>
            Cada momento es único. Descubre nuestras sesiones fotográficas diseñadas para capturar la esencia de tu historia.
          </p>

          {/* Sessions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sessions.map((session) => {
              const IconComponent = session.icon;
              return (
                <Link 
                  key={session.slug}
                  href={`/sesiones/${session.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={session.image}
                      alt={session.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-white/90">
                        <IconComponent className="w-4 h-4" style={{color: FRESA}} />
                        <span style={{fontFamily: "'Roboto', sans-serif"}}>{session.name}</span>
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2" style={{fontFamily: "'Roboto', sans-serif"}}>
                      {session.description}
                    </p>
                    <p className="font-semibold" style={{color: KIWI, fontFamily: "'Roboto', sans-serif"}}>
                      {session.price}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
