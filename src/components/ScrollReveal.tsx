"use client";

import { useEffect, useRef, useState, ReactNode, CSSProperties } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  /** Enable blur-in effect for premium feel */
  blur?: boolean;
  /** Stagger index for choreographed grid reveals (adds 80ms per index) */
  staggerIndex?: number;
  /** Custom duration in ms (default: 600) */
  duration?: number;
  /** Disable the subtle scale effect */
  noScale?: boolean;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  blur = false,
  staggerIndex,
  duration = 600,
  noScale = false,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Calculate total delay including stagger
  const totalDelay = delay + (staggerIndex !== undefined ? staggerIndex * 80 : 0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setIsVisible(true), totalDelay);
            // Once visible, stop observing (one-shot)
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "100px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [totalDelay]);

  const getTranslate = () => {
    const distance = 24; // Subtler than 40px — more refined
    switch (direction) {
      case "up":
        return `translateY(${distance}px)`;
      case "down":
        return `translateY(-${distance}px)`;
      case "left":
        return `translateX(${distance}px)`;
      case "right":
        return `translateX(-${distance}px)`;
      default:
        return "none";
    }
  };

  const scale = noScale ? "" : " scale(0.97)";
  const durationSec = `${duration / 1000}s`;

  // Apple-quality easing: cubic-bezier(0.25, 0.1, 0.25, 1)
  const easing = "cubic-bezier(0.25, 0.1, 0.25, 1)";

  const style: CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "none" : `${getTranslate()}${scale}`,
    filter: blur ? (isVisible ? "blur(0px)" : "blur(6px)") : undefined,
    transition: [
      `opacity ${durationSec} ${easing}`,
      `transform ${durationSec} ${easing}`,
      blur ? `filter ${durationSec} ${easing}` : "",
    ]
      .filter(Boolean)
      .join(", "),
    willChange: isVisible ? "auto" : "opacity, transform",
  };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
