# Sokara Portfolio

Personal portfolio website for Mohamed Sokara, a MERN Stack Developer focused on building modern, scalable, and maintainable web applications.

The project is built with Next.js and is being developed as a production-oriented portfolio with a clean component structure, responsive UI, localization, and reusable design patterns.

## Project Status

**Status:** In active development

### Completed so far

- Hero section with portfolio introduction and primary actions
- About section with developer story, current focus, and highlights
- Services section with four development and technical services
- Scroll-aware navigation with active section state
- Smooth in-page navigation with URL hash support
- Mobile navigation drawer with active section state
- Footer navigation and social links
- Arabic and English localization
- Light and dark theme support
- Responsive layout and reusable UI components
- Motion integration for viewport-aware section tracking
- Alternating section backgrounds for clearer visual separation

### Planned sections

- Skills
- Projects
- Contact

## Tech Stack

### Core

- Next.js 16
- React 19
- TypeScript

### UI and Styling

- Tailwind CSS v4
- shadcn/ui
- Base UI
- Lucide React
- Font Awesome
- Motion

### Application

- next-intl for Arabic and English localization
- next-themes for theme management

## Project Structure

```text
app/
└── [locale]/
    ├── layout.tsx
    ├── page.tsx
    └── globals.css

components/
├── layout/
│   ├── container.tsx
│   ├── footer.tsx
│   ├── header.tsx
│   ├── language-switcher.tsx
│   ├── mobile-menu.tsx
│   ├── section.tsx
│   ├── theme-switcher.tsx
│   └── ...
├── sections/
│   ├── about.tsx
│   ├── hero.tsx
│   └── services.tsx
└── ui/
    └── ...

hooks/
└── use-active-section.ts

messages/
├── ar.json
└── en.json

i18n/
└── ...

lib/
└── ...
```

## Getting Started

Install the dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Production Build

Create a production build locally:

```bash
npm run build
```

Run the generated production build locally:

```bash
npm run start
```

This allows the production build to be tested locally without deploying the project.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run lint` | Run ESLint across the project |
| `npm run build` | Create a production build |
| `npm run start` | Run the production build locally |

## Navigation Architecture

The portfolio uses a shared `useActiveSection` hook to track the currently visible section and keep navigation state synchronized across the Header, Mobile Menu, and Footer.

Section links preserve URL hashes such as:

```text
#about
#services
#skills
#projects
#contact
```

The current implementation tracks the sections that already exist and is prepared for the remaining sections as they are added.

## Localization

The application currently supports:

- English (`en`)
- Arabic (`ar`)

User-facing content is stored in the `messages/` directory and accessed through `next-intl`.

## Future Ideas

- Make each service card action (`ArrowUpRight`) open the Contact section with a pre-filled message specific to the selected service, while allowing the visitor to edit it before sending.

## Development Approach

The project is being developed incrementally with a feature-branch and pull-request workflow.

Current development priorities are focused on:

1. Building the remaining portfolio sections
2. Maintaining a clean and reusable component architecture
3. Improving accessibility, responsiveness, and UX
4. Preparing the project for production launch
5. Adding testing, CI, performance, and maintenance improvements later in the project lifecycle

## License

This project is a personal portfolio project by Mohamed Sokara.
