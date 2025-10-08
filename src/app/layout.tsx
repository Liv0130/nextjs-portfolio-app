import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "@/styles/global.css";
import { Tenor_Sans, Montserrat } from "next/font/google";
import { LeftRail } from "@/components/layout/LeftRail";
import { ScrollToTopButton } from "@/components/fx/ScrollToTopButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://nextjs-portfolio-app-kappa.vercel.app"),
  title: "Olivia — Portfolio",
  description: "Software developer portfolio",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Olivia Witt — Portfolio",
    description: "Creative Software Developer based in Sweden",
    url: "https://nextjs-portfolio-app-kappa.vercel.app/",
    siteName: "Olivia Witt",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Olivia Witt Portfolio Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Olivia Witt — Portfolio",
    description: "Software Developer",
    images: ["/og.png"],
  },
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${tenor.variable} ${montserrat.variable}`}>
      <body>
        <LeftRail />
        <div>{children}</div>
        <ScrollToTopButton />
        <Analytics />
      </body>
    </html>
  );
}
