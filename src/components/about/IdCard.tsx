import { Download } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { CV_URL, GITHUB_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

const FIELDS = [
  { k: "Education", v: "Obafemi Awolowo University" },
  { k: "Honours", v: "First Class Honours" },
  { k: "Internships", v: "Tech studio (Jul–Sep 2026) · HNG Internship (from Sep 28, 2026)" },
  { k: "Looking ahead", v: "Master's abroad — Canada, then US" },
];

export function IdCard() {
  return (
    <div className="rounded-[22px] border border-border bg-card p-7">
      <div className="mb-4.5 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent font-mono text-[22px] font-bold text-accent-contrast">
        ET
      </div>
      <h3 className="mb-1 text-xl font-semibold">Trinity Egbukwu</h3>
      <p className="text-sm text-muted-foreground">Full-Stack Developer</p>

      {FIELDS.map((f) => (
        <div key={f.k} className="border-t border-border-soft py-3">
          <div className="mb-1 font-mono text-[11px] tracking-[0.06em] text-faint uppercase">{f.k}</div>
          <div className="text-sm">{f.v}</div>
        </div>
      ))}

      <div className="border-t border-border-soft py-3">
        <div className="mb-1 font-mono text-[11px] tracking-[0.06em] text-faint uppercase">Find me</div>
        <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-accent">
          github.com/Chloetrini
        </a>
      </div>

      <a href={CV_URL} download className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "mt-4 w-full")}>
        Download CV <Download size={14} />
      </a>
    </div>
  );
}
