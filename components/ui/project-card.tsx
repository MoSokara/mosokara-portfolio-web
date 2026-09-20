import Image from "next/image";
import { useTranslations } from "next-intl";
import { ExternalLink } from "lucide-react";

import type { Project } from "@/types/project";

import { buttonVariants } from "@/components/ui/button";
import BrandIcon from "@/components/ui/brand-icon";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import TechnologyIcon from "@/components/ui/technology-icon";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const t = useTranslations("Projects");
  const projectKey = `items.${project.translationKey}`;

  return (
    <Card className="h-full p-0 transition-colors hover:border-primary/30">
      <div className="relative aspect-video overflow-hidden bg-muted">
        <Image
          src={project.image}
          alt={t(`${projectKey}.imageAlt`)}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover/card:scale-[1.03]"
        />

        <div className="absolute inset-x-3 top-3 flex justify-end">
          <Badge
            variant={project.status === "completed" ? "secondary" : "default"}
            className="bg-background/90 text-foreground shadow-sm backdrop-blur"
          >
            {t(`status.${project.status}`)}
          </Badge>
        </div>
      </div>

      <CardContent className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="space-y-3">
          <h3 className="text-xl font-semibold tracking-tight text-foreground">
            {t(`${projectKey}.title`)}
          </h3>

          <p className="text-sm leading-7 text-muted-foreground">
            {t(`${projectKey}.description`)}
          </p>
        </div>

        <ul
          aria-label={t("technologiesLabel")}
          className="mt-5 flex flex-wrap gap-2"
        >
          {project.technologies.map((technology) => (
            <li
              key={technology}
              className="inline-flex items-center gap-2 rounded-md border border-border bg-muted/50 px-2.5 py-1.5 text-xs text-foreground"
            >
              <TechnologyIcon name={technology} />
              <span className="font-mono">{technology}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({
                variant: "secondary",
                size: "lg",
                className: "flex-1 flex items-center gap-2",
              })}
            >
              <BrandIcon icon="github" className="size-4.5 bg-current" />
              {t("github")}
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({
                size: "lg",
                className: "flex-1 flex items-center gap-2",
              })}
            >
              <ExternalLink />
              {t("live")}
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
