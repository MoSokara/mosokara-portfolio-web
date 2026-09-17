// Utils
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

// Icons
import { FolderKanban, MessageCircle } from "lucide-react";

// Components
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Section from "../layout/section";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <Section id="home">
      {/* Content */}
      <div className="flex flex-col-reverse items-center justify-center gap-8 md:flex-row md:gap-12">
        <div className="space-y-6 text-center md:max-w-2xl md:text-left rtl:md:text-right">
          <Badge>{t("badge")}</Badge>

          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            {t("title1")} <span className="text-primary">{t("title2")}</span>
          </h1>

          <h2 className="font-mono text-xl text-accent-foreground sm:text-2xl">
            {t("stack")}
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl md:mx-0">
            {t("bio")}
          </p>

          {/* Call to actions */}
          <div className="flex w-full flex-col items-center justify-center gap-3 sm:flex-row md:justify-start">
            <Button size="xl" className="flex-1 w-full">
              <Link href="#contact" className="flex items-center gap-2">
                <MessageCircle />
                {t("primaryBtn")}
              </Link>
            </Button>

            <Button size="xl" variant="secondary" className="flex-1 w-full">
              <Link href="#projects" className="flex items-center gap-2">
                <FolderKanban />
                {t("secondaryBtn")}
              </Link>
            </Button>
          </div>
        </div>

        <div className="aspect-square w-full max-w-md rounded-xl bg-muted p-3 md:w-120 md:max-w-none">
          <Image
            src="/imgs/my-photo.jpg"
            alt={t("photoAlt")}
            width={800}
            height={800}
            priority
            sizes="(max-width: 768px) 100vw, 480px"
            className="h-full w-full rounded-lg object-cover"
          />
        </div>
      </div>
    </Section>
  );
}
