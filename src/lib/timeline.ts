export interface TimelineEntry {
  when: string;
  tag: string;
  title: string;
  body: string;
}

export const TIMELINE: TimelineEntry[] = [
  {
    when: "2026",
    tag: "Education",
    title: "First Class Honours — OAU",
    body: "Graduated with First Class Honours from Obafemi Awolowo University. The analytical habits from my degree — structured problem-solving, rigorous testing, clear documentation — now show up directly in how I approach engineering.",
  },
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
    title: "Master's degree abroad",
    body: "Planning to pursue a master's degree abroad — Canada first, the US as a secondary option — to push my software engineering career further.",
  },
];
