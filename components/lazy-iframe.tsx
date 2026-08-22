"use client";

import { useState, useCallback } from "react";

type LazyIframeProps = {
  src: string;
  height?: string | number;
  className?: string;
  onLoad?: () => void;
};

export function LazyIframe({ src, height = "400px", className = "", onLoad }: LazyIframeProps) {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = useCallback(() => {
    setLoaded(true);
    if (onLoad) onLoad();
  }, [onLoad]);

  const heightPx = typeof height === "number" ? `${height}px` : height.includes("px") ? height : `${height}px`;

  if (!loaded) {
    return (
      <div
        className={`
          relative rounded-xl overflow-hidden bg-gray-100
          ${height ? `h-[${heightPx}]` : ""}
        `}
      >
        <iframe
          src={src}
          className={`
            w-full transition-opacity duration-500 ease-out opacity-0
            pointer-events-none
          `}
          style={{ height: heightPx }}
          onLoad={handleLoad}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-gray-100 to-white opacity-0.8 flex items-center justify-center text-sm text-gray-400"
        >
          Cargando contenido...
        </div>
      </div>
    );
  }

  return (
    <iframe
      src={src}
      className={`
        w-full transition-opacity duration-500 ease-out opacity-100
        rounded-xl
      `}
      style={{ height: heightPx }}
      onLoad={handleLoad}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}