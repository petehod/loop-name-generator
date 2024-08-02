import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";

const pjs = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Loop/Beat Name Generator",
  description: "A simple tool to generate loop/beat names. Made by dean"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pjs.className} text-dark gradient-bg flex flex-col items-center justify-center min-h-screen`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
