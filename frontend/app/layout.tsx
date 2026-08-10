import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Lokesh Jawale | Front-End Developer",
  description:
    "Portfolio of Lokesh Jawale - Front-End Developer specializing in React, Next.js, TypeScript and modern web development."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        {children}
      </body>
    </html>
  );
}