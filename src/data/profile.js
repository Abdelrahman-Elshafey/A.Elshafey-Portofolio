export const profile = {
  name: 'Abdelrahman Hamed',
  role: 'Full-Stack Developer',
  tagline: 'SOFTWARE DEVELOPMENT & ENGINEERING',
  availability: 'Available for select projects',
  email: 'abdelrahmanhamedg@gmail.com',
  links: {
    github: 'https://github.com/Abdelrahman-Elshafey',
    githubLabel: 'GitHub / A.Elshafey',
    linkedin: 'https://www.linkedin.com/in/abdelrahman-hamed-466752176/',
  },
  pitch:
    'Skilled in building secure REST APIs with Express and PostgreSQL, managing server state with TanStack Query, and shipping full-stack apps with Docker and automated CI/CD.',
  about:
    'Full-Stack Developer passionate about bridging the gap between clean frontend architecture and robust backend logic. I took my app UrConnections from a React + Supabase prototype to a TypeScript monorepo with its own Express API, PostgreSQL database, authentication and Docker setup, and deployed it to my own VPS with CI/CD. Focused on writing maintainable, tested code, designing responsive interfaces, and building user-centric web applications.',
};

export const highlights = [
  { title: 'React & Node.js', caption: 'Core Stack' },
  { title: 'Full-Stack', caption: 'REST APIs & PostgreSQL' },
  { title: 'TypeScript', caption: 'Strict Types, Front to Back' },
  { title: 'Docker', caption: 'CI/CD & VPS Deployment' },
];

export const skillGroups = [
  {
    name: 'Frontend',
    skills: [
      'React',
      'TypeScript',
      'JavaScript (ES6+)',
      'Tailwind CSS',
      'TanStack Query',
      'React Router',
      'React Hook Form',
      'Zod',
      'HTML5',
      'CSS3',
    ],
  },
  {
    name: 'Backend & Databases',
    skills: [
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Kysely',
      'REST APIs',
      'Auth & Sessions',
      'OAuth 2.0',
      'S3 Storage',
      'MongoDB',
      'Supabase',
    ],
  },
  {
    name: 'DevOps & Deployment',
    skills: ['Docker', 'Docker Compose', 'GitHub Actions', 'Linux VPS', 'Caddy', 'Nginx', 'Cloudflare'],
  },
  {
    name: 'Tools & Concepts',
    skills: ['Git', 'GitHub', 'Postman', 'Vitest', 'ESLint', 'Monorepos', 'Web Security', 'MVC Architecture'],
  },
];
