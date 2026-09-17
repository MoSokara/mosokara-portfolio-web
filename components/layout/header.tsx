"use client";

import { useEffect, useState } from "react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

// Components
import { Separator } from "@/components/ui/separator";
import { buttonVariants } from "@/components/ui/button";
import LanguageSwitcher from "./language-switcher";
import ThemeSwitcher from "./theme-switcher";
import MobileMenu from "./mobile-menu";
import Container from "./container";

// Icons
import { ArrowUpRight, Terminal } from "lucide-react";

const sections = [
  "about",
  "services",
  "skills",
  "projects",
  "contact",
] as const;

type SectionId = (typeof sections)[number];

export default function Header() {
  const t = useTranslations("Header");
  const [activeSection, setActiveSection] = useState<SectionId | null>(null);

  useEffect(() => {
    const visibleSections = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.add(entry.target.id);
          } else {
            visibleSections.delete(entry.target.id);
          }
        });

        const currentSection = sections
          .map((id) => document.getElementById(id))
          .filter((section): section is HTMLElement =>
            Boolean(section && visibleSections.has(section.id)),
          )
          .sort(
            (a, b) =>
              Math.abs(a.getBoundingClientRect().top) -
              Math.abs(b.getBoundingClientRect().top),
          )[0];

        setActiveSection(
          currentSection ? (currentSection.id as SectionId) : null,
        );
      },
      {
        root: null,
        rootMargin: "-20% 0px -65% 0px",
        threshold: 0,
      },
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);

      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleSectionClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    sectionId: SectionId,
  ) => {
    event.preventDefault();

    const section = document.getElementById(sectionId);

    if (!section) return;

    setActiveSection(sectionId);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleBrandClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    setActiveSection(null);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    window.history.replaceState(null, "", window.location.pathname);
  };

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
            onClick={handleBrandClick}
            className="flex items-center gap-2 rounded-lg px-3 py-2 font-mono text-xl font-bold text-primary transition-colors hover:bg-muted"
          >
            <Terminal />
            {t("title")}
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-2 text-sm font-medium md:flex">
            <Link
              href="#about"
              onClick={(event) => handleSectionClick(event, "about")}
              aria-current={activeSection === "about" ? "location" : undefined}
              className={
                activeSection === "about"
                  ? "rounded-md bg-primary/10 px-2 py-1.5 text-primary transition-colors"
                  : "rounded-md px-2 py-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
              }
            >
              {t("about")}
            </Link>

            <Link
              href="#services"
              onClick={(event) => handleSectionClick(event, "services")}
              aria-current={
                activeSection === "services" ? "location" : undefined
              }
              className={
                activeSection === "services"
                  ? "rounded-md bg-primary/10 px-2 py-1.5 text-primary transition-colors"
                  : "rounded-md px-2 py-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
              }
            >
              {t("services")}
            </Link>

            <Link
              href="#skills"
              onClick={(event) => handleSectionClick(event, "skills")}
              aria-current={activeSection === "skills" ? "location" : undefined}
              className={
                activeSection === "skills"
                  ? "rounded-md bg-primary/10 px-2 py-1.5 text-primary transition-colors"
                  : "rounded-md px-2 py-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
              }
            >
              {t("skills")}
            </Link>

            <Link
              href="#projects"
              onClick={(event) => handleSectionClick(event, "projects")}
              aria-current={
                activeSection === "projects" ? "location" : undefined
              }
              className={
                activeSection === "projects"
                  ? "rounded-md bg-primary/10 px-2 py-1.5 text-primary transition-colors"
                  : "rounded-md px-2 py-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
              }
            >
              {t("projects")}
            </Link>

            <Link
              href="#contact"
              onClick={(event) => handleSectionClick(event, "contact")}
              aria-current={
                activeSection === "contact" ? "location" : undefined
              }
              className={
                activeSection === "contact"
                  ? "rounded-md bg-primary/10 px-2 py-1.5 text-primary transition-colors"
                  : "rounded-md px-2 py-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
              }
            >
              {t("contact")}
            </Link>
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
                onClick={(event) => handleSectionClick(event, "contact")}
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
