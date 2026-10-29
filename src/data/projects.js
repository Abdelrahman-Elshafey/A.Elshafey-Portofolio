// Every project shown on the site lives here.
// - `featured: true` puts it in "Selected work" on the home page.
// - `previews` picks the illustration used on the home page / projects page.
// - `caseStudy` (optional) gives the project its own page at /projects/<slug>.
// - Leave `github` or `live` as null to hide that button.

export const projects = [
  {
    slug: 'urconnection',
    title: 'UrConnections — Full-Stack App',
    category: 'FULL-STACK / SOCIAL APP',
    archiveCategory: 'FULL-STACK / WEB APPLICATION',
    summary:
      'Find study and interest groups by topic, place and platform. A TypeScript monorepo with its own Express API, PostgreSQL, authentication and Docker, self-hosted on a VPS.',
    archiveSummary:
      'A self-hosted social app with its own API, sign-in (email + Google), profile photos and automated deployment.',
    tags: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/Abdelrahman-Elshafey/UrConnection',
    live: 'https://urconnections.aelshafey.com',
    featured: true,
    previews: { featured: 'urconnection', archive: 'urconnection' },
    caseStudy: {
      title: 'UrConnections — Full-Stack Social App',
      intro:
        'Find study and interest groups by topic, country, city and platform (WhatsApp, Discord, Telegram…), create your own, and manage your profile. Rebuilt from a Supabase prototype into a fully self-hosted TypeScript stack.',
      role: 'Full-Stack Developer',
      stack: [
        'React 19',
        'TypeScript',
        'Tailwind CSS v4',
        'TanStack Query',
        'Zod',
        'Express 5',
        'PostgreSQL',
        'Docker',
        'GitHub Actions',
      ],
      overviewTitle: 'Project Overview & Challenge',
      overview: [
        {
          heading: 'From a Supabase prototype to my own stack',
          body: 'Version 1 was a React app on Supabase and Vercel. I rebuilt it stage by stage as a TypeScript monorepo: a React 19 frontend, an Express 5 API with PostgreSQL (Kysely and raw-SQL migrations), and zod schemas shared by both so the browser and the server validate data the same way. Accounts support email sign-up with verification, password reset and Google sign-in. Group creators alone can edit or delete their groups, and profile photos are checked, resized to WebP and stored in S3-compatible storage. Lazy-loaded pages and on-demand data raised the Lighthouse mobile score from the 80s to 96.',
        },
        {
          heading: 'Security and shipping it myself',
          body: 'Security lives in the API: argon2id password hashing, hashed session tokens in httpOnly cookies, CSRF checks, rate limits, Google OAuth with PKCE, and ownership enforced inside every SQL query, all covered by Vitest and Supertest tests. The app runs in Docker on a hardened Linux VPS behind Caddy with automatic HTTPS and a strict Content Security Policy. GitHub Actions lints, type-checks, tests and builds every push, then deploys each release to the server. Nightly database backups and profile photos are copied off-site to Cloudflare R2, and both have been restored in drills.',
        },
      ],
      showcase: 'urconnection',
      showcaseCaption: 'DESKTOP / MOBILE / COMPONENTS · ILLUSTRATIVE UI VIEWS',
    },
  },
  {
    slug: 'practical-tasks',
    title: 'Practical Tasks — Task Manager',
    category: 'FRONTEND / TASK MANAGEMENT',
    summary:
      'Dynamic task management app built using JavaScript and Tailwind CSS with local storage persistence.',
    archiveSummary:
      'A task manager built with JavaScript and Tailwind, with local storage persistence.',
    tags: ['JavaScript', 'Tailwind'],
    github: 'https://github.com/Abdelrahman-Elshafey/Practical-Tasks',
    live: null,
    featured: true,
    previews: { featured: 'tasks-dashboard', archive: 'tasks-list' },
    caseStudy: {
      title: 'Practical Tasks — Task Manager',
      intro:
        'A dynamic, framework-free task management solution focused on performance and local storage persistence.',
      role: 'Frontend Developer',
      stack: ['Vanilla JavaScript', 'Tailwind CSS', 'HTML5/CSS3'],
      overviewTitle: 'Project Overview & Technical Highlights',
      overview: [
        {
          heading: 'Immediate feedback, without a framework',
          body: 'Practical Tasks is a client-side task manager built with Vanilla JavaScript, Tailwind CSS and HTML5/CSS3. DOM manipulation keeps the task list responsive to user actions: adding a task or changing its completion state updates the visible interface immediately. Task filters help separate work in progress from completed items. This direct connection between an action and its on-screen result keeps everyday task management clear and focused.',
        },
        {
          heading: 'Persistence that carries across sessions',
          body: 'Local storage retains tasks in the browser, allowing the list to remain available when the user returns in a later session. The technical challenge is keeping stored task data and the current DOM view aligned as changes happen, rather than leaving the interface in an outdated state. Responsive layout design keeps task inputs, filters and list items readable across screen sizes, while the framework-free approach stays focused on client-side interaction.',
        },
      ],
      showcase: 'practical-tasks',
      showcaseCaption: 'DASHBOARD / DARK UI / FILTERS · ILLUSTRATIVE UI VIEWS',
    },
  },
  {
    slug: 'personal-portfolio',
    title: 'Personal Portfolio',
    category: 'DESIGN / PERSONAL PORTFOLIO',
    summary:
      'A personal portfolio design in Figma, exploring UI/UX through a luxury editorial visual language.',
    tags: ['Figma', 'UI/UX', 'Luxury Editorial design'],
    github: null,
    live: null,
    featured: false,
    wide: true,
    previews: { archive: 'portfolio' },
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}
