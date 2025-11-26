import Link from "next/link";

export const metadata = {
  title: "Política de privacidad | DpullPoint",
  description:
    "Política de privacidad de DpullPoint sobre el tratamiento de datos personales y el uso del Sitio Web.",
};

export default function PoliticaPrivacidadPage() {
  return (
    <div className="space-y-10 py-4">
      {/* Cabecera */}
      <header className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl sm:text-4xl font-semibold mb-2">
            Política de privacidad
          </h1>
          <p className="text-base sm:text-lg text-slate-300/85">
            Información sobre cómo tratamos tus datos personales cuando usas
            DpullPoint.
          </p>
        </div>

        <Link
          href="/"
          className="inline-flex items-center rounded-full bg-amber-400 text-slate-900 px-4 py-2 text-sm font-semibold hover:bg-amber-300 transition"
        >
          ← Volver al inicio
        </Link>
      </header>

      {/* Contenido */}
      <section className="space-y-6 text-base sm:text-lg text-slate-300/85">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">1. Responsable del tratamiento</h2>
          <p>
            El responsable del tratamiento de los datos recogidos a través del
            Sitio Web <span className="underline">https://dpullpoint.com</span>{" "}
            es <strong>DpullPoint</strong>.
          </p>
          <p>
            Puedes contactar con DpullPoint en el correo electrónico:{" "}
            <a
              href="mailto:direccion@dpullpoint.com"
              className="text-amber-300 hover:text-amber-200"
            >
              direccion@dpullpoint.com
            </a>
            .
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">
            2. Datos que podemos tratar y procedencia
          </h2>
          <p>
            DpullPoint no solicita datos personales sensibles ni datos
            innecesarios. Podemos tratar las siguientes categorías de datos:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Datos de contacto</strong>: nombre, dirección de correo
              electrónico u otros datos que nos proporcionas al escribirnos por
              email o a través de formularios (cuando estén activos).
            </li>
            <li>
              <strong>Datos de navegación</strong>: dirección IP, identificadores
              de dispositivo, sistema operativo, tipo de navegador, páginas
              visitadas, tiempo de permanencia, etc., obtenidos mediante
              cookies o tecnologías similares (consulta la Política de cookies).
            </li>
          </ul>
          <p>
            Los datos proceden directamente del propio usuario, que los
            introduce al contactar con nosotros o al utilizar el Sitio Web.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">
            3. Finalidades y bases jurídicas del tratamiento
          </h2>
          <p>
            Tratamos tus datos personales con las siguientes finalidades y bases
            de legitimación:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Atender consultas o solicitudes de contacto</strong>: cuando
              nos escribes al correo de contacto o a través de formularios,
              tratamos tus datos para responder a tus preguntas o peticiones.
              Base jurídica: tu consentimiento y/o la aplicación de medidas
              precontractuales.
            </li>
            <li>
              <strong>Mejorar el sitio web y su seguridad</strong>: analizamos
              el uso del Sitio Web de forma agregada para mejorar la
              experiencia de usuario y prevenir usos fraudulentos. Base
              jurídica: interés legítimo de DpullPoint.
            </li>
            <li>
              <strong>Gestionar comunicaciones informativas</strong>: en caso de
              que en el futuro habilitemos suscripciones y aceptes recibir
              comunicaciones, utilizaremos tus datos para enviarte noticias,
              novedades o información relacionada con DpullPoint. Base jurídica:
              tu consentimiento.
            </li>
          </ul>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">4. Conservación de los datos</h2>
          <p>
            Conservaremos tus datos personales únicamente durante el tiempo
            necesario para cumplir con las finalidades para las que fueron
            recabados y, posteriormente, durante los plazos exigidos por la
            normativa aplicable.
          </p>
          <p>
            En particular, los datos de contacto se conservarán mientras
            atendemos tu consulta o mantengamos una relación activa contigo, y
            se eliminarán cuando ya no sean necesarios o solicites su
            supresión.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">
            5. Comunicación de datos a terceros
          </h2>
          <p>
            Con carácter general, DpullPoint no cede tus datos personales a
            terceros, salvo obligación legal o cuando sea necesario para
            prestar un servicio estrictamente relacionado con el funcionamiento
            del Sitio Web (por ejemplo, proveedores de alojamiento web o
            analítica, que actuarán como encargados del tratamiento).
          </p>
          <p>
            En ningún caso se venden datos personales a terceros ni se realizan
            perfiles comerciales complejos.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">6. Transferencias internacionales</h2>
          <p>
            Algunos de nuestros proveedores tecnológicos pueden encontrarse o
            prestar servicios desde fuera del Espacio Económico Europeo. En
            esos casos, exigimos que ofrezcan garantías adecuadas, como
            cláusulas contractuales tipo u otros mecanismos de protección
            reconocidos por la normativa europea.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">
            7. Derechos de las personas usuarias
          </h2>
          <p>
            Puedes ejercer tus derechos de acceso, rectificación, supresión,
            oposición, limitación y portabilidad respecto a tus datos
            personales, en los casos y con el alcance que establece la
            normativa vigente.
          </p>
          <p>
            Para ello, puedes escribirnos a{" "}
            <a
              href="mailto:direccion@dpullpoint.com"
              className="text-amber-300 hover:text-amber-200"
            >
              direccion@dpullpoint.com
            </a>{" "}
            indicando en el asunto &quot;Protección de datos&quot; y adjuntando
            una copia de un documento que acredite tu identidad si fuera
            necesario.
          </p>
          <p>
            Asimismo, tienes derecho a presentar una reclamación ante la
            autoridad de control competente en materia de protección de datos si
            consideras que tus derechos no han sido respetados.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">8. Seguridad de la información</h2>
          <p>
            DpullPoint aplica medidas de seguridad técnicas y organizativas
            razonables para proteger los datos personales y evitar su pérdida,
            mal uso, acceso no autorizado o divulgación.
          </p>
          <p>
            No obstante, ningún sistema es completamente infalible, por lo que
            no podemos garantizar la seguridad absoluta de la información
            transmitida a través de internet. En caso de detectarse alguna
            brecha que afecte a tus datos, se actuaría conforme a la normativa
            aplicable.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">
            9. Uso del gestor de colecciones
          </h2>
          <p>
            Las funcionalidades que permiten marcar cartas o sets están
            pensadas para tu uso personal como coleccionista. En la medida de
            lo posible, se diseñan para minimizar la recogida de datos
            personales, empleando identificadores técnicos o almacenamiento
            local en el navegador cuando sea viable.
          </p>
          <p>
            Te recomendamos no introducir datos personales sensibles en campos
            pensados únicamente para identificar cartas o colecciones.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">
            10. Actualización de la Política de privacidad
          </h2>
          <p>
            DpullPoint podrá actualizar esta Política de privacidad cuando sea
            necesario para adaptarla a cambios legislativos, tecnológicos o en
            el propio funcionamiento del Sitio Web. La versión vigente será
            siempre la que esté publicada en esta misma página.
          </p>
        </div>
      </section>
    </div>
  );
}
