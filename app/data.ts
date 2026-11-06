export const contact = {
  email: "izzahfarhanah77@gmail.com",
  linkedin: "https://www.linkedin.com/in/izzahfarhanah",
  linkedinLabel: "linkedin.com/in/izzahfarhanah",
  resume: "/Izzah_Farhanah_Faizul_Resume.pdf",
};

export const facts = [
  { value: "3.74", label: "CGPA in Information Systems Engineering at UiTM" },
  { value: "6", label: "Dean's Awards, one every semester so far" },
  { value: "60", label: "JPA participants I coached on the AICAF framework" },
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
  oneLiner:
    "Tayyib automatically checks which S&P 500 companies pass Shariah screening rules for Muslim investors, then shortlists the ten with the strongest momentum each week.",
  summary:
    "It runs two AAOIFI-based checks on real company financials, ranks the stocks that pass by six-month momentum, and records the reason behind every decision. I am building it alone, writing and locking each spec in OpenSpec before any code goes in.",
  stack: ["Python", "UV", "SQLModel", "PostgreSQL", "Supabase", "TypeScript", "Next.js", "Vercel", "GitHub Actions", "Telegram Bot API", "FMP API", "pytest"],
  ratios: [
    { name: "Debt check", plain: "Is its interest-bearing debt 30% or less of its total assets?", formula: "Interest-bearing debt / total assets", limit: "30%" },
    {
      name: "Income check",
      plain: "Does 5% or less of its revenue come from interest or other non-permissible sources?",
      formula: "(Interest income + other non-operating income, each counted only when positive) / revenue",
      limit: "5%",
    },
  ],
  built: [
    "Two-ratio AAOIFI-based screening that labels each stock compliant, non-compliant or unscreened, with a fixed reason",
    "Momentum ranking of the passing stocks on their 126-trading-day (about six-month) return",
    "A weekly Monday run scheduled on GitHub Actions, with a Telegram summary of the new list",
    "A live Next.js dashboard showing the list, every verdict with its numbers, and the run history",
    "An audit trail in PostgreSQL that keeps every decision, failures included",
  ],
  disclaimer: "Alert-only. Not a Shariah ruling or financial advice.",
  next: ["Simulated portfolio tracking against SPUS", "Full S&P 500 coverage on a paid data plan"],
  repo: "https://github.com/izzahff/tayyib",
  live: "https://tayyib-peach.vercel.app/",
};

export const projects: Project[] = [
  {
    slug: "ipantau",
    name: "iPANTAU",
    context: "Internship, Cloud Connect",
    summary:
      "A Flutter mobile app with GPS check-in and photo upload. I built the app and its Node.js and Prisma REST API, stored the photos in Cloudflare R2, set up GitHub Actions to deploy it to Render, and debugged its Android permission issues.",
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
    to: "Mar 2027",
    points: [
      "Built and deployed iPANTAU, a Flutter app on a Node.js and Prisma API, with CI/CD through GitHub Actions to Render.",
      "Contributed to TAMS, a role-based system for staff and admins, running OpenSpec spec-driven cycles for features such as a QR meal check-in module, and worked on its mobile and desktop redesign.",
      "Built a Nuxt 3 mockup of STDI, an online booking system for Majlis Perbandaran Selayang, on Vercel with Upstash Redis.",
      "Deployed an existing NestJS SMS provider project for a tender demo on Render, Neon PostgreSQL and Upstash Redis.",
      "Built an n8n workflow that turns client emails into GitLab issues, cutting manual work for a colleague.",
      "Tested each module of JWINS, the Ministry of Education's national school timetabling system, and helped write its user manual.",
      "Facilitated a modern app development course for JPA staff on Docker, Node.js, PostgreSQL, Strapi, Vue, Nuxt and Tailwind, and corrected 14 training exercises.",
      "Coached 60 JPA participants on AICAF and its six frameworks for JPA's new HRM system.",
      "Worked in a team that runs Agile Scrum.",
    ],
  },
  {
    title: "Part-time Workshop Facilitator",
    org: "NextGen Makers",
    place: "Shah Alam",
    from: "Aug 2024",
    to: "Sep 2024",
    points: ["Mentored children aged 7 to 10 through hands-on STEM activities and handled setup and basic troubleshooting."],
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
  { name: "Certified Professional for Requirements Engineering, Foundation Level", issuer: "IREB, credential MY-CPREFL-2025-00012", date: "Aug 2025" },
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
    detail: "Led outside engagement for programmes such as Kursus Kepimpinan SK Sebatu 2025, and sat on the organising committees for UiTM Mini Hackathon 2025 and Ideathon Innovation Challenge 2025.",
  },
  {
    role: "Secretary",
    org: "UiTM Blockchain Association",
    date: "Oct 2024 to Jul 2025",
    detail: "Helped coordinate stakeholders and logistics for UiTM Mini Hackathon 2025. Supported the 2024 Entrepreneurship Day fundraising and led the 2025 one, which beat its target with RM1,998.50 in sales.",
  },
  {
    role: "Event Volunteer",
    org: "dEVMatch Hackathon 2024, APUBCC",
    date: "Aug 2024",
    detail: "Helped with registration and venue setup, and gave basic tech support to more than 30 teams.",
  },
];

export const skills = [
  { group: "Languages", items: "TypeScript, JavaScript, Python, Dart, Java, SQL, C++, HTML, CSS" },
  { group: "Front end", items: "Vue, Nuxt, React, Flutter, Tailwind CSS, Bootstrap" },
  { group: "Back end", items: "Node.js, Strapi, Prisma, REST APIs" },
  { group: "Data", items: "PostgreSQL, MySQL, Oracle SQL, ERD design, query optimisation" },
  { group: "Shipping", items: "Git, GitHub Actions, GitLab, Render, Vercel, Cloudflare R2, n8n, Docker" },
  { group: "Testing", items: "Functional and manual testing, debugging, pytest, Cypress (training)" },
  { group: "Ways of working", items: "Spec-driven development with OpenSpec, Agile Scrum, OOP, SDLC, user stories, UML" },
];
