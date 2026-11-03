import { Link, Navigate, useParams } from 'react-router';
import CaseStudyShowcase from '../components/CaseStudyShowcase.jsx';
import { ArrowIcon, Card, PageFooter, PageHeader, PillLink, TagList, cardClasses } from '../components/ui.jsx';
import { getProject, projects } from '../data/projects.js';
import { usePageMeta } from '../lib/usePageMeta.js';
import arrowUpRight from '../assets/icons/arrow-up-right.svg';

const label = 'text-[10px] text-muted';
const buttonArrow =
  'inline-block transition-transform duration-200 ease-out-soft group-hover:translate-x-0.5 group-hover:-translate-y-0.5';

function getNextCaseStudy(slug) {
  const studies = projects.filter((project) => project.caseStudy);
  const index = studies.findIndex((project) => project.slug === slug);
  const next = studies[(index + 1) % studies.length];
  return next.slug === slug ? null : next;
}

export default function CaseStudy() {
  const { slug } = useParams();
  const project = getProject(slug);
  usePageMeta({
    title: project?.caseStudy && `${project.caseStudy.title.split(' — ')[0]} — Case Study`,
    description: project?.caseStudy?.intro,
  });

  if (!project?.caseStudy) {
    return <Navigate to="/projects" replace />;
  }

  const study = project.caseStudy;
  const next = getNextCaseStudy(slug);

  return (
    <div className="flex flex-col gap-4 sm:gap-6">
      <PageHeader
        backTo="/projects"
        backLabel="Back to All Projects"
        meta={project.category}
        title={study.title}
        intro={study.intro}
        titleSize="text-[clamp(34px,4.6vw,52px)]"
      />

      <Card
        as="section"
        aria-label="Key details"
        className="flex flex-wrap items-center gap-6 p-5 xl:min-h-[100px] xl:flex-nowrap"
      >
        <div className="flex w-full flex-col gap-3 md:w-[182px] md:shrink-0">
          <p className={label}>ROLE</p>
          <p className="text-[14px] font-medium">{study.role}</p>
        </div>
        <div aria-hidden="true" className="hidden h-12 w-px shrink-0 bg-line xl:block" />
        <div className="flex min-w-0 flex-1 basis-[260px] flex-col gap-2.5 xl:basis-auto">
          <p className={label}>TECH STACK</p>
          <TagList items={study.stack} large className="gap-1.5" />
        </div>
        <div className="flex w-full gap-2 xl:w-auto xl:shrink-0">
          {project.live && (
            <PillLink className="flex-1 justify-center sm:flex-none" href={project.live} target="_blank" rel="noreferrer">
              Live App <span className={buttonArrow}>↗</span>
            </PillLink>
          )}
          {project.github && (
            <PillLink
              variant="outline"
              className="flex-1 justify-center sm:flex-none"
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub Repo <span className={buttonArrow}>↗</span>
            </PillLink>
          )}
        </div>
      </Card>

      <Card as="section" aria-labelledby="overview-title" className="flex flex-col gap-4 p-5 sm:p-6">
        <h2
          id="overview-title"
          className="flex items-center gap-3 font-serif text-[24px] leading-[1.1] md:text-[28px]"
        >
          <span aria-hidden="true" className="h-px w-6 shrink-0 bg-accent" />
          {study.overviewTitle}
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {study.overview.map((column) => (
            <div key={column.heading} className="flex flex-col gap-2">
              <h3 className="text-[12px] font-semibold">{column.heading}</h3>
              <p className="text-[13px] leading-5 text-muted">{column.body}</p>
            </div>
          ))}
        </div>
      </Card>

      <section className="flex flex-col gap-3" aria-labelledby="showcase-title">
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-1">
          <h2 id="showcase-title" className="font-serif text-[24px] leading-[30px] sm:text-[28px]">
            Screenshots / Showcase
          </h2>
          <p className={label}>{study.showcaseCaption}</p>
        </div>
        <CaseStudyShowcase type={study.showcase} />
      </section>

      {next && (
        <Link
          to={`/projects/${next.slug}`}
          className={`flex items-center justify-between gap-6 p-5 sm:px-7 sm:py-6 ${cardClasses({ interactive: true })}`}
        >
          <div className="flex min-w-0 flex-col gap-2">
            <p className={label}>NEXT CASE STUDY</p>
            <p className="font-serif text-[clamp(24px,3vw,32px)] leading-[1.15]">{next.caseStudy.title}</p>
          </div>
          <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-line bg-raised transition-colors group-hover:border-accent group-hover:bg-accent/10">
            <ArrowIcon src={arrowUpRight} size={16} />
          </span>
        </Link>
      )}

      <PageFooter />
    </div>
  );
}
