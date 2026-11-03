import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import ProjectPreview from './ProjectPreview.jsx';
import { ArrowIcon, IconButton, TagList, cardClasses } from './ui.jsx';
import { useLocale } from '../lib/locale.js';
import githubIcon from '../assets/icons/github.svg';
import externalLinkIcon from '../assets/icons/external-link.svg';
import arrowUpRight from '../assets/icons/arrow-up-right.svg';

export default function ProjectCard({ project }) {
  const { t } = useTranslation('content', { keyPrefix: `projects.${project.slug}` });
  const { t: ui } = useTranslation();
  const { to } = useLocale();
  const title = t('title');
  const hasCaseStudy = Boolean(project.caseStudy);

  return (
    <article className={`group flex flex-col ${cardClasses({ interactive: hasCaseStudy })}`}>
      <div className="flex flex-col overflow-hidden">
        <div className="flex flex-1 flex-col transition-[scale] duration-500 ease-out-soft group-hover:scale-[1.03]">
          <ProjectPreview type={project.preview} />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 px-5 pt-[18px] pb-5 sm:px-6 sm:pb-[18px]">
        <p className="text-[9px] text-muted">{t('category')}</p>
        <div className="flex items-center justify-between gap-4">
          <h3 className="font-serif text-[23px] leading-[1.2] sm:text-[25px]">
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
              <IconButton href={project.github} label={ui('card.codeOnGithub', { title })}>
                <img src={githubIcon} alt="" width="14" height="14" />
              </IconButton>
            )}
            {project.live && (
              <IconButton href={project.live} label={ui('card.liveApp', { title })}>
                <img src={externalLinkIcon} alt="" width="16" height="16" />
              </IconButton>
            )}
          </div>
        </div>
        <TagList items={project.tags} />
        <p className="text-[13px] leading-[1.5] text-muted">{t('summary')}</p>
        {hasCaseStudy && (
          // The whole card is already a link (the title's), so this is only a visual cue.
          <span
            aria-hidden="true"
            className="mt-auto inline-flex items-center gap-1.5 pt-1 text-[12px] font-medium text-muted transition-colors group-hover:text-white"
          >
            {ui('card.viewCaseStudy')}
            <ArrowIcon src={arrowUpRight} />
          </span>
        )}
      </div>
    </article>
  );
}
