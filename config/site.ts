import type { BrandIconName } from "@/config/brand-icons";

export const siteConfig = {
  name: "Sokara",
  fullName: "Mohamed Sokara",
  role: "MERN Stack Developer",
  url: "https://mosokara.vercel.app",
  twitterHandle: "@mosokara",

  contact: {
    email: "mosokara2007@gmail.com",
    // Digits only, including the country code. Example: 2010XXXXXXXX.
    whatsappNumber: "201023827379",
  },

  socialLinks: [
    {
      icon: "github" satisfies BrandIconName,
      label: "GitHub",
      href: "https://github.com/MoSokara",
    },
    {
      icon: "linkedin" satisfies BrandIconName,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mosokara",
    },
    {
      icon: "facebook" satisfies BrandIconName,
      label: "Facebook",
      href: "",
    },
  ],

  // Starter budget ranges are intentionally accessible while the portfolio builds its first client history.
  budgetOptions: [
    { id: "under75", labelKey: "under75" },
    { id: "75to150", labelKey: "75to150" },
    { id: "150to300", labelKey: "150to300" },
    { id: "300to500", labelKey: "300to500" },
    { id: "500to800", labelKey: "500to800" },
    { id: "800plus", labelKey: "800plus" },
    { id: "notSure", labelKey: "notSure" },
  ],
} as const;
