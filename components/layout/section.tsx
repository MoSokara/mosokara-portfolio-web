import { ReactNode } from "react";
import Container from "./container";

type SectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
};

export default function Section({ children, id, className }: SectionProps) {
  return (
    <section
      id={id}
      className={`w-full bg-background even:bg-muted/30 scroll-mt-20 border-b border-border py-16 md:py-24 ${className ?? ""}`}
    >
      <Container>{children}</Container>
    </section>
  );
}
