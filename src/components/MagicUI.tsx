"use client";

import ScrollReveal from "@/components/ScrollReveal";
import { AnimatedShinyText } from "@/components/ui/AnimatedShinyText";
import { Meteors } from "@/components/ui/Meteors";
import { WordRotate } from "@/components/ui/WordRotate";
import ShimmerButton from "@/components/ui/shimmer-button";
import { ReactNode } from "react";

// Re-export all interactive wrappers for use in server component pages

export function HeroSection({ children, className = "" }: { children: ReactNode; className?: string }) {
    return (
        <div className={`relative overflow-hidden ${className}`}>
            <Meteors number={10} />
            <div className="relative z-10">{children}</div>
        </div>
    );
}

export function RevealSection({ children, delay = 0, direction = "up" as const, className = "" }: { children: ReactNode; delay?: number; direction?: "up" | "down" | "left" | "right" | "none"; className?: string }) {
    return (
        <ScrollReveal delay={delay} direction={direction} className={className}>
            {children}
        </ScrollReveal>
    );
}

export function ShinyBadge({ children, className = "" }: { children: ReactNode; className?: string }) {
    return (
        <AnimatedShinyText className={className}>
            {children}
        </AnimatedShinyText>
    );
}

export function CuisineRotator({ className = "" }: { className?: string }) {
    return (
        <WordRotate
            words={["Hibachi", "Sushi", "Sashimi", "Sake & Cocktails"]}
            className={className}
            duration={2500}
        />
    );
}

export function ShimmerCTA({ children, href, className = "" }: { children: ReactNode; href?: string; className?: string }) {
    if (href) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer">
                <ShimmerButton
                    className={className}
                    background="linear-gradient(to right, #C1121F, #ef4444)"
                    borderRadius="12px"
                >
                    {children}
                </ShimmerButton>
            </a>
        );
    }
    return (
        <ShimmerButton
            className={className}
            background="linear-gradient(to right, #C1121F, #ef4444)"
            borderRadius="12px"
        >
            {children}
        </ShimmerButton>
    );
}

export { ScrollReveal };
export { default as NumberTickerInline } from "@/components/ui/number-ticker";
export { AnimatedGradientText } from "@/components/ui/AnimatedGradientText";
export { BentoGrid, BentoCard } from "@/components/ui/BentoGrid";
export { AnimatedList } from "@/components/ui/AnimatedList";
