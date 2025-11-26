"use client";

import { FormEvent, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

export default function LoginClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<"login" | "register">("login");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
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
    <div className="max-w-md mx-auto mt-10 bg-slate-900/80 border border-white/10 rounded-2xl p-6 space-y-4">
      <h1 className="text-2xl font-semibold mb-2">
        {mode === "login" ? "Iniciar sesión" : "Crear cuenta"}
      </h1>

      <p className="text-sm text-slate-300/80">
        El login es opcional: puedes usar la web sin cuenta, pero si te
        registras podrás guardar tu progreso en la nube y sincronizarlo entre
        dispositivos.
      </p>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-xs uppercase tracking-wide mb-1 text-slate-400">Email</label>
          <input
            type="email"
            required
            className="w-full p-3 rounded-xl bg-slate-950/80 border border-white/10 text-sm outline-none focus:ring-2 focus:ring-amber-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tucorreo@example.com"
          />
        </div>

        <div>
          <label className="block text-xs uppercase tracking-wide mb-1 text-slate-400">Contraseña</label>
          <input
            type="password"
            required
            className="w-full p-3 rounded-xl bg-slate-950/80 border border-white/10 text-sm outline-none focus:ring-2 focus:ring-amber-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Mínimo 6 caracteres"
          />
        </div>

        {error && (
          <p className="text-sm text-red-400 bg-red-900/30 rounded-lg px-3 py-2">{error}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full mt-2 rounded-xl bg-amber-400 text-slate-900 font-semibold py-2.5 text-sm hover:bg-amber-300 transition disabled:opacity-60"
        >
          {loading ? "Procesando..." : mode === "login" ? "Entrar" : "Crear cuenta"}
        </button>
      </form>

      <div className="text-xs text-slate-400 flex items-center justify-between pt-2 border-t border-white/5">
        <span>
          {mode === "login" ? "¿No tienes cuenta?" : "¿Ya tienes cuenta?"}
        </span>
        <button
          className="text-amber-300 hover:text-amber-200 font-medium"
          onClick={() => setMode((m) => (m === "login" ? "register" : "login"))}
        >
          {mode === "login" ? "Crear cuenta" : "Iniciar sesión"}
        </button>
      </div>

      <div className="text-[11px] text-slate-500">
        <Link href="/" className="text-amber-300 hover:text-amber-200">
          ← Volver al inicio
        </Link>
      </div>
    </div>
  );
}
