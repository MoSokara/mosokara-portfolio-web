import type { Metadata } from "next";
import { Geist, Geist_Mono, Cairo } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/providers/theme.provider";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { siteConfig } from "@/config/site";

// Components
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    return {};
  }

  const t = await getTranslations({
    locale,
    namespace: "Metadata",
  });

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: t("title"),
      template: `%s | ${siteConfig.name}`,
    },
    description: t("description"),
    authors: [{ name: siteConfig.fullName }],
    creator: siteConfig.fullName,
    publisher: siteConfig.fullName,
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: "website",
      url: siteConfig.url,
      title: t("ogTitle"),
      description: t("ogDescription"),
      siteName: `${siteConfig.name} Portfolio`,
      images: [
        {
          url: "/imgs/preview/hero_preview.png",
          alt: t("imageAlt"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      creator: siteConfig.twitterHandle,
      title: t("ogTitle"),
      description: t("ogDescription"),
      images: ["/imgs/preview/hero_preview.png"],
    },
    icons: {
      icon: "/imgs/favicon/icon.png",
      apple: "/imgs/favicon/apple-icon.png",
    },
  };
}

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
      data-scroll-behavior="smooth"
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
