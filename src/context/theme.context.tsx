"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_KEY = "trinity-portfolio-theme";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "dark";

  // The blocking script in layout.tsx already applied the right class
  // before hydration — read it back so React's first client render
  // matches what's already on the page (no flash, no mismatch).
  if (document.documentElement.classList.contains("light")) return "light";

  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === "light" || saved === "dark") return saved;

  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  return prefersLight ? "light" : "dark";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Dark on the server, resolved for real on the client in the first
  // effect below. This has to run after mount rather than in a lazy
  // useState initializer: ThemeToggle renders a different icon per
  // theme, and computing the real theme during the first client render
  // (before React's hydration pass reconciles against the server HTML)
  // would make that icon mismatch what the server sent, causing a
  // genuine hydration error. Settling one tick later avoids that.
  const [theme, setThemeState] = useState<Theme>("dark");

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional: syncs from a browser-only source (localStorage/DOM class) that isn't available during SSR, see comment above
    setThemeState(getInitialTheme());
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("light", theme === "light");
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const setTheme = (t: Theme) => setThemeState(t);
  const toggleTheme = () => setThemeState((prev) => (prev === "light" ? "dark" : "light"));

  return <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
