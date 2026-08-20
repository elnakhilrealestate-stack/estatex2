import type { Metadata } from "next";
import "./globals.css";
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
    <html lang="en">
      <body className="bg-ink text-paper antialiased relative">
        {children}
        <FloatingActions />
      </body>
    </html>
  );
}
