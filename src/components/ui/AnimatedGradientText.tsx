"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface AnimatedGradientTextProps {
  children: ReactNode;
  className?: string;
}

export function AnimatedGradientText({
  children,
  className,
}: AnimatedGradientTextProps) {
  return (
    <span
      className={cn(
        "inline-flex animate-gradient-text bg-gradient-to-r from-accent-red via-soft-gold to-accent-red bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </span>
  );
}

export default AnimatedGradientText;
