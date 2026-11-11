"use client";

import { cn } from "@/lib/utils";

type LazyIframeProps = {
  src: string;
  /** Accessible name for the iframe (required for assistive tech). */
  title: string;
  /** Height utilities, e.g. `h-[400px] lg:h-[460px]`. */
  heightClassName?: string;
  /** Extra classes for the iframe itself: rounding, filters, etc. */
  className?: string;
  onLoad?: () => void;
};

/**
 * Lazy iframe with a placeholder that sits *behind* the frame.
 *
 * No load state on purpose: the frame paints over the placeholder as soon as
 * its document commits, so the map never depends on JavaScript, never waits on
 * a hydration race (a `load` event fired before hydration would be lost), and
 * is never remounted — the single reason the old version requested the map
 * twice.
 */
export function LazyIframe({
  src,
  title,
  heightClassName = "h-[400px]",
  className,
  onLoad,
}: LazyIframeProps) {
  return (
    <div className={cn("relative w-full overflow-hidden bg-gray-100", heightClassName)}>
      <div className="absolute inset-0 flex items-center justify-center text-sm text-gray-400">
        Cargando mapa…
      </div>

      <iframe
        src={src}
        title={title}
        onLoad={onLoad}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className={cn("relative h-full w-full border-0", className)}
      />
    </div>
  );
}
