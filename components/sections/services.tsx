"use client";

import { useTranslations } from "next-intl";
// Shared service data keeps the cards and Contact dropdown in sync.
import { services } from "@/data/services";

// Shared layout and UI primitives.
import Section from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function Services() {
  const t = useTranslations("Services");

  return (
    <Section id="services">
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

        {/* Services are informational cards; Contact handles the request flow. */}
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Card key={service.id} className="h-full">
                <CardContent className="flex h-full flex-col p-6 sm:p-8">
                  <div className="mb-6 flex items-start gap-4">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="size-5" aria-hidden="true" />
                    </div>

                    <span className="font-mono text-sm text-muted-foreground">
                      {service.number}
                    </span>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground sm:text-2xl">
                      {t(`items.${service.translationKey}.title`)}
                    </h3>

                    <p className="mt-4 leading-8 text-muted-foreground">
                      {t(`items.${service.translationKey}.description`)}
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
