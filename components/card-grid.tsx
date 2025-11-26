"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import CardModal from "./card-modal";
import { useCollectionProgress } from "@/lib/useCollectionProgress";
import { RARITY_SHORT, RARITY_COLOR, RARITY_ICON } from "@/data/rarities";
import FancySelect from "@/components/ui/fancy-select";
import { Plus, Check } from "lucide-react";

type Card = {
  id: string;
  name: string;
  number: string;
  rarity?: string;
  types?: string[];
  image: string;
  set?: { id: string };
};

export default function CardGrid({ cards }: { cards: Card[] }) {
  const [q, setQ] = useState("");
  const [rarity, setRarity] = useState("");
  const [type, setType] = useState("");
  const [state, setState] = useState<"all" | "yes" | "no">("all");
  const [selected, setSelected] = useState<Card | null>(null);

  const setId = cards[0]?.set?.id ?? "";
  const { owned, toggle } = useCollectionProgress(setId);

  const uniqueRarities = [
    ...new Set(cards.map((c) => c.rarity).filter(Boolean)),
  ] as string[];
  const uniqueTypes = [...new Set(cards.flatMap((c) => c.types ?? []))];

  const filtered = useMemo(() => {
    return cards.filter((c) => {
      const t = q.trim().toLowerCase();
      const byText =
        !t || c.name.toLowerCase().includes(t) || c.number.includes(t);
      const byRarity = !rarity || c.rarity === rarity;
      const byType = !type || (c.types?.includes(type) ?? false);
      const has = owned.includes(c.id);
      const byState =
        state === "all" ||
        (state === "yes" && has) ||
        (state === "no" && !has);
      return byText && byRarity && byType && byState;
    });
  }, [cards, q, rarity, type, state, owned]);

  const hasTypes = uniqueTypes.length > 0;

  return (
    <div className="grid gap-6">
      {/* === FILTROS === */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-4 items-end justify-between">
        {/* BUSCAR */}
        <div className="w-full sm:flex-1">
          <label className="text-xs uppercase tracking-wide opacity-60">
            Buscar
          </label>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Nombre o número…"
            className="mt-1 w-full p-3 rounded-xl bg-slate-900/60 border border-white/10 outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* RAREZA */}
        {uniqueRarities.length > 0 && (
          <FancySelect
            label="Rareza"
            value={rarity}
            onChange={setRarity}
            options={[
              { value: "", label: "Todas las rarezas" },
              ...uniqueRarities.map((r) => ({ value: r, label: r })),
            ]}
          />
        )}

        {/* TIPO */}
        {hasTypes && (
          <FancySelect
            label="Tipo"
            value={type}
            onChange={setType}
            options={[
              { value: "", label: "Todos los tipos" },
              ...uniqueTypes.map((t) => ({ value: t, label: t })),
            ]}
          />
        )}

        {/* ESTADO */}
        <FancySelect
          label="Estado"
          value={state}
          onChange={(v) => setState(v as any)}
          options={[
            { value: "all", label: "Todas" },
            { value: "yes", label: "Tengo" },
            { value: "no", label: "Me faltan" },
          ]}
        />
      </div>

      {/* === GRID DE CARTAS === */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-5">
        {filtered.map((card) => {
          const has = owned.includes(card.id);
          const rarityShort = card.rarity
            ? (RARITY_SHORT as any)[card.rarity]
            : "";
          const rarityColor = card.rarity
            ? (RARITY_COLOR as any)[card.rarity]
            : "";
          const rarityIcon = card.rarity
            ? (RARITY_ICON as any)[card.rarity]
            : "•";

          return (
            <div
              key={card.id}
              className={`group rounded-2xl p-3 border transition cursor-pointer shadow-lg ${
                has
                  ? "border-green-500 bg-green-900/20 shadow-green-500/20"
                  : "border-white/10 bg-slate-900/50 hover:border-blue-400 hover:bg-slate-800/70"
              }`}
              onClick={() => setSelected(card)}
            >
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-lg">
                {card.rarity && (
                  <div
                    className={`absolute left-2 top-2 z-10 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-black/60 border border-white/10 ${rarityColor}`}
                  >
                    {rarityIcon} {rarityShort}
                  </div>
                )}

                <Image
                  src={card.image}
                  alt={card.name}
                  fill
                  sizes="180px"
                  className="object-contain"
                />
              </div>

              <div className="mt-2 text-xs text-center font-medium truncate">
                {card.number} · {card.name}
              </div>

              <button
                className={`mt-2 w-full text-xs py-1.5 rounded-lg font-semibold transition flex items-center justify-center gap-1
                  ${
                    has
                      ? "bg-green-600 hover:bg-green-500 text-white"
                      : "bg-blue-600 hover:bg-blue-500 text-white"
                  }`}
                onClick={(e) => {
                  e.stopPropagation();
                  toggle(card.id);
                }}
              >
                {has ? <Check size={14} /> : <Plus size={14} />}
                {has ? "Tengo" : "Añadir"}
              </button>
            </div>
          );
        })}
      </div>

      {selected && (
        <CardModal card={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}
