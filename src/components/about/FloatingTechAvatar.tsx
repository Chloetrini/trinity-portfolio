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

const AVATAR_SRC = "/avatar.jpg";

/**
 * Each icon orbits the avatar on its own ring. `offset` spreads icons
 * evenly around the circle at rest; `radius` puts them on one of two
 * rings so they don't all trace the same path; `duration` + `reverse`
 * vary the speed/direction per icon for an organic, non-mechanical feel.
 */
const ORBIT_ICONS = [
  { Icon: SiHtml5, color: "#e34f26", offset: 0, radius: 100, duration: 22, reverse: false },
  { Icon: SiJavascript, color: "#f7df1e", offset: 33, radius: 128, duration: 30, reverse: true },
  { Icon: SiTypescript, color: "#3178c6", offset: 65, radius: 100, duration: 24, reverse: false },
  { Icon: SiReact, color: "#61dafb", offset: 98, radius: 128, duration: 32, reverse: true },
  { Icon: SiNodedotjs, color: "#5fa04e", offset: 131, radius: 100, duration: 20, reverse: false },
  { Icon: SiExpress, color: "var(--foreground)", offset: 164, radius: 128, duration: 28, reverse: true },
  { Icon: SiNextdotjs, color: "var(--foreground)", offset: 196, radius: 100, duration: 26, reverse: false },
  { Icon: SiTailwindcss, color: "#38bdf8", offset: 229, radius: 128, duration: 34, reverse: true },
  { Icon: SiGit, color: "#f05032", offset: 262, radius: 100, duration: 23, reverse: false },
  { Icon: SiMongodb, color: "#47a248", offset: 295, radius: 128, duration: 29, reverse: true },
  { Icon: SiPostgresql, color: "#4169e1", offset: 327, radius: 100, duration: 25, reverse: false },
] as const;

export function FloatingTechAvatar() {
  return (
    <div className="relative mx-auto h-[280px] w-[280px] sm:h-[320px] sm:w-[320px]">
      {ORBIT_ICONS.map(({ Icon, color, offset, radius, duration, reverse }, i) => (
        <div
          key={i}
          className="absolute top-1/2 left-1/2 h-0 w-0"
          style={{ transform: `rotate(${offset}deg)` }}
        >
          <div
            className="h-0 w-0"
            style={{
              animation: `${reverse ? "orbit-spin-reverse" : "orbit-spin"} ${duration}s linear infinite`,
            }}
          >
            <div
              className="absolute flex h-10.5 w-10.5 items-center justify-center rounded-[12px] border border-border bg-card shadow-[0_10px_24px_-10px_rgba(0,0,0,0.55)]"
              style={{
                top: 0,
                left: radius,
                animation: `${reverse ? "orbit-counter-reverse" : "orbit-counter"} ${duration}s linear infinite`,
              }}
            >
              <Icon size={19} color={color} />
            </div>
          </div>
        </div>
      ))}

      <div className="absolute top-1/2 left-1/2 h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-2 border-border bg-card-2">
        <img src={AVATAR_SRC} alt="Trinity Egbukwu" className="h-full w-full object-cover" />
      </div>
    </div>
  );
}
