import Link from "next/link";

import { IdCard } from "@/components/about/IdCard";
import { FloatingTechAvatar } from "@/components/about/FloatingTechAvatar";
import { Timeline } from "@/components/about/Timeline";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function AboutPage() {
  return (
    <>
      <section className="px-7 pt-16 pb-10">
        <div className="mx-auto max-w-[1180px]">
          <Eyebrow className="mb-5.5">About</Eyebrow>
          <h1 className="text-[clamp(38px,6vw,68px)] leading-[1.12] font-semibold tracking-[-0.01em]">
            Full-stack developer, working with teams worldwide.
          </h1>
          <p className="mt-4.5 max-w-[60ch] text-[19px] text-muted-foreground">
            Based in Lagos, Nigeria — remote-first, and comfortable owning a project end to end wherever the
            team sits.
          </p>
        </div>
      </section>

      <section className="px-7 py-16">
        <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-start gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-8 lg:sticky lg:top-[96px]">
            <Reveal>
              <FloatingTechAvatar />
            </Reveal>
            <Reveal>
              <IdCard />
            </Reveal>
          </div>

          <div>
            <Reveal>
              <p className="text-base text-foreground">
                I&apos;m a full-stack developer based in Lagos, Nigeria, building production web apps — event
                platforms, scouting dashboards, real-estate tools — for clients and teams around the world.
                Full education and background details are on my CV; here, it&apos;s just about the work.
              </p>
            </Reveal>

            <Reveal className="my-10 border-l-2 border-accent pl-5.5 text-[21px] leading-[1.5] font-medium">
              I&apos;d rather test an assumption than ship a guess.
            </Reveal>

            <Timeline />
          </div>
        </div>
      </section>

      <section className="px-7 py-24">
        <div className="mx-auto max-w-[1180px]">
          <Reveal className="rounded-[22px] border border-border bg-card p-14 text-center">
            <Eyebrow center>Curious about the work itself?</Eyebrow>
            <h2 className="text-[clamp(28px,4vw,42px)] font-semibold">See what I&apos;ve actually built</h2>
            <p className="mx-auto mt-4 mb-7.5 max-w-[50ch] text-muted-foreground">
              A curated look at the products I&apos;ve shipped — not a dump of every repo.
            </p>
            <Link href="/projects" className={cn(buttonVariants())}>
              View projects →
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
