import { useTranslations } from "next-intl";

import { projects } from "@/data/projects";
import Section from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import ProjectCard from "@/components/ui/project-card";

export default function Projects() {
  const t = useTranslations("Projects");

  return (
    <Section id="projects">
      <div className="space-y-10">
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

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={`${project.id}-${index}`} project={project} />
          ))}
        </div>
      </div>
    </Section>
  );
}
