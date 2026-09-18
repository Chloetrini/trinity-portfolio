import { TECH_MARQUEE } from "@/lib/constants";

export function TechMarquee() {
  const items = [...TECH_MARQUEE, ...TECH_MARQUEE];

  return (
    <div className="overflow-hidden border-y border-border-soft bg-card py-6.5">
      <div className="animate-marquee flex w-max gap-13">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-2.5 font-mono text-sm whitespace-nowrap text-muted-foreground"
          >
            &lt;/&gt; {item}
          </span>
        ))}
      </div>
    </div>
  );
}
