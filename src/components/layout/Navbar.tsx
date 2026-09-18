"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Download } from "lucide-react";
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
        <div className="mx-auto flex h-full max-w-[1180px] items-center justify-between gap-6 px-7">
          <Link href="/" className="flex items-center gap-3 font-mono text-[15px] font-semibold">
            <span className="flex h-[38px] w-[38px] items-center justify-center rounded-[10px] bg-accent text-[14px] font-bold text-accent-contrast shadow-[0_6px_20px_-6px_var(--accent)]">
              ET
            </span>
            <span>
              Trinity<span className="text-muted-foreground font-normal">.dev</span>
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
              download
              aria-label="Download CV"
              className="hidden h-9.5 w-9.5 items-center justify-center rounded-[10px] border border-border bg-card text-muted-foreground transition-colors hover:text-foreground hover:border-faint sm:flex"
            >
              <Download size={17} />
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
              aria-label="Open menu"
              className="flex h-9.5 w-9.5 items-center justify-center rounded-[10px] border border-border bg-card md:hidden"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-x-0 top-[72px] bottom-0 z-99 flex flex-col gap-1 overflow-y-auto bg-background px-7 py-5 md:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              href={link.to}
              onClick={() => setOpen(false)}
              className="border-b border-border-soft py-4 text-xl font-medium"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className={cn(buttonVariants(), "mt-5")} onClick={() => setOpen(false)}>
            Let&apos;s talk →
          </Link>
          <a
            href={CV_URL}
            download
            className={cn(buttonVariants({ variant: "ghost" }), "mt-2.5")}
            onClick={() => setOpen(false)}
          >
            Download CV <Download size={15} />
          </a>
        </div>
      )}
    </>
  );
}
