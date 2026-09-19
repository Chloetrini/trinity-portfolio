"use client";

import { useEffect, useRef } from "react";

/**
 * A soft glowing blob that trails the cursor and grows over clickable
 * elements — desktop-only (skipped on touch devices), and always
 * pointer-events-none so it never blocks a real click.
 */
export function CursorGlow() {
  const dotRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const scale = useRef(1);
  const targetScale = useRef(1);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const el = dotRef.current;
    if (!el) return;

    let raf = 0;

    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      const hovered = (e.target as HTMLElement)?.closest?.("a, button, input, textarea, [role='button']");
      targetScale.current = hovered ? 2.6 : 1;
    };

    const tick = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.18;
      pos.current.y += (target.current.y - pos.current.y) * 0.18;
      scale.current += (targetScale.current - scale.current) * 0.15;
      el.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%) scale(${scale.current})`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[150] hidden h-8 w-8 rounded-full bg-accent/30 blur-md md:block"
      style={{ willChange: "transform" }}
    />
  );
}
