/**
 * Homepage metrics + featured projects.
 * Update these values each term — keep JSX free of hard-coded numbers.
 * Metric values are placeholders until real numbers are gathered.
 *
 * Images live in static/img/home/ (resized ~1200px) so they stay stable
 * when docs image folders are reorganized.
 */

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

/** "See all projects" goes to the first doc in the Projects sidebar, same as the navbar Projects link. */
export const ALL_PROJECTS_LINK = "/docs/bikes/f2025-ebike";

export const PROJECTS: FeaturedProject[] = [
  {
    name: "Bakfiets",
    category: "Bikes · W2025",
    description: "An electric cargo bike with a big box in front of the rider.",
    link: "/docs/bikes/w2025-bakfiets",
    image: "/img/home/bakfiets.jpg",
  },
  {
    name: "Electric Skateboard",
    category: "Skateboards · W2025",
    description: "An electric skateboard designed and built by the team.",
    link: "/docs/skateboards/w2025-electric-skateboard",
    image: "/img/home/electric_skateboard.jpg",
  },
  {
    name: "OneWheel",
    category: "OneWheels · W2025",
    description: "A self-balancing board that rides on a single wheel.",
    link: "/docs/onewheels/w2025-onewheel",
    image: "/img/home/electric_onewheel.jpg",
  },
];
