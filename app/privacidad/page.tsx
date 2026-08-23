import Image from "next/image";

export default function Privacidad() {
  return (
    <main className="py-12 px-4 md:px-8 max-w-2xl mx-auto">
      <Image
        src="/images/privacidad.svg"
        alt="Política de privacidad"
        width={200}
        height={200}
        loading="lazy"
        className="mx-auto mb-6"
      />
      <article className="prose lg:prose-xl text-left">
        <h1 className="text-3xl font-bold mb-4">Política de Privacidad</h1>

        <p><strong>Última actualización:</strong> [día] de [mes] de [año]</p>

        <h2 className="text-2xl font-semibold mt-6">1. Responsable del tratamiento</h2>
        <p>
          <strong>Nombre / Razón social:</strong> [Tu empresa]<br />
          <strong>Domicilio:</strong> [Dirección completa]<br />
          <strong>Correo electrónico:</strong> <a href="mailto:info@tudominio.com">info@tudominio.com</a><br />
          <strong>Teléfono:</strong> [Número de contacto]
        </p>

        <h2 className="text-2xl font-semibold mt-6">2. Datos que recopilamos</h2>
        <ul>
          <li>Datos que nos facilitas tú: nombre, apellidos, correo electrónico, número de teléfono, etc.</li>
          <li>Datos de navegación: dirección IP, tipo de navegador, sistema operativo, páginas de referencia, fecha y hora de visita.</li>
          <li>Datos de terceros: información recibida de servicios de análisis (p. ej., Google Analytics) cuando interactúas con nuestros complementos.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">3. Finalidades y base jurídica</h2>
        <table className="w-full mt-4 border border-gray-200 rounded my-4">
          <thead>
            <tr>
              <th className="border border-gray-200 p-2">Finalidad</th>
              <th className="border border-gray-200 p-2">Base jurídica</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-200 p-2">Prestación y mejora de servicios</td>
              <td className="border border-gray-200 p-2">Ejecución del contrato / interés legítimo</td>
            </tr>
            <tr>
              <td className="border border-gray-200 p-2">Envío de newsletters (con consentimiento)</td>
              <td className="border border-gray-200 p-2">Consentimiento del interesado</td>
            </tr>
            <tr>
              <td className="border border-gray-200 p-2">Atención al cliente</td>
              <td className="border border-gray-200 p-2">Ejecución del contrato / interés legítimo</td>
            </tr>
            <tr>
              <td className="border border-gray-200 p-2">Cumplimiento de obligaciones legales</td>
              <td className="border border-gray-200 p-2">Obligación legal</td>
            </tr>
            <tr>
              <td className="border border-gray-200 p-2">Seguridad del sitio</td>
              <td className="border border-gray-200 p-2">Interés legítimo</td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-2xl font-semibold mt-6">4. Destinatarios y transferencias internacionales</h2>
        <p>
          No cedemos datos a terceros salvo obligación legal. Si algún destinatario estuviera fuera del Espacio Económico Europeo, garantizaremos una base jurídica adecuada (cláusulas contractuales tipo, adecuación de la Comisión Europea).
        </p>

        <h2 className="text-2xl font-semibold mt-6">5. Derechos de los interesados</h2>
        <ul>
          <li>
            <strong>Acceso:</strong> confirmarnos si tratamos tus datos y acceso a los mismos.
          </li>
          <li>
            <strong>Rectificación:</strong> corregir datos inexactos o incompletos.
          </li>
          <li>
            <strong>Supresión:</strong> solicitar la eliminación de tus datos cuando ya no sean necesarios.
          </li>
          <li>
            <strong>Limitación:</strong> restringir el tratamiento en casos previstos por la ley.
          </li>
          <li>
            <strong>Oposición:</strong> oponerte al tratamiento para marketing directo u otros legítimos.
          </li>
          <li>
            <strong>Portabilidad:</strong> recibir tus datos en un formato estructurado y transmitirlos a otro responsable.
          </li>
          <li>
            <strong>Retirada del consentimiento:</strong> cuando el tratamiento se base en tu consentimiento, puedes retirarlo sin afectar la licitud del tratamiento previo.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">6. Conservación de los datos</h2>
        <p>
          Mantendremos tus datos mientras sea necesario para la finalidad para la que fueron recogidos o durante los plazos de prescripción legalmente establecidos.
        </p>

        <h2 className="text-2xl font-semibold mt-6">7. Cookies</h2>
        <p>
          Utilizamos cookies propias y de terceros para técnicas, analíticas y personalización. A continuación, mostramos un banner de aceptación/rechazo en la primera visita.
        </p>
        <p>
          <a href="/politica-de-cookies" className="underline">
            Política de cookies
          </a>
        </p>

        <h2 className="text-2xl font-semibold mt-6">8. Menores de edad</h2>
        <p>
          Nuestros servicios no están dirigidos a menores de 14 años. Si recopiláramos datos de un menor sin consentimiento parental, los borraremos rápidamente.
        </p>

        <h2 className="text-2xl font-semibold mt-6">9. Enlaces a sitios de terceros</h2>
        <p>
          Nuestra política de privacidad cubre únicamente este sitio web. Te recomendamos leer las políticas de privacidad de otros sitios al seguir enlaces.
        </p>

        <h2 className="text-2xl font-semibold mt-6">10. Cambios en la política</h2>
        <p>
          Publicaremos cualquier modificación en esta página y, cuando sea necesario, te notificaremos por correo electrónico o dentro del propio sitio. Te sugerimos revisar esta sección periódicamente.
        </p>

        <p><strong>Contacto para consultas:</strong> <a href="mailto:protecciondatos@tudominio.com">protecciondatos@tudominio.com</a> o la dirección indicada en el apartado 1.</p>
      </article>
    </main>
  );
}