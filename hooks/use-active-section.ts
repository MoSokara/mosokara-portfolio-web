"use client";

import { useEffect, useState } from "react";
import { inView } from "motion";

const sections = [
  "about",
  "services",
  "skills",
  "projects",
  "contact",
] as const;

export type SectionId = (typeof sections)[number];

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<SectionId | null>(null);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");

    if (sections.includes(hash as SectionId)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setActiveSection(hash as SectionId);
    }

    const stop = inView(
      sections
        .map((section) => `#${section}`)
        .join(","),
      (element) => {
        const id = element.id as SectionId;

        setActiveSection(id);

        window.history.replaceState(
          null,
          "",
          `${window.location.pathname}#${id}`,
        );

        return () => {
          setActiveSection((current) => (current === id ? null : current));
        };
      },
      {
        margin: "-20% 0px -65% 0px",
        amount: 0.01,
      },
    );

    return stop;
  }, []);

  const scrollToSection = (sectionId: SectionId) => {
    const section = document.getElementById(sectionId);

    if (!section) return;

    setActiveSection(sectionId);

    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}#${sectionId}`,
    );

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollToTop = () => {
    setActiveSection(null);

    window.history.replaceState(
      null,
      "",
      window.location.pathname,
    );

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return {
    activeSection,
    scrollToSection,
    scrollToTop,
  };
}