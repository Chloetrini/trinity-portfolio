"use client";

import { useEffect, useState } from "react";

const NAME = "Egbukwu Trinity";
const TYPE_SPEED = 55;

/**
 * Full-screen name reveal shown once when the site first loads — mounted
 * in the root layout, so it only fires on a fresh page load, not on
 * client-side navigation between routes. Types the name out letter by
 * letter, holds briefly, then fades away.
 */
export function IntroSplash() {
  const [phase, setPhase] = useState<"in" | "out" | "gone">("in");
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let i = 0;
    const typeTimer = window.setInterval(() => {
      i += 1;
      setTyped(NAME.slice(0, i));
      if (i >= NAME.length) window.clearInterval(typeTimer);
    }, TYPE_SPEED);

    const holdDelay = NAME.length * TYPE_SPEED + 700;
    const hold = setTimeout(() => setPhase("out"), holdDelay);
    const remove = setTimeout(() => setPhase("gone"), holdDelay + 550);

    return () => {
      window.clearInterval(typeTimer);
      clearTimeout(hold);
      clearTimeout(remove);
    };
  }, []);

  if (phase === "gone") return null;

  const doneTyping = typed.length === NAME.length;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-background transition-opacity duration-500 ease-out"
      style={{ opacity: phase === "out" ? 0 : 1, pointerEvents: phase === "out" ? "none" : "auto" }}
    >
      <h1 className="font-mono text-[clamp(28px,6.5vw,58px)] font-semibold tracking-[-0.01em]">
        {typed}
        <span
          className="caret-blink ml-1 inline-block h-[0.85em] w-[3px] translate-y-[0.1em] bg-accent"
          style={{ opacity: doneTyping ? 1 : 0.9 }}
        />
      </h1>
    </div>
  );
}
