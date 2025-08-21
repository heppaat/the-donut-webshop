import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"], // Light, Regular, Medium, SemiBold, Bold
    display: "swap", // Better loading performance
});

export const metadata: Metadata = {
    title: "The Donut Webshop",
    description: "Delicious handcrafted donuts delivered fresh to your door",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
