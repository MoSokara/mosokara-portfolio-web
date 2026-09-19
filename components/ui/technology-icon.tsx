import type { LucideIcon } from "lucide-react";
import { Code2, Fingerprint } from "lucide-react";

import { cn } from "@/lib/utils";

type TechnologyIconProps = {
  name: string;
  className?: string;
};

const TECHNOLOGY_ICON_PATHS: Record<string, string> = {
  HTML: "/icons/skills/html5.svg",
  CSS: "/icons/skills/css3.svg",
  JavaScript: "/icons/skills/javascript.svg",
  TypeScript: "/icons/skills/typescript.svg",
  React: "/icons/skills/react.svg",
  "Next.js": "/icons/skills/nextjs.svg",
  TailwindCSS: "/icons/skills/tailwindcss.svg",
  Vite: "/icons/projects/vite.svg",
  "Material UI": "/icons/projects/mui.svg",
  Vercel: "/icons/projects/vercel.svg",
  "FontAwesome Icons": "/icons/projects/fontawesome.svg",
  i18next: "/icons/projects/i18next.svg",
  Axios: "/icons/projects/axios.svg",
};

const FALLBACK_ICONS: Record<string, LucideIcon> = {
  uuid: Fingerprint,
};

export default function TechnologyIcon({
  name,
  className,
}: TechnologyIconProps) {
  const iconPath = TECHNOLOGY_ICON_PATHS[name];

  if (iconPath) {
    return (
      <span
        className={cn("size-4 shrink-0 bg-primary", className)}
        style={{
          maskImage: `url("${iconPath}")`,
          WebkitMaskImage: `url("${iconPath}")`,
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskPosition: "center",
          maskSize: "contain",
          WebkitMaskSize: "contain",
        }}
        aria-hidden="true"
      />
    );
  }

  const FallbackIcon = FALLBACK_ICONS[name] ?? Code2;

  return (
    <FallbackIcon
      className={cn("size-4 shrink-0 text-primary", className)}
      aria-hidden="true"
    />
  );
}
