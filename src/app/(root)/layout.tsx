import Footer from "@/components/Shared/Footer";
import Header from "@/components/Shared/Header";

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
