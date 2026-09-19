import Link from "next/link";

import { Terminal } from "@/components/home/Terminal";
import { Reveal } from "@/components/ui/reveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const STATS = [
  { num: "3", label: "shipped products" },
  { num: "Team Lead", label: "on Eventra" },
  { num: "2026", label: "building, full-time" },
];

export function Hero() {
  return (
    <section className="px-7 pt-19 pb-10">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Reveal className="mb-6.5 inline-flex items-center gap-2.5 rounded-full border border-border bg-card py-1.5 pr-3.5 pl-2.5 font-mono text-[12.5px] text-muted-foreground">
            <span className="animate-pulse-dot h-2 w-2 rounded-full bg-[#4ade80] shadow-[0_0_0_3px_rgba(74,222,128,0.18)]" />
            Open to opportunities
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mb-5 text-[clamp(38px,6vw,68px)] leading-[1.12] font-semibold tracking-[-0.01em]">
              I build software that <span className="text-accent">actually ships.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="max-w-[60ch] text-[19px] text-muted-foreground">
              Full-stack developer shipping production web apps — event platforms, scouting dashboards,
              real-estate tools. I like turning messy problems into interfaces people don&apos;t have to think
              twice about.
            </p>
          </Reveal>

          <Reveal delay={240} className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className={cn(buttonVariants(), "transition-transform hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-12px_var(--accent)]")}
            >
              View my work
            </Link>
            <Link
              href="/contact"
              className={cn(buttonVariants({ variant: "ghost" }), "transition-transform hover:-translate-y-0.5")}
            >
              Get in touch
            </Link>
          </Reveal>

          
        </div>

        <Reveal delay={200}>
          <div className="animate-float-bob">
            <Terminal />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
