import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const META_PIXEL_ID = "1536563077640072";

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
        {/* Meta Pixel */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}
(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init','${META_PIXEL_ID}');
fbq('track','PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>

        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
