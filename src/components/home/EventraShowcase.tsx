import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { PROJECTS } from "@/lib/constants";

/**
 * Combined laptop + phone device mockup for Eventra, presented together
 * like the "Selected Works" showcase on mosesnwigberi.com.
 */
export function EventraShowcase() {
  const eventra = PROJECTS.find((p) => p.slug === "eventra")!;

  return (
    <section className="overflow-hidden bg-[#08090b] px-7 py-24 text-[#eceef1]">
      <div className="mx-auto max-w-[1180px]">
        <Eyebrow>In the wild</Eyebrow>
        <Reveal>
          <h2 className="text-[clamp(28px,4vw,42px)] font-semibold">Eventra, on every screen</h2>
        </Reveal>
        <Reveal className="mt-3.5">
          <p className="max-w-[60ch] text-[19px] text-white/60">
            Same product, built to feel native whether an organizer is running the show from a laptop or a
            guest is scanning in from their phone at the door.
          </p>
        </Reveal>

        {/* laptop + phone, overlapping, both scaled down together on small screens instead of stacking or disappearing */}
        <Reveal className="relative mt-16 flex items-end justify-center gap-0 py-6 sm:py-10">
          {/* laptop */}
          <div className="relative mr-[-18px] w-full max-w-[220px] transition-transform duration-500 hover:-translate-y-2 active:-translate-y-2 sm:mr-[-31px] sm:max-w-[380px] md:mr-[-60px] md:max-w-[720px]">
            <div className="rounded-t-[10px] rounded-b-[3px] border-[5px] border-b-0 border-[#1c1e23] bg-[#050506] p-1 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)] sm:rounded-t-[14px] sm:rounded-b-[4px] sm:border-[10px] sm:p-2 sm:shadow-[0_40px_90px_-30px_rgba(0,0,0,0.8)]">
              <div className="aspect-16/10 overflow-hidden rounded-[3px] bg-black sm:rounded-[6px]">
                <img
                  src={eventra.desktopHomeShot ?? eventra.mobileShot}
                  alt="Eventra home page"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
            <div className="mx-auto h-1.5 w-[85%] rounded-b-[4px] bg-gradient-to-b from-[#26282e] to-[#1c1e23] sm:h-3 sm:rounded-b-[8px]" />
            <div className="mx-auto h-1 w-[55%] rounded-b-[3px] bg-[#141519] sm:h-1.5 sm:rounded-b-[6px]" />
          </div>

          {/* phone, overlapping the laptop's bottom-right corner */}
          <div className="animate-float-bob relative z-1 w-[clamp(70px,24vw,240px)] shrink-0 transition-transform duration-500 hover:-translate-y-2 active:-translate-y-2">
            <div
              className="relative w-full rounded-[18px] bg-[#050506] p-1 shadow-[0_15px_35px_-15px_rgba(0,0,0,0.85)] ring-1 ring-[#2a2c31] sm:rounded-[42px] sm:p-3 sm:shadow-[0_35px_80px_-25px_rgba(0,0,0,0.85)] sm:ring-2"
              style={{ aspectRatio: "430 / 932" }}
            >
              <div className="absolute top-1 left-1/2 z-2 h-[8px] w-[34px] -translate-x-1/2 rounded-full bg-[#050506] sm:top-3 sm:h-[24px] sm:w-[92px]" />
              <div className="relative h-full w-full overflow-hidden rounded-[13px] bg-black sm:rounded-[30px]">
                <img
                  src={eventra.mobileShot}
                  alt="Eventra mobile app"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-6">
          <p className="max-w-[46ch] text-sm text-white/50">
            Event ticketing &amp; management — checkout, QR check-in, and a full admin console, built as
            team lead across both.
          </p>
          <Link
            href="/projects"
            className="group flex items-center gap-1.5 text-sm font-medium text-white transition-opacity hover:opacity-75"
          >
            See the full case study{" "}
            <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
