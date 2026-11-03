import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router';
import { useTranslation } from 'react-i18next';
import { MutedIcon, Underline } from './ui.jsx';
import { profile } from '../data/profile.js';
import { useLocale } from '../lib/locale.js';
import { useActiveSection } from '../lib/useActiveSection.js';
import logo from '../assets/images/logo.webp';
import houseIcon from '../assets/icons/house.svg';
import houseActiveIcon from '../assets/icons/house-active.svg';
import layersIcon from '../assets/icons/layers.svg';
import layersActiveIcon from '../assets/icons/layers-active.svg';
import userIcon from '../assets/icons/user-round.svg';
import mailNavIcon from '../assets/icons/mail-nav.svg';
import activeDot from '../assets/icons/active-dot.svg';
import linkedinIcon from '../assets/icons/linkedin.svg';
import githubIcon from '../assets/icons/github-social.svg';

const MOBILE_QUERY = '(max-width: 960px)';

// Everything is one page: the links scroll to its sections. The highlighted item follows
// the section in view; on a case-study page ("/projects/<slug>") it's Projects.
// isActive receives the path without its language prefix and the section in view.
const SECTION_IDS = ['projects', 'about', 'contact'];
const navItems = [
  {
    key: 'home',
    to: '/',
    icon: houseIcon,
    activeIcon: houseActiveIcon,
    isActive: (path, section) => path === '/' && !section,
  },
  {
    key: 'projects',
    to: '/#projects',
    icon: layersIcon,
    activeIcon: layersActiveIcon,
    isActive: (path, section) => section === 'projects' || path.startsWith('/projects/'),
  },
  { key: 'about', to: '/#about', icon: userIcon, isActive: (_, section) => section === 'about' },
  { key: 'contact', to: '/#contact', icon: mailNavIcon, isActive: (_, section) => section === 'contact' },
];

const socialLinks = [
  { label: 'LinkedIn', href: profile.links.linkedin, icon: linkedinIcon },
  { label: profile.links.githubLabel, href: profile.links.github, icon: githubIcon },
];

const navItemBase =
  'group relative flex h-[52px] items-center gap-3.5 rounded-lg px-4 text-[15px] transition-[background-color,color,padding] duration-200 lg:h-12 lg:text-[13px] short:h-[42px]';
const navItemActive = 'bg-accent/10 font-medium text-white';
const navItemIdle = 'text-muted hover:bg-white/[0.04] hover:pl-5 hover:text-white';

export default function Sidebar() {
  const { t } = useTranslation();
  const location = useLocation();
  const { path, to } = useLocale();
  const [menuOpen, setMenuOpen] = useState(false);
  const section = useActiveSection(SECTION_IDS, path === '/');

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.hash]);

  // While the mobile menu is open: lock the page scroll, close on Escape,
  // and close it if the window grows back to the desktop layout.
  useEffect(() => {
    if (!menuOpen) return undefined;

    const mobile = window.matchMedia(MOBILE_QUERY);
    const close = () => setMenuOpen(false);
    const onKey = (event) => event.key === 'Escape' && close();
    const onResize = (event) => !event.matches && close();

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    mobile.addEventListener('change', onResize);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
      mobile.removeEventListener('change', onResize);
    };
  }, [menuOpen]);

  return (
    <aside
      data-open={menuOpen}
      className="group/sidebar fixed inset-x-0 top-0 z-20 flex max-h-dvh flex-col overflow-y-auto overscroll-contain border-b border-line bg-page/90 px-4 py-3 backdrop-blur-[14px] [scrollbar-width:none] data-[open=true]:bottom-0 data-[open=true]:bg-page sm:px-6 lg:inset-x-auto lg:bottom-0 lg:left-0 lg:max-h-none lg:w-[248px] lg:gap-16 lg:border-r lg:border-b-0 lg:bg-page lg:px-8 lg:pt-12 lg:pb-10 lg:backdrop-blur-none xl:w-[280px] short:gap-8 short:px-7 short:pt-8 short:pb-7"
    >
      <div className="flex min-h-12 items-center gap-3 lg:flex-col lg:items-stretch lg:gap-0">
        <Link
          to={to('/')}
          aria-label={t('nav.homeLink', { name: profile.name })}
          className="block w-12 shrink-0 self-center rounded-lg transition-[scale,filter] duration-300 ease-out-soft hover:scale-[1.03] hover:drop-shadow-[0_8px_24px_rgb(220_38_38/0.35)] lg:w-full short:w-[150px] shorter:w-[110px]"
        >
          <img className="aspect-square h-auto w-full object-cover" src={logo} alt={profile.name} width="216" height="216" />
        </Link>
        <p className="flex-1 text-[11px] text-muted lg:flex-none lg:text-center">{t('content:profile.role')}</p>
        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls="sidebar-menu"
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex size-[42px] cursor-pointer flex-col justify-center gap-1.5 rounded-lg border border-line bg-surface px-[11px] transition-colors hover:border-accent/30 hover:bg-accent/10 group-data-[open=true]/sidebar:border-accent/30 group-data-[open=true]/sidebar:bg-accent/10 lg:hidden"
        >
          <span className="sr-only">{menuOpen ? t('nav.closeMenu') : t('nav.openMenu')}</span>
          <span className="block h-[1.5px] bg-white transition-transform duration-250 group-data-[open=true]/sidebar:translate-y-[3.75px] group-data-[open=true]/sidebar:rotate-45" />
          <span className="block h-[1.5px] bg-white transition-transform duration-250 group-data-[open=true]/sidebar:-translate-y-[3.75px] group-data-[open=true]/sidebar:-rotate-45" />
        </button>
      </div>

      <div
        id="sidebar-menu"
        className="hidden flex-col justify-between gap-10 pt-8 pb-6 group-data-[open=true]/sidebar:flex group-data-[open=true]/sidebar:animate-menu-in lg:flex lg:flex-1 lg:gap-12 lg:p-0 short:gap-6"
      >
        <nav aria-label={t('nav.main')}>
          <ul className="flex flex-col gap-2 short:gap-1">
            {navItems.map((item) => {
              const active = item.isActive(path, section);
              return (
                <li key={item.key}>
                  <Link
                    to={to(item.to)}
                    aria-current={active ? 'true' : undefined}
                    className={`${navItemBase} ${active ? navItemActive : navItemIdle}`}
                  >
                    <span
                      aria-hidden="true"
                      className={`absolute top-1/2 left-0 h-4 w-0.5 -translate-y-1/2 rounded-[1px] bg-accent transition-[scale] duration-200 ${active ? 'scale-y-100' : 'scale-y-0 group-hover:scale-y-100'}`}
                    />
                    {active ? (
                      <img
                        className={item.activeIcon ? undefined : 'brightness-0 invert'}
                        src={item.activeIcon ?? item.icon}
                        alt=""
                        width="20"
                        height="20"
                      />
                    ) : (
                      <MutedIcon src={item.icon} size="20" />
                    )}
                    <span>{t(`nav.${item.key}`)}</span>
                    {active && (
                      <img
                        className="absolute top-1/2 right-4 -translate-y-1/2 animate-pulse-soft"
                        src={activeDot}
                        alt=""
                        width="6"
                        height="6"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex flex-col gap-6 short:gap-4">
          <hr className="h-px w-full border-0 bg-line shorter:hidden" />
          <ul className="flex flex-col gap-3">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 text-[13px] text-muted transition-[color,translate] duration-200 hover:translate-x-[3px] hover:text-white lg:text-[11px]"
                >
                  <MutedIcon src={link.icon} size="19" />
                  <Underline>{link.label}</Underline>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}
