"use client";

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ShineButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "gold";
}

export const ShineButton = forwardRef<HTMLButtonElement, ShineButtonProps>(
  ({ className, children, variant = "primary", ...props }, ref) => {
    const variants = {
      primary: "bg-accent-red hover:bg-accent-red-hover text-white",
      secondary: "bg-charcoal hover:bg-charcoal-light text-warm-ivory",
      gold: "bg-gradient-to-r from-soft-gold to-cedar-brown text-white",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg px-6 py-3 font-semibold transition-all duration-300",
          "hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]",
          "disabled:pointer-events-none disabled:opacity-50",
          variants[variant],
          className
        )}
        {...props}
      >
        {/* Shine effect */}
        <span
          className={cn(
            "absolute inset-0 -translate-x-full",
            "bg-gradient-to-r from-transparent via-white/25 to-transparent",
            "transition-transform duration-700 ease-out",
            "group-hover:translate-x-full"
          )}
        />

        {/* Content */}
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
      </button>
    );
  }
);

ShineButton.displayName = "ShineButton";

export default ShineButton;
