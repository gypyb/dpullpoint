// app/auth/confirm/ConfirmEmailClient.tsx
"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

type Status = "loading" | "success" | "error" | "invalid";

export default function ConfirmEmailClient() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const token = searchParams.get("token");
  const type = searchParams.get("type");   // normalmente "email"
  const email = searchParams.get("email"); // NECESARIO

  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    async function verify() {
      // 🔍 Validaciones previas
      if (!token || !type || !email) {
        setStatus("invalid");
        return;
      }

      // Aquí TypeScript ya sabe que NO son null
      const finalType = (type ?? "email") as "email";

      const { error } = await supabase.auth.verifyOtp({
        type: finalType,
        token,
        email,
      });

      if (error) {
        console.error(error);
        setStatus("error");
        return;
      }

      setStatus("success");

      // ⏱ Redirección después de validar
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    }

    verify();
  }, [token, type, email, router]);

  // UI según estado
  if (status === "loading") {
    return <p className="text-center mt-10">Verificando email...</p>;
  }

  if (status === "invalid") {
    return (
      <p className="text-center mt-10 text-red-400">
        Enlace inválido o incompleto.
      </p>
    );
  }

  if (status === "error") {
    return (
      <p className="text-center mt-10 text-red-400">
        Hubo un error verificando tu email. Prueba de nuevo más tarde.
      </p>
    );
  }

  // success
  return (
    <p className="text-center mt-10 text-green-400">
      Email verificado correctamente. Redirigiendo al login...
    </p>
  );
}
