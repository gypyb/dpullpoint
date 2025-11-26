"use client";

import { useEffect, useRef, useState } from "react";

export default function FancySelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  /* === CLIC FUERA → CERRAR === */
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  /* === ESC → cerrar === */
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  const selectedLabel =
    options.find((o) => o.value === value)?.label ?? options[0].label;

  return (
    <div ref={ref} className="relative w-full sm:w-44">
      <label className="text-xs uppercase tracking-wide opacity-60">
        {label}
      </label>

      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="mt-1 w-full px-3 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-left flex justify-between items-center"
      >
        <span className="truncate">{selectedLabel}</span>
        <span className="opacity-60">▼</span>
      </button>

      {open && (
        <div className="absolute left-0 right-0 mt-2 bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-xl z-50 animate-fade-in">

          {options.map((o) => (
            <div
              key={o.value}
              className={`px-4 py-2 cursor-pointer hover:bg-white/10 ${
                value === o.value ? "text-blue-400 font-semibold" : ""
              }`}
              onClick={() => {
                onChange(o.value);
                setOpen(false);
              }}
            >
              {o.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
