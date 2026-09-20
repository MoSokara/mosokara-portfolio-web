"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowUpRight, Mail, Terminal } from "lucide-react";

import { siteConfig } from "@/config/site";

import BrandIcon from "@/components/ui/brand-icon";
import { useActiveSection, type SectionId } from "@/hooks/use-active-section";

import Container from "./container";

import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

export default function Footer() {
  const t = useTranslations("Footer");

  const { activeSection, scrollToSection, scrollToTop } = useActiveSection();

  const navigation: {
    id: SectionId;
    label: string;
  }[] = [
    {
      id: "about",
      label: t("navigation.about"),
    },
    {
      id: "services",
      label: t("navigation.services"),
    },
    {
      id: "skills",
      label: t("navigation.skills"),
    },
    {
      id: "projects",
      label: t("navigation.projects"),
    },
    {
      id: "contact",
      label: t("navigation.contact"),
    },
  ];

  const socialLinks = [
    ...siteConfig.socialLinks.filter((social) => social.href),
    {
      label: t("connect.email"),
      href: "mailto:" + siteConfig.contact.email,
      icon: null,
    },
  ];

  return (
    <footer className="border-t border-border bg-background">
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr] md:gap-12">
            {/* Brand */}
            <div className="max-w-md">
              <Link
                href="/"
                onClick={(event) => {
                  event.preventDefault();
                  scrollToTop();
                }}
                className="mb-4 inline-flex items-center gap-2 rounded-lg px-2 py-1.5 font-mono text-lg font-bold text-primary transition-colors hover:bg-muted"
              >
                <Terminal className="size-5" />
                Sokara
              </Link>

              <p className="text-sm leading-7 text-muted-foreground">
                {t("description")}
              </p>

              <Badge className="mt-4">{t("status")}</Badge>
            </div>

            {/* Navigation */}
            <div>
              <h2 className="mb-4 text-sm font-semibold text-foreground">
                {t("navigation.title")}
              </h2>

              <nav className="flex flex-col items-start gap-1">
                {navigation.map((item) => {
                  const isActive = activeSection === item.id;

                  return (
                    <Link
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(event) => {
                        event.preventDefault();
                        scrollToSection(item.id);
                      }}
                      aria-current={isActive ? "location" : undefined}
                      className={
                        isActive
                          ? "rounded-md bg-primary/10 px-2 py-1.5 text-sm text-primary transition-colors"
                          : "rounded-md px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
                      }
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Connect */}
            <div>
              <h2 className="mb-4 text-sm font-semibold text-foreground">
                {t("connect.title")}
              </h2>

              <div className="flex flex-wrap items-center gap-2">
                {socialLinks.map((social) => {
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target={
                        social.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        social.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      aria-label={social.label}
                      className={buttonVariants({
                        variant: "outline",
                        size: "icon",
                        className: "size-9",
                      })}
                    >
                      {social.icon ? (
                        <BrandIcon
                          icon={social.icon}
                          className="size-4.5 bg-current"
                        />
                      ) : (
                        <Mail className="size-4.5" aria-hidden="true" />
                      )}
                    </a>
                  );
                })}
              </div>

              <Link
                href="#contact"
                onClick={(event) => {
                  event.preventDefault();
                  scrollToSection("contact");
                }}
                className={buttonVariants({
                  className: "mt-4 inline-flex gap-2",
                })}
              >
                {t("connect.cta")}
                <ArrowUpRight />
              </Link>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="flex flex-col gap-3 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {t("copyright")}
            </p>

            <p className="font-mono">{t("builtWith")}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
