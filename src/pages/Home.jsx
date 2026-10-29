import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard.jsx';
import { ArrowIcon, Card, PageFooter, PillLink, TagList, Underline } from '../components/ui.jsx';
import { highlights, profile, skillGroups } from '../data/profile.js';
import { featuredProjects } from '../data/projects.js';
import { usePageMeta } from '../lib/usePageMeta.js';
import portrait from '../assets/images/portrait.png';
import statusDot from '../assets/icons/status-dot.svg';
import arrowRed from '../assets/icons/arrow-red.svg';
import arrowWhite from '../assets/icons/arrow-white.svg';
import arrowUpRight from '../assets/icons/arrow-up-right.svg';

const sectionTitle = 'font-serif text-[32px] leading-[1.2] sm:text-[40px]';
const cardHeading = 'font-serif text-[clamp(30px,3.2vw,40px)] font-medium leading-[1.1]';
const pair = 'grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2';

function CopyEmailButton({ email }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return undefined;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="group inline-flex max-w-full cursor-pointer items-center justify-between gap-2.5 rounded-full border border-line py-1.5 pr-1.5 pl-3.5 text-[13px] text-muted transition-colors hover:bg-white/[0.03] hover:text-white sm:justify-start sm:border-transparent sm:hover:border-line"
    >
      <span className="truncate">{email}</span>
      <span
        aria-live="polite"
        className={`shrink-0 rounded-full border px-2.5 py-1 text-[11px] transition-colors ${
          copied
            ? 'border-accent bg-accent/10 text-white'
            : 'border-line text-muted group-hover:border-accent/30 group-hover:text-white'
        }`}
      >
        {copied ? 'Copied ✓' : 'Copy'}
      </span>
    </button>
  );
}

