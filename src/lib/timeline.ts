export interface TimelineEntry {
  when: string;
  tag: string;
  title: string;
  body: string;
}

export const TIMELINE: TimelineEntry[] = [
  {
    when: "Jul – Sep 2026",
    tag: "Internship",
    title: "Full-Stack Developer Internship",
    body: "Completed a certified full-stack developer internship at a tech studio, working across the stack on real client-facing products rather than tutorial projects.",
  },
  {
    when: "Jul – Sep 2026",
    tag: "Leadership",
    title: "Team Lead — Eventra",
    body: "Led both frontend and backend development on Eventra, an event ticketing and management platform — from the organizer dashboard to the event-creation wizard and deployment.",
  },
  {
    when: "Sep 28, 2026 →",
    tag: "Now",
    title: "HNG Internship",
    body: "Currently building through the HNG internship, continuing to sharpen full-stack skills on real-world problems alongside other engineers.",
  },
  {
    when: "Next",
    tag: "Goal",
    title: "Taking on more senior-level ownership",
    body: "Looking to grow into more architecture and technical-decision responsibility — mentoring, owning systems end-to-end, and pushing into harder problems, with AI tools already woven into how I plan and ship, not something I'm still figuring out.",
  },
];
