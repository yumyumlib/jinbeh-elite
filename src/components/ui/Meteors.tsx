"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface MeteorsProps {
  number?: number;
  className?: string;
}

export function Meteors({ number = 20, className }: MeteorsProps) {
  const [meteorStyles, setMeteorStyles] = useState<Array<{
    top: string;
    left: string;
    animationDelay: string;
    animationDuration: string;
  }>>([]);

  useEffect(() => {
    const styles = [...Array(number)].map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${Math.random() * 8 + 4}s`,
    }));
    setMeteorStyles(styles);
  }, [number]);

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {meteorStyles.map((style, idx) => (
        <span
          key={idx}
          className={cn(
            "absolute h-0.5 w-0.5 rotate-[215deg] animate-meteor rounded-[9999px] bg-soft-gold/80 shadow-[0_0_0_1px_rgba(201,162,39,0.1)]",
            "before:content-[''] before:absolute before:top-1/2 before:h-px before:w-[50px] before:-translate-y-1/2 before:transform",
            "before:bg-gradient-to-r before:from-soft-gold/80 before:to-transparent"
          )}
          style={{
            top: style.top,
            left: style.left,
            animationDelay: style.animationDelay,
            animationDuration: style.animationDuration,
          }}
        />
      ))}
    </div>
  );
}

export default Meteors;
