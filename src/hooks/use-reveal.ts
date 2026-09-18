import { useEffect, useRef, useState } from "react";

/**
 * Adds a fade/slide-in transition once the element scrolls into view.
 * Mirrors the "reveal on scroll" behavior from the first static build,
 * just re-implemented as a hook so it composes with React instead of
 * querying the DOM after the fact.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [isIn, setIsIn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional fallback: no observer API to subscribe to, so reveal immediately
      setIsIn(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIn(true);
          io.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return { ref, isIn };
}
