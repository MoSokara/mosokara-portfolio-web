import { useTranslations } from "next-intl";
import { Code2, Layers3, Rocket, Sparkles } from "lucide-react";

import Section from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const t = useTranslations("About");

  const highlights = [
    {
      icon: Code2,
      title: t("highlights.code.title"),
      description: t("highlights.code.description"),
    },
    {
      icon: Layers3,
      title: t("highlights.stack.title"),
      description: t("highlights.stack.description"),
    },
    {
      icon: Rocket,
      title: t("highlights.build.title"),
      description: t("highlights.build.description"),
    },
  ];

  return (
    <Section id="about">
      <div className="space-y-10">
        {/* Heading */}
        <div className="max-w-3xl space-y-4">
          <Badge variant="secondary">{t("badge")}</Badge>

          <div>
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

        {/* Main content */}
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Developer story */}
          <Card className="overflow-hidden">
            <CardContent className="p-6 sm:p-8">
              <div className="mb-6 flex items-center gap-3 font-mono text-sm text-muted-foreground">
                <Code2 className="size-4 text-primary" />
                <span>{t("story.label")}</span>
              </div>

              <div className="space-y-5">
                <p className="text-lg font-semibold leading-8 text-foreground">
                  {t("story.title")}
                </p>

                <p className="leading-8 text-muted-foreground">
                  {t("story.paragraph1")}
                </p>

                <p className="leading-8 text-muted-foreground">
                  {t("story.paragraph2")}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Current direction */}
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="flex h-full flex-col p-6 sm:p-8">
              <div className="mb-6 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 font-mono text-sm text-primary">
                  <Sparkles className="size-4" />
                  <span>{t("focus.label")}</span>
                </div>

                <Badge>{t("focus.status")}</Badge>
              </div>

              <h3 className="text-xl font-semibold text-foreground sm:text-2xl">
                {t("focus.title")}
              </h3>

              <p className="mt-4 flex-1 leading-8 text-muted-foreground">
                {t("focus.description")}
              </p>

              <div dir="ltr" className="mt-6 rounded-lg border border-border bg-background/70 p-4 font-mono text-sm">
                <span className="text-primary">$</span>{" "}
                <span className="text-foreground">{t("focus.command")}</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Highlights */}
        <div className="grid gap-4 md:grid-cols-3">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <Card key={item.title} className="bg-muted/30">
                <CardContent className="p-5">
                  <Icon className="mb-4 size-5 text-primary" />

                  <h3 className="font-semibold text-foreground">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
