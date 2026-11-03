// Every project shown on the site lives here.
// - Texts (title, summary, case study…) are translated in src/locales/*/content.json,
//   under projects.<slug>. Add a new project's texts there in all four languages.
// - `featured: true` puts it in "Selected work" on the home page.
// - `previews` picks the illustration used on the home page / projects page.
// - `caseStudy` (optional) gives the project its own page at /projects/<slug>.
// - Leave `github` or `live` as null to hide that button.

export const projects = [
  {
    slug: 'urconnection',
    tags: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/Abdelrahman-Elshafey/UrConnection',
    live: 'https://urconnections.aelshafey.com',
    featured: true,
    previews: { featured: 'urconnection', archive: 'urconnection' },
    caseStudy: {
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
      showcase: 'urconnection',
    },
  },
  {
    slug: 'harmonysmiles',
    tags: ['TypeScript', 'Express', 'PostgreSQL', 'JWT', 'Bootstrap'],
    github: 'https://github.com/Abdelrahman-Elshafey/HarmonySmiles',
    live: null,
    featured: true,
    previews: { featured: 'harmonysmiles', archive: 'harmonysmiles' },
    caseStudy: {
      stack: ['TypeScript', 'Node.js', 'Express 5', 'PostgreSQL', 'Zod', 'JWT', 'bcrypt', 'Bootstrap 5', 'Render'],
      showcase: 'harmonysmiles',
    },
  },
  {
    slug: 'practical-tasks',
    tags: ['JavaScript', 'Tailwind'],
    github: 'https://github.com/Abdelrahman-Elshafey/Practical-Tasks',
    live: null,
    featured: false,
    previews: { featured: 'tasks-dashboard', archive: 'tasks-list' },
    caseStudy: {
      stack: ['Vanilla JavaScript', 'Tailwind CSS', 'HTML5/CSS3'],
      showcase: 'practical-tasks',
    },
  },
  {
    slug: 'personal-portfolio',
    tags: ['React', 'Tailwind CSS', 'Vite', 'i18next', 'Figma to Code'],
    github: 'https://github.com/Abdelrahman-Elshafey/A.Elshafey-Portofolio',
    live: 'https://www.aelshafey.com',
    featured: false,
    previews: { archive: 'portfolio' },
    caseStudy: {
      stack: ['React 19', 'React Router 8', 'Vite 8', 'Tailwind CSS v4', 'react-i18next', 'Figma', 'Vercel'],
      showcase: 'portfolio',
    },
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}
