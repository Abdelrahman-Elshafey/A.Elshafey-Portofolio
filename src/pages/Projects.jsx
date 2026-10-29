import ProjectCard from '../components/ProjectCard.jsx';
import { PageFooter, PageHeader } from '../components/ui.jsx';
import { projects } from '../data/projects.js';
import { usePageMeta } from '../lib/usePageMeta.js';

const intro = 'A comprehensive archive of web applications, full-stack builds, and practical side projects.';

export default function Projects() {
  usePageMeta({ title: 'All Projects', description: intro });
  const count = String(projects.length).padStart(2, '0');

  return (
    <div className="flex flex-col gap-8 sm:gap-[37px]">
      <PageHeader
        backTo="/"
        backLabel="Back to Home"
        meta={`PROJECT ARCHIVE / ${count}`}
        title="All Projects"
        intro={intro}
      />

      {/* Project cards need room for their previews: one per row below 1200px. */}
      <div className="grid grid-cols-1 gap-4 sm:gap-6 2xl:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            variant="archive"
            className={project.wide ? '2xl:col-span-2 2xl:min-h-[265px]' : '2xl:min-h-[420px]'}
          />
        ))}
      </div>

      <PageFooter />
    </div>
  );
}
