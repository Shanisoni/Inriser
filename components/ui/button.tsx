"use client";

import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-primary-600 text-white shadow-lg hover:bg-primary-500 hover:shadow-xl",
  secondary:
    "bg-surface-muted text-text-primary border border-border hover:bg-surface",
  ghost: "text-text-primary hover:bg-surface-muted",
  accent:
    "bg-accent text-white shadow-lg hover:bg-accent-light hover:shadow-xl",
  outline:
    "border border-border text-text-primary hover:bg-surface-muted",
};

const sizes = {
  sm: "px-3 py-1.5 text-sm rounded-lg",
  md: "px-5 py-2.5 text-sm rounded-xl",
  lg: "px-7 py-3.5 text-base rounded-xl",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  asChild?: boolean;
  children: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", asChild = false, className, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-semibold",
          "transition-all duration-300 ease-out",
          "focus-ring cursor-pointer",
          "disabled:opacity-50 disabled:pointer-events-none",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button, type ButtonProps };
