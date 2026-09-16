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
      className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md"
    >
      <Container>
        <div className="flex h-16 items-center justify-between px-4">
          {/* Brand */}
          <Link
            href="/"
            className="flex items-center gap-2 rounded-lg px-3 py-2 font-mono text-xl font-bold text-primary transition-colors hover:bg-muted"
          >
            <Terminal />
            {t("title")}
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            <Link href="#about" className="transition-colors hover:text-primary">
              {t("about")}
            </Link>
            <Link
              href="#services"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              {t("services")}
            </Link>
            <Link
              href="#skills"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              {t("skills")}
            </Link>
            <Link
              href="#projects"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              {t("projects")}
            </Link>
            <Link
              href="#contact"
              className="text-muted-foreground transition-colors hover:text-primary"
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
                className={buttonVariants({ variant: "default" })}
              >
                {t("hireMe")}
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
