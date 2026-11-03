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
    slug: 'harmonysmiles',
    title: 'HarmonySmiles — Clinic Booking System',
    category: 'FULL-STACK / HEALTHCARE BOOKING',
    archiveCategory: 'BACKEND / CLINIC RESERVATIONS',
    summary:
      'Online booking and an admin dashboard for a dental clinic in Switzerland. I built the TypeScript REST API on Express and PostgreSQL, the live booking flow and the admin pages, and deployed it on Render.',
    archiveSummary:
      'A dental clinic reservation system with live time slots, double-booking protection and a secure dashboard for appointments and patients.',
    tags: ['TypeScript', 'Express', 'PostgreSQL', 'JWT', 'Bootstrap'],
    github: 'https://github.com/Abdelrahman-Elshafey/HarmonySmiles',
    live: null,
    featured: true,
    previews: { featured: 'harmonysmiles', archive: 'harmonysmiles' },
    caseStudy: {
      title: 'HarmonySmiles — Dental Clinic Booking System',
      intro:
        'Online appointment booking for a dental clinic in Switzerland, with live availability for patients and a secure dashboard where staff manage appointments and patient records. A team project: I built the backend, the booking flow and the admin dashboard.',
      role: 'Backend & Full-Stack Developer',
      stack: ['TypeScript', 'Node.js', 'Express 5', 'PostgreSQL', 'Zod', 'JWT', 'bcrypt', 'Bootstrap 5', 'Render'],
      overviewTitle: 'Project Overview & Technical Highlights',
      overview: [
        {
          heading: 'Booking that can’t double-book',
          body: 'Patients pick a date and see the free 30-minute slots in real time, calculated in the clinic’s own time zone (Europe/Zurich), with weekends closed and bookings limited to one month ahead. The REST API is written in TypeScript on Express 5, with hand-written, parameterized SQL on PostgreSQL. A partial unique index makes double-booking impossible at the database level while still letting a cancelled slot be booked again, and each booking creates or reuses the patient record inside a single transaction. Every request is validated with Zod, and one central error handler turns failures into clear responses.',
        },
        {
          heading: 'A secure dashboard for the clinic team',
          body: 'Staff sign in with bcrypt-hashed passwords and JWT tokens. Every admin route is protected by default, and a wrong username takes as long to reject as a wrong password, so accounts can’t be discovered by timing. From the dashboard, staff confirm or cancel appointments, mark them completed or no-show once their time has passed, filter by status or date range, and open each patient’s profile with upcoming and past visits. Medical record numbers and ages are derived automatically. I also deployed the API, the PostgreSQL database and the website on Render.',
        },
      ],
      showcase: 'harmonysmiles',
      showcaseCaption: 'DESKTOP / MOBILE BOOKING / ADMIN · REAL SCREENS & ILLUSTRATIVE UI',
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
    featured: false,
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
    title: 'Personal Portfolio — Design to Code',
    category: 'FRONTEND / DESIGN TO CODE',
    summary:
      'This website: a designer’s Figma file built as a fast, responsive React and Tailwind site, faithful to the design down to spacing, type and motion.',
    tags: ['React', 'Tailwind CSS', 'Vite', 'Figma to Code', 'Responsive'],
    github: 'https://github.com/Abdelrahman-Elshafey/A.Elshafey-Portofolio',
    live: 'https://www.aelshafey.com',
    featured: false,
    previews: { archive: 'portfolio' },
    caseStudy: {
      title: 'Personal Portfolio — Design to Code',
      intro:
        'The site you are on. A designer’s Figma file, built as a fast, responsive React site that stays faithful to the design from small phones to wide monitors.',
      role: 'Frontend Developer',
      stack: ['React 18', 'Vite', 'Tailwind CSS v4', 'React Router', 'Figma', 'Vercel'],
      overviewTitle: 'Project Overview & Technical Highlights',
      overview: [
        {
          heading: 'Faithful to the design',
          body: 'I worked from the designer’s Figma file, reading layout, spacing, colors and typography directly from the frames. The palette, the two typefaces (Cormorant Garamond and Inter) and the breakpoints became Tailwind v4 design tokens, so every page draws from one source. Repeated pieces such as cards, tags, buttons and links became small React components, and all projects live in a single data file, so adding one never touches the layout. Where the design left room, such as hover states, the mobile menu and the case-study navigation, I extended it in the same visual language: crimson accents, soft lifts and lines that draw in.',
        },
        {
          heading: 'Responsive, fast and production-ready',
          body: 'The fixed sidebar becomes a top bar with a full-screen menu on phones, and every page was checked from small phones to wide monitors. Images are resized and served as WebP, cutting their weight from about 1.5 MB to 130 KB, and long-cached build files keep repeat visits instant. The site respects keyboard focus and reduced-motion settings, ships with a strict Content Security Policy and security headers, and has per-page titles and link previews for sharing. It is deployed on Vercel under my own domain, with DNS on Cloudflare.',
        },
      ],
      showcase: 'portfolio',
      showcaseCaption: 'DESKTOP / MOBILE / DESIGN TOKENS · REAL SCREENS',
    },
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}
