"use client";

import { useState, useMemo } from "react";
import { sets } from "@/data/sets";
import Link from "next/link";
import Image from "next/image";
import { Home, Search } from "lucide-react";
import FancySelect from "@/components/ui/fancy-select";

export default function CollectionsPage() {
  const [search, setSearch] = useState("");
  const [series, setSeries] = useState("");
  const [sort, setSort] = useState("name");

  const allSeries = Array.from(new Set(sets.map((s) => s.series)));

  const filtered = useMemo(() => {
    return sets
      .filter((s) => {
        const matchName = s.name.toLowerCase().includes(search.toLowerCase());
        const matchSerie = !series || s.series === series;
        return matchName && matchSerie;
      })
      .sort((a, b) => {
        if (sort === "name") return a.name.localeCompare(b.name);
        if (sort === "series") return a.series.localeCompare(b.series);
        return 0;
      });
  }, [search, series, sort]);

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-10">

      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-slate-500 mt-2">
        <Link href="/" className="inline-flex items-center gap-1 hover:text-amber-300 transition">
          <Home size={12} />
          Inicio
        </Link>
        <span>/</span>
        <span className="text-slate-300">Colecciones</span>
      </nav>

      {/* HERO */}
      <section className="rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-900/80 border border-white/10 px-6 py-10 sm:px-10">
        <h1 className="text-3xl sm:text-4xl font-semibold mb-3">
          Colecciones Pokémon TCG Japón
        </h1>
        <p className="text-base text-slate-300/85 max-w-2xl leading-relaxed">
          Accede a todas las expansiones japonesas con sus logos oficiales,
          series, y listado completo de cartas. Filtra por serie o busca por
          nombre para encontrar rápidamente el set que te interesa.
        </p>
      </section>

      {/* FILTROS */}
      <section className="space-y-4">

        {/* Buscador */}
        <div className="w-full">
          <label className="flex items-center gap-2 text-[11px] uppercase tracking-wide text-slate-400">
            <Search size={14} /> Buscar colección
          </label>

          <input
            type="text"
            placeholder="Nombre o palabra clave…"
            className="mt-1 w-full p-3 rounded-xl bg-slate-900/60 border border-white/10 outline-none text-sm text-slate-200 focus:ring-2 focus:ring-amber-400"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Selects (FancySelect como en cartas) */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 items-end justify-between">

          <FancySelect
            label="Serie"
            value={series}
            onChange={setSeries}
            options={[
              { value: "", label: "Todas las series" },
              ...allSeries.map((serie) => ({
                value: serie,
                label: serie,
              })),
            ]}
          />

          <FancySelect
            label="Ordenar"
            value={sort}
            onChange={setSort}
            options={[
              { value: "name", label: "Nombre (A-Z)" },
              { value: "series", label: "Serie" },
            ]}
          />
        </div>

        <p className="text-xs text-slate-400">
          Mostrando <b>{filtered.length}</b> de {sets.length} colecciones disponibles.
        </p>
      </section>

      {/* GRID */}
      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {filtered.map((set) => (
          <Link
            key={set.id}
            href={`/collections/${set.id}`}
            className="
              rounded-2xl bg-slate-900/70 border border-white/10 p-4
              hover:bg-slate-800/70 hover:border-amber-400/60
              transition shadow-lg shadow-amber-500/10
            "
          >
            <div className="w-full aspect-[2/1] relative mb-4">
              <Image
                src={set.logo}
                alt={`Logo oficial de la colección japonesa ${set.name}`}
                fill
                className="object-contain"
              />
            </div>

            <div className="text-center">
              <div className="font-medium text-sm">{set.name}</div>
              <div className="text-[11px] text-slate-400">{set.series}</div>
            </div>
          </Link>
        ))}
      </section>

    </div>
  );
}
