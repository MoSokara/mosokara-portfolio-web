"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowUpRight, Menu } from "lucide-react";

import { useActiveSection, type SectionId } from "@/hooks/use-active-section";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Separator } from "@/components/ui/separator";

import LanguageSwitcher from "./language-switcher";
import ThemeSwitcher from "./theme-switcher";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  const t = useTranslations("Header");

  const { activeSection, scrollToSection } = useActiveSection();

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

  const handleNavigation = (sectionId: SectionId) => {
    scrollToSection(sectionId);
    setOpen(false);
  };

  return (
    <Drawer open={open} onOpenChange={setOpen} swipeDirection="right">
      <DrawerTrigger
        render={
          <Button variant="secondary" aria-label={t("menu")}>
            <Menu />
          </Button>
        }
      />

      <DrawerContent dir="ltr">
        <DrawerHeader>
          <DrawerTitle>{t("menu")}</DrawerTitle>
        </DrawerHeader>

        <div className="flex-1 overflow-y-auto p-4">
          <nav className="flex flex-col gap-2">
            {navigation.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <Link
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(event) => {
                    event.preventDefault();
                    handleNavigation(item.id);
                  }}
                  aria-current={isActive ? "location" : undefined}
                  className={buttonVariants({
                    variant: isActive ? "secondary" : "outline",
                    className: "w-full justify-between",
                  })}
                >
                  <span>{item.label}</span>

                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="size-1.5 rounded-full bg-primary"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <Separator className="my-4" />

          <Link
            href="#contact"
            onClick={(event) => {
              event.preventDefault();
              handleNavigation("contact");
            }}
            className={buttonVariants({
              size: "lg",
              className: "mb-4 w-full",
            })}
          >
            {t("cta")}
            <ArrowUpRight />
          </Link>

          <div className="flex items-center gap-2">
            <LanguageSwitcher className="flex-1" text={t("language")} />

            <ThemeSwitcher className="flex-1" text={t("theme")} />
          </div>
        </div>

        <DrawerFooter>
          <DrawerClose
            render={<Button variant="outline">{t("close")}</Button>}
          />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
