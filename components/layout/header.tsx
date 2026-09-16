// Utils
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

// Components
import { Separator } from "@/components/ui/separator";
import { buttonVariants } from "@/components/ui/button";
import LanguageSwitcher from "./language-switcher";
import ThemeSwitcher from "./theme-switcher";
import MobileMenu from "./mobile-menu";
import Container from "./container";
import { Terminal } from "lucide-react";

export default function Header() {
  const t = useTranslations("Navbar");

  return (
    <header
      dir="ltr"
      className="sticky top-0 z-50 w-full border-b border-border bg-header/80 backdrop-blur-md transition-colors duration-500 dark:bg-header/80"
    >
      <Container>
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          {/* App Name */}
          <Link
            href="/"
            className="flex items-center gap-2 font-bold font-mono text-xl text-primary transition hover:bg-muted px-3 py-2 rounded-lg"
          >
            <Terminal /> {t("title")}
          </Link>

          {/* Desktop Navigations */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link
              href="#about"
              className="transition-colors hover:text-primary"
            >
              {t("about")}
            </Link>
            <Link
              href="#services"
              className="transition-colors hover:text-primary text-muted-foreground"
            >
              {t("services")}
            </Link>
            <Link
              href="#skills"
              className="transition-colors hover:text-primary text-muted-foreground"
            >
              {t("skills")}
            </Link>
            <Link
              href="#projects"
              className="transition-colors hover:text-primary text-muted-foreground"
            >
              {t("projects")}
            </Link>
            <Link
              href="#contact"
              className="transition-colors hover:text-primary text-muted-foreground"
            >
              {t("contact")}
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-3">
              <div className="flex items-center gap-2">
                <ThemeSwitcher />
                <LanguageSwitcher />
              </div>
              <Separator orientation="vertical" />
              <Link
                href="#contact"
                className={buttonVariants({
                  variant: "default",
                })}
              >
                Hire Me
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
