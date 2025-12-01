"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/lib/useLang";
import { useAuth } from "./AuthProvider";
import { useRouter } from "next/navigation";

export default function Header() {
  const { lang, change } = useLang();
  const { user, loading, signOut } = useAuth();
  const router = useRouter();

  async function handleLogout() {
    await signOut();
    router.refresh();
  }

  return (
    <header className="w-full border-b border-white/10 bg-slate-900/60 backdrop-blur-xl sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4 gap-6">
        {/* LOGO + TEXTO */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-12 h-12 sm:w-14 sm:h-14">
            <Image
              src="/dpullpoint1.png"
              alt="DpullPoint logo"
              fill
              className="object-contain rounded-lg"
            />
          </div>

          <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-base font-semibold tracking-tight">
              DpullPoint
            </span>
            <span className="text-[11px] text-amber-300/90">
              Pokémon TCG · Japón · Majadahonda
            </span>
          </div>
        </Link>

        {/* NAV LINKS */}
        <nav className="flex items-center gap-5 text-sm sm:text-base">
          <Link
            href="/"
            className="opacity-80 hover:opacity-100 hover:text-amber-300 transition"
          >
            {lang === "es" ? "Inicio" : "Home"}
          </Link>

          <Link
            href="/collections"
            className="opacity-80 hover:opacity-100 hover:text-amber-300 transition"
          >
            {lang === "es" ? "Colecciones" : "Collections"}
          </Link>
        </nav>

        {/* LOGIN / USER */}
        <div className="flex items-center gap-3">
          {!loading && !user && (
            <button
              onClick={() => router.push("/login")}
              className="
                text-xs sm:text-sm
                px-4 py-2
                rounded-xl
                bg-amber-400/90
                text-slate-900
                font-semibold
                shadow-sm
                hover:bg-amber-300
                transition-all
                border border-white/10
              "
            >
              Iniciar sesión
            </button>
          )}

          {!loading && user && (
            <div className="flex items-center gap-2">
              <span className="hidden sm:inline text-xs text-slate-300/80 max-w-[150px] truncate">
                {user.email}
              </span>
              <button
                onClick={handleLogout}
                className="text-xs sm:text-sm px-3 py-1.5 rounded-full bg-slate-800 border border-white/15 hover:bg-slate-700 transition"
              >
                Salir
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