export default function Home() {
  usePageMeta();

  return (
    <div className="flex flex-col gap-8 sm:gap-9">
      <header className="flex min-h-6 flex-wrap items-center justify-between gap-x-6 gap-y-2">
        <p className="text-[11px] text-muted">{profile.tagline}</p>
        <p className="flex items-center gap-2 text-[12px] text-muted">
          <img className="animate-pulse-soft" src={statusDot} alt="" width="6" height="6" />
          {profile.availability}
        </p>
      </header>

      <section className="flex flex-col gap-4 sm:gap-6" aria-labelledby="intro-title">
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
          <h1 id="intro-title" className="font-serif text-[clamp(38px,5vw,56px)] font-medium leading-[1.04]">
            {profile.role}
          </h1>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 bg-[linear-gradient(var(--color-accent),var(--color-accent))] bg-[length:calc(100%-22px)_1px] bg-left-bottom bg-no-repeat pb-0.5 text-[13px] font-medium text-muted transition-[color,background-size] duration-300 ease-out-soft hover:bg-[length:100%_1px] hover:text-white"
          >
            {profile.links.githubLabel}
            <ArrowIcon src={arrowRed} />
          </a>
        </div>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 2xl:grid-cols-4">
          {highlights.map((item) => (
            <Card
              as="li"
              key={item.title}
              className="group flex flex-col gap-3 p-6 font-medium sm:min-h-[180px] 2xl:min-h-[252px]"
            >
              {/* Crimson top line that draws in on hover. */}
              <span
                aria-hidden="true"
                className="absolute top-0 left-[23px] h-px w-[204px] max-w-[calc(100%-46px)] origin-left scale-x-0 bg-accent/80 transition-[scale] duration-[400ms] ease-out-soft group-hover:scale-x-100"
              />
              <p className="font-serif text-[38px] leading-none min-[381px]:text-[44px] sm:text-[clamp(40px,5vw,56px)] 2xl:text-[min(56px,3.2vw)]">
                {item.title}
              </p>
              <p className="text-[13px]">{item.caption}</p>
            </Card>
          ))}
        </ul>

        <div className={pair}>
          <Card className="flex flex-col items-start gap-5 p-6 sm:p-8 md:min-h-[320px]">
            <h2 className={cardHeading}>Building scalable &amp; user-centric web applications.</h2>
            <p className="text-[15px] leading-[1.7] text-muted">{profile.pitch}</p>
            <PillLink variant="accent" size="sm" href={profile.links.github} target="_blank" rel="noreferrer">
              View Resume / GitHub &gt;
              <ArrowIcon src={arrowRed} />
            </PillLink>
          </Card>
          <Card className="group flex items-center justify-center p-6 sm:min-h-[320px] sm:p-8">
            <img
              className="-mt-1 -mb-[22px] size-[200px] transition-[scale,rotate] duration-500 ease-out-soft group-hover:scale-[1.04] group-hover:-rotate-1 sm:-mb-7 sm:size-[252px]"
              src={portrait}
              alt={`Portrait of ${profile.name}`}
              width="252"
              height="252"
            />
          </Card>
        </div>
      </section>

      <section className="flex flex-col gap-4" aria-labelledby="featured-title">
        <h2 id="featured-title" className={sectionTitle}>
          Featured Projects
        </h2>
        <div className="flex min-h-8 items-center justify-between">
          <h3 className="font-serif text-[24px] sm:text-[28px]">Selected work</h3>
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 text-[12px] text-muted transition-colors hover:text-white"
          >
            <Underline>All projects</Underline>
            <ArrowIcon src={arrowUpRight} />
          </Link>
        </div>
        {/* Project cards need room for their previews: one per row below 1200px. */}
        <div className="grid grid-cols-1 gap-4 sm:gap-6 2xl:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} variant="featured" />
          ))}
        </div>
      </section>

      <section
        id="about"
        className="flex scroll-mt-[89px] flex-col gap-4 sm:gap-6 lg:scroll-mt-6"
        aria-labelledby="about-title"
      >
        <h2 id="about-title" className={sectionTitle}>
          About &amp; Skills
        </h2>
        <div className={pair}>
          <Card className="flex flex-col gap-6 p-6 sm:p-8 md:min-h-[360px]">
            <h3 className="font-serif text-[32px] font-medium leading-[1.1]">Technical Expertise &amp; Stack</h3>
            <div className="flex flex-col gap-5">
              {skillGroups.map((group) => (
                <div key={group.name} className="flex flex-col gap-3">
                  <h4 className="text-[11px] font-semibold text-muted">{group.name}</h4>
                  <TagList items={group.skills} />
                </div>
              ))}
            </div>
          </Card>
          <Card className="flex flex-col gap-6 p-6 sm:p-8 md:min-h-[360px]">
            <h3 className="font-serif text-[32px] font-medium leading-[1.1]">About Me</h3>
            <p className="text-[15px] leading-[1.6]">{profile.about}</p>
          </Card>
        </div>
      </section>

      <section
        id="contact"
        aria-labelledby="contact-title"
        className="relative flex scroll-mt-[89px] flex-col gap-6 overflow-hidden rounded-2xl border border-accent/80 bg-surface bg-[radial-gradient(120%_140%_at_100%_0%,rgb(220_38_38/0.08),transparent_55%)] p-6 transition-shadow duration-300 hover:shadow-glow sm:p-10 lg:scroll-mt-6"
      >
        <div className="flex flex-col gap-3">
          <h2 id="contact-title" className={cardHeading}>
            Let&apos;s build something exceptional together.
          </h2>
          <p className="text-[15px] leading-[1.6] text-muted">
            Available for full-stack roles and exciting web projects.
          </p>
        </div>
        <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:flex-wrap sm:items-center">
          <PillLink size="lg" className="justify-center" href={`mailto:${profile.email}`}>
            Get in touch / Email Me
            <ArrowIcon src={arrowWhite} />
          </PillLink>
          <CopyEmailButton email={profile.email} />
        </div>
      </section>

      <PageFooter />
    </div>
  );
}
