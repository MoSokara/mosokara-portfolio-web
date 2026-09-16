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
  title: {
    default: "MoSokara - Full Stack Web Developer",
    template: "%s | MoSokara",
  },
  description:
    "Portfolio of Mohamed Sokara, a full stack (MERN Stack) web developer building responsive websites, modern interfaces, web apps, and interactive JavaScript projects.",
  keywords:
    "Mohamed Sokara, MoSokara, mosokara, sokara, Sokara, frontend developer, portfolio, HTML, CSS, JavaScript, Sass, React, responsive web design",
  robots: "index, follow",

  openGraph: {
    type: "website",
    locale: "en_US, ar_EG",
    url: "https://example.com",
    title: "MoSokara | Full Stack Developer Portfolio",
    description:
      "Portfolio of Mohamed Sokara, a full stack (MERN Stack) web developer building responsive websites, modern interfaces, web apps, and interactive JavaScript projects.",
    siteName: "Sokara Portfolio",
    images: [
      {
        url: "imgs/preview/hero_preview.png",
        alt: "Preview of the hero section from Mohamed Sokara's portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@mosokara",
    creator: "@mosokara",
    description:
      "Portfolio of Mohamed Sokara, a full stack (MERN Stack) web developer building responsive websites, modern interfaces, web apps, and interactive JavaScript projects.",
    title: "MoSokara | Full Stack Developer Portfolio",
    images: [
      {
        url: "imgs/preview/hero_preview.png",
        alt: "Preview of the hero section from Mohamed Sokara's portfolio",
      },
    ],
  },
  icons: {
    icon: "imgs/favicon/icon.png",
    apple: "imgs/favicon/apple-icon.png",
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
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
