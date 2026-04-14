import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

const sizeMap = {
  sm: "w-8 h-8",
  md: "w-10 h-10",
  lg: "w-12 h-12",
};

const variantMap = {
  default: "bg-primary-50 text-primary-700",
  accent: "bg-accent/10 text-accent",
  success: "bg-success-bg text-success",
  muted: "bg-surface-muted text-text-secondary",
  dark: "bg-primary text-text-inverted",
};

interface IconWrapperProps {
  children: ReactNode;
  size?: keyof typeof sizeMap;
  variant?: keyof typeof variantMap;
  className?: string;
}

export function IconWrapper({
  children,
  size = "md",
  variant = "default",
  className,
}: IconWrapperProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center justify-center rounded-xl shrink-0",
        sizeMap[size],
        variantMap[variant],
        className
      )}
    >
      {children}
    </div>
  );
}
