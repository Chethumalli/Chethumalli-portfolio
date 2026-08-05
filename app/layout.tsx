import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chethan C Malli | AI & Full Stack Developer",

  description:
    "Portfolio of Chethan C Malli - AI Engineer, Full Stack Developer and ML Enthusiast.",

  keywords: [
    "Chethan Malli",
    "Portfolio",
    "AI Engineer",
    "Machine Learning",
    "Next.js",
    "React",
    "Full Stack Developer",
  ],

  authors: [
    {
      name: "Chethan C Malli",
    },
  ],

  openGraph: {
    title: "Chethan C Malli | AI & Full Stack Developer",
    description:
      "Portfolio of Chethan C Malli - AI Engineer, Full Stack Developer and ML Enthusiast.",

    images: ["/profile.png"],

    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black`}
      >
        {children}
      </body>
    </html>
  );
}