"use client";

// Utils
import { usePathname, useRouter } from "@/i18n/navigation";

// Components
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

// Icons
import { Languages } from "lucide-react";

export default function LanguageSwitcher({
  className,
  text,
}: {
  className?: string;
  text?: string;
}) {
  // const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function changeLanguage(nextLocale: "en" | "ar") {
    router.replace(pathname, {
      locale: nextLocale,
    });
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            variant="outline"
            size="icon"
            className={"flex items-center gap-3 " + className}
          >
            <Languages />
            {text && <span>{text}</span>}
            <span className="sr-only">Language Switcher</span>
          </Button>
        }
      ></DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-20 font-en">
        <DropdownMenuItem onClick={() => changeLanguage("en")}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage("ar")}>
          العربية
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
