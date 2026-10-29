export const contact = {
  email: "jariwa@umich.edu",
  github: "https://github.com/devjariwalaa",
  linkedin: "https://www.linkedin.com/in/dev-jariwalaa/",
  resume: "/resume",
};

export type Job = {
  org: string;
  short: string;
  role: string;
  place: string;
  dates: string;
  summary: string;
  bullets: string[];
  stack: string[];
};

export const experience: Job[] = [
  {
    org: "Hyundai America Technical Center",
    short: "HATCI",
    role: "Software Engineer Intern · via KPIT",
    place: "Novi, MI",
    dates: "Jul – Aug 2026",
    summary: "Automated infotainment regression testing for Hyundai vehicles.",
    bullets: [
      "Automated 20+ tests in Python with Robot Framework, cutting regression time 93%, from 6 hours to 25 minutes.",
      "Expanded SiriusXM 360L regression coverage across 10 vehicle trims, improving infotainment release validation.",
      "Identified 15+ defects across 5 infotainment modules before release.",
      "Validated 10+ release fixes through manual in-vehicle UI testing on production builds.",
    ],
    stack: ["Python", "Robot Framework"],
  },
  {
    org: "KPIT Technologies",
    short: "KPIT",
    role: "Software Engineer Intern",
    place: "Novi, MI",
    dates: "Jun – Jul 2026",
    summary: "Built the sign-in and permissions layer for 10+ internal tools.",
    bullets: [
      "Built a JWT-based authentication platform in Angular, Flask, and MySQL, securing access across 10+ internal tools.",
      "Removed shared-credential risk for 50+ users with granular role-based authorization.",
      "Cut new-user onboarding from 1 day to under 10 minutes with 6 self-service authentication APIs.",
    ],
    stack: ["Angular", "Flask", "MySQL", "JWT"],
  },
  {
    org: "Necessities",
    short: "N",
    role: "Software Engineer Intern",
    place: "Ann Arbor, MI",
    dates: "Sep 2025 – Apr 2026",
    summary: "Shipped search, messaging, and speed work for a student marketplace.",
    bullets: [
      "Engineered 50+ reusable React components powering marketplace search, filtering, and product discovery.",
      "Enabled messaging for 100+ active users with PostgreSQL-backed REST APIs, driving 500 conversations a month.",
      "Reduced page load times 30% across 1,000+ listings through query and index optimization.",
      "Automated CI/CD pipelines to ship 8+ production releases with a 5-person team.",
    ],
    stack: ["React", "PostgreSQL", "REST", "CI/CD"],
  },
];

export type Project = {
  slug: "storm" | "redis" | "cricket";
  title: string;
  pitch: string;
  body: string;
  stats: { value: string; label: string }[];
  stack: string[];
  href: string;
};

export const projects: Project[] = [
  {
    slug: "storm",
    title: "StormRoute",
    pitch: "Tells you when to leave, not just which way to go.",
    body: "A routing engine that checks the hourly forecast along every segment of three candidate routes, scores six departure windows, and ranks them with a 0–100 risk model.",
    stats: [
      { value: "4.5s → 40ms", label: "repeat analysis with segment caching" },
      { value: "98.5%", label: "line coverage across 82 tests" },
    ],
    stack: ["Next.js", "TypeScript", "Leaflet", "OSRM", "Open-Meteo", "Vitest"],
    href: "https://github.com/devjariwalaa/StormRoute",
  },
  {
    slug: "redis",
    title: "MiniRedis",
    pitch: "Redis, rebuilt from the socket up.",
    body: "A Redis-compatible key-value store in C++20 that speaks six core commands over raw TCP, with reader-writer locks, a worker pool, TTL expiry, LRU eviction, and an append-only log that survives crashes.",
    stats: [
      { value: "52,000+", label: "operations per second under load" },
      { value: "250+", label: "operations recovered after a crash" },
    ],
    stack: ["C++20", "TCP/IP", "Multithreading", "CMake"],
    href: "https://github.com/devjariwalaa/MiniRedis",
  },
  {
    slug: "cricket",
    title: "Wicketly",
    pitch: "Live scoring for match day, without the clipboard.",
    body: "A real-time cricket scoring platform that streams shared match state over WebSockets, encodes tournament rules into one scoring engine, and works out targets and player stats automatically.",
    stats: [
      { value: "15+", label: "tournament rules in one engine" },
      { value: "3", label: "authorization layers: OAuth, RLS, RBAC" },
    ],
    stack: ["React", "TypeScript", "Supabase", "PostgreSQL", "GCP"],
    href: "https://github.com/devjariwalaa/wicketly-live-score",
  },
];

export const coursework = [
  { code: "EECS 280", name: "Programming and Data Structures" },
  { code: "EECS 281", name: "Data Structures and Algorithms" },
  { code: "EECS 203", name: "Discrete Mathematics" },
  { code: "EECS 370", name: "Computer Organization" },
  { code: "EECS 376", name: "Foundations of Computer Science" },
  { code: "EECS 482", name: "Operating Systems" },
];

export const orgs = ["Michigan Data Science Team", "University of Michigan Cricket Club"];

export const skills = [
  { group: "Languages", items: ["C/C++", "Python", "TypeScript", "JavaScript", "SQL"] },
  { group: "Frameworks", items: ["React", "Next.js", "Angular", "Flask", "Node.js", "Flutter", "Robot Framework"] },
  { group: "Data", items: ["PostgreSQL", "MySQL", "Supabase", "Firestore"] },
  { group: "Tools & cloud", items: ["GCP", "Docker", "Git", "Linux", "Vercel", "CMake", "CI/CD"] },
];

export const photos = [
  { src: "/photos/cricket-batting.webp", alt: "Dev batting in a club cricket match", width: 1549, height: 1580, credit: "Talha Asad Photography" },
  { src: "/photos/chicago-night.webp", alt: "Dev on a bridge over the Chicago River at night", width: 1500, height: 2000 },
  { src: "/photos/cricket-odca.webp", alt: "Dev in cricket whites holding his bat and helmet", width: 1506, height: 2000 },
  { src: "/photos/skyline-friends.webp", alt: "Dev and friends in front of a city skyline at night", width: 2000, height: 1500 },
  { src: "/photos/cruise.webp", alt: "Dev on a beach boardwalk on a sunny day", width: 1500, height: 2000 },
  { src: "/photos/suits.webp", alt: "Dev and two friends in suits", width: 1025, height: 2000 },
  { src: "/photos/chicago-stairs.webp", alt: "Dev looking out over a riverwalk at night", width: 1500, height: 2000 },
  { src: "/photos/dorm-friends.webp", alt: "Dev with a friend in a dorm room", width: 1155, height: 768 },
  { src: "/photos/halloween.webp", alt: "Dev and friends in Halloween costumes", width: 2000, height: 1500 },
  { src: "/photos/dinner.webp", alt: "Dev at dinner", width: 2000, height: 1500 },
  { src: "/photos/niagara.webp", alt: "Dev with family at Niagara Falls", width: 1500, height: 2000 },
];
