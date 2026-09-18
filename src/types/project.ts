export type ProjectRole = "Team Lead — Frontend & Backend" | "Solo Developer — Frontend & Backend";

export interface Project {
  slug: string;
  index: string;
  category: string;
  name: string;
  role: ProjectRole;
  description: string;
  descriptionLong?: string;
  highlights: string[];
  stack: string[];
  liveUrl: string;
  repoUrl: string;
  mobileShot: string;
  secondaryShot?: string;
  secondaryLabel?: string;
  adminShot?: string;
  adminLabel?: string;
}
