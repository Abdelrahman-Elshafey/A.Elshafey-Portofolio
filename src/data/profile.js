// Texts that change per language (role, pitch, about…) live in src/locales/*/content.json.
export const profile = {
  name: 'Abdelrahman Hamed',
  email: 'abdelrahmanhamedg@gmail.com',
  links: {
    github: 'https://github.com/Abdelrahman-Elshafey',
    githubLabel: 'GitHub / A.Elshafey',
    linkedin: 'https://www.linkedin.com/in/abdelrahman-hamed-466752176/',
  },
};

// Captions are translated in src/locales/*/content.json (highlights.<key>).
export const highlights = [
  { key: 'core', title: 'React & Node.js' },
  { key: 'fullstack', title: 'Full-Stack' },
  { key: 'typescript', title: 'TypeScript' },
  { key: 'docker', title: 'Docker' },
];

// Group names are translated (skillGroups.<key>); technology names stay as they are.
export const skillGroups = [
  {
    key: 'frontend',
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
    key: 'backend',
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
    key: 'devops',
    skills: ['Docker', 'Docker Compose', 'GitHub Actions', 'Linux VPS', 'Caddy', 'Nginx', 'Cloudflare'],
  },
  {
    key: 'tools',
    skills: ['Git', 'GitHub', 'Postman', 'Vitest', 'ESLint', 'Monorepos', 'Web Security', 'MVC Architecture'],
  },
];
