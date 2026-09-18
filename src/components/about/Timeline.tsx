import { Reveal } from "@/components/ui/reveal";
import { TIMELINE } from "@/lib/timeline";

export function Timeline() {
  return (
    <div className="mt-15">
      {TIMELINE.map((entry) => (
        <Reveal
          key={entry.title}
          className="grid grid-cols-[90px_1fr] gap-5.5 border-b border-border-soft py-6.5 last:border-b-0 md:gap-5.5"
        >
          <div className="pt-0.5 font-mono text-[12.5px] text-faint">{entry.when}</div>
          <div>
            <span className="mb-2.5 inline-block rounded-md bg-accent/10 px-2.5 py-0.5 font-mono text-[11px] text-accent">
              {entry.tag}
            </span>
            <h4 className="mb-2 text-[17px] font-semibold">{entry.title}</h4>
            <p className="text-[14.5px] text-muted-foreground">{entry.body}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
