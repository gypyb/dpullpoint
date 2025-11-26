"use client";

import { useState, FormEvent } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

export default function LoginClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/";

  const [mode, setMode] = useState<"login" | "register">("login");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Checkboxes
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [acceptPrivacy, setAcceptPrivacy] = useState(false);
  const [acceptPromo, setAcceptPromo] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);

    if (mode === "register" && (!acceptTerms || !acceptPrivacy)) {
      setError("Debes aceptar los términos y la política de privacidad.");
      return;
    }

    setLoading(true);

    try {
      if (mode === "login") {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) throw error;

        router.push(redirect);
      } else {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              promo_optin: acceptPromo,
            },
          },
        });

        if (error) throw error;

        router.push("/auth/confirm-sent");
      }
    } catch (err: any) {
      setError(err.message || "Ocurrió un error");
    }

    setLoading(false);
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-slate-900/90 border border-white/10 shadow-xl rounded-2xl p-8 space-y-6">

        {/* TITLE */}
        <h1 className="text-3xl font-bold text-white">
          {mode === "login" ? "Iniciar sesión" : "Crear cuenta"}
        </h1>

        <p className="text-slate-400 text-sm leading-relaxed">
          {mode === "login"
            ? "Accede a tu cuenta para continuar con tu progreso."
            : "Crea una cuenta para guardar tu progreso y recibir ventajas exclusivas."}
        </p>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* EMAIL */}
          <div className="relative">
            <input
              type="email"
              required
              className="peer w-full p-4 bg-slate-950/70 border border-white/10 rounded-xl text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-amber-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <label className="absolute left-4 top-4 text-slate-400 text-sm transition-all
              peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm
              peer-focus:-top-2 peer-focus:text-xs peer-focus:text-amber-300">
              Email
            </label>
          </div>

          {/* PASSWORD */}
          <div className="relative">
            <input
              type="password"
              required
              className="peer w-full p-4 bg-slate-950/70 border border-white/10 rounded-xl text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-amber-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Contraseña"
            />
            <label className="absolute left-4 top-4 text-slate-400 text-sm transition-all
              peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm
              peer-focus:-top-2 peer-focus:text-xs peer-focus:text-amber-300">
              Contraseña
            </label>
          </div>

          {/* CHECKBOXES SOLO EN REGISTRO */}
          {mode === "register" && (
            <div className="space-y-3 text-slate-300 text-sm">

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  className="w-4 h-4 rounded bg-slate-800 border-white/20"
                />
                <span>
                  Acepto los{" "}
                  <Link href="/aviso-legal" className="text-amber-300 hover:underline">
                    términos del servicio
                  </Link>
                </span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={acceptPrivacy}
                  onChange={(e) => setAcceptPrivacy(e.target.checked)}
                  className="w-4 h-4 rounded bg-slate-800 border-white/20"
                />
                <span>
                  Acepto la{" "}
                  <Link href="/politica-privacidad" className="text-amber-300 hover:underline">
                    política de privacidad
                  </Link>
                </span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={acceptPromo}
                  onChange={(e) => setAcceptPromo(e.target.checked)}
                  className="w-4 h-4 rounded bg-slate-800 border-white/20"
                />
                <span>
                  Deseo recibir noticias y promociones
                </span>
              </label>

            </div>
          )}

          {/* ERROR */}
          {error && (
            <p className="text-red-400 text-sm bg-red-900/30 border border-red-600/20 p-3 rounded-lg">
              {error}
            </p>
          )}

          {/* SUBMIT */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-amber-400 hover:bg-amber-300 disabled:opacity-50 rounded-xl font-semibold text-slate-900 transition"
          >
            {loading
              ? "Procesando..."
              : mode === "login" ? "Entrar" : "Crear cuenta"}
          </button>

        </form>

        {/* FOOTER TOGGLE */}
        <div className="text-center text-slate-400 text-sm">
          {mode === "login" ? (
            <>
              ¿No tienes cuenta?{" "}
              <button
                onClick={() => setMode("register")}
                className="text-amber-300 hover:underline"
              >
                Crear una
              </button>
            </>
          ) : (
            <>
              ¿Ya tienes cuenta?{" "}
              <button
                onClick={() => setMode("login")}
                className="text-amber-300 hover:underline"
              >
                Iniciar sesión
              </button>
            </>
          )}
        </div>

        {/* BACK */}
        <div className="text-center">
          <Link href="/" className="text-amber-300 text-xs hover:underline">
            ← Volver al inicio
          </Link>
        </div>

      </div>
    </div>
  );
}
