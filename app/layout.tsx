import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout-files/Navbar"
import Footer from "@/components/layout-files/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RingCloud",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="min-h-screen">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
