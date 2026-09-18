// Hooks
import { useTranslations } from "next-intl";

// Icons
import { Code2, GitBranch, Layers3, Server } from "lucide-react";

// Components
import Section from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function Skills() {
  // Translations
  const t = useTranslations("Skills");

  // Skills Content
  const categories = [
    {
      icon: Code2,
      title: t("categories.frontend.title"),
      description: t("categories.frontend.description"),
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Tailwind CSS",
      ],
    },
    {
      icon: Server,
      title: t("categories.backend.title"),
      description: t("categories.backend.description"),
      skills: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST API",
        "Authentication",
      ],
    },
    {
      icon: GitBranch,
      title: t("categories.tools.title"),
      description: t("categories.tools.description"),
      skills: ["Git", "GitHub", "VS Code", "Figma", "AI-assisted Development"],
    },
    {
      icon: Layers3,
      title: t("categories.practices.title"),
      description: t("categories.practices.description"),
      skills: [
        "Responsive Design",
        "Component Architecture",
        "API Integration",
        "Clean Code",
        "Localization & RTL",
        "Reusable UI",
      ],
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

        {/* Skill Categories */}
        <div className="grid gap-6 md:grid-cols-2">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <Card
                key={category.title}
                className="transition-colors hover:border-primary/30"
              >
                <CardContent className="p-6 sm:p-8">
                  {/* Category Header */}
                  <div className="mb-6 flex items-start gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="size-5" aria-hidden="true" />
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-foreground sm:text-2xl">
                        {category.title}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-muted-foreground">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="font-mono text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
