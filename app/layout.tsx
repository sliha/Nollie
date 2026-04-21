import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ReservationWidget from "@/components/ReservationWidget";

export const metadata: Metadata = {
  metadataBase: new URL("https://nollie.vercel.app"),
  title: "Nollie — Pizzeria & Wine Bar | Lisboa",
  description: "Pizza artesanal napolitana e vinhos naturais no Cais do Sodré, Lisboa. Reservas e menu.",
  keywords: "pizzeria, wine bar, Lisboa, Cais do Sodré, pizza artesanal, vinhos naturais, Nollie",
  openGraph: {
    title: "Nollie — Pizzeria & Wine Bar | Lisboa",
    description: "Pizza artesanal napolitana e vinhos naturais no Cais do Sodré, Lisboa.",
    url: "https://nollie.vercel.app",
    siteName: "Nollie Pizzeria & Wine Bar",
    images: [{ url: "/images/pizza-table.jpg", width: 1200, height: 630, alt: "Nollie" }],
    locale: "pt_PT",
    type: "website",
  },
  icons: { icon: "/images/logo.png", apple: "/images/logo.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt" className="scroll-smooth">
      <body className="bg-nollie-dark text-nollie-cream font-sans antialiased">
        <Navbar />
        {children}
        <ReservationWidget />
      </body>
    </html>
  );
}
