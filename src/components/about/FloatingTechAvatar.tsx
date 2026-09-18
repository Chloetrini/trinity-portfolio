import { ImagePlus } from "lucide-react";
import {
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
  SiGit,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";

/**
 * Swap PLACEHOLDER for a real headshot: drop the file in src/assets/ and set
 * AVATAR_SRC below (or pass a `src` prop in) — the dashed frame + ImagePlus
 * icon is just a placeholder until then.
 */
const AVATAR_SRC: string | null = null;

const ORBIT_ICONS = [
  { Icon: SiHtml5, color: "#e34f26", top: "2%", left: "50%" },
  { Icon: SiJavascript, color: "#f7df1e", top: "14%", left: "88%" },
  { Icon: SiTypescript, color: "#3178c6", top: "50%", left: "98%" },
  { Icon: SiReact, color: "#61dafb", top: "86%", left: "88%" },
  { Icon: SiNodedotjs, color: "#5fa04e", top: "98%", left: "50%" },
  { Icon: SiExpress, color: "var(--foreground)", top: "86%", left: "12%" },
  { Icon: SiNextdotjs, color: "var(--foreground)", top: "50%", left: "2%" },
  { Icon: SiTailwindcss, color: "#38bdf8", top: "14%", left: "12%" },
  { Icon: SiGit, color: "#f05032", top: "6%", left: "72%" },
  { Icon: SiMongodb, color: "#47a248", top: "72%", left: "96%" },
  { Icon: SiPostgresql, color: "#4169e1", top: "72%", left: "4%" },
] as const;

const DELAYS = ["0s", "0.6s", "1.2s", "1.8s", "2.4s", "0.3s", "0.9s", "1.5s", "2.1s", "0.45s", "1.05s"];

export function FloatingTechAvatar() {
  return (
    <div className="relative mx-auto h-[260px] w-[260px] sm:h-[300px] sm:w-[300px]">
      {ORBIT_ICONS.map(({ Icon, color, top, left }, i) => (
        <div
          key={i}
          className="animate-float-bob absolute flex h-10.5 w-10.5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[12px] border border-border bg-card shadow-[0_10px_24px_-10px_rgba(0,0,0,0.55)]"
          style={{ top, left, animationDelay: DELAYS[i] }}
        >
          <Icon size={19} color={color} />
        </div>
      ))}

      <div className="absolute top-1/2 left-1/2 flex h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-2 rounded-full border-2 border-dashed border-border bg-card-2 text-center">
        {AVATAR_SRC ? (
          <img src={AVATAR_SRC} alt="Trinity Egbukwu" className="h-full w-full rounded-full object-cover" />
        ) : (
          <>
            <ImagePlus size={22} className="text-faint" />
            <span className="font-mono text-[10px] tracking-[0.04em] text-faint uppercase">Photo goes here</span>
          </>
        )}
      </div>
    </div>
  );
}
