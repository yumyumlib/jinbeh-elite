"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface WordRotateProps {
  words: string[];
  className?: string;
  duration?: number;
}

export function WordRotate({
  words,
  className,
  duration = 3000,
}: WordRotateProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
        setIsAnimating(false);
      }, 300);
    }, duration);

    return () => clearInterval(interval);
  }, [words.length, duration]);

  return (
    // `block` + `max-w-full` lets long hooks wrap on narrow viewports instead of
    // overflowing the parent (which previously caused left-edge text clipping in the hero).
    <span
      className={cn(
        "block relative w-full max-w-full text-balance break-words",
        className
      )}
    >
      <span
        className={cn(
          "block transition-all duration-300",
          isAnimating
            ? "opacity-0 translate-y-4 blur-sm"
            : "opacity-100 translate-y-0 blur-0"
        )}
      >
        {words[currentIndex]}
      </span>
    </span>
  );
}

export default WordRotate;
