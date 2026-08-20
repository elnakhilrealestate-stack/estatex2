import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

import FloatingActions from "@/components/FloatingActions";

export const metadata: Metadata = {
  title: "EstateX Real Estate Solutions — Buy, Sell, Invest with Confidence",
  description:
    "Specializing in premium residential property sales, resales, and secure investment opportunities in Cairo, Obour City, and New Cairo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="bg-ink text-paper antialiased relative">
        {children}
        <FloatingActions />
      </body>
    </html>
  );
}
