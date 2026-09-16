"use client";

// Hooks
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";

// Icons
import { Moon, Sun } from "lucide-react";

// Components
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function ThemeSwitcher({
  className,
  text,
}: {
  className?: string;
  text?: string;
}) {
  const t = useTranslations("Navbar");
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            variant="outline"
            size="icon"
            className={"flex items-center gap-3 " + className}
          >
            {theme === "light" ? <Sun /> : <Moon />}
            {text && <span>{text}</span>}
            <span className="sr-only">{t("sr-only1")}</span>
          </Button>
        }
      ></DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-20 font-en">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          {t("light")}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          {t("dark")}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          {t("system")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
