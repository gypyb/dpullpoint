import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/footer";
import type { Metadata, Viewport } from "next";
import ClientProviders from "@/components/ClientProviders";

export const metadata: Metadata = {
  metadataBase: new URL("https://dpullpoint.com"),
  title: {
    default: "DpullPoint | Pokémon TCG Japonés",
    template: "%s | DpullPoint",
  },
  description:
    "Colecciones Pokémon japonesas, máquina expendedora en Majadahonda y gestor de sets para coleccionistas. Explora cartas, rarezas y colecciones oficiales japonesas.",
  keywords: [
    "pokemon japón",
    "pokemon japonés",
    "pokemon tcg japón",
    "cartas pokemon japón",
    "colecciones pokemon japonesas",
    "tcg japón",
    "pokemon majadahonda",
    "sets pokemon japonés",
    "scarlet & violet",
    "mega series pokemon",
  ],
  authors: [{ name: "DpullPoint" }],
  creator: "DpullPoint",
  publisher: "DpullPoint",
  alternates: {
    canonical: "https://dpullpoint.com",
  },
  openGraph: {
    title: "DpullPoint | Pokémon TCG Japonés",
    description:
      "Colecciones Pokémon japonesas, gestor de sets, rarezas y cartas oficiales. Máquina expendedora en Majadahonda con sobres y productos.",
    url: "https://dpullpoint.com",
    siteName: "DpullPoint",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/dpullpoint1.png",
        width: 1200,
        height: 630,
        alt: "DpullPoint Pokémon TCG Japón",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DpullPoint | Pokémon TCG Japonés",
    description:
      "Explora colecciones japonesas, rarezas oficiales, cartas y sets de Pokémon TCG. Majadahonda · Japón.",
    images: ["/dpullpoint1.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "games",
  themeColor: "#0f172a", // slate-950
};

export const viewport: Viewport = {
  themeColor: "black",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-slate-950 text-slate-100 antialiased">
        <ClientProviders>
          {/* HEADER */}
          <Header />

          {/* MAIN CONTENT */}
          <main className="max-w-6xl mx-auto p-4">{children}</main>

          {/* FOOTER */}
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}
