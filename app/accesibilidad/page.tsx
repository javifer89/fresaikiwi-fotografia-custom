import Image from "next/image";

export default function Accesibilidad() {
  return (
    <main id="main" className="py-12 px-4 md:px-8 max-w-2xl mx-auto">
      <Image
        src="/images/accesibilidad.svg"
        alt="Icono de accesibilidad"
        width={64}
        height={64}
        loading="lazy"
        className="mx-auto mb-6"
      />
      <article className="prose lg:prose-xl text-left">
        <h1 className="text-3xl font-bold mb-6">
          Declaración de Accesibilidad
        </h1>

        <p>
          <strong>Última actualización:</strong> [día] de [mes] de [año]
        </p>

        <h2 className="text-2xl font-semibold mt-6">1. Compromiso de la empresa</h2>
        <p>
          [Tu empresa] se compromete a hacer accesible el contenido de su sitio web
          de conformidad con el <strong>Programa Kit Digital</strong> y la normativa
          <strong>UNE‑EN 301 549:2022</strong>, que desarrolla las directrices WCAG 2.1 AA.
        </p>

        <h2 className="text-2xl font-semibold mt-6">2. Situación de cumplimiento</h2>
        <p>
          El sitio se basa en tecnologías web estándar (<strong>HTML5, CSS, WAI‑ARIA,
          DOM</strong>) y, en general, es <strong>parcialmente conforme</strong>. A continuación
          se detallan los requisitos con los que sí es totalmente conforme.
        </p>

        <ul className="list-disc list-inside mt-4 space-y-2">
          <li>
            <strong>Requisitos genéricos</strong> (percepción, operabilidad, etc.).
          </li>
          <li>
            <strong>Requisitos web</strong> (uso del color, contraste, reajuste del texto,
            navegación coherente, foco visible, etc.).
          </li>
          <li>
            <strong>Requisitos de software y aplicaciones</strong> (compatibilidad con
            lectores de pantalla, navegación por teclado, etc.).
          </li>
          <li>
            <strong>Documentación y servicios de apoyo</strong> (formularios accesibles,
            alternativas al contenido no textual, etc.).
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">3. Contenido no accesible (excepciones)</h2>
        <p>
          Si algún elemento (por ejemplo, un vídeo antiguo o un widget de terceros) no
          cumple totalmente, enumérelos aquí y explique las razones y las alternativas
          que se ofrecen.
        </p>

        <h2 className="text-2xl font-semibold mt-6">4. Preparación de la declaración</h2>
        <p>
          La presente declaración fue preparada el <strong>1 de enero de 2025</strong>
          por [Nombre del responsable o empresa externa]. Se siguieron las pautas WCAG 2.1 AA
          y se contó con la certificación de <em>QDQ MEDIA SAU</em> (o el auditor que
          corresponda).
        </p>

        <h2 className="text-2xl font-semibold mt-6">5. Observaciones y datos de contacto</h2>
        <p>
          Si detecta alguna barrera de acceso o tiene alguna sugerencia, puede
          ponerse en contacto en cualquier momento mediante:
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