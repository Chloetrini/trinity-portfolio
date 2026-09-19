"use client";

import type { ReactNode } from "react";

import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section";
  /** Stagger the entrance by this many milliseconds. */
  delay?: number;
}

export function Reveal({ children, className, as = "div", delay = 0 }: RevealProps) {
  const { ref, isIn } = useReveal<HTMLDivElement>();
  const Tag = as;

  return (
    <Tag
      ref={ref as never}
      className={cn(
        "transition-all duration-700 ease-out",
        isIn ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0",
        className,
      )}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
