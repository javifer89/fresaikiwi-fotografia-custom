"use client";

import { useEffect, useState } from "react";

/**
 * AnimatedTitle
 *
 * Muestra un título que se va escribiendo carácter a carácter (efecto typewriter).
 * - `words`: array de cadenas que se alternan (opcional).
 * - `cursor`: true/false para mostrar cursor parpadeante.
 * - `delay`: milisegundos entre cada carácter (por defecto 70).
 * - `loop`: si true, reinicia la animación una vez terminada.
 *
 * Accesibilidad:
 *   - Usa <h2> con aria-label que contiene la frase completa.
 *   - Respeta la media query prefers-reduced-motion (si el usuario lo tiene activado,
 *     muestra el título sin animación).
 */
export function AnimatedTitle({
  words: wordsProp = ["Privacidad"],
  cursor = true,
  delay = 70,
  loop = true,
}: {
  words?: string[];
  cursor?: boolean;
  delay?: number;
  loop?: boolean;
}) {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const words = wordsProp;
  const currentWord = words[wordIndex];

  // Reinicio cuando termina y loop=true
  useEffect(() => {
    if (isFinished && loop) {
      setCharIndex(0);
      setIsDeleting(false);
      setIsFinished(false);
    }
  }, [isFinished, loop, wordIndex]);

  // Velocidad: borrado un poco más rápido que escritura
  const speed = isDeleting ? delay / 2 : delay;

  useEffect(() => {
    // Si ya estamos al final y no borramos, marcamos finalizado
    if (charIndex === currentWord.length) {
      setIsFinished(true);
      return;
    }
    // Si borramos y llegamos al inicio, pasamos a la siguiente palabra
    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setCharIndex((c) => c - 1);
      } else {
        setCharIndex((c) => c + 1);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, currentWord, isDeleting, speed, words.length]);

  // Texto que se mostrará (con cursor opcional)
  const displayed =
    currentWord.slice(0, charIndex) + (cursor && !isFinished ? "_" : "");

  // Si el usuario tiene activada la preferencia de movimiento reducido,
  // mostramos solo el título estático (primera palabra).
  let Component;
  if (typeof window !== "undefined") {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      // Renderizado estático – sin animación
      return (
        <h2 className="text-3xl font-bold mb-6" aria-label={currentWord}>
          {currentWord}
        </h2>
      );
    }
  }

  return (
    <h2
      className="text-3xl font-bold mb-6"
      aria-label={currentWord}
    >
      {displayed}
    </h2>
  );
}