import type { Metadata } from "next";
import {
  Montserrat,
  Archivo_Black,
  Playfair_Display,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import Navbar from "@/components/navbar/Navbar";
import { CartProvider } from "@/contexts/CartContext";

// Body copy, paragraphs
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Regular, Medium, SemiBold, Bold
  display: "swap", // Better loading performance
});

// Display / headlines, big posters, buttons (single weight only)
const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  subsets: ["latin"],
  weight: "400", // Archivo Black ships a single, built-in black weight
  display: "swap",
});

// Italic accent words inside headlines
const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: "900",
  style: "italic",
  display: "swap",
});

// Labels, micro-copy, tags, technical readouts
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Donut Webshop",
  description: "Delicious handcrafted donuts delivered fresh to your door",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${archivoBlack.variable} ${playfairDisplay.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <CartProvider>
          <Navbar />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
