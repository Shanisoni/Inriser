import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

const bgVariants = {
  default: "site-bg",
  surface: "site-bg",
  muted: "site-bg",
  dark: "site-bg",
  footer: "site-bg",
};

const paddingVariants = {
  sm: "py-12 md:py-16",
  md: "py-16 md:py-24",
  lg: "py-20 md:py-32",
  xl: "py-24 md:py-40",
  none: "",
};

interface SectionContainerProps {
  children: ReactNode;
  id?: string;
  bg?: keyof typeof bgVariants;
  padding?: keyof typeof paddingVariants;
  className?: string;
  containerClassName?: string;
  fullWidth?: boolean;
}

export function SectionContainer({
  children,
  id,
  bg = "default",
  padding = "md",
  className,
  containerClassName,
  fullWidth = false,
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={cn(bgVariants[bg], paddingVariants[padding], className)}
    >
      <div
        className={cn(
          fullWidth ? "w-full" : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          containerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}
