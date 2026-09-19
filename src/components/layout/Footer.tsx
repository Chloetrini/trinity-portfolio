import Link from "next/link";
import { Mail } from "lucide-react";
import { SiGithub } from "react-icons/si";

import { EMAIL, GITHUB_URL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="relative z-1 mt-15 border-t border-border-soft px-7 pt-14 pb-8">
      <div className="mx-auto max-w-[1180px]">
        <div className="flex flex-wrap items-start justify-between gap-10 pb-9">
          <div>
            <Link href="/" className="flex items-center gap-3 font-mono text-[15px] font-semibold">
              <span className="flex h-[38px] w-[38px] items-center justify-center rounded-[10px] bg-accent text-[14px] font-bold text-accent-contrast">
                ET
              </span>
              <span className="whitespace-nowrap">
                Trinity<span className="text-muted-foreground font-normal">.dev</span>
                <span className="text-blue font-normal">{"</>"}</span>
              </span>
            </Link>
            <p className="mt-3.5 max-w-[34ch] text-sm text-muted-foreground">
              Full-stack developer building fast, usable products — from event platforms to scouting
              dashboards. First-class honours grad turned engineer.
            </p>
          </div>

          <div className="flex flex-wrap gap-14">
            <div>
              <h5 className="mb-3.5 font-mono text-xs tracking-[0.08em] text-faint uppercase">Site</h5>
              <Link href="/" className="block py-1 text-sm text-muted-foreground hover:text-accent">
                Home
              </Link>
              <Link href="/about" className="block py-1 text-sm text-muted-foreground hover:text-accent">
                About
              </Link>
              <Link href="/projects" className="block py-1 text-sm text-muted-foreground hover:text-accent">
                Projects
              </Link>
              <Link href="/contact" className="block py-1 text-sm text-muted-foreground hover:text-accent">
                Contact
              </Link>
            </div>
            <div>
              <h5 className="mb-3.5 font-mono text-xs tracking-[0.08em] text-faint uppercase">Elsewhere</h5>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block py-1 text-sm text-muted-foreground hover:text-accent"
              >
                GitHub
              </a>
              <a href={`mailto:${EMAIL}`} className="block py-1 text-sm text-muted-foreground hover:text-accent">
                Email
              </a>
            </div>
            <div>
              <h5 className="mb-3.5 font-mono text-xs tracking-[0.08em] text-faint uppercase">Status</h5>
              <span className="block py-1 font-mono text-[13px] text-accent">Open to opportunities</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border-soft pt-6 font-mono text-[12.5px] text-faint">
          <span>© {new Date().getFullYear()} Trinity Egbukwu. Built with React, TypeScript &amp; Tailwind.</span>
          <div className="flex gap-2.5">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-9.5 w-9.5 items-center justify-center rounded-[10px] border border-border"
            >
              <SiGithub size={15} />
            </a>
            <a
              href={`mailto:${EMAIL}`}
              aria-label="Email"
              className="flex h-9.5 w-9.5 items-center justify-center rounded-[10px] border border-border"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
