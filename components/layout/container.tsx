// Types
import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
      {children}
    </div>
  );
}
