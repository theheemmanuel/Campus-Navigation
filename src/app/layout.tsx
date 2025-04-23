import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL as string),
  title: {
    default: "Redeemer's University Tour",
    template: "%s | Campus Navigation App",
  },
  description: "",
  applicationName: "Campus Navigation App",
  // keywords: seoKeywords,
  openGraph: {
    url: process.env.NEXT_PUBLIC_BASE_URL,
    type: "website",
    siteName: "Campus Navigation App",
    locale: "en-US",
    title: "Campus Navigation",
    description: "",
    images: [
      new URL("/gate.jpg", process.env.NEXT_PUBLIC_BASE_URL as string).href,
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* <link rel="icon" href="/run.png" sizes="any" /> */}
      <body className={`antialiased font-roboto`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          {/* <Analytics /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
