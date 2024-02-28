import "./globals.css";
import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/shadcn-ui/toast/toaster";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clueso: Task",
  description:
    "Explore a dynamic tree structure solution for the Clueso frontend task, empowering users to manage hierarchical data effectively.",
  keywords: [
    "Clueso",
    "frontend",
    "task",
    "dynamic",
    "tree structure",
    "hierarchical data",
    "React",
    "Next.js",
    "Zustand",
    "React Hook Form",
    "Tailwind CSS",
    "Framer Motion",
    "authentication",
  ],
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
          className={`flex flex-col h-full w-screen justify-center items-center overflow-hidden ${inter.className}`}
        >
          <main className="h-full w-full mt-[4rem]">
            <Navbar />
            {children}
          </main>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
