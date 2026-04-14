/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ui/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.inriser.com"),
  title: "Inriser | Elevate Your Wealth Strategy",
  description:
    "Inriser is the new-gen platform for precision investment tracking and deep market intelligence. Timely updates on market actions helping you take right decisions at the right time.",
  keywords: [
    "fintech",
    "investment tracking",
    "wealth management",
    "market intelligence",
    "portfolio tracker",
    "TradingView",
    "real-time analytics",
  ],
  authors: [{ name: "Inriser Consulting Private Limited" }],
  openGraph: {
    title: "Inriser | Elevate Your Wealth Strategy",
    description:
      "The new-gen platform for precision investment tracking and deep market intelligence.",
    url: "https://www.inriser.com",
    siteName: "Inriser",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inriser | Elevate Your Wealth Strategy",
    description:
      "The new-gen platform for precision investment tracking and deep market intelligence.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <ThemeProvider defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
