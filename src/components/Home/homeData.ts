/**
 * Homepage metrics + featured projects.
 * Update these values each term — keep JSX free of hard-coded numbers.
 * Metric values are placeholders until real numbers are gathered.
 */

import bakfietsImg from "@site/docs/W2025-projects/img/bakfiets.png";
import skateboardImg from "@site/docs/W2025-projects/img/electric_skateboard.jpg";
import onewheelImg from "@site/docs/W2025-projects/img/electric_onewheel.jpg";

export type Metric = {
  value: string;
  label: string;
};

export type FeaturedProject = {
  name: string;
  category: string;
  description: string;
  link: string;
  image: string;
};

export const METRICS: Metric[] = [
  { value: "[##]", label: "Projects built" },
  { value: "[##]", label: "Active members" },
  { value: "[##]", label: "Terms running" },
  { value: "[##]", label: "Sponsors" },
];

/** Landing link for "See all projects" — first docs entry until a hub page exists. */
export const ALL_PROJECTS_LINK = "/docs/W2025-projects/bakfiets_2024";

export const PROJECTS: FeaturedProject[] = [
  {
    name: "Bakfiets",
    category: "Bikes · W2025",
    description: "An electric cargo bike with a big box in front of the rider.",
    link: "/docs/W2025-projects/bakfiets_2024",
    image: bakfietsImg,
  },
  {
    name: "Electric Skateboard",
    category: "Skateboards · W2025",
    description: "An electric skateboard designed and built by the team.",
    link: "/docs/W2025-projects/electric_skateboard_2025",
    image: skateboardImg,
  },
  {
    name: "OneWheel",
    category: "OneWheels · W2025",
    description: "A self-balancing board that rides on a single wheel.",
    link: "/docs/W2025-projects/onewheel_2025",
    image: onewheelImg,
  },
];
