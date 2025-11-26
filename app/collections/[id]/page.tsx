import fs from "fs";
import path from "path";
import CardGrid from "@/components/card-grid";
import SetProgress from "@/components/set-progress";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Home } from "lucide-react";

export async function generateMetadata({ params }: any) {
  const { id } = await params;

  const setPath = path.join(process.cwd(), "public", "sets", id, "set.json");
  if (!fs.existsSync(setPath)) return {};

  const set = JSON.parse(fs.readFileSync(setPath, "utf-8"));

  return {
    title: `${set.name} — Colección Pokémon TCG Japón`,
    description: `Explora todas las cartas de ${set.name}, una expansión japonesa perteneciente a la serie ${set.series}. Consulta rarezas, imágenes en alta calidad y gestiona tu colección con DpullPoint.`,
    openGraph: {
      title: `${set.name} — Pokémon TCG Japón`,
      description: `Listado completo del set ${set.name}: cartas, rarezas y progreso.`,
    }
  };
}

export default async function SetDetailPage({ params }: any) {
  const { id } = await params;

  const setPath = path.join(process.cwd(), "public", "sets", id, "set.json");
  const cardsPath = path.join(
    process.cwd(),
    "public",
    "sets",
    id,
    "cards.json"
  );

  if (!fs.existsSync(setPath)) {
    return (
      <div className="p-6 text-red-400 text-lg">
        ❌ El set "{id}" no existe.
      </div>
    );
  }

  const set = JSON.parse(fs.readFileSync(setPath, "utf-8"));
  const cards = fs.existsSync(cardsPath)
    ? JSON.parse(fs.readFileSync(cardsPath, "utf-8"))
    : [];

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-10">

      {/* BREADCRUMB */}
      <nav className="flex items-center gap-2 text-xs text-slate-500 mb-2">
        <Link
          href="/"
          className="inline-flex items-center gap-1 hover:text-amber-300 transition"
        >
          <Home size={12} />
          Inicio
        </Link>
        <span>/</span>
        <Link
          href="/collections"
          className="hover:text-amber-300 transition"
        >
          Colecciones
        </Link>
        <span>/</span>
        <span className="text-slate-200">{set.name}</span>
      </nav>

      {/* HERO SET */}
      <section className="rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-900/80 border border-white/10 p-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex-1">
          <h1 className="text-3xl sm:text-4xl font-semibold mb-3">
            {set.name}
          </h1>

          <p className="text-sm sm:text-base text-slate-300/85 max-w-xl leading-relaxed">
            Explora todas las cartas de <strong>{set.name}</strong>, una expansión
            japonesa de la serie <strong>{set.series}</strong>. Consulta imágenes,
            rarezas, probabilidades y lleva el control de tu colección en tiempo real.
          </p>

          {/* Volver */}
          <Link
            href="/collections"
            className="inline-flex items-center gap-2 text-sm text-blue-300 hover:text-blue-400 mt-4 transition"
          >
            <ArrowLeft size={18} />
            Volver a las colecciones
          </Link>
        </div>

        {/* LOGO DEL SET */}
        <div className="relative w-40 h-20 sm:w-48 sm:h-24">
          <Image
            src={`/sets/${id}/logo.webp`}
            alt={`Logo del set ${set.name}`}
            fill
            className="object-contain drop-shadow-[0_10px_20px_rgba(255,200,0,0.25)]"
          />
        </div>
      </section>

      {/* PROGRESO */}
      <SetProgress setId={id} total={cards.length} />

      {/* TEXTO SEO EXTRA */}
      <section>
        <p className="text-sm text-slate-400 leading-relaxed max-w-2xl">
          Este listado incluye imágenes oficiales en alta calidad, rarezas como{" "}
          <strong>Common</strong>, <strong>Uncommon</strong>,{" "}
          <strong>Double Rare</strong>, ex y más. Puedes gestionar tu colección
          marcando las cartas que ya tienes para llevar un control visual mientras
          coleccionas sobres de la expansión japonesa.
        </p>
      </section>

      {/* GRID DE CARTAS */}
      <CardGrid cards={cards} />
    </div>
  );
}
