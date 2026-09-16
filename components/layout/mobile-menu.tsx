"use client";

// Utils
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

// Icons
import { Menu } from "lucide-react";

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
  const t = useTranslations("Navbar");

  return (
    <Drawer open={open} onOpenChange={setOpen} swipeDirection="right">
      <DrawerTrigger
        render={
          <Button variant="secondary">
            <Menu />
          </Button>
        }
      />
      <DrawerContent dir="ltr">
        {/* Header */}
        <DrawerHeader>
          <DrawerTitle>Menu</DrawerTitle>
        </DrawerHeader>

        {/* Content */}
        <div className="flex-1 scroll-fade overflow-y-auto p-4">
          <nav className="flex flex-col items-center gap-3 text-sm font-medium">
            <Link
              href="#about"
              className={buttonVariants({
                variant: "outline",
                className: "w-full",
              })}
            >
              {t("about")}
            </Link>

            <Link
              href="#services"
              className={buttonVariants({
                variant: "outline",
                className: "w-full",
              })}
            >
              {t("services")}
            </Link>

            <Link
              href="#skills"
              className={buttonVariants({
                variant: "outline",
                className: "w-full",
              })}
            >
              {t("skills")}
            </Link>

            <Link
              href="#projects"
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
            className={buttonVariants({
              size: "lg",
              className: "w-full mb-4",
            })}
          >
            Contact me
          </Link>
          <div className="flex items-center gap-2">
            <LanguageSwitcher className="flex-1" text="Language" />
            <ThemeSwitcher className="flex-1" text="Theme" />
          </div>
        </div>

        {/* Actions */}
        <DrawerFooter>
          <DrawerClose render={<Button variant="outline">Cancel</Button>} />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
