// app/auth/confirm/ConfirmEmailClient.tsx
"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

type Status = "loading" | "success" | "error" | "invalid";

export default function ConfirmEmailClient() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // ✔ Siempre cadenas válidas
  const token = searchParams.get("token") ?? "";
  const type = (searchParams.get("type") ?? "email") as "email";
  const email = searchParams.get("email") ?? "";

  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    async function verify() {

      // ❌ Si algo está vacío → no intentamos verificación
      if (!token || !type || !email) {
        setStatus("invalid");
        return;
      }

      // ✔ Verificación 100% correcta para Supabase
      const { error } = await supabase.auth.verifyOtp({
        type,
        token,
        email,
      });

      if (error) {
        console.error(error);
        setStatus("error");
        return;
      }

      setStatus("success");

      setTimeout(() => {
        router.push("/login");
      }, 2000);
    }

    verify();
  }, [token, type, email, router]);

  if (status === "loading")
    return <p className="text-center mt-10">Verificando email...</p>;

  if (status === "invalid")
    return (
      <p className="text-center mt-10 text-red-400">
        Enlace inválido o incompleto.
      </p>
    );

  if (status === "error")
    return (
      <p className="text-center mt-10 text-red-400">
        Hubo un error verificando tu email. Prueba más tarde.
      </p>
    );

  return (
    <p className="text-center mt-10 text-green-400">
      Email verificado correctamente. Redirigiendo al login...
    </p>
  );
}
