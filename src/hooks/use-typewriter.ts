import { useEffect, useRef, useState } from "react";

/**
 * Types out an HTML string a few characters at a time, without ever
 * splitting mid-tag (which would leave a dangling "<spa" on screen for
 * a frame). Starts once the target element scrolls into view.
 */
export function useTypewriter(html: string, speed = 8) {
  const targetRef = useRef<HTMLElement | null>(null);
  const [output, setOutput] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    const el = targetRef.current;
    if (!el) return;

    let started = false;
    let timeoutId: number;

    const type = () => {
      let pos = 0;
      const step = () => {
        let end = Math.min(pos + 6, html.length);
        const slice = html.slice(pos, end);
        const tagOpen = slice.lastIndexOf("<");
        const tagClose = slice.lastIndexOf(">");
        if (tagOpen > tagClose) {
          const fullTagEnd = html.indexOf(">", pos + tagOpen);
          end = fullTagEnd === -1 ? html.length : fullTagEnd + 1;
        }
        setOutput(html.slice(0, end));
        pos = end;
        if (pos < html.length) {
          timeoutId = window.setTimeout(step, speed);
        } else {
          setDone(true);
        }
      };
      step();
    };

    if (!("IntersectionObserver" in window)) {
      type();
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          started = true;
          type();
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);

    return () => {
      io.disconnect();
      window.clearTimeout(timeoutId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { targetRef, output, done };
}
