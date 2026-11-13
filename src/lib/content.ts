// Single source of truth for site copy.
// Grounded in Faizan Naveed's CV and the agreed Positioning & Copy doc.
// Nothing here is invented — every claim traces back to the CV or the live
// testimonials already on faizan-webdeveloper.vercel.app.

export const personal = {
  name: "Syed Faizan",
  legalName: "Faizan Naveed",
  role: "Full Stack Developer",
  email: "sfn.404@gmail.com",
  phone: "+92 309 0408695",
  location: "Islamabad, Pakistan",
  locationShort: "PK Islamabad",
  timezone: "Asia/Karachi",
  timezoneAbbr: "PKT",
  github: "https://github.com/FaizanShah10",
  linkedin: "https://linkedin.com/in/faizannaveed22",
  resumeHref: "/Faizan_Naveed_Resume.pdf",
};

// Root-relative so they also work from the case study pages.
export const nav = [
  { label: "About", href: "/#about" },
  { label: "Work", href: "/#work" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];

export const hero = {
  badge: "Open to full-stack roles",
  eyebrow: "Full Stack Developer / Forward Deployed Engineer",
  // Layout mirrors the inspiration: sans lines + italic serif accents.
  lines: [
    { parts: [{ text: "Building web applications & digital products", style: "sans" as const }] },
    { parts: [{ text: "that solve real-world problems.", style: "serif" as const }] },
  ],
  subhead:
    "Full-Stack Developer based in Islamabad, with 2+ years across SaaS, e-commerce, and marketplace. I show the architecture, decisions, and trade-offs behind every project, including the calls I made and why.",
  ctaPrimary: { label: "See selected work", href: "#work" },
  // ctaSecondary: { label: "Let's talk", href: "#contact" },
};

// Copy with a few emphasised phrases, rendered by `Rich` in About.tsx.
export type RichText = { text: string; style?: "serif" | "strong" }[];
const rich = (...parts: RichText) => parts;

export const about = {
  kicker: "The way I think",
  heading: rich(
    { text: "I turn requirements into systems that " },
    { text: "hold up.", style: "serif" },
  ),
  lead: rich(
    { text: "I build " },
    { text: "practical software for real-world problems", style: "serif" },
    { text: " and own it end to end, from the first requirements conversation to what happens after launch." },
  ),
  body: rich(
    { text: "With 2+ years across SaaS, e-commerce, and marketplace products, and now full-time at Centangle Interactive, I care about the parts that don't show up in a demo: " },
    { text: "query performance, secure auth, and a codebase the next engineer can read.", style: "strong" },
  ),
  closer: "Clean, maintainable systems scale better than clever ones.",
  portrait: {
    src: "/images/faizan-portrait.webp",
    alt: "Syed Faizan in a dark suit and white shirt, arms crossed, smiling slightly.",
    // caption: "Fig. 01",
    role: ["Full Stack", "Developer"],
    stack: [
      { layer: "UI", tech: ["Next.js", "React"] },
      { layer: "API", tech: ["Node.js", "Express"] },
      { layer: "Data", tech: ["PostgreSQL", "MongoDB"] },
    ],
  },
  principlesKicker: "How I approach engineering",
  principlesHeading: rich(
    { text: "Four principles that guide " },
    { text: "how I build", style: "serif" },
    { text: " software." },
  ),
  principles: [
    {
      index: "01",
      illustration: "ownership" as const,
      title: "End-to-End Ownership",
      body: "I take responsibility beyond writing code - from understanding requirements and architecture to development, testing, deployment, and continuous improvement.",
    },
    {
      index: "02",
      illustration: "production" as const,
      title: "Production-Grade Engineering",
      body: "I focus on building maintainable, scalable, secure, and reliable applications that work under real-world conditions.",
    },
    {
      index: "03",
      illustration: "requirements" as const,
      title: "Requirements → Working Systems",
      body: "I translate business requirements and real-world problems into practical software solutions, workflows, and functional systems.",
    },
    {
      index: "04",
      illustration: "team" as const,
      title: "Built to Merge Into a Team",
      body: "I value collaboration, clear communication, structured development workflows, and writing code that other developers can understand, maintain, and extend.",
    },
  ],
};

export const journeyIntro =
  "I started freelancing during my Computer Science degree, taking web applications from requirements to deployment for international clients, then moved into a full-time role at Centangle Interactive.";

// Numbered in chronological order across roles and education.
export const experience = [
  {
    index: "26",
    range: "Jan 2026 — Present",
    org: "Centangle Interactive",
    role: "Full Stack Developer",
    illustration: "slice" as const,
    overview:
      "Own full-stack features end-to-end, from database design and API architecture to deployment.",
    contributions: [
      {
        label: "Features",
        text: "Ship production-grade, scalable features across Next.js frontends and Node.js/Express backends, from schema to UI.",
      },
      {
        label: "Performance",
        text: "Optimize application performance through query tuning, caching, and bundle-size reduction.",
      },
      {
        label: "Security",
        text: "Implement secure auth flows (JWT, OAuth, RBAC), integrate third-party services and payments, and support CI/CD pipelines.",
      },
      {
        label: "Quality",
        text: "Drive code quality via peer reviews, structured Git/CI-CD workflows, and clear technical documentation.",
      },
    ],
    stack: ["Next.js", "Node.js", "Express", "JWT", "OAuth", "Git", "CI/CD"],
  },
  {
    index: "03",
    range: "Jan 2024 — Dec 2025",
    org: "Self-Employed",
    role: "Freelance Web Developer",
    illustration: "lifecycle" as const,
    overview:
      "Delivered full-stack, production-ready web applications for international clients across SaaS, e-commerce, and marketplace domains.",
    contributions: [
      {
        label: "Build",
        text: "Built responsive, high-performance frontends in React.js and Next.js, and REST APIs using Node.js, Express, MongoDB, and PostgreSQL.",
      },
      {
        label: "Ownership",
        text: "Owned the full project lifecycle end-to-end: requirements, architecture, development, deployment, and direct client communication.",
      },
      {
        label: "Integrations",
        text: "Integrated authentication, payment gateways (Stripe), and third-party APIs tailored to each client's needs.",
      },
    ],
    stack: ["React.js", "Next.js", "Node.js", "Express", "MongoDB", "PostgreSQL", "Stripe"],
  },
];

export const education = {
  heading: "Education",
  items: [
    {
      index: "02",
      range: "2021 — 2026",
      org: "COMSATS University Islamabad, Abbottabad Campus",
      detail: "Bachelor of Science — Computer Science",
    },
    {
      index: "01",
      range: "2019 — 2021",
      org: "Progressive School and College of Sciences",
      detail: "Certificate of Higher Education — Engineering",
    },
  ],
};

export type ProjectImage = { src: string; alt: string };

/**
 * One entry here creates a landing page showcase and a page at /work/<slug>.
 *
 * To deepen a case study, add real material to the optional fields. Anything
 * left out simply doesn't render, so no section ever shows as a placeholder.
 */
export type Project = {
  slug: string;
  index: string;
  name: string;
  /** Short label above the name. */
  category: string;
  tagline: string;
  /** Landing page: what it does and the problem it solves. */
  summary: string;
  /** Landing page: involvement at a glance. */
  roleShort: string;
  /** Landing page: the few technologies worth naming. */
  keyStack: string[];
  /** Opens the case study; without one, the summary opens it as an overview. */
  problem?: string;
  role: string;
  stack: string[];
  highlights: string[];
  /** Defaults to "What it does". */
  highlightsHeading?: string;
  /** Says what the visual actually shows. */
  visualLabel: string;
  /** A real capture, 16:10. */
  cover: ProjectImage;
  /** The live product. */
  href?: string;
  /** Further case study sections: architecture, decisions, challenges, outcomes. */
  sections?: { heading: string; body: string[] }[];
  /** Further real screenshots, 16:10. */
  gallery?: ProjectImage[];
  /** Name of a person in `testimonials` who spoke about this project. */
  testimonialBy?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "nexfleet",
    index: "01",
    name: "NexFleet Compliance",
    category: "Fleet compliance SaaS",
    tagline: "Fleet compliance SaaS for South African operators",
    summary:
      "Keeps fleet operations and driver documents in one system, with automated alerts before licenses or paperwork expire.",
    roleShort: "Lead developer, end to end",
    keyStack: ["Next.js", "Tailwind CSS", "PostgreSQL"],
    visualLabel: "Public website",
    cover: {
      src: "/images/work/nexfleet.webp",
      alt: "NexFleet Compliance website: the headline “Fleet Compliance Under Absolute Control” over an aerial photo of parked trucks.",
    },
    href: "https://nexfleet.org",
    testimonialBy: "Khairun Nisaa",
    problem:
      "Fleet operators need to track driver documents and licensing paperwork and stay ahead of expiry dates — missed renewals mean vehicles and drivers taken off the road.",
    role:
      "Built the platform end-to-end as the lead developer: fleet operations tracking, document management, and an automated alerting layer for upcoming expirations.",
    stack: ["Next.js", "Tailwind CSS", "PostgreSQL"],
    highlights: [
      "Manages fleet operations and driver documents in one system",
      "Sends automated alerts before licenses or paperwork expire",
      "Built for a live client (NexFleet Compliance Solutions, South Africa)",
    ],
    featured: true,
  },
  {
    slug: "centangle-interactive",
    index: "02",
    name: "Centangle Interactive",
    category: "Website & performance engineering",
    tagline: "Full website development and performance engineering",
    summary:
      "The complete Centangle Interactive website, built in React.js on headless WordPress APIs, with performance optimization as part of the build.",
    roleShort: "Development, UI/UX & performance",
    keyStack: ["React.js", "Tailwind CSS", "Headless WordPress"],
    visualLabel: "Website homepage",
    cover: {
      src: "/images/work/centangle-interactive.webp",
      alt: "Centangle Interactive homepage: the headline “Technology Works Better When It Fits the Way You Work” over a photo of the team at their desks.",
    },
    href: "https://centangle.com",
    role:
      "Built the complete website and played a major role in its UI/UX design and overall visual direction.",
    stack: ["React.js", "Tailwind CSS", "Framer Motion", "WordPress APIs (headless)"],
    highlightsHeading: "What I delivered",
    highlights: [
      "Complete website development",
      "Frontend architecture",
      "Performance optimization",
    ],
    featured: true,
  },
  {
    slug: "poll-fusion",
    index: "03",
    name: "Poll Fusion",
    category: "Real-time polling",
    tagline: "Real-time polling platform",
    summary:
      "Lets live audiences join a poll instantly with a 6-digit code and no account, while creators manage polls and follow real-time analytics.",
    roleShort: "Full stack",
    keyStack: ["React.js", "Node.js", "MongoDB"],
    visualLabel: "Creator dashboard",
    cover: {
      src: "/images/work/poll-fusion.webp",
      alt: "Poll Fusion creator dashboard: an overview of total polls, active polls, participants, and responses, beside recent activity.",
    },
    href: "https://hackjam-frontend.vercel.app/",
    problem:
      "Live audiences need a way to participate in polls instantly, without creating an account, while the creator needs a real dashboard to manage it.",
    role:
      "Built the full stack: creator dashboard, real-time analytics, and the no-login join flow.",
    stack: ["React.js", "Tailwind CSS", "Recharts", "Node.js", "MongoDB", "JWT"],
    highlights: [
      "Creator dashboard for full poll CRUD",
      "Audience participation via unique 6-digit join codes, no login required",
      "JWT-based auth with role-based access control, plus real-time bar/pie-chart analytics",
    ],
    featured: true,
  },
  {
    slug: "nexus-analytics",
    index: "04",
    name: "Nexus Analytics",
    category: "Admin dashboard",
    tagline: "Admin dashboard for operational data",
    summary:
      "One workspace for tracking customers, orders, and employees, with a Kanban board, calendar, and real-time charts.",
    roleShort: "UI & interactions",
    keyStack: ["React", "Tailwind CSS", "GSAP"],
    visualLabel: "Analytics dashboard",
    cover: {
      src: "/images/work/nexus-analytics.webp",
      alt: "Nexus Analytics dashboard: revenue and customer cards above a revenue chart, with navigation for orders, employees, calendar, and Kanban.",
    },
    problem:
      "Teams tracking customers, orders, and employees need one place to see status and trends, not five disconnected views.",
    role: "Built the dashboard's UI and interactions.",
    stack: ["React", "Tailwind CSS", "GSAP"],
    highlights: [
      "Kanban board, calendar, and real-time charts in one workspace",
      "Tracks customers, orders, and employees",
    ],
    featured: true,
  },
];

