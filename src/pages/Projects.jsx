import { useTranslation } from 'react-i18next';
import ProjectCard from '../components/ProjectCard.jsx';
import { PageFooter, PageHeader } from '../components/ui.jsx';
import { projects } from '../data/projects.js';
import { useLocale } from '../lib/locale.js';
import { usePageMeta } from '../lib/usePageMeta.js';

export default function Projects() {
  const { t } = useTranslation();
  const { to } = useLocale();
  usePageMeta({ title: t('projects.title'), description: t('projects.intro') });

  return (
    <div className="flex flex-col gap-8 sm:gap-[37px]">
      <PageHeader
        backTo={to('/')}
        backLabel={t('projects.backHome')}
        title={t('projects.title')}
        intro={t('projects.intro')}
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
