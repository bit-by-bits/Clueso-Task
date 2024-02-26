import "./globals.css";
import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clueso: Frontend Task",
  description: "Clueso Frontend Task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`flex flex-col h-screen w-screen justify-center items-center ${inter.className}`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
