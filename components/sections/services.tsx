// Hooks
import { useTranslations } from "next-intl";

// Icons
import {
  ArrowUpRight,
  Code2,
  LayoutTemplate,
  Server,
  Wrench,
} from "lucide-react";

// Components
import Section from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function Services() {
  // Translations
  const t = useTranslations("Services");

  // Services Content
  const services = [
    {
      number: "01",
      icon: Code2,
      title: t("items.frontend.title"),
      description: t("items.frontend.description"),
      technologies: ["React", "Next.js", "Tailwind CSS"],
    },
    {
      number: "02",
      icon: LayoutTemplate,
      title: t("items.websites.title"),
      description: t("items.websites.description"),
      technologies: ["React", "Next.js", "Responsive UI"],
    },
    {
      number: "03",
      icon: Server,
      title: t("items.api.title"),
      description: t("items.api.description"),
      technologies: ["Express.js", "REST API", "Authentication"],
    },
    {
      number: "04",
      icon: Wrench,
      title: t("items.support.title"),
      description: t("items.support.description"),
      technologies: ["Windows", "Software", "Games", "Security"],
    },
  ];

  return (
    <Section id="services">
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

        {/* Services */}
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Card
                key={service.number}
                className="group transition-colors hover:border-primary/30"
              >
                <CardContent className="flex h-full flex-col p-6 sm:p-8">
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="size-5" aria-hidden="true" />
                      </div>

                      <span className="font-mono text-sm text-muted-foreground">
                        {service.number}
                      </span>
                    </div>

                    <ArrowUpRight
                      className="size-5 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                      aria-hidden="true"
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground sm:text-2xl">
                      {service.title}
                    </h3>

                    <p className="mt-4 leading-8 text-muted-foreground">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.technologies.map((technology) => (
                      <Badge
                        key={technology}
                        variant="secondary"
                        className="font-mono text-xs"
                      >
                        {technology}
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
