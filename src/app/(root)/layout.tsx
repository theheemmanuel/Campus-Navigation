"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Header from "@/components/Shared/Header";
import Footer from "@/components/Shared/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div suppressHydrationWarning>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
