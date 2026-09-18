import type { Metadata } from "next";
import { Geist, Geist_Mono, Cairo } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/providers/theme.provider";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

// Components
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

// Font Awesome Configuration
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const cairoSans = Cairo({
  variable: "--font-cairo-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mosokara.vercel.app"),
  title: {
    default: "Sokara | Frontend Web Developer",
    template: "%s | Sokara",
  },
  description:
    "Mohamed Sokara's portfolio: frontend-focused web development with React, Next.js, TypeScript, and modern, accessible interfaces.",
  authors: [{ name: "Mohamed Sokara" }],
  creator: "Mohamed Sokara",
  publisher: "Mohamed Sokara",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: "https://mosokara.vercel.app",
    title: "Sokara | Frontend Web Developer",
    description:
      "Portfolio of Mohamed Sokara, a frontend-focused web developer building modern, responsive, and accessible web interfaces.",
    siteName: "Sokara Portfolio",
    images: [
      {
        url: "/imgs/preview/hero_preview.png",
        alt: "Sokara portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@mosokara",
    title: "Sokara | Frontend Web Developer",
    description:
      "Portfolio of Mohamed Sokara, a frontend-focused web developer building modern, responsive, and accessible web interfaces.",
    images: ["/imgs/preview/hero_preview.png"],
  },
  icons: {
    icon: "/imgs/favicon/icon.png",
    apple: "/imgs/favicon/apple-icon.png",
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html
      suppressHydrationWarning
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className={`${geistSans.variable} ${geistMono.variable} ${cairoSans.variable} h-full antialiased`}
    >
      <body
        className={`min-h-full flex flex-col ${locale === "ar" ? "font-ar" : "font-en"}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            <Header />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
