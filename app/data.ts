export const contact = {
  email: "izzahfarhanah77@gmail.com",
  linkedin: "https://www.linkedin.com/in/izzahfarhanah",
  linkedinLabel: "linkedin.com/in/izzahfarhanah",
};

export const facts = [
  { value: "3.74", label: "CGPA in Information Systems Engineering at UiTM" },
  { value: "6", label: "Dean's Awards, one every semester so far" },
  { value: "60", label: "JPA officers I trained on the AICAF framework" },
  { value: "4", label: "Professional certifications, from IREB, IBM and DataCamp" },
];

export type Project = {
  slug: string;
  name: string;
  context: string;
  summary: string;
  role: string;
  stack: string[];
  links: { label: string; href: string }[];
  note?: string;
};

export const tayyib = {
  name: "Tayyib",
  meaning: "Arabic for pure and good",
  status: "In progress",
  summary:
    "Tayyib screens S&P 500 stocks against AAOIFI Shariah rules and records the reason behind every result. I am building it alone, writing and locking each spec in OpenSpec before any code goes in.",
  stack: ["Python", "UV", "SQLModel", "PostgreSQL", "pytest", "Ruff", "FMP API", "Docker"],
  ratios: [
    { name: "Debt ratio", formula: "Total liabilities / total assets", limit: "30%" },
    {
      name: "Non-permissible income",
      formula: "(Interest + other non-operating income) / revenue",
      limit: "5%",
    },
  ],
  built: [
    "AAOIFI compliance screening, with 100% test coverage",
    "Result persistence in PostgreSQL, including failed and unscreened tickers",
    "Pipeline orchestration that isolates a failed ticker from the rest of the run",
    "Ticker universe resolution for the S&P 500 list, failing fast on bad config",
  ],
  next: ["Momentum ranking", "Weekly Telegram alerts", "Dashboard"],
  repo: "https://github.com/izzahff/tayyib",
};

export const projects: Project[] = [
  {
    slug: "ipantau",
    name: "iPANTAU",
    context: "Internship, Cloud Connect",
    summary:
      "A Flutter mobile app with GPS check-in and photo upload. I built the app and its Node.js and Prisma REST API, stored the photos in Cloudflare R2, and set up GitHub Actions to deploy it to Render.",
    role: "Full-stack developer",
    stack: ["Flutter", "Node.js", "Prisma", "Cloudflare R2", "GitHub Actions", "Render"],
    links: [],
    note: "Client work, so the code and screens stay private.",
  },
  {
    slug: "chainpass",
    name: "ChainPass",
    context: "Breakout Hackathon 2025",
    summary:
      "A ticketing platform on Solana that issues tickets as NFTs. I built the front end and connected it to the team's REST APIs for ticket validation and resale.",
    role: "Front-end developer",
    stack: ["React", "Tailwind CSS", "Solana", "REST APIs"],
    links: [{ label: "Source on GitHub", href: "https://github.com/izzahff/chainpass-breakout" }],
  },
  {
    slug: "elms",
    name: "Employee Leave Management System",
    context: "University project, Iktisas Management Network",
    summary:
      "A leave system designed in MVC. I modelled it in UML class, sequence and package diagrams, designed the ERD and wrote the Oracle SQL schema.",
    role: "Documenter",
    stack: ["UML", "MVC", "Oracle SQL"],
    links: [
      {
        label: "Source on GitHub",
        href: "https://github.com/izzahff/ELMS-Employee-Leave-Management-System",
      },
    ],
  },
];

export type Job = {
  title: string;
  org: string;
  place: string;
  from: string;
  to: string;
  points: string[];
};

