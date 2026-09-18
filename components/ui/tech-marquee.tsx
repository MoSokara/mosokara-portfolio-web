import Image from "next/image";
import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type TechMarqueeItem = {
  name: string;
  icon: string | LucideIcon;
};

type TechMarqueeProps = {
  items: TechMarqueeItem[];
  reverse?: boolean;
  ariaLabel?: string;
};

const MARQUEE_COPIES = 6;

export default function TechMarquee({
  items,
  reverse = false,
  ariaLabel,
}: TechMarqueeProps) {
  return (
    <div
      role="group"
      aria-label={ariaLabel}
      className="skills-marquee relative overflow-hidden rounded-lg border border-border bg-muted/20"
    >
      <div dir="ltr" className="skills-marquee-viewport overflow-hidden">
        <div
          className={cn(
            "skills-marquee-track flex w-max items-center py-2.5",
            reverse && "skills-marquee-track--reverse",
          )}
        >
          {Array.from({ length: MARQUEE_COPIES }, (_, copy) => (
            <ul
              key={copy}
              aria-hidden={copy > 0}
              className="skills-marquee-group flex shrink-0 items-center gap-3 pe-3 sm:gap-4 sm:pe-4"
            >
              {items.map((item) => (
                <li
                  key={item.name}
                  className="inline-flex shrink-0 items-center gap-2.5 rounded-md border border-border bg-card px-3 py-2 text-sm text-muted-foreground shadow-xs transition-colors hover:border-primary/30 hover:text-foreground sm:px-4 sm:py-2.5"
                >
                  {typeof item.icon === "string" ? (
                    <Image
                      src={item.icon}
                      alt=""
                      width={18}
                      height={18}
                      className="size-4 shrink-0 object-contain sm:size-[18px]"
                      aria-hidden="true"
                    />
                  ) : (
                    <item.icon
                      className="size-4 shrink-0 text-primary sm:size-[18px]"
                      aria-hidden="true"
                    />
                  )}

                  <span className="whitespace-nowrap font-mono text-xs sm:text-sm">
                    {item.name}
                  </span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}
