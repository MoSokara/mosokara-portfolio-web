import { brandIcons, type BrandIconName } from "@/config/brand-icons";
import { cn } from "@/lib/utils";

type BrandIconProps = {
  icon: BrandIconName;
  className?: string;
};

export default function BrandIcon({ icon, className }: BrandIconProps) {
  const iconConfig = brandIcons[icon];

  return (
    <span
      aria-hidden="true"
      className={cn("size-4 shrink-0 bg-current", className)}
      style={{
        maskImage: `url("${iconConfig.path}")`,
        WebkitMaskImage: `url("${iconConfig.path}")`,
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskPosition: "center",
        maskSize: "contain",
        WebkitMaskSize: "contain",
      }}
    />
  );
}
