import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import ProjectPreview from './ProjectPreview.jsx';
import { ArrowIcon, IconButton, TagList, cardClasses } from './ui.jsx';
import { useLocale } from '../lib/locale.js';
import githubIcon from '../assets/icons/github.svg';
import externalLinkIcon from '../assets/icons/external-link.svg';
import arrowUpRight from '../assets/icons/arrow-up-right.svg';

// variant: 'featured' (home page) or 'archive' (projects page)
export default function ProjectCard({ project, variant = 'featured', className = '' }) {
  const { t, i18n } = useTranslation();
  const { to } = useLocale();
  const key = (name) => `content:projects.${project.slug}.${name}`;
  const isArchive = variant === 'archive';
  // The archive variant may have its own category/summary; otherwise use the main one.
  const pick = (archiveName, name) =>
    isArchive && i18n.exists(key(archiveName)) ? t(key(archiveName)) : t(key(name));
  const title = t(key('title'));
  const wide = isArchive && project.wide;
  const hasCaseStudy = Boolean(project.caseStudy);

  return (
    <article
      className={`group flex flex-col ${cardClasses({ interactive: hasCaseStudy })} ${wide ? '2xl:flex-row' : ''} ${className}`}
    >
      <div className={`flex flex-col overflow-hidden ${wide ? '2xl:w-[528px] 2xl:shrink-0' : ''}`}>
        <div className="flex flex-1 flex-col transition-[scale] duration-500 ease-out-soft group-hover:scale-[1.03]">
          <ProjectPreview type={project.previews[variant]} />
        </div>
      </div>

      <div
        className={`flex flex-1 flex-col gap-3 px-5 pt-[18px] pb-5 sm:px-6 sm:pb-[18px] ${wide ? '2xl:min-w-0 2xl:gap-4 2xl:p-8' : ''}`}
      >
        <p className="text-[9px] text-muted">{pick('archiveCategory', 'category')}</p>
        <div className="flex items-center justify-between gap-4">
          <h3
            className={`font-serif text-[23px] leading-[1.2] sm:text-[25px] ${wide ? '2xl:text-[32px] 2xl:leading-[1.1]' : ''}`}
          >
            {hasCaseStudy ? (
              // Stretches over the whole card so the card is clickable.
              <Link
                to={to(`/projects/${project.slug}`)}
                className="after:absolute after:inset-0 focus-visible:outline-none focus-visible:after:rounded-2xl focus-visible:after:outline-2 focus-visible:after:-outline-offset-2 focus-visible:after:outline-accent"
              >
                {title}
              </Link>
            ) : (
              title
            )}
          </h3>
          <div className="relative z-10 flex shrink-0 gap-2">
            {project.github && (
              <IconButton href={project.github} label={t('card.codeOnGithub', { title })}>
                <img src={githubIcon} alt="" width="14" height="14" />
              </IconButton>
            )}
            {project.live && (
              <IconButton href={project.live} label={t('card.liveApp', { title })}>
                <img src={externalLinkIcon} alt="" width="16" height="16" />
              </IconButton>
            )}
          </div>
        </div>
        <TagList items={project.tags} />
        <p className="text-[13px] leading-[1.5] text-muted">{pick('archiveSummary', 'summary')}</p>
        {hasCaseStudy && (
          // The whole card is already a link (the title's), so this is only a visual cue.
          <span
            aria-hidden="true"
            className="mt-auto inline-flex items-center gap-1.5 pt-1 text-[12px] font-medium text-muted transition-colors group-hover:text-white"
          >
            {t('card.viewCaseStudy')}
            <ArrowIcon src={arrowUpRight} />
          </span>
        )}
      </div>
    </article>
  );
}
