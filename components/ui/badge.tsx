import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

const variants = {
  default: "bg-badge-bg text-badge-text border border-badge-border",
  accent: "bg-accent/10 text-accent border border-accent/20",
  dark: "bg-primary/10 text-primary border border-primary/20",
  outline: "bg-transparent text-text-secondary border border-border",
  founders: "bg-white/10 text-white/90 border border-white/20",
};

interface BadgeProps {
  variant?: keyof typeof variants;
  className?: string;
  children: ReactNode;
}

export function Badge({ variant = "default", className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full",
        "text-xs font-bold uppercase tracking-widest",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