export const skills = {
  heading: "Technical arsenal",
  groups: [
    {
      label: "Languages",
      items: ["HTML", "CSS", "JavaScript", "TypeScript"],
    },
    {
      label: "Frameworks & Libraries",
      items: [
        "React.js",
        "Next.js",
        "Node.js",
        "Express.js",
        "Tailwind CSS",
        "GSAP",
        "Framer Motion",
      ],
    },
    {
      label: "Databases",
      items: ["MongoDB", "PostgreSQL", "Firebase", "Supabase"],
    },
    {
      label: "Tools & Platforms",
      items: [
        "Git",
        "GitHub",
        "CI/CD",
        "Jira",
        "Postman",
        "REST APIs",
        "JWT",
        "Stripe",
        "Google Auth",
      ],
    },
  ],
};

export const testimonials = [
  {
    quote:
      "Working with Faizan Naveed was a defining part of bringing our vision to life. From the outset, he understood exactly what we were trying to achieve, offered valuable strategic insight, and transformed our ideas into a professional, functional platform without compromising quality or timelines. His technical expertise, responsiveness, and commitment to excellence gave us complete confidence throughout the project. We look forward to continuing our partnership as NexFleet grows.",
    name: "Khairun Nisaa",
    title: "Director, NexFleet Compliance Solutions (Pvt) Ltd",
  },
  {
    quote:
      "Working with him has been an excellent experience. He quickly understands requirements, takes complete ownership, and delivers with confidence and professionalism. We continue to work together on ongoing projects, and I'm excited to keep collaborating with him in the future. Highly recommended.",
    name: "Fadia Gabier",
    title: "Business Professional",
  },
  {
    quote:
      "I've really enjoyed working with him on our project. He's technically strong, takes ownership of his work, and consistently delivers clean, reliable solutions. He's proactive in solving problems, communicates well, and is someone you can always count on to get things done. Looking forward to building more great projects together.",
    name: "Muhammad Talha Gul",
    title: "Software Engineer | Teammate",
  },
];

export const contact = {
  index: "CONTACT",
  lines: [
    { text: "Have an opportunity?", tone: "dim" as const },
    { text: "Project in mind?", tone: "mid" as const },
    { text: "Have a role for me?", tone: "bright" as const },
  ],
  body: "Every great product starts with a conversation.",
  bodyItalic: "Let's begin there.",
  ctaPrimary: { label: "Let's Talk", href: `mailto:${personal.email}` },
  callNote: "~15 MIN · BOOK A CALL",
};

export const footer = {
  index: [
    { label: "Work", href: "/#work" },
    { label: "About me", href: "/#about" },
    { label: "Experience", href: "/#experience" },
    { label: "Contact", href: "/#contact" },
    { label: "Resume", href: personal.resumeHref, external: true },
  ],
  connect: [
    { label: "LinkedIn", href: personal.linkedin, external: true },
    { label: "Email", href: `mailto:${personal.email}`, external: true },
    { label: "Phone", href: `tel:${personal.phone.replace(/\s/g, "")}`, external: true },
    { label: "GitHub", href: personal.github, external: true },
  ],
  year: new Date().getFullYear(),
};
