"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type WordsRevealProps = {
  text: string;
  /** Words rendered in italic accent (matched without punctuation, case-insensitive). */
  emphasis?: readonly string[];
  as?: "h1" | "h2";
  className?: string;
  style?: React.CSSProperties;
};

/**
 * Reveals a heading word by word the first time it enters the viewport.
 *
 * The words start hidden only under `.reveal-ready` (set by an inline script),
 * so the heading stays readable without JavaScript. Each word animates with
 * opacity and transform only.
 */
export function WordsReveal({
  text,
  emphasis = [],
  as = "h2",
  className,
  style,
}: WordsRevealProps) {
  const nodeRef = useRef<HTMLElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const setRef = useCallback((node: HTMLElement | null) => {
    nodeRef.current = node;
  }, []);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setPlaying(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setPlaying(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const emphasisWords = new Set(emphasis.map((word) => word.toLowerCase()));
  const words = text.split(/\s+/).filter(Boolean);
  const Tag = as;

  return (
    <Tag
      ref={setRef}
      className={cn("word-reveal", playing && "is-playing", className)}
      style={style}
    >
      {words.map((word, index) => {
        const normalized = word.replace(/[^\p{L}\p{N}]/gu, "").toLowerCase();
        const isEmphasis = emphasisWords.has(normalized);

        return (
          <span
            key={`${word}-${index}`}
            style={{ animationDelay: `${index * 70}ms` }}
            className={isEmphasis ? "italic text-[var(--fresa-dark)]" : undefined}
          >
            {word}
          </span>
        );
      })}
    </Tag>
  );
}
