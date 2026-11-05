// components/LegalIcons.tsx
// Iconos legales — outline coherente, control total vía Tailwind + CSS variables.
// Uso: <IconPrivacidad className="w-12 h-12 text-[var(--fresa)]" />

type IconProps = {
  className?: string;
  title?: string;
  "aria-label"?: string;
};

export function IconPrivacidad({ className = "", title = "Política de privacidad", "aria-label": ariaLabel = title }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      role="img"
      aria-label={ariaLabel}
    >
      <title>{title}</title>
      <rect x="4" y="10" width="16" height="11" rx="2" ry="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      <circle cx="12" cy="15.5" r="1.5" />
      <path d="M12 17v1.5" />
    </svg>
  );
}

export function IconAvisoLegal({ className = "", title = "Aviso legal", "aria-label": ariaLabel = title }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      role="img"
      aria-label={ariaLabel}
    >
      <title>{title}</title>
      <path d="M12 3v18" />
      <path d="M5 21h14" />
      <path d="M3 7h18" />
      <path d="M6 7l-3 6a3 3 0 0 0 6 0z" />
      <path d="M18 7l-3 6a3 3 0 0 0 6 0z" />
      <circle cx="12" cy="4" r="1" />
    </svg>
  );
}

export function IconAccesibilidad({ className = "", title = "Accesibilidad", "aria-label": ariaLabel = title }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      role="img"
      aria-label={ariaLabel}
    >
      <title>{title}</title>
      <circle cx="12" cy="4" r="1.75" />
      <path d="M4 8h16" />
      <path d="M12 8v6" />
      <path d="M12 14l-3 7" />
      <path d="M12 14l3 7" />
    </svg>
  );
}

export function IconCookies({ className = "", title = "Política de cookies", "aria-label": ariaLabel = title }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      role="img"
      aria-label={ariaLabel}
    >
      <title>{title}</title>
      {/* Cookie outline */}
      <circle cx="12" cy="12" r="10" />
      {/* Bite taken out */}
      <path d="M20 8a4 4 0 1 1-4 4" />
      {/* Chocolate chips */}
      <circle cx="9" cy="9" r="1" />
      <circle cx="15" cy="9" r="1" />
      <circle cx="12" cy="15" r="1" />
      <circle cx="7" cy="14" r="1" />
      <circle cx="16" cy="14" r="1" />
    </svg>
  );
}