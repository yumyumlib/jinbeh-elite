"use client";

import { cn } from "@/lib/utils";
import { type ComponentPropsWithoutRef } from "react";

interface ShimmerButtonProps extends ComponentPropsWithoutRef<"button"> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
}

export default function ShimmerButton({
  shimmerColor = "#ffffff",
  shimmerSize = "0.1em",
  shimmerDuration = "2.5s",
  borderRadius = "100px",
  background = "linear-gradient(to right, #dc2626, #ef4444)",
  className,
  children,
  ...props
}: ShimmerButtonProps) {
  return (
    <button
      style={
        {
          "--shimmer-color": shimmerColor,
          "--shimmer-size": shimmerSize,
          "--shimmer-duration": shimmerDuration,
          "--border-radius": borderRadius,
          "--background": background,
        } as React.CSSProperties
      }
      className={cn(
        "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap px-8 py-4 text-white font-semibold shadow-lg transition-all duration-300",
        "[background:var(--background)]",
        "[border-radius:var(--border-radius)]",
        "hover:scale-105 hover:shadow-xl",
        "before:absolute before:inset-0 before:-z-10",
        "before:[background:var(--background)]",
        "after:absolute after:inset-0 after:-z-10",
        "after:animate-shimmer",
        "after:[background:linear-gradient(to_right,transparent_0%,var(--shimmer-color)_50%,transparent_100%)]",
        "after:[background-size:var(--shimmer-size)_100%]",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
