import type { Project } from "@/types/project";

const shot = (name: string) => `/screenshots/${name}`;

export const GITHUB_URL = "https://github.com/Chloetrini";
export const EMAIL = "trinityegbukwu1@gmail.com";
/** Drop the real file at public/cv.pdf — this link just points at that path. */
export const CV_URL = "/cv.pdf";

export const PROJECTS: Project[] = [
  {
    slug: "eventra",
    index: "01",
    category: "Event ticketing & management platform",
    name: "Eventra",
    role: "Team Lead — Frontend & Backend",
    description:
      "Eventra lets people discover events and buy real tickets — card, bank transfer or USSD — with instant entry and no group-chat chaos. Organizers get a full control room: event creation, ticket sales, guest check-in (even offline), and payouts.",
    descriptionLong:
      "As team lead, I owned both the buyer-facing app and the admin console — including escrow tracking for held funds, refund workflows, event approvals, and a live revenue dashboard.",
    highlights: [
      "Card, bank transfer and USSD checkout, powered by Paystack",
      "Unique, one-time-use QR per ticket — scanned in seconds at the gate",
      "Admin console with escrow tracking, refunds, and a live revenue dashboard",
    ],
    stack: ["React 19", "TypeScript", "TailwindCSS 4", "TanStack Query", "React Hook Form + Zod", "shadcn/ui"],
    liveUrl: "https://eventra-client-delta.vercel.app/",
    repoUrl: "https://github.com/Chloetrini/Eventra-Client",
    mobileShot: shot("eventra-home.png"),
    secondaryShot: shot("eventra-explore.png"),
    secondaryLabel: "Explore events",
    adminShot: shot("eventra-admin.png"),
    adminLabel: "eventra.app / admin / overview",
  },
  {
    slug: "udesport",
    index: "02",
    category: "Football scouting & player placement",
    name: "UdeSport",
    role: "Solo Developer — Frontend & Backend",
    description:
      "Built for a football scouting and player-placement agency: a public site showcasing players, transfer history and agency news, plus a private admin dashboard for staff to manage the whole pipeline.",
    descriptionLong:
      "The admin console tracks everything from active negotiations to historical transfers, giving staff a single place to update player status without touching the database directly.",
    highlights: [
      "Public showcase of players, transfer history and agency news",
      "Admin pipeline for tracking negotiations end to end",
      "Staff update player status without touching the database directly",
    ],
    stack: ["React 19", "TypeScript", "MUI", "TanStack Query", "Framer Motion", "Embla Carousel"],
    liveUrl: "https://udesports-client.vercel.app/",
    repoUrl: "https://github.com/Chloetrini/udesports-client",
    mobileShot: shot("udesport-hero.png"),
    secondaryShot: shot("udesport-players.png"),
    secondaryLabel: "Featured players",
    adminShot: shot("udesports-admin.png"),
    adminLabel: "udesport.app / dashboard / overview",
  },
  {
    slug: "nestfinder",
    index: "03",
    category: "Real estate discovery",
    name: "NestFinder Pro",
    role: "Solo Developer — Frontend & Backend",
    description:
      "A property discovery app for finding and comparing rentals — map-based browsing with Google Maps and Leaflet, detailed listing pages, and a compare-and-shortlist flow built to make apartment hunting less painful.",
    highlights: [
      "Map-based browsing with Google Maps and React Leaflet",
      "Detailed listing pages with photos, pricing and amenities",
      "Compare-and-shortlist flow for narrowing down options fast",
    ],
    stack: ["React 19", "TypeScript", "Google Maps API", "React Leaflet", "TailwindCSS 4", "React Router"],
    liveUrl: "https://nestfinder-real-estate-ljlj.vercel.app/",
    repoUrl: "https://github.com/Chloetrini/nestfinder-real-estate",
    mobileShot: shot("nestfinder-home.jpg"),
    secondaryShot: shot("nestfinder-listing.jpg"),
    secondaryLabel: "Listing detail",
  },
];

export const TECH_MARQUEE = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express",
  "PostgreSQL",
  "MongoDB",
  "TailwindCSS",
  "Git & GitHub",
  "REST APIs",
];
