import Navbar from "@/components/common/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-full w-full wrapper mt-20">
      <Navbar />
      {children}
    </main>
  );
}
