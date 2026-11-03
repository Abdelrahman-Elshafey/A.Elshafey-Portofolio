import { useLocation } from 'react-router';

// English lives at "/", the others under their own prefix: /de, /fr, /it.
export const DEFAULT_LANGUAGE = 'en';
export const LANGUAGES = ['en', 'de', 'fr', 'it'];

export function getLanguage(pathname) {
  const first = pathname.split('/')[1];
  return LANGUAGES.includes(first) && first !== DEFAULT_LANGUAGE ? first : DEFAULT_LANGUAGE;
}

// "/de/projects" → "/projects"
export function stripLanguage(pathname) {
  const lang = getLanguage(pathname);
  if (lang === DEFAULT_LANGUAGE) return pathname;
  return pathname.slice(lang.length + 1) || '/';
}

// ("/projects", "de") → "/de/projects"; keeps a "#hash" at the end.
export function localizePath(path, lang) {
  const [pathname, hash] = path.split('#');
  let localized = pathname;
  if (lang !== DEFAULT_LANGUAGE) localized = pathname === '/' ? `/${lang}` : `/${lang}${pathname}`;
  return hash ? `${localized}#${hash}` : localized;
}

// The current language (from the URL) and a helper that builds links in it.
export function useLocale() {
  const { pathname } = useLocation();
  const lang = getLanguage(pathname);
  return { lang, path: stripLanguage(pathname), to: (path) => localizePath(path, lang) };
}
