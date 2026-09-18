// Hooks
import { useTranslations } from "next-intl";

// Icons
import { Code2, GitBranch, Layers3, Server } from "lucide-react";

<<<<<<< HEAD
=======
// Font Awesome
import {
  faCss3Alt,
  faFigma,
  faGitAlt,
  faGithub,
  faHtml5,
  faJs,
  faNodeJs,
  faNpm,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faDatabase,
  faGlobe,
  faLayerGroup,
  faMobileScreenButton,
  faPalette,
  faPlug,
  faRobot,
  faServer,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";

>>>>>>> 85410d4526135fb0172ec3dd78835acb091f4bf9
// Components
import Section from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
<<<<<<< HEAD
=======
import TechMarquee from "@/components/ui/tech-marquee";
>>>>>>> 85410d4526135fb0172ec3dd78835acb091f4bf9

export default function Skills() {
  // Translations
  const t = useTranslations("Skills");

  // Skills Content
  const categories = [
    {
<<<<<<< HEAD
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
=======
      number: "01",
      icon: Code2,
      title: t("categories.frontend.title"),
      items: [
        { name: "HTML5", icon: faHtml5 },
        { name: "CSS3", icon: faCss3Alt },
        { name: "JavaScript", icon: faJs },
        { name: "TypeScript", icon: faCode },
        { name: "React", icon: faReact },
        { name: "Next.js", icon: faCode },
        { name: "Tailwind CSS", icon: faPalette },
      ],
      reverse: false,
    },
    {
      number: "02",
      icon: Server,
      title: t("categories.backend.title"),
      items: [
        { name: "Node.js", icon: faNodeJs },
        { name: "Express.js", icon: faServer },
        { name: "MongoDB", icon: faDatabase },
        { name: "REST API", icon: faPlug },
        { name: "Authentication", icon: faShieldHalved },
      ],
      reverse: true,
    },
    {
      number: "03",
      icon: GitBranch,
      title: t("categories.tools.title"),
      items: [
        { name: "Git", icon: faGitAlt },
        { name: "GitHub", icon: faGithub },
        { name: "VS Code", icon: faCode },
        { name: "Figma", icon: faFigma },
        { name: "npm", icon: faNpm },
        { name: "AI-assisted Development", icon: faRobot },
      ],
      reverse: false,
    },
    {
      number: "04",
      icon: Layers3,
      title: t("categories.practices.title"),
      items: [
        { name: "Responsive Design", icon: faMobileScreenButton },
        { name: "Component Architecture", icon: faLayerGroup },
        { name: "API Integration", icon: faPlug },
        { name: "Clean Code", icon: faCode },
        { name: "Localization & RTL", icon: faGlobe },
        { name: "Reusable UI", icon: faLayerGroup },
      ],
      reverse: true,
>>>>>>> 85410d4526135fb0172ec3dd78835acb091f4bf9
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

<<<<<<< HEAD
        {/* Skill Categories */}
        <div className="grid gap-6 md:grid-cols-2">
=======
        {/* Skill Collections */}
        <div className="space-y-5">
>>>>>>> 85410d4526135fb0172ec3dd78835acb091f4bf9
          {categories.map((category) => {
            const Icon = category.icon;

            return (
<<<<<<< HEAD
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
=======
              <Card key={category.number}>
                <CardContent className="p-4 sm:p-5">
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="size-4 sm:size-5" aria-hidden="true" />
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
>>>>>>> 85410d4526135fb0172ec3dd78835acb091f4bf9
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
