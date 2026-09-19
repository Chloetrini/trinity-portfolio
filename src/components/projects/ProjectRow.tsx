import { ExternalLink, CheckCircle2 } from "lucide-react";

import { PhoneMockup } from "@/components/ui/phone-mockup";
import { Reveal } from "@/components/ui/reveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/project";

interface ProjectRowProps {
  project: Project;
  reverse?: boolean;
  showAdmin?: boolean;
  showLongDescription?: boolean;
}

export function ProjectRow({ project, reverse = false, showAdmin = false, showLongDescription = false }: ProjectRowProps) {
  return (
    <Reveal
      className={cn(
        "grid grid-cols-1 items-center gap-10 border-b border-border-soft py-12 last:border-b-0 md:gap-16 md:py-18",
        "md:grid-cols-[0.85fr_1.15fr]",
        reverse && "md:grid-cols-[1.15fr_0.85fr]",
      )}
    >
      <div className={cn("flex justify-center transition-transform duration-500 hover:-translate-y-2", reverse && "md:order-2")}>
        <PhoneMockup src={project.mobileShot} alt={`${project.name} homepage on mobile`} />
      </div>

      <div className={cn(reverse && "md:order-1")}>
        <span className="mb-2.5 block font-mono text-[12.5px] text-faint">
          {project.index} · {project.category}
        </span>
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 font-mono text-xs text-accent">
          {project.role}
        </div>
        <h3 className="mb-3.5 text-[clamp(24px,3vw,32px)] font-semibold">{project.name}</h3>
        <p className="mb-3 max-w-[46ch] text-[15.5px] text-muted-foreground">{project.description}</p>
        {showLongDescription && project.descriptionLong && (
          <p className="mb-3 max-w-[46ch] text-[15.5px] text-muted-foreground">{project.descriptionLong}</p>
        )}

        <ul className="mt-5 mb-6 max-w-[46ch] space-y-2.5">
          {project.highlights.map((point) => (
            <li key={point} className="flex items-start gap-2.5 text-[14.5px] text-muted-foreground">
              <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <div className="mb-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-1.5 font-mono text-[12.5px] text-muted-foreground transition-colors hover:border-accent/40 hover:text-accent"
            >
              &lt;/&gt; {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-2.5">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: showAdmin ? "primary" : "ghost", size: "sm" }))}
          >
            Live site <ExternalLink size={13} />
          </a>
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}
          >
            Source <ExternalLink size={13} />
          </a>
        </div>

        {showAdmin && project.adminShot && (
          <div className="mt-6.5 overflow-hidden rounded-[14px] border border-border shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]">
            <div className="flex items-center gap-1.5 border-b border-border-soft bg-card-2 px-3 py-2.5">
              <span className="h-2 w-2 rounded-full bg-border" />
              <span className="h-2 w-2 rounded-full bg-border" />
              <span className="h-2 w-2 rounded-full bg-border" />
              <span className="ml-2 font-mono text-[11px] text-faint">{project.adminLabel}</span>
            </div>
            <img src={project.adminShot} alt={`${project.name} admin dashboard`} className="block w-full" />
          </div>
        )}
      </div>
    </Reveal>
  );
}
