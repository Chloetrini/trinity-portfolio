"use client";

import { useTypewriter } from "@/hooks/use-typewriter";

const tech = (name: string) => `<span class="text-accent">'${name}'</span>`;
const bool = (v: boolean) => `<span class="text-blue">${v}</span>`;

const STACK = ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL"];

const SCRIPT = [
  '<span class="text-pink">const</span> developer = {\n',
  '  <span class="text-pink">name</span>: <span class="text-accent">\'Trinity Egbukwu\'</span>,\n',
  '  <span class="text-pink">role</span>: <span class="text-accent">\'Full-Stack Developer\'</span>,\n',
  '  <span class="text-pink">stack</span>: [',
  STACK.map((name) => tech(name)).join(", "),
  ', <span class="text-faint">/* + more */</span>],\n',
  '  <span class="text-pink">openTo</span>: <span class="text-accent">\'new opportunities\'</span>,\n',
  `  <span class="text-pink">hardWorker</span>: ${bool(true)},\n`,
  `  <span class="text-pink">problemSolver</span>: ${bool(true)},\n`,
  `  <span class="text-pink">manUtdFan</span>: ${bool(true)},\n`,
  '  <span class="text-pink">hireable</span>: <span class="text-pink">()</span> <span class="text-blue">=&gt;</span> {\n',
  '    <span class="text-pink">return</span> <span class="text-pink">this</span>.hardWorker && <span class="text-pink">this</span>.problemSolver;\n',
  "  },\n",
  '<span class="text-blue">};</span>\n\n',
  '<span class="text-faint">// building things that ship.</span>',
].join("");

export function Terminal() {
  const { targetRef, output, done } = useTypewriter(SCRIPT, 8);

  return (
    <div
      ref={targetRef as never}
      className="overflow-hidden rounded-[22px] border border-border bg-card shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]"
    >
      <div className="flex items-center gap-2 border-b border-border-soft bg-card-2 px-4 py-3.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#f47174]" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#4ade80]" />
        <span className="ml-1.5 font-mono text-xs text-faint">about-me.ts</span>
      </div>
      <pre className="min-h-[260px] p-5.5 font-mono text-[13.5px] leading-[1.85] whitespace-pre-wrap">
        <span dangerouslySetInnerHTML={{ __html: output }} />
        {!done && <span className="caret-blink ml-0.5 inline-block h-4 w-2 translate-y-0.5 bg-accent" />}
      </pre>
    </div>
  );
}
