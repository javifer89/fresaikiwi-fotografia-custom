import Image from "next/image";

export default function PoliticaCookies() {
  return (
    <main className="py-12 px-4 md:px-8 max-w-2xl mx-auto">
      <Image
        src="/images/cookies.svg"
        alt="Política de cookies"
        width={200}
        height={200}
        loading="lazy"
        className="mx-auto mb-6"
      />
      <article className="prose lg:prose-xl text-left">
        <h1 className="text-3xl font-bold mb-4">Política de Cookies</h1>

        <p><strong>Última actualización:</strong> [día] de [mes] de [año]</p>

        <p>
          En
          <strong>[Nombre de tu empresa]</strong> utilizamos cookies y tecnologías
          similares para mejorar la experiencia del usuario, analizar el tráfico
          y mostrar publicidad personalizada. A continuación, te explicamos qué
          son, qué tipos utilizamos y cómo puedes configurarlas.
        </p>

        <h2 className="text-2xl font-semibold mt-6">1. ¿Qué son las cookies?</h2>
        <p>
          Las cookies son pequeños archivos de texto que se instalan en tu
          dispositivo (ordenador, móvil o tablet) al visitar una web. Permiten
          recordar información sobre tu visita, como el idioma preferido u otras
          configuraciones, y facilitar tu próxima visita.
        </p>

        <h2 className="text-2xl font-semibold mt-6">2. Tipos de cookies que utilizamos</h2>

        <h3 className="text-xl font-medium mt-4">2.1 Cookies técnicas</h3>
        <p>
          Son aquellas necesarias para la navegación y el correcto funcionamiento
          de nuestra web. Permiten, por ejemplo, controlar el tráfico de datos,
          identificar la sesión y acceder a áreas seguras. Sin ellas, el sitio
          no funcionaría adecuadamente.
        </p>

        <h3 className="text-xl font-medium mt-4">2.2 Cookies de análisis</h3>
        <p>
          Nos permiten cuantificar el número de visitantes y realizar la
          medición y análisis estadístico de la utilización del servicio. Nos
          ayudan a mejorar nuestro sitio web ofreciendo una mejor experiencia de
          uso. Utilizamos Google Analytics para este fin.
        </p>

        <h3 className="text-xl font-medium mt-4">2.3 Cookies de personalización</h3>
        <p>
          Guardan tus preferencias de navegación (idioma, región, etc.) para
          ofrecerte una experiencia más personalizada.
        </p>

        <h3 className="text-xl font-medium mt-4">2.4 Cookies de publicidad / behavioural</h3>
        <p>
          Muestran publicidad relacionada con tus intereses, basándose en un
          perfil creado a partir de tus hábitos de navegación. Puedes consultar
          más información sobre cómo funcionan y cómo oponerte en la sección de
          "Cookies de publicidad" al final de este documento.
        </p>

        <h2 className="text-2xl font-semibold mt-6">3. Gestión de cookies</h2>

        <h3 className="text-xl font-medium mt-4">3.1 Desde el banner de nuestra web</h3>
        <p>
          En tu primera visita aparecerá un banner que te permitirá aceptar o
          rechazar todas las cookies (o configurar tus preferencias). El banner
          recuerda tu elección mediante una cookie técnica durante
          <strong>30 días</strong>.
        </p>

        <h3 className="text-xl font-medium mt-4">3.2 A través de tu navegador</h3>
        <p>
          Puedes permitir, bloquear o eliminar las cookies instaladas en tu
          dispositivo mediante la configuración de tu navegador. Ten en cuenta
          que, si las bloqueas, algunos servicios de la web pueden no funcionar
          correctamente.
        </p>
        <ul>
          <li>
            <strong>Chrome:</strong>
            <a href="https://support.google.com/chrome/answer/95647?hl=es" target="_blank" rel="noopener noreferrer">
              Ayuda de Google
            </a>
          </li>
          <li>
            <strong>Safari:</strong>
            <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
              target="_blank" rel="noopener noreferrer"
            >
              Ayuda de Apple
            </a>
          </li>
          <li>
            <strong>Firefox:</strong>
            <a href="https://support.mozilla.org/es/kb/cookies-informacion-almacenada-en-el-navegador" target="_blank" rel="noopener noreferrer">
              Ayuda de Firefox
            </a>
          </li>
          <li>
            <strong>Edge:</strong>
            <a href="https://support.microsoft.com/es-es/windows/microsoft-edge-borrar-y-gestionar-cookies-16cdadee-2b1d-036d-470e-4b8fdff56f64" target="_blank" rel="noopener noreferrer">
              Ayuda de Edge
            </a>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">4. Transferencias internacionales</h2>
        <p>
          Algunas cookies de terceros (p. ej., Google Analytics) pueden transferir
          datos a servidores ubicados fuera del Espacio Económico Europeo. En
          dichos casos, garantizamos que la transferencia se basa en cláusulas
          contractuales tipo aprobadas por la Comisión Europea o en un nivel de
          protección adecuado.
        </p>

        <h2 className="text-2xl font-semibold mt-6">5. Consentimiento</h2>
        <p>
          El uso de cookies de análisis y publicidad requiere tu consentimiento,
          el cual se obtiene mediante el banner mostrado en la primera visita. Las
          cookies técnicas no requieren consentimiento y se instalan automáticamente
          para la correcta visualización del sitio.
        </p>

        <p><strong>Contacto:</strong> <a href="mailto:info@tudominio.com">info@tudominio.com</a></p>
      </article>
    </main>
  );
}