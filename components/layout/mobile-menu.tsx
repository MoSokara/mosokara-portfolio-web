"use client";

// Utils
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

// Icons
import { ArrowUpRight, Menu } from "lucide-react";

// Components
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

// Hooks
import { useState } from "react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const t = useTranslations("Header");

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
        {/* Header */}
        <DrawerHeader>
          <DrawerTitle>{t("menu")}</DrawerTitle>
        </DrawerHeader>

        {/* Navigation */}
        <div className="flex-1 scroll-fade overflow-y-auto p-4">
          <nav className="flex flex-col items-center gap-3 text-sm font-medium">
            <Link
              href="#about"
              onClick={() => setOpen(false)}
              className={buttonVariants({
                variant: "outline",
                className: "w-full",
              })}
            >
              {t("about")}
            </Link>

            <Link
              href="#services"
              onClick={() => setOpen(false)}
              className={buttonVariants({
                variant: "outline",
                className: "w-full",
              })}
            >
              {t("services")}
            </Link>

            <Link
              href="#skills"
              onClick={() => setOpen(false)}
              className={buttonVariants({
                variant: "outline",
                className: "w-full",
              })}
            >
              {t("skills")}
            </Link>

            <Link
              href="#projects"
              onClick={() => setOpen(false)}
              className={buttonVariants({
                variant: "outline",
                className: "w-full",
              })}
            >
              {t("projects")}
            </Link>
          </nav>

          <Separator className="my-4" />

          <Link
            href="#contact"
            onClick={() => setOpen(false)}
            className={buttonVariants({ size: "lg", className: "mb-4 w-full" })}
          >
            {t("cta")}
            <ArrowUpRight />
          </Link>

          <div className="flex items-center gap-2">
            <LanguageSwitcher className="flex-1" text={t("language")} />
            <ThemeSwitcher className="flex-1" text={t("theme")} />
          </div>
        </div>

        {/* Actions */}
        <DrawerFooter>
          <DrawerClose
            render={<Button variant="outline">{t("close")}</Button>}
          />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
