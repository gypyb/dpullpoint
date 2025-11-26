import Link from "next/link";

export const metadata = {
  title: "Política de cookies | DpullPoint",
  description:
    "Información sobre el uso de cookies y tecnologías similares en el sitio web DpullPoint.",
};

export default function PoliticaCookiesPage() {
  return (
    <div className="space-y-10 py-4">
      {/* Cabecera */}
      <header className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl sm:text-4xl font-semibold mb-2">
            Política de cookies
          </h1>
          <p className="text-base sm:text-lg text-slate-300/85">
            Cómo y por qué utilizamos cookies y tecnologías similares en
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
          <h2 className="text-2xl font-semibold">1. ¿Qué son las cookies?</h2>
          <p>
            Las cookies son pequeños archivos de texto que se descargan en tu
            dispositivo cuando accedes a determinadas páginas web. Permiten, entre
            otras cosas, que una página web almacene y recupere información sobre
            los hábitos de navegación de un usuario o de su equipo, y que pueda
            reconocerte cuando vuelvas a visitarla.
          </p>
          <p>
            Además de las cookies, también pueden utilizarse tecnologías
            similares, como etiquetas de píxel o almacenamiento local en el
            navegador. En esta política nos referimos a todas ellas como
            &quot;cookies&quot;.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">2. ¿Qué tipos de cookies utiliza DpullPoint?</h2>
          <p>
            El Sitio Web de DpullPoint puede utilizar los siguientes tipos de
            cookies:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Cookies técnicas o necesarias</strong>: son imprescindibles
              para el funcionamiento básico del Sitio Web y para permitir la
              navegación y el uso de sus funciones esenciales (por ejemplo, el
              acceso a áreas seguras o el mantenimiento de la sesión).
            </li>
            <li>
              <strong>Cookies de preferencias</strong>: permiten recordar
              información para que el usuario acceda al servicio con ciertas
              características, como el idioma preferido o ajustes de
              visualización.
            </li>
            <li>
              <strong>Cookies de análisis o métricas</strong>: nos ayudan a
              entender cómo se utiliza el Sitio Web, qué secciones se visitan
              con más frecuencia y cómo interactúan los usuarios, con el fin de
              mejorar los contenidos y la experiencia de navegación. Normalmente
              la información se trata de forma agregada y anónima.
            </li>
          </ul>
          <p>
            En cualquier momento, puedes revisar o modificar tus preferencias de
            cookies a través de las opciones de configuración de tu navegador o
            del panel de consentimiento que se habilite en el Sitio Web (cuando
            corresponda).
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">
            3. Cookies de terceros y herramientas de analítica
          </h2>
          <p>
            Es posible que utilicemos servicios de terceros para recopilar
            estadísticas de uso del Sitio Web (por ejemplo, herramientas de
            analítica web). Estos terceros pueden utilizar sus propias cookies
            para prestar el servicio.
          </p>
          <p>
            Cuando empleemos este tipo de herramientas, procuraremos que los
            datos se traten de manera agregada y con la mínima identificación
            posible, y se adoptarán las salvaguardas necesarias conforme a la
            normativa aplicable en materia de protección de datos.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">
            4. ¿Cómo puedes gestionar o desactivar las cookies?
          </h2>
          <p>
            Puedes permitir, bloquear o eliminar las cookies instaladas en tu
            dispositivo mediante la configuración de las opciones del navegador
            que utilices. Ten en cuenta que, si bloqueas ciertas cookies
            técnicas, es posible que algunos servicios o funcionalidades del
            Sitio Web no estén disponibles o no funcionen correctamente.
          </p>
          <p>
            A continuación, se indican enlaces a la información sobre gestión de
            cookies en los principales navegadores (pueden cambiar con el
            tiempo):
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Navegador Chrome</li>
            <li>Navegador Firefox</li>
            <li>Navegador Safari</li>
            <li>Navegador Edge</li>
          </ul>
          <p>
            También puedes configurar determinadas preferencias de privacidad
            desde tu sistema operativo o utilizar herramientas específicas que
            te permitan gestionar la instalación de cookies.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">
            5. Relación con la Política de privacidad
          </h2>
          <p>
            Las cookies pueden implicar el tratamiento de datos personales, por
            ejemplo, cuando permiten identificar a un usuario o su dispositivo.
            Para obtener información detallada sobre cómo trata DpullPoint los
            datos personales, puedes consultar nuestra{" "}
            <Link
              href="/politica-privacidad"
              className="text-amber-300 hover:text-amber-200"
            >
              Política de privacidad
            </Link>
            .
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">
            6. Actualizaciones de la Política de cookies
          </h2>
          <p>
            DpullPoint podrá modificar la presente Política de cookies cuando
            lo considere necesario, por ejemplo, para adaptarla a cambios
            legislativos, tecnológicos o en los servicios ofrecidos desde el
            Sitio Web.
          </p>
          <p>
            Te recomendamos revisar esta política de forma periódica para estar
            informado sobre cómo y para qué utilizamos las cookies.
          </p>
        </div>
      </section>
    </div>
  );
}
