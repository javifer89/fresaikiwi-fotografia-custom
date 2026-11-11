const WHATSAPP_URL =
  "https://wa.me/34633520862?text=" +
  encodeURIComponent("Hola! Me interesa reservar una sesión fotográfica");

/**
 * Floating WhatsApp entry point, rendered once in the root layout.
 *
 * The bottom offset adds `env(safe-area-inset-bottom)` so the button clears
 * the home indicator on iOS. Entrance is opacity/transform only.
 */
export function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="whatsapp-fab fixed right-5 z-40 inline-flex items-center gap-2 rounded-full px-4 py-3 text-white shadow-xl transition-transform hover:scale-105"
      style={{
        backgroundColor: "var(--kiwi)",
        bottom: "calc(1.25rem + env(safe-area-inset-bottom))",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
        />
      </svg>
      <span
        className="hidden text-sm font-medium sm:inline"
        style={{ fontFamily: "var(--font-roboto), sans-serif" }}
      >
        WhatsApp
      </span>
    </a>
  );
}
