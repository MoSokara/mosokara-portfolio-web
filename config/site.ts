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
    whatsappNumber: "",
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

  budgetOptions: [
    { id: "under100", labelKey: "under100" },
    { id: "100to250", labelKey: "100to250" },
    { id: "250to500", labelKey: "250to500" },
    { id: "500to1000", labelKey: "500to1000" },
    { id: "1000plus", labelKey: "1000plus" },
    { id: "notSure", labelKey: "notSure" },
  ],
} as const;
