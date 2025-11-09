import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";
import Navbar from "@/components/navbar";
import { ReactNode } from "react";
import { NavbarProvider } from "@/contexts/NavbarContext";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Light, Regular, Medium, SemiBold, Bold
  display: "swap", // Better loading performance
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
      <body className={`${montserrat.variable} font-sans antialiased`}>
        <AuthProvider>
          <NavbarProvider>
            <Navbar />
          </NavbarProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
