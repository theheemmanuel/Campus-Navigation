import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL as string),
  title: {
    default: "Redeemer's University Tour",
    template: "%s | Campus Navigation App",
  },
  description:
    "An interactive campus navigation app for Redeemer's University, helping visitors and students easily find their way around campus with maps, location scanning, and virtual video tours.",
  applicationName: "Campus Navigation App",
  // keywords: seoKeywords,
  openGraph: {
    url: process.env.NEXT_PUBLIC_BASE_URL,
    type: "website",
    siteName: "Campus Navigation App",
    locale: "en-US",
    title: "Campus Navigation",
    description:
      "An interactive campus navigation app for Redeemer's University, helping visitors and students easily find their way around campus with maps, location scanning, and virtual video tours.",
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
      <link rel="icon" href="/run.png" sizes="any" />
      <body className={`antialiased font-roboto`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
