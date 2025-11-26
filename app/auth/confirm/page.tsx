"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function ConfirmEmailPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const token = searchParams.get("token");
  const type = searchParams.get("type"); // "email"
  const email = searchParams.get("email"); // NECESARIO

  const [status, setStatus] = useState<
    "loading" | "success" | "error" | "invalid"
  >("loading");

  useEffect(() => {
    async function verify() {
      // Validaciones previas
      if (!token || !type || !email) {
        setStatus("invalid");
        return;
      }

      // VERIFICATION CORRECTA PARA SUPABASE
      const { error } = await supabase.auth.verifyOtp({
        type: type as "email",
        token,
        email, // <- ESTO ES LO QUE TE FALTABA
      });

      if (error) {
        console.error(error);
        setStatus("error");
        return;
      }

      setStatus("success");

      // Redirección después de validar
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    }

    verify();
  }, [token, type, email, router]);

  if (status === "loading") return <p>Verificando email...</p>;
  if (status === "invalid") return <p>Enlace inválido.</p>;
  if (status === "error") return <p>Error verificando tu email.</p>;

  return <p>Email verificado correctamente. Redirigiendo...</p>;
}
