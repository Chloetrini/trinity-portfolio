"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

/**
 * Small pinned card (name + role + a "Get in Touch" CTA) that stays fixed
 * on screen, like the floating card on mosesnwigberi.com. Fades/slides in
 * shortly after load, and hides itself on the contact page (no point
 * pointing at a CTA for the page you're already on).
 */
export function FloatingContactCard() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1700);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className="fixed bottom-4 left-3 z-50 transition-all duration-700 ease-out sm:bottom-6 sm:left-6"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <div className="flex items-center gap-2 rounded-full border border-border bg-card/90 py-1.5 pr-1.5 pl-2.5 shadow-[0_20px_45px_-20px_rgba(0,0,0,0.55)] backdrop-blur-xl sm:gap-3 sm:py-2 sm:pr-2 sm:pl-3.5">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent font-mono text-[10px] font-bold text-accent-contrast sm:h-8 sm:w-8 sm:text-[11px]">
          ET
        </span>
        <div className="hidden leading-tight sm:block">
          <div className="text-[13px] font-semibold">Trinity Egbukwu</div>
          <div className="font-mono text-[10.5px] text-faint">Full-Stack Developer</div>
        </div>
        <div className="leading-tight sm:hidden">
          <div className="text-[11.5px] font-semibold whitespace-nowrap">Trinity Egbukwu</div>
        </div>
        <Link
          href="/contact"
          className="ml-0.5 flex shrink-0 items-center gap-1 rounded-full bg-foreground px-2.5 py-1.5 text-[11px] font-medium whitespace-nowrap text-background transition-opacity hover:opacity-85 sm:ml-1 sm:px-3.5 sm:py-2 sm:text-[12.5px]"
        >
          Get in Touch <ArrowUpRight size={12} className="hidden sm:inline" />
        </Link>
      </div>
    </div>
  );
}
