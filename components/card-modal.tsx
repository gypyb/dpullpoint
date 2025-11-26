"use client";

import Image from "next/image";
import { useState } from "react";
import { X, Sparkles } from "lucide-react";
import RarityInfo from "./rarity-info";
import { RARITY_COLOR } from "@/data/rarities";

type Card = {
  id: string;
  name: string;
  nameJP?: string;
  number: string;
  rarity?: string;
  types?: string[];
  image: string;
  alt?: { label: string; image: string }[];
  set?: { id: string; name?: string; series?: string };
};

export default function CardModal({
  card,
  onClose,
}: {
  card: Card;
  onClose: () => void;
}) {
  const [mainImage, setMainImage] = useState(card.image);

  const rarityColor =
    card.rarity ? RARITY_COLOR[card.rarity] : "text-slate-200";

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <article
        className="relative bg-slate-900/95 border border-white/10 rounded-2xl p-6 max-w-md w-full shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cerrar */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-slate-800 hover:bg-slate-700 rounded-full w-9 h-9 flex items-center justify-center border border-white/10 transition"
        >
          <X size={18} />
        </button>

        {/* Imagen */}
        <div className="flex flex-col items-center text-center">
          <div className="relative w-64 h-96 mb-4 rounded-xl overflow-hidden border border-white/10 shadow-xl bg-slate-950 p-2">
            <Image
              src={mainImage}
              alt={`Carta Pokémon ${card.name}`}
              fill
              className="object-contain"
            />
          </div>

          {/* Título */}
          <h2 className="text-2xl font-semibold text-slate-100">
            {card.name}
          </h2>

          {card.nameJP && (
            <p className="text-amber-300 font-medium -mt-1 text-sm">
              {card.nameJP}
            </p>
          )}

          <p className="opacity-70 text-xs mt-1">
            Nº {card.number} {card.set?.name ? `· ${card.set.name}` : ""}
          </p>

          {card.set?.series && (
            <p className="text-[11px] text-slate-400 mb-2">
              {card.set.series}
            </p>
          )}

          {/* RAREZA */}
          <div className="mt-4 w-full max-w-[280px] bg-slate-800/60 border border-white/10 rounded-xl p-3">
            <div className={`font-semibold mb-1 ${rarityColor}`}>
              <Sparkles size={14} className="inline-block mr-1" />
              Rareza: {card.rarity}
            </div>

            <RarityInfo rarity={card.rarity!} setId={card.set?.id || ""} />
          </div>

          {/* Alternativas */}
          {card.alt?.length ? (
            <div className="mt-6 w-full">
              <h3 className="text-sm opacity-70 mb-2">
                Versiones alternativas
              </h3>

              <div className="flex gap-3 justify-center flex-wrap">
                {card.alt.map((a, i) => (
                  <button
                    key={i}
                    className="relative w-20 h-28 rounded-lg overflow-hidden border border-white/10 hover:border-amber-300 transition"
                    onClick={() => setMainImage(a.image)}
                  >
                    <Image
                      src={a.image}
                      alt={`Versión alternativa ${a.label}`}
                      fill
                      className="object-contain"
                    />
                    <span className="absolute bottom-0 w-full text-[10px] text-center bg-black/70 text-white py-0.5 truncate">
                      {a.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </article>
    </div>
  );
}
