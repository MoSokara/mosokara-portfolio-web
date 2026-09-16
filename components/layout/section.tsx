// Types
import { ReactNode } from "react";

// Components
import Container from "./container";

export default function Section({
  children,
  variant = "primary",
}: {
  children: ReactNode;
  variant?: "primary" | "secondary";
}) {
  const variants = {
    primary: "bg-dark text-white",
    secondary: "bg-light text-dark",
  };

  return (
    <section
      className={`relative flex items-center py-6 md:py-10 overflow-hidden w-full min-h-[calc(100vh-80px)] ${variants[variant]}`}
    >
      <Container>{children}</Container>
    </section>
  );
}
