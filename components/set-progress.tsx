"use client";

import { useCollectionProgress } from "@/lib/useCollectionProgress";

export default function SetProgress({
  setId,
  total,
}: {
  setId: string;
  total: number;
}) {
  const { owned, loading } = useCollectionProgress(setId);
  const percent = total > 0 ? (owned.length / total) * 100 : 0;

  return (
    <div className="w-full my-4">
      <p className="text-sm opacity-70 mb-1">
        {loading ? (
          <>Cargando progreso del set…</>
        ) : (
          <>
            Progreso del set:{" "}
            <b>
              {owned.length}/{total}
            </b>{" "}
            cartas ({percent.toFixed(1)}%)
          </>
        )}
      </p>

      <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden">
        <div
          className="h-3 bg-green-500 transition-all duration-700"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
