"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    content: "",
  });

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Error al enviar");

      setStatus("ok");
      setMessage(
        "Mensaje enviado correctamente. ¡Gracias por contarnos lo que te gustaría ver!"
      );
      setForm({ name: "", email: "", content: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
      setMessage(
        "Ha habido un problema al enviar el mensaje. Inténtalo de nuevo en unos minutos."
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 text-xs">
      <div className="grid sm:grid-cols-2 gap-3">
        <div>
          <label className="block mb-1 opacity-80">Nombre</label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            required
            className="w-full rounded-lg bg-slate-900 border border-white/15 px-3 py-2 outline-none focus:ring-1 focus:ring-amber-400"
          />
        </div>
        <div>
          <label className="block mb-1 opacity-80">Email</label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            required
            className="w-full rounded-lg bg-slate-900 border border-white/15 px-3 py-2 outline-none focus:ring-1 focus:ring-amber-400"
          />
        </div>
      </div>

      <div>
        <label className="block mb-1 opacity-80">
          ¿Qué te gustaría ver en la tienda o en la máquina?
        </label>
        <textarea
          value={form.content}
          onChange={(e) => setForm((f) => ({ ...f, content: e.target.value }))}
          required
          rows={4}
          className="w-full rounded-lg bg-slate-900 border border-white/15 px-3 py-2 outline-none focus:ring-1 focus:ring-amber-400 resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center rounded-full bg-amber-400/90 text-slate-900 font-semibold px-4 py-2 hover:bg-amber-300 transition disabled:opacity-60"
      >
        {status === "loading" ? "Enviando..." : "Enviar mensaje"}
      </button>

      {message && (
        <p
          className={`mt-1 ${
            status === "ok" ? "text-emerald-400" : "text-red-400"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
