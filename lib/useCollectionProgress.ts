"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/components/AuthProvider";
import { supabase } from "@/lib/supabaseClient";

export function useCollectionProgress(setId: string) {
  const { user } = useAuth();
  const [owned, setOwned] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  const localKey = `collection-${setId}`;

  // Cargar progreso según si hay usuario logueado o no
  useEffect(() => {
    let cancelled = false;

    async function loadAnon() {
      const stored = localStorage.getItem(localKey);
      if (!cancelled) {
        setOwned(stored ? JSON.parse(stored) : []);
        setLoading(false);
      }
    }

    async function loadFromSupabase() {
      const { data, error } = await supabase
        .from("collection_progress")
        .select("card_id")
        .eq("set_id", setId);

      if (error) {
        console.error("Error cargando progreso desde Supabase:", error);
        if (!cancelled) {
          setOwned([]);
          setLoading(false);
        }
        return;
      }

      const remoteIds = (data || []).map((row: any) => row.card_id as string);

      // opcional: merge con localStorage
      const local = localStorage.getItem(localKey);
      const localIds: string[] = local ? JSON.parse(local) : [];

      const merged = Array.from(new Set([...remoteIds, ...localIds]));

      if (!cancelled) {
        setOwned(merged);
        setLoading(false);
      }

      // subir al servidor las que solo estaban en local
      const toInsert = localIds.filter((id) => !remoteIds.includes(id));
      if (toInsert.length > 0) {
        const rows = toInsert.map((cardId) => ({
          card_id: cardId,
          set_id: setId,
        }));
        const { error: insertError } = await supabase
          .from("collection_progress")
          .insert(rows);
        if (insertError) {
          console.error("Error al sincronizar progreso local:", insertError);
        } else {
          // ya podemos limpiar el localstorage de ese set si quieres
          localStorage.removeItem(localKey);
        }
      }
    }

    setLoading(true);

    if (!setId) {
      setOwned([]);
      setLoading(false);
      return;
    }

    if (!user) {
      // usuario anónimo → solo localStorage
      loadAnon();
    } else {
      // usuario logueado → supabase + merge local
      loadFromSupabase();
    }

    return () => {
      cancelled = true;
    };
  }, [setId, user, localKey]);

  async function toggle(cardId: string) {
    if (!cardId) return;

    setOwned((prev) => {
      const exists = prev.includes(cardId);
      const updated = exists
        ? prev.filter((id) => id !== cardId)
        : [...prev, cardId];

      // Siempre guardamos en local para respuesta rápida
      localStorage.setItem(localKey, JSON.stringify(updated));

      return updated;
    });

    // Si está logueado, también actualizamos Supabase
    if (user) {
      const exists = owned.includes(cardId);
      if (exists) {
        const { error } = await supabase
          .from("collection_progress")
          .delete()
          .eq("set_id", setId)
          .eq("card_id", cardId);
        if (error) console.error("Error eliminando carta:", error);
      } else {
        const { error } = await supabase
          .from("collection_progress")
          .insert({ set_id: setId, card_id: cardId });
        if (error) console.error("Error añadiendo carta:", error);
      }
    }
  }

  return { owned, toggle, loading };
}
