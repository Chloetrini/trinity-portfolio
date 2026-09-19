"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Eye } from "lucide-react";
import { SiGithub } from "react-icons/si";

import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { buttonVariants } from "@/components/ui/button";
import { CV_URL, GITHUB_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (to: string) => (to === "/" ? pathname === "/" : pathname.startsWith(to));

  return (
    <>
      <nav className="sticky top-0 z-100 h-[72px] border-b border-border-soft bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex h-full max-w-[1180px] items-center justify-between gap-3 px-4 sm:gap-6 sm:px-7">
          <Link href="/" className="flex min-w-0 items-center gap-2.5 font-mono text-[13.5px] font-semibold sm:gap-3 sm:text-[15px]">
            <span className="flex h-8.5 w-8.5 shrink-0 items-center justify-center rounded-[10px] bg-accent text-[13px] font-bold text-accent-contrast shadow-[0_6px_20px_-6px_var(--accent)] sm:h-[38px] sm:w-[38px] sm:text-[14px]">
              ET
            </span>
            <span className="whitespace-nowrap">
              Trinity<span className="text-muted-foreground font-normal">.dev</span>
              <span className="text-blue font-normal">{" / >"}</span>
            </span>
          </Link>

          <ul className="hidden items-center gap-0.5 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  href={link.to}
                  className={cn(
                    "rounded-full px-4 py-2.5 text-[14.5px] text-muted-foreground transition-colors hover:text-foreground hover:bg-card-2",
                    isActive(link.to) && "text-foreground bg-card-2",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2.5">
            <ThemeToggle />
            <a
              href={CV_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Resume"
              className="hidden h-9.5 w-9.5 items-center justify-center rounded-[10px] border border-border bg-card text-muted-foreground transition-colors hover:text-foreground hover:border-faint sm:flex"
            >
              <Eye size={17} />
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-9.5 w-9.5 items-center justify-center rounded-[10px] border border-border bg-card text-muted-foreground transition-colors hover:text-foreground hover:border-faint"
            >
              <SiGithub size={16} />
            </a>
            <Link href="/contact" className={cn(buttonVariants({ size: "sm" }), "hidden md:inline-flex")}>
              Let&apos;s talk
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="relative flex h-9.5 w-9.5 items-center justify-center rounded-[10px] border border-border bg-card md:hidden"
            >
              <span className="relative flex h-4 w-[18px] flex-col items-center justify-center">
                <span
                  className={cn(
                    "absolute h-[1.5px] w-full rounded-full bg-foreground transition-all duration-300 ease-out",
                    open ? "translate-y-0 rotate-45" : "-translate-y-[6px] rotate-0",
                  )}
                />
                <span
                  className={cn(
                    "absolute h-[1.5px] w-full rounded-full bg-foreground transition-all duration-200 ease-out",
                    open ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100",
                  )}
                />
                <span
                  className={cn(
                    "absolute h-[1.5px] w-full rounded-full bg-foreground transition-all duration-300 ease-out",
                    open ? "translate-y-0 -rotate-45" : "translate-y-[6px] rotate-0",
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* mobile panel — full-screen, slides up from the bottom */}
      <div
        aria-hidden={!open}
        className={cn(
          "fixed inset-0 z-99 flex flex-col overflow-hidden bg-background px-8 pb-8 transition-transform duration-500 md:hidden",
          open ? "translate-y-0" : "translate-y-full",
        )}
        style={{ transitionTimingFunction: "cubic-bezier(0.32, 0.94, 0.4, 1)" }}
      >
        {/* giant faint watermark, echoes the logo monogram */}
        <span className="pointer-events-none absolute -right-3 bottom-16 font-mono text-[130px] leading-none font-bold text-foreground/5 select-none">
          ET
        </span>

        <div className="relative flex flex-1 flex-col justify-center gap-1.5">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.to}
              href={link.to}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${110 + i * 70}ms` : "0ms" }}
              className={cn(
                "w-fit py-2.5 text-[clamp(34px,10vw,44px)] leading-tight font-semibold tracking-tight transition-all duration-[400ms] ease-out",
                isActive(link.to) ? "text-accent" : "text-foreground",
                open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div
          className={cn(
            "relative flex flex-wrap items-center gap-3 border-t border-border-soft pt-6 transition-all duration-[400ms] ease-out",
            open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
          )}
          style={{ transitionDelay: open ? "380ms" : "0ms" }}
        >
          <Link href="/contact" className={cn(buttonVariants())} onClick={() => setOpen(false)}>
            Let&apos;s talk →
          </Link>
          <a
            href={CV_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "ghost" }))}
            onClick={() => setOpen(false)}
          >
            View Resume <Eye size={15} />
          </a>
        </div>
      </div>
    </>
  );
}
