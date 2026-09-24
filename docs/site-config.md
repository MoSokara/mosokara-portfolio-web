# Site Configuration

Use the following files when changing the portfolio. Most content changes should not require editing a component.

## Site links and contact

Edit `config/site.ts`.

Change these values for:
- Site name, role, and URL
- Contact email
- WhatsApp Business number
- GitHub, LinkedIn, Facebook, or other social links
- Starter budget ranges shown in the Contact form

For WhatsApp, enter the full number as digits only with the country code and without `+`, spaces, or the leading local zero.

Example:

```ts
whatsappNumber: "2010XXXXXXXX"
```

The WhatsApp button stays disabled until this value is configured.

## Brand icons

Edit `config/brand-icons.ts` and `public/icons/brands/`.

To add a brand:
1. Add the SVG to `public/icons/brands/`.
2. Register its path in `config/brand-icons.ts`.
3. Use it with:

```tsx
<BrandIcon icon="facebook" />
```

The same component is used for GitHub, LinkedIn, Facebook, and WhatsApp.

## Section text

Edit `messages/en.json` and `messages/ar.json`.

Use the translation files for:
- Section titles and descriptions
- Navigation labels
- Buttons
- Service names and descriptions
- Contact form labels and messages
- SEO metadata

Keep the same keys in both language files.

## Services

Edit `data/services.ts` for the service structure:
- Service ID
- Order number
- Icon
- Technologies

The Services section and Contact dropdown use the same service data. Service cards are informational only and do not trigger Contact selection or generate a message.

## Projects

Edit `data/projects.ts` for:
- Project ID
- Image
- Technologies
- Status
- GitHub link
- Live link

Edit `messages/en.json` and `messages/ar.json` for each project's title, description, and image alt text.

## Design system

Edit `app/[locale]/globals.css` for shared colors, semantic tokens, typography, radii, borders, and other global design decisions.

Component-specific spacing or layout changes should normally stay inside the relevant component.
