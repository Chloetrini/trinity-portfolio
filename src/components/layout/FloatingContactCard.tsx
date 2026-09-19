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
      className="fixed bottom-6 left-6 z-50 hidden transition-all duration-700 ease-out md:block"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <div className="flex items-center gap-3 rounded-full border border-border bg-card/90 py-2 pr-2 pl-3.5 shadow-[0_20px_45px_-20px_rgba(0,0,0,0.55)] backdrop-blur-xl">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent font-mono text-[11px] font-bold text-accent-contrast">
          ET
        </span>
        <div className="leading-tight">
          <div className="text-[13px] font-semibold">Trinity Egbukwu</div>
          <div className="font-mono text-[10.5px] text-faint">Full-Stack Developer</div>
        </div>
        <Link
          href="/contact"
          className="ml-1 flex items-center gap-1 rounded-full bg-foreground px-3.5 py-2 text-[12.5px] font-medium text-background transition-opacity hover:opacity-85"
        >
          Get in Touch <ArrowUpRight size={13} />
        </Link>
      </div>
    </div>
  );
}
