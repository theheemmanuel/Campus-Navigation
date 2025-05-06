import Header from "@/components/Shared/Header";
import Footer from "@/components/Shared/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div suppressHydrationWarning>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
