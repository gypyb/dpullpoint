"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer
      id="contacto"
      className="mt-10 border-t border-white/10 bg-slate-950/95 text-slate-200"
    >
      <div className="max-w-6xl mx-auto px-4 py-6 space-y-6">

        {/* Top */}
        <div className="flex flex-col sm:flex-row gap-6 sm:items-start sm:justify-between">

          {/* Brand */}
          <div className="space-y-1">
            <h3 className="text-base font-semibold">DpullPoint</h3>

            <p className="text-xs text-slate-400">
              Pokémon TCG japonés en Majadahonda · Máquina expendedora en Gran Plaza 2.
            </p>

            <p className="text-xs text-slate-400">
              Instagram:{" "}
              <a
                href="https://instagram.com/dpullpoint"
                target="_blank"
                className="text-amber-300 hover:text-amber-200"
              >
                @dpullpoint
              </a>
            </p>

            <p className="text-xs text-slate-400">
              Email:{" "}
              <a
                href="mailto:direccion@dpullpoint.com"
                className="text-amber-300 hover:text-amber-200"
              >
                direccion@dpullpoint.com
              </a>
            </p>
          </div>

          {/* Legal */}
          <div className="text-xs space-y-1">
            <h4 className="font-semibold mb-1">Legal</h4>

            <Link
              href="/aviso-legal"
              className="block opacity-80 hover:opacity-100 hover:text-amber-300 transition"
            >
              Aviso legal
            </Link>

            <Link
              href="/politica-privacidad"
              className="block opacity-80 hover:opacity-100 hover:text-amber-300 transition"
            >
              Política de privacidad
            </Link>

            <Link
              href="/politica-cookies"
              className="block opacity-80 hover:opacity-100 hover:text-amber-300 transition"
            >
              Política de cookies
            </Link>
          </div>

        </div>

        {/* Bottom */}
        <div className="text-[11px] text-slate-500 flex flex-col sm:flex-row gap-1 sm:items-center sm:justify-between pt-2 border-t border-white/5">
          <span>
            © {new Date().getFullYear()} DpullPoint. Todos los derechos reservados.
          </span>

          <span>
            Sitio orientado a coleccionismo. No afiliado a Nintendo, Creatures Inc. o Game Freak.
          </span>
        </div>

      </div>
    </footer>
  );
}
