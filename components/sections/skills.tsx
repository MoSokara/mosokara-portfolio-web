// Hooks
import { useTranslations } from "next-intl";

// Icons
import type { LucideIcon } from "lucide-react";
import {
  Bot,
  Code2,
  GitBranch,
  Layers3,
  Languages,
  LayoutPanelTop,
  Plug,
  Server,
  ShieldCheck,
} from "lucide-react";

// Components
import Section from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import TechMarquee from "@/components/ui/tech-marquee";

type SkillItem = {
  name: string;
  icon: string | LucideIcon;
};

type SkillCategory = {
  number: string;
  icon: LucideIcon;
  title: string;
  items: SkillItem[];
  reverse: boolean;
};

export default function Skills() {
  // Translations
  const t = useTranslations("Skills");

  // Skills Content
  const categories: SkillCategory[] = [
    {
      number: "01",
      icon: Code2,
      title: t("categories.frontend.title"),
      items: [
        { name: t("items.html5"), icon: "/icons/skills/html5.svg" },
        { name: t("items.css3"), icon: "/icons/skills/css3.svg" },
        { name: t("items.javascript"), icon: "/icons/skills/javascript.svg" },
        { name: t("items.typescript"), icon: "/icons/skills/typescript.svg" },
        { name: t("items.react"), icon: "/icons/skills/react.svg" },
        { name: t("items.nextjs"), icon: "/icons/skills/nextjs.svg" },
        { name: t("items.tailwindcss"), icon: "/icons/skills/tailwindcss.svg" },
      ],
      reverse: false,
    },
    {
      number: "02",
      icon: Server,
      title: t("categories.backend.title"),
      items: [
        { name: t("items.nodejs"), icon: "/icons/skills/nodejs.svg" },
        { name: t("items.expressjs"), icon: "/icons/skills/express.svg" },
        { name: t("items.mongodb"), icon: "/icons/skills/mongodb.svg" },
        { name: t("items.restApi"), icon: Plug },
        { name: t("items.authentication"), icon: ShieldCheck },
      ],
      reverse: true,
    },
    {
      number: "03",
      icon: GitBranch,
      title: t("categories.tools.title"),
      items: [
        { name: t("items.git"), icon: "/icons/skills/git.svg" },
        { name: t("items.github"), icon: "/icons/skills/github.svg" },
        { name: t("items.vscode"), icon: "/icons/skills/vscode.svg" },
        { name: t("items.figma"), icon: "/icons/skills/figma.svg" },
        { name: t("items.npm"), icon: "/icons/skills/npm.svg" },
        { name: t("items.aiAssistedDevelopment"), icon: Bot },
      ],
      reverse: false,
    },
    {
      number: "04",
      icon: Layers3,
      title: t("categories.practices.title"),
      items: [
        { name: t("items.responsiveDesign"), icon: LayoutPanelTop },
        { name: t("items.componentArchitecture"), icon: Layers3 },
        { name: t("items.apiIntegration"), icon: Plug },
        { name: t("items.cleanCode"), icon: Code2 },
        { name: t("items.localizationRtl"), icon: Languages },
        { name: t("items.reusableUi"), icon: Layers3 },
      ],
      reverse: true,
    },
  ];

  return (
    <Section id="skills">
      <div className="space-y-10">
        {/* Heading */}
        <div className="max-w-3xl space-y-4">
          <Badge variant="secondary">{t("badge")}</Badge>

          <div>
            {/* Eyebrow */}
            <p className="mb-2 font-mono text-sm text-primary">
              {t("eyebrow")}
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              {t("title")}
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            {t("description")}
          </p>
        </div>

        {/* Skill Collections */}
        <div className="space-y-5">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <Card key={category.number}>
                <CardContent className="p-4 sm:p-5">
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon
                          className="size-4 sm:size-5"
                          aria-hidden="true"
                        />
                      </div>

                      <h3 className="truncate text-base font-semibold text-foreground sm:text-lg">
                        {category.title}
                      </h3>
                    </div>

                    <span className="shrink-0 font-mono text-xs text-muted-foreground">
                      {category.number}
                    </span>
                  </div>

                  <TechMarquee
                    items={category.items}
                    reverse={category.reverse}
                    ariaLabel={category.title}
                  />
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
