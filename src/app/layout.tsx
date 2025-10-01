// src/app/layout.tsx
import type { Metadata } from "next";
import "@/styles/global.css";
import { Tenor_Sans, Montserrat } from "next/font/google";

export const metadata: Metadata = {
  title: "Olivia — Portfolio",
  description: "Full-stack developer portfolio",
};

const tenor = Tenor_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-tenor",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${tenor.variable} ${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
