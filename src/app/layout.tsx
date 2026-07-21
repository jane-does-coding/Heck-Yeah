import type { Metadata } from "next";
import { Bangers, Nunito } from "next/font/google";
import CursorDots from "@/components/CursorDots";
import "./globals.css";

const bangers = Bangers({
  variable: "--font-bangers",
  weight: "400",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hack Yeah! — A Hack Club YSWS",
  description:
    "Build an interactive web comic, log your hours, and cash in on real prizes. A Hack Club YSWS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bangers.variable} ${nunito.variable} h-full`}>
      <body className="min-h-full bg-paper text-ink font-body antialiased overflow-x-hidden">
        <CursorDots />
        {children}
      </body>
    </html>
  );
}
