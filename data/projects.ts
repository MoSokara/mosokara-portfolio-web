import type { Project } from "@/types/project";

/**
 * To add new project, add a new object to the top of the projects array with the following structure:
 * {
 *   id: string; // unique identifier for the project
 *   translationKey: string; // key for translation
 *   image: string; // path to the project image
 *   technologies: string[]; // array of technologies used in the project
 *   status: "completed" | "in-progress"; // status of the project
 *   github?: string; // optional link to the project's GitHub repository
 *   live?: string; // optional link to the live project
 * }
 */

export const projects: Project[] = [
  // Whitepace (SaaS Landing Page)
  {
    id: "whitepace-sass-landing-page",
    translationKey: "whitepace-sass-landing-page",
    image: "/imgs/projects/whitepace-sass-landing-page.png",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Vercel"],
    status: "completed",
    github: "https://github.com/MoSokara/whitepace-saas-landing-page.git",
    live: "https://whitepace-sass-landing-page.vercel.app/",
  },

  // Todo List App (React)
  {
    id: "todo-list-react-app",
    translationKey: "todo-list-react-app",
    image: "/imgs/projects/todo-list-react-app.png",
    technologies: ["React", "Vite", "Material UI", "uuid"],
    status: "completed",
    github: "https://github.com/MoSokara/todo-list-app.git",
    live: "https://todo-list-app-react-beryl.vercel.app/",
  },

  // Weather App
  {
    id: "weather-react-app",
    translationKey: "weather-react-app",
    image: "/imgs/projects/weather-react-app.png",
    technologies: [
      "React",
      "Vite",
      "TailwindCSS",
      "FontAwesome Icons",
      "i18next",
      "Axios",
    ],
    status: "completed",
    github: "https://github.com/MoSokara/weather-app.git",
    live: "https://weather-app-chi-beige-37.vercel.app/",
  },

  // Loan Form by React (first react app)
  {
    id: "loan-form-by-react",
    translationKey: "loan-form-by-react",
    image: "/imgs/projects/loan-form-by-react.png",
    technologies: ["React", "Vite"],
    status: "completed",
    github: "https://github.com/MoSokara/loan-form-by-react.git",
    live: "https://loan-form-by-react.vercel.app/",
  },

  // Prayer Times App
  {
    id: "prayer-times-app",
    translationKey: "prayer-times-app",
    image: "/imgs/projects/prayer-times-app.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    status: "completed",
    github: "https://github.com/MoSokara/loan-form-by-react.git",
    live: "https://mosokara.github.io/Prayer-Times-App/",
  },

  // Prayer Times App
  {
    id: "prayer-times-app",
    translationKey: "prayer-times-app",
    image: "/imgs/projects/prayer-times-app.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    status: "completed",
    github: "https://github.com/MoSokara/Prayer-Times-App.git",
    live: "https://mosokara.github.io/Prayer-Times-App/",
  },

  // Guess the Word Game
  {
    id: "guess-the-word-game",
    translationKey: "guess-the-word-game",
    image: "/imgs/projects/guess-the-word-game.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    status: "completed",
    github: "https://github.com/MoSokara/guess-the-word-game.git",
    live: "https://mosokara.github.io/guess-the-word-game/",
  },

  // Todo List App
  {
    id: "todo-list-app",
    translationKey: "todo-list-app",
    image: "/imgs/projects/todo-list-app.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    status: "completed",
    github: "https://github.com/MoSokara/To-Do-List-App.git",
    live: "https://mosokara.github.io/To-Do-List-App/",
  },

  // Guess a Number Game
  {
    id: "guess-a-number-game",
    translationKey: "guess-a-number-game",
    image: "/imgs/projects/guess-a-number-game.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    status: "completed",
    github: "https://github.com/MoSokara/guess-a-number-game.git",
    live: "https://mosokara.github.io/guess-a-number-game/",
  },

  // Calculator
  {
    id: "calculator",
    translationKey: "calculator",
    image: "/imgs/projects/calculator.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    status: "completed",
    github: "https://github.com/MoSokara/calculator.git",
    live: "https://mosokara.github.io/calculator/",
  },

  // Business Card
  {
    id: "business-card",
    translationKey: "business-card",
    image: "/imgs/projects/business-card.png",
    technologies: ["HTML", "CSS"],
    status: "completed",
    github: "https://github.com/MoSokara/business-card.git",
    live: "https://mosokara.github.io/business-card/",
  },

  // Blog Preview Card
  {
    id: "blog-preview-card",
    translationKey: "blog-preview-card",
    image: "/imgs/projects/blog-preview-card.png",
    technologies: ["HTML", "CSS"],
    status: "completed",
    github: "https://github.com/MoSokara/blog_preview_card.git",
    live: "https://mosokara.github.io/blog_preview_card/",
  },

  // HTML and CSS Template 4
  {
    id: "html-and-css-template-4",
    translationKey: "html-and-css-template-4",
    image: "/imgs/projects/html-and-css-template-4.png",
    technologies: ["HTML", "CSS"],
    status: "completed",
    github: "https://github.com/MoSokara/Html_And_CSS_Template_four.git",
    live: "https://mosokara.github.io/Html_And_CSS_Template_four/",
  },

  // HTML and CSS Template 3
  {
    id: "html-and-css-template-3",
    translationKey: "html-and-css-template-3",
    image: "/imgs/projects/html-and-css-template-3.png",
    technologies: ["HTML", "CSS"],
    status: "completed",
    github: "https://github.com/MoSokara/Html_And_CSS_Template_three.git",
    live: "https://mosokara.github.io/Html_And_CSS_Template_three/",
  },

  // HTML and CSS Template 2
  {
    id: "html-and-css-template-2",
    translationKey: "html-and-css-template-2",
    image: "/imgs/projects/html-and-css-template-2.png",
    technologies: ["HTML", "CSS"],
    status: "completed",
    github: "https://github.com/MoSokara/Html_And_CSS_Template_two.git",
    live: "https://mosokara.github.io/Html_And_CSS_Template_two/",
  },

  // HTML and CSS Template 1
  {
    id: "html-and-css-template-1",
    translationKey: "html-and-css-template-1",
    image: "/imgs/projects/html-and-css-template-1.png",
    technologies: ["HTML", "CSS"],
    status: "completed",
    github: "https://github.com/MoSokara/Html_And_CSS_Template_one.git",
    live: "https://mosokara.github.io/Html_And_CSS_Template_one/",
  },
];
