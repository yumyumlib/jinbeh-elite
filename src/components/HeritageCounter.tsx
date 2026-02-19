"use client";

import { useEffect, useRef, useState } from "react";

interface HeritageCounterProps {
    startYear?: number;
    className?: string;
}

export default function HeritageCounter({ startYear = 1988, className = "" }: HeritageCounterProps) {
    const currentYear = new Date().getFullYear();
    const totalYears = currentYear - startYear;
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let frame: number;
        const duration = 2000; // 2 seconds
        const start = performance.now();

        const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * totalYears));

            if (progress < 1) {
                frame = requestAnimationFrame(animate);
            }
        };

        frame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(frame);
    }, [isVisible, totalYears]);

    return (
        <div ref={ref} className={`text-center ${className}`}>
            <div className="inline-flex flex-col items-center gap-2 px-8 py-6 rounded-2xl bg-charcoal/5 backdrop-blur-sm">
                <p className="text-sm font-medium uppercase tracking-widest text-soft-gold">
                    Family-Owned & Operated Since {startYear}
                </p>
                <div className="flex items-baseline gap-1">
                    <span className="text-5xl md:text-6xl font-heading font-bold text-charcoal tabular-nums">
                        {count}+
                    </span>
                    <span className="text-lg text-charcoal/70 font-medium">Years</span>
                </div>
                <p className="text-sm text-charcoal/60">
                    of authentic Japanese dining in DFW
                </p>
            </div>
        </div>
    );
}
