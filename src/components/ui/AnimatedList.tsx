"use client";

import { cn } from "@/lib/utils";
import { ReactNode, useEffect, useState } from "react";

interface AnimatedListProps {
  children: ReactNode[];
  className?: string;
  delay?: number;
}

export function AnimatedList({
  children,
  className,
  delay = 150,
}: AnimatedListProps) {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    children.forEach((_, index) => {
      setTimeout(() => {
        setVisibleItems((prev) => [...prev, index]);
      }, index * delay);
    });
  }, [children.length, delay]);

  return (
    <ul className={cn("space-y-3", className)}>
      {children.map((child, index) => (
        <li
          key={index}
          className={cn(
            "transition-all duration-500",
            visibleItems.includes(index)
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-4"
          )}
        >
          {child}
        </li>
      ))}
    </ul>
  );
}

export default AnimatedList;
