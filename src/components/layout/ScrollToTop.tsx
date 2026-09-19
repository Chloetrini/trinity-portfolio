"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

/**
 * A pinned button that appears once the visitor has scrolled down a bit,
 * and smooth-scrolls the page back to the top when clicked.
 */
export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed right-3 bottom-4 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/90 text-foreground shadow-[0_20px_45px_-20px_rgba(0,0,0,0.55)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:text-accent active:-translate-y-1 active:border-accent/40 active:text-accent sm:right-6 sm:bottom-6 sm:h-11 sm:w-11"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <ArrowUp size={18} />
    </button>
  );
}
