import Link from "next/link";

export const metadata = {
  title: "Aviso legal | DpullPoint",
  description:
    "Aviso legal y condiciones de uso del sitio web DpullPoint, dedicado al coleccionismo de cartas Pokémon TCG japonés.",
};

export default function AvisoLegalPage() {
  return (
    <div className="space-y-10 py-4">
      {/* Cabecera */}
      <header className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl sm:text-4xl font-semibold mb-2">
            Aviso legal
          </h1>
          <p className="text-base sm:text-lg text-slate-300/85">
            Información general y condiciones de uso del sitio web DpullPoint.
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
          <h2 className="text-2xl font-semibold">1. Datos identificativos</h2>
          <p>
            En cumplimiento con lo dispuesto en la normativa vigente, se
            informa de que el sitio web accesible en{" "}
            <span className="underline">https://dpullpoint.com</span> (en
            adelante, el &quot;Sitio Web&quot;) es titularidad de{" "}
            <strong>DpullPoint</strong>, proyecto orientado al coleccionismo de
            cartas Pokémon TCG japonés y a la venta de producto físico a través
            de una máquina expendedora situada en Majadahonda (Madrid).
          </p>
          <p>
            Correo electrónico de contacto:{" "}
            <a
              href="mailto:direccion@dpullpoint.com"
              className="text-amber-300 hover:text-amber-200"
            >
              direccion@dpullpoint.com
            </a>
          </p>
          <p>
            La actividad principal de DpullPoint consiste en ofrecer
            información sobre colecciones Pokémon TCG japonés, así como la
            localización y contenido aproximado de su máquina expendedora
            física.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">2. Objeto del Sitio Web</h2>
          <p>
            El presente Sitio Web tiene carácter informativo y está dirigido a
            personas interesadas en el coleccionismo de cartas Pokémon TCG
            japonés. A través de la web se facilita:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Información sobre colecciones y sets japoneses.</li>
            <li>
              Herramientas básicas para que el usuario pueda marcar las cartas
              que posee (gestor de colecciones).
            </li>
            <li>
              Información sobre la localización de la máquina expendedora y los
              tipos de productos que pueden encontrarse en ella.
            </li>
          </ul>
          <p>
            La información mostrada en el Sitio Web es orientativa y puede
            variar en función de la disponibilidad de productos y de cambios en
            las colecciones oficiales.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">3. Condiciones de uso</h2>
          <p>
            El acceso y uso del Sitio Web atribuye la condición de usuario e
            implica la aceptación plena de las condiciones recogidas en el
            presente Aviso Legal. Si el usuario no está de acuerdo con
            cualquiera de las condiciones aquí establecidas, deberá abstenerse
            de utilizar el Sitio Web.
          </p>
          <p>El usuario se compromete a:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Hacer un uso diligente, correcto y lícito del Sitio Web y de sus
              contenidos.
            </li>
            <li>
              No utilizar el Sitio Web con fines fraudulentos o ilícitos, ni
              para causar daños a terceros o vulnerar derechos de terceros.
            </li>
            <li>
              No llevar a cabo conductas que puedan dañar, inutilizar,
              sobrecargar o deteriorar el Sitio Web o impedir su normal
              utilización.
            </li>
          </ul>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">4. Propiedad intelectual</h2>
          <p>
            Todos los contenidos del Sitio Web (textos, imágenes originales,
            diseños, logotipos, combinaciones de colores, estructura y diseño)
            son titularidad de DpullPoint o se utilizan con las licencias
            correspondientes, y están protegidos por la normativa de propiedad
            intelectual e industrial.
          </p>
          <p>
            Queda expresamente prohibida la reproducción, distribución,
            comunicación pública, transformación o cualquier otra forma de
            explotación no autorizada de dichos contenidos sin el
            consentimiento previo y por escrito de DpullPoint, salvo en los
            casos en que la ley lo permita.
          </p>
          <p>
            <strong>
              DpullPoint no está afiliado, patrocinado ni respaldado por
              Nintendo, Creatures Inc., Game Freak ni The Pokémon Company.
            </strong>{" "}
            Todas las marcas y nombres comerciales relacionados con Pokémon
            pertenecen a sus respectivos titulares y se utilizan únicamente con
            fines descriptivos e informativos.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">5. Enlaces externos</h2>
          <p>
            El Sitio Web puede incluir enlaces a sitios web de terceros (por
            ejemplo, redes sociales como Instagram). DpullPoint no se
            responsabiliza de los contenidos, servicios o políticas de
            privacidad de dichos sitios, que estarán sujetos a sus propias
            condiciones de uso.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">6. Responsabilidad</h2>
          <p>
            Aunque DpullPoint realiza esfuerzos razonables para que la
            información del Sitio Web sea precisa y esté actualizada, no puede
            garantizar su exactitud, completitud o vigencia en todo momento.
          </p>
          <p>
            En particular, la información sobre disponibilidad de productos,
            precios orientativos o contenido de la máquina expendedora puede
            variar sin previo aviso.
          </p>
          <p>
            DpullPoint no será responsable de los daños y perjuicios que pudieran
            derivarse de:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Fallos técnicos o interrupciones del servicio.</li>
            <li>
              El uso indebido del Sitio Web por parte de los usuarios o de
              terceros.
            </li>
            <li>
              La actuación de terceros que vulneren las medidas de seguridad del
              Sitio Web.
            </li>
          </ul>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">7. Modificación del Aviso Legal</h2>
          <p>
            DpullPoint se reserva el derecho de modificar en cualquier momento el
            contenido de este Aviso Legal para adaptarlo a cambios legislativos
            o a la evolución del propio Sitio Web. Las modificaciones serán
            aplicables desde el momento de su publicación.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">8. Legislación aplicable</h2>
          <p>
            El presente Aviso Legal se rige por la legislación española. Para
            cualquier controversia que pudiera derivarse del acceso o uso del
            Sitio Web, las partes se someten a los juzgados y tribunales que
            resulten legalmente competentes.
          </p>
        </div>
      </section>
    </div>
  );
}
