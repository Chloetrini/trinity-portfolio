import { Mail, Clock } from "lucide-react";
import { SiGithub } from "react-icons/si";

import { ContactForm } from "@/components/contact/ContactForm";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { EMAIL, GITHUB_URL } from "@/lib/constants";

export default function ContactPage() {
  return (
    <>
      <section className="px-7 pt-16 pb-10">
        <div className="mx-auto max-w-[1180px]">
          <Eyebrow className="mb-5.5">Get in touch</Eyebrow>
          <h1 className="text-[clamp(38px,6vw,68px)] leading-[1.12] font-semibold tracking-[-0.01em]">
            Let&apos;s talk about what you&apos;re building.
          </h1>
          <p className="mt-4.5 max-w-[60ch] text-[19px] text-muted-foreground">
            Open to full-time roles, freelance work, or just a good conversation about a hard problem.
          </p>
        </div>
      </section>

      <section className="px-7 py-16">
        <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-start gap-14 lg:grid-cols-2">
          <Reveal>
            <h3 className="mb-6 text-xl font-semibold">Reach me directly</h3>

            <a href={`mailto:${EMAIL}`} className="flex items-center gap-4 border-b border-border-soft py-4.5">
              <div className="flex h-10.5 w-10.5 shrink-0 items-center justify-center rounded-[10px] bg-accent/10 text-accent">
                <Mail size={20} />
              </div>
              <div>
                <div className="font-mono text-[11.5px] tracking-[0.06em] text-faint uppercase">Email</div>
                <div className="mt-0.5 text-[15.5px]">{EMAIL}</div>
              </div>
            </a>

            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 border-b border-border-soft py-4.5"
            >
              <div className="flex h-10.5 w-10.5 shrink-0 items-center justify-center rounded-[10px] bg-accent/10 text-accent">
                <SiGithub size={18} />
              </div>
              <div>
                <div className="font-mono text-[11.5px] tracking-[0.06em] text-faint uppercase">GitHub</div>
                <div className="mt-0.5 text-[15.5px]">github.com/Chloetrini</div>
              </div>
            </a>

            <div className="flex items-center gap-4 py-4.5">
              <div className="flex h-10.5 w-10.5 shrink-0 items-center justify-center rounded-[10px] bg-accent/10 text-accent">
                <Clock size={20} />
              </div>
              <div>
                <div className="font-mono text-[11.5px] tracking-[0.06em] text-faint uppercase">Response time</div>
                <div className="mt-0.5 text-[15.5px]">Usually within a day or two</div>
              </div>
            </div>

            <p className="mt-15 text-[13px] text-faint">
              The form below sends straight to my inbox.
            </p>
          </Reveal>

          <Reveal>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
