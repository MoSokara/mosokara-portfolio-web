// Utils
import { useTranslations } from "next-intl";
import Image from "next/image";

// Icons
import { FolderKanban, MessageCircle } from "lucide-react";

// Components
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Section from "./section";

export default function Hero() {
  const t = useTranslations("HomePage");
  return (
    <Section variant="primary">
      {/* Content */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-6">
        <div className="space-y-6 text-center md:text-left">
          <Badge>{t("badge")}</Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground font-extrabold tracking-tight">
            {t("title1")} <span className="text-primary">{t("title2")}</span>
          </h1>
          <h2 className="text-accent-foreground text-2xl font-mono">
            {t("stack")}
          </h2>
          <p className="max-w-150 mx-auto lg:mx-0 text-lg text-muted-foreground sm:text-xl">
            {t("bio")}
          </p>
          <div className="flex items-center justify-center gap-3 w-full">
            {/* Call to Action */}
            <Button
              size="xl"
              className="flex-1 flex items-center justify-center gap-2"
            >
              <MessageCircle />
              {t("primaryBtn")}
            </Button>

            {/* Secondary Call to Action */}
            <Button
              size="xl"
              variant="secondary"
              className="flex-1 flex items-center justify-center gap-2"
            >
              <FolderKanban />
              {t("secondaryBtn")}
            </Button>
          </div>
        </div>

        <div className="aspect-square w-full h-full md:w-120 md:h-120 p-3 bg-muted rounded-lg">
          <Image
            src="/imgs/my-photo.jpg"
            alt="Hero Background"
            width={1920}
            height={1080}
            className="rounded-lg w-full h-full object-cover"
          />
        </div>
      </div>
    </Section>
  );
}
