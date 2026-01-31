"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
        className
      )}
    >
      {children}
    </div>
  );
}

interface BentoCardProps {
  className?: string;
  children: ReactNode;
  name?: string;
  description?: string;
  Icon?: React.ComponentType<{ className?: string }>;
  href?: string;
  cta?: string;
  background?: ReactNode;
}

export function BentoCard({
  className,
  children,
  name,
  description,
  Icon,
  href,
  cta,
  background,
}: BentoCardProps) {
  const Comp = href ? "a" : "div";

  return (
    <Comp
      href={href}
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-xl",
        "bg-white border border-warm-ivory-dark",
        "transition-all duration-300 hover:shadow-xl hover:border-soft-gold/50",
        "hover:-translate-y-1",
        className
      )}
    >
      {/* Background */}
      {background && (
        <div className="pointer-events-none absolute inset-0 opacity-50 transition-opacity duration-300 group-hover:opacity-70">
          {background}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 p-6">
        {Icon && (
          <div className="mb-4">
            <Icon className="h-10 w-10 text-accent-red transition-transform duration-300 group-hover:scale-110" />
          </div>
        )}
        {name && (
          <h3 className="font-heading text-xl font-semibold text-charcoal mb-2">
            {name}
          </h3>
        )}
        {description && (
          <p className="text-charcoal/70 text-sm leading-relaxed">
            {description}
          </p>
        )}
        {children}
      </div>

      {/* CTA */}
      {cta && href && (
        <div className="relative z-10 px-6 pb-6">
          <span className="inline-flex items-center gap-1 text-accent-red font-medium text-sm group-hover:gap-2 transition-all">
            {cta}
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </div>
      )}

      {/* Border Beam Effect on Hover */}
      <div className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
        <div className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-accent-red via-soft-gold to-accent-red bg-origin-border [mask:linear-gradient(#fff_0_0)_padding-box,linear-gradient(#fff_0_0)] [mask-composite:exclude] opacity-30" />
      </div>
    </Comp>
  );
}

export default BentoGrid;
