import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowUpRight, Terminal } from "lucide-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";
import Container from "./container";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "../ui/badge";

export default function Footer() {
  const t = useTranslations("Footer");

  const navigation = [
    { label: t("navigation.about"), href: "#about" },
    { label: t("navigation.services"), href: "#services" },
    { label: t("navigation.skills"), href: "#skills" },
    { label: t("navigation.projects"), href: "#projects" },
    { label: t("navigation.contact"), href: "#contact" },
  ];

  const socialLinks = [
    {
      label: "GitHub",
      href: "https://github.com/MoSokara",
      icon: faGithub,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mosokara",
      icon: faLinkedin,
    },
    {
      label: "Email",
      href: "mailto:mosokara2007@gmail.com",
      icon: faSquareEnvelope,
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
                className="mb-4 inline-flex items-center gap-2 rounded-lg px-2 py-1.5 font-mono text-lg font-bold text-primary transition-colors hover:bg-muted"
              >
                <Terminal className="size-5" />
                Sokara
              </Link>

              <p className="text-sm leading-7 text-muted-foreground">
                {t("description")}
              </p>

              <Badge>{t("status")}</Badge>
            </div>

            {/* Navigation */}
            <div>
              <h2 className="mb-4 text-sm font-semibold text-foreground">
                {t("navigation.title")}
              </h2>

              <nav className="flex flex-col items-start gap-2">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-md px-1 py-1 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Connect */}
            <div>
              <h2 className="mb-4 text-sm font-semibold text-foreground">
                {t("connect.title")}
              </h2>

              <div className="flex flex-wrap items-center gap-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <Link
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
                      <FontAwesomeIcon icon={Icon} />
                    </Link>
                  );
                })}
              </div>

              <Link
                href="#contact"
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
