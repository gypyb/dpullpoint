// app/auth/confirm/page.tsx
import { Suspense } from "react";
import ConfirmEmailClient from "./ConfirmEmailClient";

export default function ConfirmEmailPage() {
  return (
    <Suspense
      fallback={
        <div className="text-center mt-10">Verificando email...</div>
      }
    >
      <ConfirmEmailClient />
    </Suspense>
  );
}
