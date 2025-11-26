// data/rarities.ts
export type RarityName =
  | "Common"
  | "Uncommon"
  | "Rare"
  | "Double Rare"
  | "Art Rare"
  | "Special Art Rare"
  | "Super Rare"
  | "Ultra Rare";

export type PullProfile = {
  packsPerBox: number;
  perPack: Partial<Record<RarityName, number>>;
};

// Estimaciones coherentes para sets SV japoneses.
// Ajusta sv2a si quieres afinar más adelante por set.
export const PROFILES: Record<string, PullProfile> = {
  sv2a: {
    packsPerBox: 20,
    perPack: {
      Common: 0.60,
      Uncommon: 0.25,
      Rare: 0.10,
      "Double Rare": 0.035,
      "Art Rare": 0.012,           // AR
      "Special Art Rare": 0.004,   // SAR
      "Super Rare": 0.006,         // SR
      "Ultra Rare": 0.0008,        // UR (oro)
    },
  },
  default: {
    packsPerBox: 30,
    perPack: {
      Common: 0.55,
      Uncommon: 0.25,
      Rare: 0.12,
      "Double Rare": 0.05,
      "Art Rare": 0.02,
      "Special Art Rare": 0.006,
      "Super Rare": 0.01,
      "Ultra Rare": 0.001,
    },
  },
};

export function getProfileForSet(setId: string): PullProfile {
  return PROFILES[setId] || PROFILES.default;
}

export function getRarityChances(setId: string, rarity: RarityName) {
  const profile = getProfileForSet(setId);
  const p = profile.perPack[rarity] ?? 0;
  const perBox = 1 - Math.pow(1 - p, profile.packsPerBox); // ≥1 en caja
  return { perPack: p, perBox };
}

// UI helpers
export const RARITY_SHORT: Record<RarityName, string> = {
  Common: "C",
  Uncommon: "U",
  Rare: "R",
  "Double Rare": "RR",
  "Art Rare": "AR",
  "Special Art Rare": "SAR",
  "Super Rare": "SR",
  "Ultra Rare": "UR",
};

export const RARITY_COLOR: Record<RarityName | string, string> = {
  Common: "text-green-400",
  Uncommon: "text-blue-400",
  Rare: "text-purple-400",
  "Double Rare": "text-orange-400",
  "Art Rare": "text-yellow-400",
  "Special Art Rare": "text-amber-400",
  "Super Rare": "text-red-400",
  "Ultra Rare": "text-rose-400",
};

export const RARITY_ICON: Record<RarityName | string, string> = {
  Common: "●",
  Uncommon: "◆",
  Rare: "★",
  "Double Rare": "✦",
  "Art Rare": "✧",
  "Special Art Rare": "✪",
  "Super Rare": "⬢",
  "Ultra Rare": "⬣",
};
