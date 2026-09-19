# Sokara Portfolio

Personal portfolio website for Mohamed Sokara, a MERN Stack Developer focused on building modern, scalable, and maintainable web applications.

The project is built with Next.js and is being developed as a production-oriented portfolio with a clean component structure, responsive UI, localization, reusable design patterns, and a consistent developer-inspired design system.

## Project Status

**Status:** In active development

### Completed so far

- Hero section with portfolio introduction and primary actions
- About section with developer story, current focus, and highlights
- Services section with four development and technical services
- Skills section covering frontend, backend, tools, workflow, and core development practices
- Projects section powered by structured project data with localized content, status badges, technology icons, and project links
- Reusable technology marquee with forward and reverse scrolling
- Reduced-motion support for animated skill collections
- Local technology SVG icons with documented sources and attribution
- Scroll-aware navigation with active section state
- Smooth in-page navigation with URL hash support
- Mobile navigation drawer with active section state
- Footer navigation and social links
- English and Arabic localization
- Light and dark theme support
- Responsive layout and reusable UI components
- Motion integration for viewport-aware section tracking
- Alternating section backgrounds for clearer visual separation
- Global favicon and Apple touch icon configuration

### Planned sections

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

- next-intl for English and Arabic localization
- next-themes for theme management

## Project Structure

```text
app/
├── favicon.ico
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
│   ├── projects.tsx
│   ├── services.tsx
│   └── skills.tsx
└── ui/
    ├── badge.tsx
    ├── button.tsx
    ├── card.tsx
    ├── drawer.tsx
    ├── dropdown-menu.tsx
    ├── field.tsx
    ├── input.tsx
    ├── label.tsx
    ├── project-card.tsx
    ├── separator.tsx
    ├── tech-marquee.tsx
    └── technology-icon.tsx

data/
└── projects.ts

types/
└── project.ts

hooks/
└── use-active-section.ts

messages/
├── ar.json
└── en.json

i18n/
└── routing.ts

providers/
└── theme.provider.tsx

public/
├── icons/
│   ├── projects/
│   └── skills/
└── imgs/
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

Open http://localhost:3000 in your browser.

## Production Build

Create a production build locally:

```bash
npm run build
```

Run the generated production build locally:

```bash
npm run start
```

This allows the production build to be tested locally before deployment.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run lint` | Run ESLint across the project |
| `npm run build` | Create a production build |
| `npm run start` | Run the production build locally |

## Navigation Architecture

The portfolio uses the shared `useActiveSection` hook to track the currently visible section and synchronize navigation state across the Header, Mobile Menu, and Footer.

Section links preserve URL hashes such as:

```text
#about
#services
#skills
#projects
#contact
```

The navigation model contains the Projects and Contact section IDs, allowing new sections to be integrated without redesigning the navigation architecture.

## Localization

The application currently supports:

- English (`en`)
- Arabic (`ar`)

User-facing content is stored in the `messages/` directory and accessed through `next-intl`.

## Projects Architecture

Project content is stored in `data/projects.ts` and typed through `types/project.ts`. The Projects section renders reusable `ProjectCard` components, while technology names are mapped to local SVG assets so the UI can reuse the same primary-colored icon treatment used by the Skills section.

Project titles, descriptions, status labels, and action labels are localized through `next-intl` in the `messages/` directory.

## Skills Architecture

The Skills section is built around four collections:

- Frontend
- Backend
- Tools & Workflow
- Core Practices

Technology items use local SVG assets from `public/icons/skills/`, while generic development concepts use Lucide icons. The marquee is implemented with CSS animations rather than a separate animation dependency, supports opposite directions per collection, pauses on hover/focus, and falls back to a static wrapped layout for users who prefer reduced motion.

## Metadata and Branding

The application uses Next.js metadata for the page title, description, Open Graph data, Twitter card metadata, and Apple/general icons.

The global `favicon.ico` is stored at `app/favicon.ico`, following the App Router file-based metadata convention.

## Maintenance Notes

The project currently uses `next-themes@0.4.6`. With Next.js 16.2+ and React 19, this version can surface the React development warning about a script tag being rendered from a Client Component. This is a known upstream compatibility issue and is tracked as a maintenance item while the current theme behavior remains functional.

## Future Ideas

- Make each service card action (`ArrowUpRight`) open the Contact section with a pre-filled message specific to the selected service, while allowing the visitor to edit it before sending.
- Add project filtering only when the portfolio contains enough projects for filtering to provide real value.
- Add richer project detail views only when individual projects need more context than a portfolio card can provide.
- Improve SEO, accessibility, performance, metadata, and production polish after the main portfolio sections are complete.
- Add automated testing and CI/CD later in the project lifecycle once the core product structure is stable.

## Implementation Roadmap

The remaining implementation is planned in the following order:

1. Contact section
2. Full responsive and accessibility review
3. SEO and metadata refinement
4. Performance and production optimization
5. Final visual and UX polish
6. Testing and CI/CD improvements

## Development Approach

The project is developed incrementally using feature branches and pull requests.

The standard workflow for major features is:

```text
master
  ↓
feature branch
  ↓
implementation
  ↓
local review
  ↓
lint + build + manual testing
  ↓
CodeRabbit review
  ↓
fix and re-review
  ↓
final diff review
  ↓
pull request
  ↓
merge into master
```

CodeRabbit is used as an additional automated reviewer rather than a replacement for manual code review. Review findings are verified against the current implementation before changes are applied.

## License

This project is a personal portfolio project by Mohamed Sokara.
