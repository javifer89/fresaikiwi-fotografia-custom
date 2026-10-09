import { IconAccesibilidad } from "@/components/LegalIcons";

export default function Accesibilidad() {
  return (
    <main id="main" className="py-12 px-4 md:px-8 max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <IconAccesibilidad className="w-14 h-14 mx-auto text-[var(--gris)]" aria-label="Accesibilidad" />
        <h1 className="text-3xl font-bold mt-4" style={{ fontFamily: "'Cormorant Garamond', serif", color: 'var(--gris)' }}>
          Declaración de Accesibilidad
        </h1>
      </div>
      <article className="prose lg:prose-xl text-left">

        <p>
          <strong>Última actualización:</strong> 11 de septiembre de 2026
        </p>

        <h2 className="text-2xl font-semibold mt-6">1. Compromiso de la empresa</h2>
        <p>
          Fresaikiwi Fotografía se compromete a mejorar continuamente la accesibilidad de su sitio web
          siguiendo las directrices <strong>WCAG 2.1 nivel AA</strong> (Web Content Accessibility Guidelines)
          y los requisitos de la norma <strong>UNE-EN 301 549:2022</strong>.
          Esta declaración describe el estado actual de accesibilidad del sitio y las áreas en proceso de mejora.
        </p>

        <h2 className="text-2xl font-semibold mt-6">2. Estado de conformidad</h2>
        <p>
          El sitio se ha desarrollado con tecnologías web estándar (<strong>HTML5 semántico, CSS, WAI-ARIA</strong>)
          y se esfuerza por cumplir los criterios de conformidad WCAG 2.1 AA.
          Actualmente, el sitio es <strong>parcialmente conforme</strong>: la mayoría de criterios se cumplen,
          pero existen áreas identificadas que no alcanzan el nivel AA completo y están en proceso de corrección.
        </p>

        <h2 className="text-2xl font-semibold mt-6">3. Lo que funciona bien (cumplimiento actual)</h2>
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li>
            <strong>Estructura semántica:</strong> Uso correctu de <code>main</code>, <code>header</code>, <code>nav</code>, <code>section</code>, <code>article</code>, <code>footer</code> y jerarquía de encabezados (<code>h1</code>–<code>h3</code>).
          </li>
          <li>
            <strong>Alternativas textuales:</strong> Todas las imágenes informativas tienen atributo <code>alt</code> descriptivo; las decorativas usan <code>alt=""</code>.
          </li>
          <li>
            <strong>Navegación por teclado:</strong> Orden de foco lógico; enlaces y botones accesibles con <kbd>Tab</kbd>/<kbd>Enter</kbd>.
          </li>
          <li>
            <strong>Saltos de bloque:</strong> Enlace "Ir al contenido principal" (skip link) como primer elemento enfocable.
          </li>
          <li>
            <strong>Formularios accesibles:</strong> Etiquetas <code>label</code> asociadas a cada campo (<code>htmlFor</code>/<code>id</code>); indicadores de campo requerido; mensajes de error claros.
          </li>
          <li>
            <strong>Idioma de la página:</strong> <code>html lang="es"</code> declarado.
          </li>
          <li>
            <strong>Redimensionado de texto:</strong> Unidades relativas (<code>rem</code>, <code>em</code>, <code>%</code>); contenido refluible hasta 200% sin pérdida de funcionalidad.
          </li>
          <li>
            <strong>Meta viewport y zoom:</strong> Permitido zoom del usuario; sin <code>user-scalable=no</code>.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">4. Limitaciones conocidas (no conformes o en mejora)</h2>
        <p>Las siguientes barreras han sido identificadas y se están abordando:</p>
        <ul className="list-disc list-inside mt-4 space-y-3">
          <li>
            <strong>Contraste de color (WCAG 1.4.3 AA):</strong>
            Los colores de marca <code>--fresa</code> (<code>#E8A4A4</code>) y <code>--kiwi</code> (<code>#7BAE7F</code>)
            sobre fondo blanco no alcanzan la relación de contraste 4.5:1 requerida para texto normal.
            <em>En corrección: ajustar tonos o usar variantes oscuras (<code>--fresa-dark</code>, <code>--kiwi-dark</code>) para texto y elementos interactivos.</em>
          </li>
          <li>
            <strong>Movimiento automático sin control (WCAG 2.2.2):</strong>
            El carrusel principal (Hero) rota automáticamente cada 5 segundos sin botón de pausa/parada.
            <em>En corrección: añadir control visible de pausa/reanudación y respetar <code>prefers-reduced-motion</code>.</em>
          </li>
          <li>
            <strong>Foco visible (WCAG 2.4.7):</strong>
            La mayoría de elementos interactivos (botones, enlaces, tarjetas) carecen de estilo <code>:focus-visible</code> discernible.
            <em>En corrección: añadir anillo de foco consistente en todo el sitio.</em>
          </li>
          <li>
            <strong>Lightbox / galerías (WCAG 2.4.3, 4.1.2):</strong>
            Los lightbox de sesiones no implementan <code>aria-modal="true"</code>, no atrapan el foco,
            no se cierran con <kbd>Esc</kbd> y usan <code>alt="Ampliada"</code> genérico en lugar de descripción contextual.
            <em>En corrección: lightbox accesible con trap de foco, tecla Esc, <code>aria-label</code> descriptivo y navegación por teclado.</em>
          </li>
          <li>
            <strong>Desplegable de navegación (WCAG 1.3.1, 4.1.2):</strong>
            El menú "Sesiones" en la barra de navegación no expone <code>aria-expanded</code>, <code>aria-controls</code>
            ni <code>aria-haspopup</code>; no es navegable con teclado (flechas).
            <em>En corrección: menú ARIA Authoring Practices (menu button pattern).</em>
          </li>
          <li>
            <strong>Indicadores de estado dinámicos (WCAG 4.1.3):</strong>
            Los mensajes de éxito/error del formulario de contacto no usan <code>aria-live</code> para anunciarse a lectores de pantalla.
            <em>En corrección: añadir región <code>aria-live="polite"</code>.</em>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">5. Medidas en curso</h2>
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li>Revisión y ajuste de la paleta de colores para cumplir contraste AA.</li>
          <li>Implementación de controles de pausa en carrusel y respeto a <code>prefers-reduced-motion</code>.</li>
          <li>Estilos <code>:focus-visible</code> globales para todos los elementos interactivos.</li>
          <li>Refactor de lightbox y dropdown con patrones ARIA autorizados.</li>
          <li>Auditoría con herramientas automáticas (axe, Lighthouse) y pruebas manuales con NVDA/VoiceOver.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">6. Preparación de la declaración</h2>
        <p>
          Esta declaración fue preparada el <strong>11 de septiembre de 2026</strong>
          por Fresaikiwi Fotografía, basada en autoevaluación técnica frente a WCAG 2.1 AA.
          No ha sido verificada por un tercero certificado.
        </p>

        <h2 className="text-2xl font-semibold mt-6">7. Observaciones y datos de contacto</h2>
        <p>
          Si detecta alguna barrera de acceso no mencionada o tiene sugerencias, puede contactarnos:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <strong>Correo electrónico:</strong>
            <a href="mailto:accesibilidad@fresaikiwifotografia.com">
              accesibilidad@fresaikiwifotografia.com
            </a>
          </li>
          <li>
            <strong>Teléfono:</strong>
            <a href="tel:+34633520862">(+34) 633 52 08 62</a>
          </li>
          <li>
            <strong>Dirección:</strong>
            C/ Constitución nº20, local izquierda, 03570 La Vila Joiosa, Alicante
          </li>
        </ul>

        <p>
          <a href="/aviso-legal" className="underline">
            Consulta también nuestro Aviso Legal
          </a>
        </p>
      </article>
    </main>
  );
}
