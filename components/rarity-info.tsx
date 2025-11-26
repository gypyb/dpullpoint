"use client";

import { getRarityChances, RARITY_COLOR, RARITY_ICON } from "@/data/rarities";

export default function RarityInfo({
  rarity,
  setId,
}: {
  rarity: string;
  setId: string;
}) {
  const { perPack, perBox } = getRarityChances(setId, rarity as any);
  const color = RARITY_COLOR[rarity] || "text-gray-300";
  const icon = RARITY_ICON[rarity] || "•";

  if (!perPack) {
    return (
      <p className="text-xs text-gray-400 italic mt-1">Sin datos de probabilidad</p>
    );
  }

  return (
    <div className="text-xs space-y-1 text-gray-200">
      <p className={`${color} font-medium`}>{icon} Prob. por sobre: {(perPack * 100).toFixed(2)}%</p>
      <p className="opacity-80">• Prob. ≥1 por caja: {(perBox * 100).toFixed(1)}%</p>
    </div>
  );
}
