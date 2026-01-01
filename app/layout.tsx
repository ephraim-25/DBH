import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DarkBot from "@/components/DarkBot";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dark Business Hi-Tech | Intelligence Artificielle & Innovation en RDC",
  description: "Réinventons le quotidien congolais grâce à l'intelligence artificielle. DBH est une entreprise congolaise spécialisée en IA, AgriTech, Énergie, Éducation et Transformation Digitale.",
  keywords: ["Intelligence Artificielle", "Congo", "RDC", "AgriTech", "EdTech", "Digital", "Innovation", "DBH", "Dark Business Hi-Tech"],
  authors: [{ name: "Dark Business Hi-Tech" }],
  creator: "Dark Business Hi-Tech",
  openGraph: {
    type: "website",
    locale: "fr_CD",
    url: "https://darkbusinesshitech.com",
    siteName: "Dark Business Hi-Tech",
    title: "Dark Business Hi-Tech | Intelligence Artificielle & Innovation en RDC",
    description: "Réinventons le quotidien congolais grâce à l'intelligence artificielle.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dark Business Hi-Tech",
    description: "Réinventons le quotidien congolais grâce à l'intelligence artificielle.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${poppins.variable} ${inter.variable} antialiased bg-[#0B0C10] text-white`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <DarkBot />
      </body>
    </html>
  );
}
