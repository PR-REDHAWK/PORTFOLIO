import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#101110",
};

export const metadata: Metadata = {
  title: "PRIYANSHU PANWAR · Software Developer",
  description:
    "Personal portfolio of Priyanshu Panwar — Software Developer based in India. Cinematic developer experience under construction.",
  keywords: ["Priyanshu Panwar", "Software Developer", "Frontend Engineer", "Portfolio"],
  authors: [{ name: "Priyanshu Panwar" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark`}>
      <body className="min-h-screen bg-background text-text-primary antialiased flex flex-col selection:bg-accent-crimson selection:text-white">
        {children}
      </body>
    </html>
  );
}
