/**
 * Brand icon registry.
 *
 * Add a new brand here after placing its local SVG in public/icons/brands/.
 * The BrandIcon component uses this registry so brand icons stay consistent
 * across the portfolio.
 */

export const brandIcons = {
  github: {
    path: "/icons/brands/github.svg",
    label: "GitHub",
  },
  linkedin: {
    path: "/icons/brands/linkedin.svg",
    label: "LinkedIn",
  },
  facebook: {
    path: "/icons/brands/facebook.svg",
    label: "Facebook",
  },
  whatsapp: {
    path: "/icons/brands/whatsapp.svg",
    label: "WhatsApp",
  },
} as const;

export type BrandIconName = keyof typeof brandIcons;
