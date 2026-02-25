"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface Quote {
    quote: string;
    author: string;
}

interface MiniTestimonialsProps {
    quotes: Quote[];
    className?: string;
    intervalMs?: number;
}

export function MiniTestimonials({ quotes, className, intervalMs = 6000 }: MiniTestimonialsProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (quotes.length <= 1) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % quotes.length);
        }, intervalMs);
        return () => clearInterval(interval);
    }, [quotes.length, intervalMs]);

    if (!quotes.length) return null;

    return (
        <div className={cn("relative h-24 sm:h-20 overflow-hidden", className)}>
            {quotes.map((q, idx) => (
                <div
                    key={idx}
                    className={cn(
                        "absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ease-in-out px-4 text-center",
                        idx === currentIndex
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-8 pointer-events-none"
                    )}
                >
                    <div className="flex text-soft-gold mb-2 text-sm" aria-hidden="true">
                        {[...Array(5)].map((_, i) => (
                            <span key={i}>★</span>
                        ))}
                    </div>
                    <p className="text-sm md:text-base font-medium text-charcoal/90 italic mb-1">&quot;{q.quote}&quot;</p>
                    <span className="text-xs text-charcoal/60 font-semibold">— {q.author}</span>
                </div>
            ))}
        </div>
    );
}