export const jobs: Job[] = [
  {
    title: "Software Engineer Intern",
    org: "Cloud Connect Sdn. Bhd.",
    place: "Shah Alam",
    from: "Mar 2026",
    to: "Now",
    points: [
      "Trained 60 JPA officers on the AICAF framework and its six component frameworks, so they could model requirements for JPA's new HRM system.",
      "Ran a five-day web development course for JPA staff on Docker, Node.js, PostgreSQL, Strapi, Vue, Nuxt and Tailwind, and marked 14 hands-on exercises.",
      "Built and deployed iPANTAU, a Flutter app on a Node.js and Prisma API, with CI/CD through GitHub Actions.",
      "Tested every module of JWINS, the Ministry of Education's national school timetabling system, and co-wrote its user manual.",
      "Built a Nuxt 3 mockup of STDI, an online booking system for Majlis Perbandaran Selayang, on Vercel with Upstash Redis.",
      "Deployed a NestJS SMS service for a tender demo on Render, Neon PostgreSQL and Upstash Redis.",
      "Wrote an n8n workflow that turns client emails into GitLab issues, so nobody on the team types tickets by hand.",
    ],
  },
  {
    title: "Contract Sales Assistant and Cashier",
    org: "Manjaku (MKSE)",
    place: "Shah Alam",
    from: "Aug 2025",
    to: "Oct 2025",
    points: ["Served customers, handled cash and kept the shelves stocked."],
  },
  {
    title: "Part-time Workshop Facilitator",
    org: "NextGen Makers",
    place: "Shah Alam",
    from: "Aug 2024",
    to: "Sep 2024",
    points: ["Guided children aged 7 to 10 through hands-on STEM activities and fixed the kit when it broke."],
  },
];

export const education = [
  {
    title: "Bachelor of Information Systems (Hons.), Information Systems Engineering",
    org: "Universiti Teknologi MARA, Jasin",
    from: "Oct 2023",
    to: "Mar 2027",
    detail: "CGPA 3.74. Dean's Award for six consecutive semesters.",
  },
  {
    title: "Pre-University, Computer Science",
    org: "Kolej Matrikulasi Selangor, Banting",
    from: "Aug 2022",
    to: "May 2023",
    detail: "CGPA 3.79.",
  },
];

export const certifications = [
  { name: "Certified Professional for Requirements Engineering, Foundation Level", issuer: "IREB", date: "Aug 2025" },
  { name: "AI Engineer for Data Scientists Associate", issuer: "DataCamp", date: "Sep 2026" },
  { name: "Introduction to Software Engineering", issuer: "IBM", date: "Oct 2026" },
  { name: "Introduction to DevOps", issuer: "IBM", date: "Oct 2026" },
];

export const awards = [
  { name: "Dean's Award", issuer: "Faculty of Computer and Mathematical Sciences, UiTM", date: "2023 to 2026" },
  { name: "TKWBNS Scholar", issuer: "Selangor State Government", date: "Jan 2024" },
];

export const leadership = [
  {
    role: "External Relations Exco",
    org: "Information Systems Engineering Club, UiTM",
    date: "Oct 2024 to Feb 2026",
    detail: "Ran outside engagement and sat on the organising committees for UiTM Mini Hackathon 2025 and Ideathon Innovation Challenge 2025.",
  },
  {
    role: "Secretary",
    org: "UiTM Blockchain Association",
    date: "Oct 2024 to Jul 2025",
    detail: "Coordinated UiTM Mini Hackathon 2025 and led Entrepreneurship Day fundraising to RM1,998.50 in sales, past the target.",
  },
  {
    role: "Event Volunteer",
    org: "dEVMatch Hackathon 2024, APUBCC",
    date: "Aug 2024",
    detail: "Handled registration, venue setup and tech support for more than 30 teams.",
  },
];

export const skills = [
  { group: "Languages", items: "TypeScript, JavaScript, Python, Dart, Java, SQL, C++" },
  { group: "Front end", items: "Vue, Nuxt, React, Flutter, Tailwind CSS" },
  { group: "Back end", items: "Node.js, NestJS, Strapi, Prisma, REST API design" },
  { group: "Data", items: "PostgreSQL, MySQL, Oracle SQL, Neon, Redis" },
  { group: "Shipping", items: "Git, GitHub Actions, GitLab, Docker, Render, Vercel, Cloudflare R2, n8n" },
  { group: "Testing", items: "Cypress, pytest, functional and manual testing" },
  { group: "Ways of working", items: "Spec-driven development with OpenSpec, Agile Scrum, domain-driven design, EventStorming, UML" },
];
