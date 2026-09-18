"use client";

import { Moon, Sun } from "lucide-react";

import { useTheme } from "@/context/theme.context";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
      className="flex h-9.5 w-9.5 items-center justify-center rounded-[10px] border border-border bg-card text-muted-foreground transition-colors hover:text-foreground hover:border-faint"
    >
      {isLight ? <Moon size={17} /> : <Sun size={17} />}
    </button>
  );
}
