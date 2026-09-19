export type ProjectStatus = "completed" | "in-progress";

export type Project = {
  id: string;
  translationKey: string;
  image: string;
  technologies: string[];
  status: ProjectStatus;
  github?: string;
  live?: string;
};
