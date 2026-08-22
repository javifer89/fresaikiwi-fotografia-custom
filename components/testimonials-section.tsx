"use client";

import { useState, useEffect } from "react";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  rating: number;
  text: string;
  image?: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Raquel M.",
    role: "Mamá primeriza",
    rating: 5,
    text: "La sesión de embarazo fue espectacular. Capturaron cada detalle y la luz fue perfecta. ¡Las fotos superaron mis expectativas!",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 2,
    name: "Carla P.",
    role: "Papá primerizo",
    rating: 5,
    text: "No sabíamos qué esperar, pero el equipo nos hizo sentir muy cómodos. Las fotos de nuestro newborn son nuestra posesión más valiosa.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 3,
    name: "Laura G.",
    role: "Familia",
    rating: 5,
    text: "La sesión familiar fue divertida y natural. Las fotos capturaron la esencia de nuestra familia de una manera hermosa. ¡Recomendadísimo!",
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  }
];

const STAR_PATH = "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm-2 7.059-3.172 3.172 1.414 4.243L10 18.7l5.586-2.243 1.414-4.243L12 11.35l-4.172-2.857L6.828 6.257l1.414-4.243zm9.54 3.059a9.983 9.983 0 0 1-2.828.418l-2.336 2.613 1.533 3.078L22.5 15.063l-2.264-4.528L17.675.655a9.976 9.976 0 0 1-.198-2.059z";

export function TestimonialsSection() {
  const [swipeIndex, setSwipeIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSwipeIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 px-4 md:px-8" style={{ backgroundColor: '#FDF8F4' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full"
                style={{ backgroundColor: '#E8A4A4', color: '#D48888' }}>
            Lo que dicen nuestras familias
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4"
                style={{ fontFamily: "'Rouge Script', cursive", color: '#3D3D3D' }}>
            Testimonios
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#6B6B6B' }}>
            Clientes reales comparten su experiencia
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-2xl p-8 shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold" style={{ color: '#D48888' }}>{testimonial.name}</h4>
                  <p className="text-sm" style={{ color: '#7BAE7F' }}>{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1">
                {Array.from({ length: 5 }, (_, i) => (
                  <svg
                    key={i}
                    className={i < testimonial.rating ? "w-4 h-4 fill-yellow-500" : "w-4 h-4 fill-gray-200"}
                    viewBox="0 0 24 24"
                  >
                    <path d={STAR_PATH} />
                  </svg>
                ))}
              </div>

              <p className="mt-4 text-gray-600 leading-relaxed">{testimonial.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            {" "}
            ¿Te gustaría dejar tu testimonio? ¡Nos encantaría leer tu experiencia!
          </p>
        </div>
      </div>
    </section>
  );
}