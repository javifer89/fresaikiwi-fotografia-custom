import Image from "next/image";

export default function AvisoLegal() {
  return (
    <main className="py-12 px-4 md:px-8 max-w-2xl mx-auto">
      <Image
        src="/images/aviso-legal.svg"
        alt="Aviso legal"
        width={200}
        height={200}
        loading="lazy"
        className="mx-auto mb-6"
      />
      <article className="prose lg:prose-xl text-left">
        <h1 className="text-3xl font-bold mb-4">Aviso Legal</h1>

        <p><strong>Última actualización:</strong> [día] de [mes] de [año]</p>

        <h2 className="text-2xl font-semibold mt-6">1. Identidad del prestador</h2>
        <ul>
          <li>
            <strong>Nombre comercial / razón social:</strong> [Tu empresa]
          </li>
          <li>
            <strong>CIF / NIE / NIF:</strong> [Número de identificación fiscal]
          </li>
          <li>
            <strong>Domicilio social:</strong> [Dirección completa]
          </li>
          <li>
            <strong>Correo electrónico:</strong> <a href="mailto:info@tudominio.com">info@tudominio.com</a>
          </li>
          <li>
            <strong>Teléfono:</strong> [Número de contacto]
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">2. Objeto</h2>
        <p>
          El presente aviso legal regula el uso y acceso al sitio web
          <strong>www.tudominio.com</strong>, cuya titularidad pertenece a
          <strong>[Tu empresa]</strong>. El objetivo es ofrecer información sobre
          nuestros servicios, productos y demás contenidos, así como facilitar la
          relación con los usuarios de conformidad con la normativa española.
        </p>

        <h2 className="text-2xl font-semibold mt-6">3. Acceso y uso del sitio</h2>
        <ul>
          <li>El acceso al sitio es gratuito, salvo donde se indique lo contrario.</li>
          <li>
            El usuario se compromete a hacer un uso adecuado de los contenidos y
            servicios, absteniéndose de introducir virus, malware o cualquier
            código dañino.
          </li>
          <li>
            No intentar acceder a áreas restringidas ni manipular el sitio.
          </li>
          <li>
            No recolectar datos de otros usuarios sin consentimiento.
          </li>
          <li>
            Nos reservamos el derecho de denegar o retirar el acceso en cualquier
            caso de incumplimiento.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">4. Propiedad intelectual e industrial</h2>
        <ul>
          <li>
            Todos los contenidos (texto, imágenes, diseño, código, logotipos) son
            propiedad exclusiva de [Tu empresa] o de sus licenciadores y están
            protegidos por la legislación de propiedad intelectual e industrial.
          </li>
          <li>
            Queda prohibida la reproducción, distribución, transformación o
            comunicación pública sin autorización escrita previa.
          </li>
          <li>
            Los signos distintivos son propiedad de sus respectivos titulares.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">5. Enlaces a terceros</h2>
        <p>
          Nuestra web puede contener enlaces a sitios de terceros. No nos hacemos
          responsables de las políticas de privacidad o contenidos de dichos
          sitios. La inclusión de enlaces no implica aprobación o respaldo alguno.
        </p>

        <h2 className="text-2xl font-semibold mt-6">6. Responsabilidad</h2>
        <ul>
          <li>
            Nos esforzamos por que la información sea exacta y actualizada, pero no
            garantizamos su integridad, exactitud o actualidad.
          </li>
          <li>
            No nos hacemos responsables de daños derivados del uso del sitio, de la
            confianza en la información o de interrupciones en el servicio.
          </li>
          <li>
            El usuario utiliza el sitio bajo su propia responsabilidad.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">7. Exención de garantías</h2>
        <p>
          Los servicios y contenidos se proporcionan "tal cual" (as‑is), sin
          garantías de cualquier tipo, incluidas las garantías de comerciabilidad,
          idoneidad para un fin particular, no infracción y otras.
        </p>

        <h2 className="text-2xl font-semibold mt-6">8. Legislación aplicable y jurisdicción</h2>
        <p>
          Las presentes condiciones se rigen por la legislación española. Cualquier
          controversia se someterá a los tribunales de [Ciudad/Provincia], salvo
          disposición legal imperativa en contrario.
        </p>

        <h2 className="text-2xl font-semibold mt-6">9. Modificaciones</h2>
        <p>
          Nos reservamos el derecho de modificar en cualquier momento el presente
          aviso legal. Te sugerimos revisarlo cada vez que accedas al sitio. Las
          modificaciones serán efectivas desde su publicación.
        </p>

        <h2 className="text-2xl font-semibold mt-6">10. Servicios de la Sociedad de la Información (LSSI)</h2>
        <ul>
          <li>
            <strong>Proveedor de servicios de la sociedad de la información:</strong>
            [Tu empresa], con domicilio en [dirección].
          </li>
          <li>
            <strong>Registro:</strong> [Si estuviera inscrito en algún registro
            público, indíquelo aquí, p. ej. Registro Mercantil].
          </li>
          <li>
            <strong>Datos de contacto:</strong> Los canales dispuestos para la
            comunicación con los usuarios son los indicados en el apartado 1.
          </li>
        </ul>

        <p><strong>Contacto para consultas o reclamaciones:</strong> <a href="mailto:info@tudominio.com">info@tudominio.com</a> o la dirección del apartado 1.</p>
      </article>
    </main>
  );
}