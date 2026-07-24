import type { Metadata } from "next";
import localFont from "next/font/local";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const sanchez = localFont({
  src: [
    { path: "./fonts/Sanchez-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/Sanchez-Italic.ttf", weight: "400", style: "italic" },
  ],
  variable: "--font-sanchez",
  display: "swap",
});

const instrument = localFont({
  src: [
    { path: "./fonts/InstrumentSerif-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/InstrumentSerif-Italic.ttf", weight: "400", style: "italic" },
  ],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Congresso Onco GI Legends 2026 · 15/09 a 27/10",
  description:
    "Seis aulas semanais online de oncologia digestiva com as maiores autoridades mundiais e debatedores brasileiros. Via Zoom e YouTube @medicodofigado.",
  openGraph: {
    title: "Congresso Onco GI Legends 2026",
    description:
      "Seis aulas semanais online de oncologia digestiva, de 15 de setembro a 27 de outubro de 2026.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${sanchez.variable} ${instrument.variable}`}>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
