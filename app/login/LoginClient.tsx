"use client";

import { FormEvent, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle, AlertCircle } from "lucide-react";

export default function LoginClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<"login" | "register">("login");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [acceptPrivacy, setAcceptPrivacy] = useState(false);
  const [acceptNews, setAcceptNews] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (mode === "register") {
        if (!acceptTerms || !acceptPrivacy) {
          setError("Debes aceptar los términos y la política de privacidad.");
          return;
        }
      }

      if (mode === "login") {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
      } else {
        const { error } = await supabase.auth.signUp({
          email,
          password,
        });
        if (error) throw error;
      }

      router.push(redirect);
    } catch (err: any) {
      setError(err.message || "Ocurrió un error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 bg-slate-900/90 border border-white/10 rounded-2xl p-8 space-y-6 shadow-xl">

      <h1 className="text-2xl font-bold text-white">
        {mode === "login" ? "Iniciar sesión" : "Crear cuenta"}
      </h1>

      <p className="text-sm text-slate-300">
        {mode === "login"
          ? "Accede a tu cuenta para guardar tu progreso."
          : "Crea una cuenta para guardar tu progreso y recibir ventajas exclusivas."}
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Email */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-slate-300">Email</label>
          <input
            type="email"
            required
            className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-sm text-white placeholder-slate-500 focus:ring-2 focus:ring-amber-400 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tucorreo@example.com"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-slate-300">Contraseña</label>
          <input
            type="password"
            required
            className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-sm text-white placeholder-slate-500 focus:ring-2 focus:ring-amber-400 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Mínimo 6 caracteres"
          />
        </div>

        {/* SOLO EN REGISTRO */}
        {mode === "register" && (
          <div className="space-y-2 mt-4">
            <label className="flex items-center gap-2 text-sm text-slate-300">
              <input
                type="checkbox"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                className="accent-amber-400"
              />
              Acepto los{" "}
              <a
                href="/aviso-legal"
                target="_blank"
                className="text-amber-300 underline"
              >
                términos del servicio
              </a>
            </label>

            <label className="flex items-center gap-2 text-sm text-slate-300">
              <input
                type="checkbox"
                checked={acceptPrivacy}
                onChange={(e) => setAcceptPrivacy(e.target.checked)}
                className="accent-amber-400"
              />
              Acepto la{" "}
              <a
                href="/politica-privacidad"
                target="_blank"
                className="text-amber-300 underline"
              >
                política de privacidad
              </a>
            </label>

            <label className="flex items-center gap-2 text-sm text-slate-300">
              <input
                type="checkbox"
                checked={acceptNews}
                onChange={(e) => setAcceptNews(e.target.checked)}
                className="accent-amber-400"
              />
              Deseo recibir noticias y promociones
            </label>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="flex items-center gap-2 bg-red-900/40 text-red-300 px-3 py-2 rounded-lg text-sm">
            <AlertCircle size={16} /> {error}
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-amber-400 hover:bg-amber-300 text-slate-900 font-semibold py-3 rounded-xl transition disabled:opacity-60"
        >
          {loading
            ? "Procesando..."
            : mode === "login"
            ? "Entrar"
            : "Crear cuenta"}
        </button>
      </form>

      <div className="text-center text-sm text-slate-400">
        {mode === "login" ? (
          <>
            ¿No tienes cuenta?{" "}
            <button
              onClick={() => setMode("register")}
              className="text-amber-300 hover:text-amber-200"
            >
              Crear cuenta
            </button>
          </>
        ) : (
          <>
            ¿Ya tienes cuenta?{" "}
            <button
              onClick={() => setMode("login")}
              className="text-amber-300 hover:text-amber-200"
            >
              Iniciar sesión
            </button>
          </>
        )}
      </div>

      <div className="text-center text-xs text-slate-500">
        <Link href="/" className="text-amber-300 hover:text-amber-200">
          ← Volver al inicio
        </Link>
      </div>
    </div>
  );
}
