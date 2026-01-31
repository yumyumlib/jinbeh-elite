"use client";

import React, { CSSProperties, ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export interface ShimmerButtonProps extends ComponentPropsWithoutRef<"button"> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
  children?: React.ReactNode;
}

export const ShimmerButton = React.forwardRef<HTMLButtonElement, ShimmerButtonProps>(
  (
    {
      shimmerColor = "#ffffff",
      shimmerSize = "0.1em",
      shimmerDuration = "2s",
      borderRadius = "0.5rem",
      background = "linear-gradient(135deg, #C1121F 0%, #8B0D16 100%)",
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        style={
          {
            "--shimmer-color": shimmerColor,
            "--shimmer-size": shimmerSize,
            "--shimmer-duration": shimmerDuration,
            "--border-radius": borderRadius,
            "--background": background,
          } as CSSProperties
        }
        className={cn(
          "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap px-6 py-3 font-semibold text-white transition-all duration-300",
          "[background:var(--background)]",
          "[border-radius:var(--border-radius)]",
          "hover:scale-[1.02] hover:shadow-xl active:scale-[0.98]",
          "disabled:pointer-events-none disabled:opacity-50",
          className
        )}
        {...props}
      >
        {/* Shimmer effect */}
        <div
          className={cn(
            "absolute inset-0 overflow-hidden [border-radius:var(--border-radius)]",
            "before:absolute before:inset-0",
            "before:aspect-square before:animate-shimmer-slide",
            "before:[background:conic-gradient(from_0deg,transparent_0_340deg,var(--shimmer-color)_360deg)]",
            "before:[translate:-50%_-15%]",
            "after:absolute after:inset-[var(--shimmer-size)]",
            "after:[background:var(--background)]",
            "after:[border-radius:var(--border-radius)]"
          )}
        />

        {/* Content */}
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>

        {/* Glow effect on hover */}
        <div
          className={cn(
            "absolute -z-10 h-full w-full opacity-0 transition-opacity duration-500 group-hover:opacity-100",
            "[background:radial-gradient(ellipse_at_center,rgba(193,18,31,0.4)_0%,transparent_70%)]",
            "blur-xl"
          )}
        />
      </button>
    );
  }
);

ShimmerButton.displayName = "ShimmerButton";

export default ShimmerButton;
