import type { LucideIcon } from "lucide-react";
import {
  Code2,
  LayoutTemplate,
  Server,
  Wrench,
} from "lucide-react";

export type ServiceId = "frontend" | "websites" | "api" | "support";

export type Service = {
  id: ServiceId;
  number: string;
  icon: LucideIcon;
  translationKey: ServiceId;
  technologies: string[];
};

export const services: readonly Service[] = [
  {
    id: "frontend",
    number: "01",
    icon: Code2,
    translationKey: "frontend",
    technologies: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    id: "websites",
    number: "02",
    icon: LayoutTemplate,
    translationKey: "websites",
    technologies: ["React", "Next.js", "Responsive UI"],
  },
  {
    id: "api",
    number: "03",
    icon: Server,
    translationKey: "api",
    technologies: ["Express.js", "REST API", "Authentication"],
  },
  {
    id: "support",
    number: "04",
    icon: Wrench,
    translationKey: "support",
    technologies: ["Windows", "Software", "Games", "Security"],
  },
];
