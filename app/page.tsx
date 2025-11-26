import Image from "next/image";
import Link from "next/link";
import { Package, CheckCircle2, Sparkles } from "lucide-react";

export default function HomePage() {
  return (
    <div className="space-y-20">
      {/* 1. HERO */}
      <section className="mt-4 rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-900/80 border border-white/10 px-5 py-10 sm:px-8 lg:px-12 lg:py-14">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-[0.25em] text-amber-300/80 uppercase mb-3">
            Pokémon TCG japonés · Majadahonda
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
            Tu punto de encuentro para
            <span className="block text-amber-300">
              coleccionar Pokémon Japón
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300/85 max-w-xl">
            Organiza tus sets japoneses, marca las cartas que tienes y descubre
            qué puedes encontrar en nuestra máquina expendedora en{" "}
            <strong>Gran Plaza 2 (Majadahonda, Madrid)</strong>.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/collections"
              className="inline-flex items-center gap-2 rounded-full bg-amber-400 text-slate-900 px-5 py-3 text-base font-semibold shadow-lg shadow-amber-500/30 hover:bg-amber-300 transition"
            >
              Explorar colecciones
              <span className="text-xl">→</span>
            </Link>

            <a
              href="#como-funciona"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-slate-900/40 px-5 py-3 text-base text-slate-200 hover:border-amber-300/70 hover:text-amber-200 transition"
            >
              Cómo funciona
            </a>
          </div>
        </div>
      </section>

      {/* 2. CÓMO FUNCIONA */}
      <section id="como-funciona" className="space-y-6">
        <h2 className="text-3xl sm:text-4xl font-semibold">Cómo funciona</h2>

        <p className="text-base sm:text-lg text-slate-300/85 max-w-xl">
          Esta web está pensada para acompañarte mientras coleccionas sets
          japoneses. Todo gira en torno a tres ideas muy sencillas:
        </p>

        <div className="grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl bg-slate-900/70 border border-white/10 p-4">
            <Package className="w-10 h-10 mb-2 text-amber-300" />

            <h3 className="text-base font-semibold mb-1">
              Explora colecciones
            </h3>

            <p className="text-sm text-slate-300/80">
              Navega por las expansiones japonesas que trabajamos y consulta el
              listado completo de cartas.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-900/70 border border-white/10 p-4">
            <CheckCircle2 className="w-10 h-10 mb-2 text-amber-300" />

            <h3 className="text-base font-semibold mb-1">Marca tus cartas</h3>

            <p className="text-sm text-slate-300/80">
              Señala cuáles tienes para llevar un control visual de tu progreso
              en cada set.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-900/70 border border-white/10 p-4">
            <Sparkles className="w-10 h-10 mb-2 text-amber-300" />

            <h3 className="text-base font-semibold mb-1">Consulta rarezas</h3>

            <p className="text-sm text-slate-300/80">
              Revisa rarezas, tipos y probabilidad aproximada de conseguir cada
              carta según su categoría.
            </p>
          </div>
        </div>
      </section>

      {/* 3. QUÉ VENDREMOS */}
      <section className="space-y-10">
        <h2 className="text-3xl sm:text-4xl font-semibold">Qué vendemos</h2>

        <div className="space-y-10">

          {/* Sobres */}
          <div className="grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] items-center">
            <div className="flex justify-center">
              <div className="relative w-40 sm:w-52 md:w-60 h-60 sm:h-72 md:h-80">
                <Image
                  src="/home/pack.webp"
                  alt="Sobres japoneses Pokémon"
                  width={400}
                  height={800}
                  className="w-full h-full object-contain rounded-2xl shadow-xl shadow-amber-500/25 bg-slate-900/80 p-3"
                />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Sobres Japoneses</h3>

              <p className="text-base text-slate-300/90 mb-3">
                Sobres directos desde Japón, ideales para disfrutar de la apertura y
                para buscar cartas exclusivas de cada expansión.
              </p>

              <Link
                href="/collections"
                className="inline-flex items-center rounded-full bg-amber-400/90 text-slate-900 text-sm font-semibold px-4 py-2 hover:bg-amber-300 transition"
              >
                Ver colecciones
              </Link>
            </div>
          </div>

          {/* Cajas selladas */}
          <div className="grid gap-6 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-xl font-semibold">Cajas Selladas</h3>

              <p className="text-base text-slate-300/90 mb-3">
                Producto precintado japonés, perfecto tanto para guardar como para
                organizar aperturas más grandes con amigos.
              </p>

              <Link
                href="/collections"
                className="inline-flex items-center rounded-full border border-amber-400/60 bg-slate-900/80 text-amber-200 text-sm font-semibold px-4 py-2 hover:bg-amber-400/10 transition"
              >
                Explorar sets destacados
              </Link>
            </div>

            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative w-40 sm:w-52 md:w-60 h-60 sm:h-72 md:h-80">
                <Image
                  src="/home/box.webp"
                  alt="Caja sellada Pokémon Japón"
                  width={400}
                  height={800}
                  className="w-full h-full object-contain rounded-2xl shadow-xl shadow-amber-500/25 bg-slate-900/80 p-3"
                />
              </div>
            </div>
          </div>

          {/* PSA 10 */}
          <div className="grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] items-center">
            <div className="flex justify-center">
              <div className="relative w-40 sm:w-52 md:w-60 h-60 sm:h-72 md:h-80">
                <Image
                  src="/home/psa10_.webp"
                  alt="Carta Pokémon PSA 10"
                  width={400}
                  height={800}
                  className="w-full h-full object-contain rounded-2xl shadow-xl shadow-amber-500/25 bg-slate-900/90 p-3"
                />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Cartas PSA 10</h3>

              <p className="text-base text-slate-300/90 mb-3">
                Selección de cartas graduadas a la máxima nota, pensadas para
                coleccionistas que buscan piezas muy cuidadas.
              </p>

              <span className="inline-flex items-center rounded-full bg-slate-800/80 text-slate-300 text-sm font-semibold px-4 py-2">
                Próximamente
              </span>
            </div>
          </div>

        </div>
      </section>


      {/* 4. QUIÉNES SOMOS */}
      <section className="grid gap-8 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold mb-3">
            Quiénes somos
          </h2>

          <p className="text-base sm:text-lg text-slate-300/90 mb-3">
            DpullPoint nace de la pasión por el Pokémon TCG japonés. Somos una
            pequeña iniciativa enfocada en acercar producto JP a jugadores y
            coleccionistas de la zona noroeste de Madrid.
          </p>

          <p className="text-base sm:text-lg text-slate-300/80 mb-3">
            Nuestro objetivo es que tengas una forma cómoda de seguir tus sets,
            entender qué cartas te faltan y tomar mejores decisiones a la hora
            de abrir sobres, comprar cajas o cambiar cartas.
          </p>

          <p className="text-base sm:text-lg text-slate-300/75">
            Esta web es el primer paso: un espacio cuidado, minimalista y
            pensado para utilizarse desde el móvil mientras coleccionas.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="relative w-48 h-72 sm:w-56 sm:h-80">
            <Image
              src="/home/avatarh.webp"
              alt="Avatar DpullPoint"
              fill
              className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)]"
            />
          </div>
        </div>
      </section>

      {/* 5. DÓNDE ESTAMOS */}
      <section id="donde-estamos" className="space-y-6">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-3">
          Dónde estamos
        </h2>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] items-center">
          <div className="flex justify-center">
            <div className="relative w-48 h-72 sm:w-56 sm:h-80 rounded-3xl overflow-hidden border border-amber-400/40 bg-slate-950 shadow-2xl shadow-amber-500/25">
              <Image
                src="/home/machine.webp"
                alt="Máquina expendedora DpullPoint en Gran Plaza 2"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <p className="text-base sm:text-lg text-slate-300/90 mb-3">
              Nos encontrarás en el centro comercial{" "}
              <strong>Gran Plaza 2 (Majadahonda, Madrid)</strong>. La máquina
              está situada en la zona de ocio/restauración.
            </p>

            <p className="text-base sm:text-lg text-slate-300/80 mb-3">
              Funciona durante el horario del centro y vamos rotando el
              contenido: sobres recientes, cajas selladas y productos especiales
              según disponibilidad.
            </p>

            <p className="text-base sm:text-lg text-slate-300/80">
              Si pasas por allí, guarda esta web en tus favoritos para ir
              marcando las cartas que consigas.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
