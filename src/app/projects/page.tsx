import { ProjectRow } from "@/components/projects/ProjectRow";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { buttonVariants } from "@/components/ui/button";
import { GITHUB_URL, PROJECTS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const FILTERS = ["Full-stack", "React + TypeScript", "Team lead & solo"];

export default function ProjectsPage() {
  return (
    <>
      <section className="px-7 pt-16 pb-10">
        <div className="mx-auto max-w-[1180px]">
          <Eyebrow className="mb-5.5">Selected work</Eyebrow>
          <h1 className="text-[clamp(38px,6vw,68px)] leading-[1.12] font-semibold tracking-[-0.01em]">
            Projects
          </h1>
          <p className="mt-4.5 max-w-[60ch] text-[19px] text-muted-foreground">
            Three products, three different problems — a curated set, not a full repo dump. Each one shipped
            to production, not just a local demo.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <span key={f} className="rounded-full border border-border px-3.5 py-1.5 font-mono text-[12.5px] text-muted-foreground">
                {f}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-7 py-10">
        <div className="mx-auto max-w-[1180px]">
          {PROJECTS.map((project) => (
            <ProjectRow key={project.slug} project={project} showAdmin showLongDescription />
          ))}
        </div>
      </section>

      <section className="px-7 py-24">
        <div className="mx-auto max-w-[1180px]">
          <Reveal className="rounded-[22px] border border-border bg-card p-14 text-center">
            <Eyebrow center>More in the repos</Eyebrow>
            <h2 className="text-[clamp(28px,4vw,42px)] font-semibold">Want to see the code?</h2>
            <p className="mx-auto mt-4 mb-7.5 max-w-[50ch] text-muted-foreground">
              Everything above is open on GitHub — architecture, commit history, all of it.
            </p>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants())}>
              Visit GitHub →
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
