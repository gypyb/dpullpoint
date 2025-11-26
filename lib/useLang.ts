"use client";
import { useEffect, useState } from "react";

export function useLang() {
  const [lang, setLang] = useState("es");

  useEffect(() => {
    const stored = localStorage.getItem("lang");
    if (stored) setLang(stored);
  }, []);

  function change(l: "es" | "en") {
    setLang(l);
    localStorage.setItem("lang", l);
  }

  return { lang, change };
}
