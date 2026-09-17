"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

import { Separator } from "@/components/ui/separator";
import { buttonVariants } from "@/components/ui/button";
import LanguageSwitcher from "./language-switcher";
import ThemeSwitcher from "./theme-switcher";
import MobileMenu from "./mobile-menu";
import Container from "./container";

import { ArrowUpRight, Terminal } from "lucide-react";

import { useActiveSection, type SectionId } from "@/hooks/use-active-section";

export default function Header() {
  const t = useTranslations("Header");

  const { activeSection, scrollToSection, scrollToTop } = useActiveSection();

  const navigation: {
    id: SectionId;
    label: string;
  }[] = [
    {
      id: "about",
      label: t("about"),
    },
    {
      id: "services",
      label: t("services"),
    },
    {
      id: "skills",
      label: t("skills"),
    },
    {
      id: "projects",
      label: t("projects"),
    },
    {
      id: "contact",
      label: t("contact"),
    },
  ];

  return (
    <header
      dir="ltr"
      className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md"
    >
      <Container>
        <div className="flex h-16 items-center justify-between px-4">
          {/* Brand */}
          <Link
            href="/"
            onClick={(event) => {
              event.preventDefault();
              scrollToTop();
            }}
            className="flex items-center gap-2 rounded-lg px-3 py-2 font-mono text-xl font-bold text-primary transition-colors hover:bg-muted"
          >
            <Terminal />
            {t("title")}
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-2 text-sm font-medium md:flex">
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
                      ? "rounded-md bg-primary/10 px-2 py-1.5 text-primary transition-colors"
                      : "rounded-md px-2 py-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
                  }
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-3 md:flex">
              <div className="flex items-center gap-2">
                <ThemeSwitcher />
                <LanguageSwitcher />
              </div>

              <Separator orientation="vertical" />

              <Link
                href="#contact"
                onClick={(event) => {
                  event.preventDefault();
                  scrollToSection("contact");
                }}
                className={buttonVariants({
                  variant: "default",
                })}
              >
                {t("cta")}
                <ArrowUpRight />
              </Link>
            </div>

            <div className="block md:hidden">
              <MobileMenu />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
