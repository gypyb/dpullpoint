"use client";

import { useEffect, useState } from "react";

export function useAllOwnedCards() {
  const [cards, setCards] = useState<{ cardId: string; setId: string }[]>([]);

  useEffect(() => {
    const items: { cardId: string; setId: string }[] = [];

    for (let key of Object.keys(localStorage)) {
      if (key.startsWith("collection-")) {
        const setId = key.replace("collection-", "");
        try {
          const ids: string[] = JSON.parse(localStorage.getItem(key) || "[]");
          ids.forEach((cardId) => items.push({ cardId, setId }));
        } catch {}
      }
    }
    setCards(items);
  }, []);

  return cards;
}
