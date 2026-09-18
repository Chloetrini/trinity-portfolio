import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: ReactNode;
  center?: boolean;
  className?: string;
}

export function Eyebrow({ children, center = false, className }: EyebrowProps) {
  return (
    <div
      className={cn(
        "mb-4.5 flex items-center gap-2.5 font-mono text-[12.5px] tracking-[0.12em] text-accent uppercase",
        "before:inline-block before:h-px before:w-5.5 before:bg-accent before:content-['']",
        center && "justify-center",
        className,
      )}
    >
      {children}
    </div>
  );
}
