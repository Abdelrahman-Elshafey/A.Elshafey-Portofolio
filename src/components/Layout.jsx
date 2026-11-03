import { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router';
import { useTranslation } from 'react-i18next';
import Sidebar from './Sidebar.jsx';
import { LANGUAGES, localizePath, stripLanguage, useLocale } from '../lib/locale.js';

const SITE_URL = import.meta.env.VITE_SITE_URL ?? '';

// Scrolls to the section in the address (#projects, #about…) or to the top.
// Runs on every link click (`key`), so clicking "Projects" again scrolls there again —
// except when only the language changed: then the visitor stays where they are.
function useScrollOnNavigate() {
  const { pathname, hash, key } = useLocation();
  const previous = useRef(null);

  useEffect(() => {
    const page = stripLanguage(pathname) + hash;
    const languageOnly = previous.current?.page === page && previous.current.pathname !== pathname;
    previous.current = { page, pathname };
    if (languageOnly) return;

    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash, key]);
}

// The URL decides the language (e.g. /de/projects → German).
function useLanguageFromUrl() {
  const { lang } = useLocale();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (i18n.resolvedLanguage !== lang) i18n.changeLanguage(lang);
    document.documentElement.lang = lang;
  }, [lang, i18n]);
}

// Tells search engines where the same page lives in the other languages.
function LanguageLinks() {
  const { lang, path } = useLocale();
  if (!SITE_URL) return null;

  return (
    <>
      <link rel="canonical" href={SITE_URL + localizePath(path, lang)} />
      {LANGUAGES.map((other) => (
        <link key={other} rel="alternate" hrefLang={other} href={SITE_URL + localizePath(path, other)} />
      ))}
      <link rel="alternate" hrefLang="x-default" href={SITE_URL + path} />
    </>
  );
}

export default function Layout() {
  useScrollOnNavigate();
  useLanguageFromUrl();

  return (
    <div className="relative min-h-screen overflow-x-clip">
      <LanguageLinks />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-[10%] h-[600px] w-[120%] bg-[radial-gradient(50%_50%_at_50%_50%,#dc2626_0%,transparent_100%)] opacity-[0.23] blur-[80px] lg:left-[400px] lg:h-[850px] lg:w-[1100px]"
      />
      <Sidebar />
      {/* The sidebar is fixed: the page starts after it (desktop) or below the top bar (mobile). */}
      <main className="relative px-4 pb-4 pt-[89px] sm:px-6 sm:pb-6 sm:pt-[97px] lg:ml-[248px] lg:p-8 xl:ml-[280px] xl:p-10">
        <div className="mx-auto max-w-[1080px] 3xl:max-w-[1240px]">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
