import Link from "next/link";
import { Code2, Users, GraduationCap } from "lucide-react";

import { Hero } from "@/components/home/Hero";
import { TechMarquee } from "@/components/home/TechMarquee";
import { ProjectRow } from "@/components/projects/ProjectRow";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { buttonVariants } from "@/components/ui/button";
import { PROJECTS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const PRINCIPLES = [
  {
    icon: Code2,
    title: "Full-stack by default",
    body: "Comfortable owning a feature end to end — schema, API, state, and the pixels users actually touch.",
  },
  {
    icon: Users,
    title: "Led a team, shipped on deadline",
    body: "Ran frontend and backend for Eventra as team lead — planning, code review, and keeping scope honest.",
  },
  {
    icon: GraduationCap,
    title: "Research-grade attention to detail",
    body: "Structured problem-solving habits carried over: I test assumptions, measure outcomes, and don't ship guesses.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <TechMarquee />

      <section id="work" className="px-7 py-24">
        <div className="mx-auto max-w-[1180px]">
          <Eyebrow>Featured work</Eyebrow>
          <Reveal>
            <h2 className="text-[clamp(28px,4vw,42px)] font-semibold">A few things I&apos;ve shipped</h2>
          </Reveal>
          <Reveal className="mt-3.5">
            <p className="max-w-[60ch] text-[19px] text-muted-foreground">
              Not an exhaustive list — just the ones I&apos;m proudest of. Full case list is on the{" "}
              <Link href="/projects" className="text-accent underline">
                projects page
              </Link>
              .
            </p>
          </Reveal>

          <div className="mt-15">
            {PROJECTS.map((project, i) => (
              <ProjectRow key={project.slug} project={project} reverse={i % 2 === 1} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-7 py-16">
        <div className="mx-auto max-w-[1180px]">
          <Eyebrow>How I work</Eyebrow>
          <Reveal>
            <h2 className="text-[clamp(28px,4vw,42px)] font-semibold">First-class precision, dev-team pace</h2>
          </Reveal>

          <div className="mt-15 grid grid-cols-1 gap-5 md:grid-cols-3">
            {PRINCIPLES.map((p) => (
              <Reveal key={p.title} className="rounded-[14px] border border-border bg-card p-6.5">
                <div className="mb-4 flex h-10.5 w-10.5 items-center justify-center rounded-[10px] bg-accent/10 text-accent">
                  <p.icon size={20} />
                </div>
                <h4 className="mb-2.5 text-[17px] font-semibold">{p.title}</h4>
                <p className="text-[14.5px] text-muted-foreground">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-7 py-24">
        <div className="mx-auto max-w-[1180px]">
          <Reveal className="rounded-[22px] border border-border bg-card p-14 text-center">
            <Eyebrow center>Let&apos;s build something</Eyebrow>
            <h2 className="text-[clamp(28px,4vw,42px)] font-semibold">Got a product that needs shipping?</h2>
            <p className="mx-auto mt-4 mb-7.5 max-w-[50ch] text-muted-foreground">
              I&apos;m open to new roles and freelance work. Always happy to talk through an idea.
            </p>
            <Link href="/contact" className={cn(buttonVariants())}>
              Say hello →
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
