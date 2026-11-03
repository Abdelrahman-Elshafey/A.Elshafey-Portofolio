import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { profile } from '../data/profile.js';

function setMeta(selector, content) {
  document.querySelector(selector)?.setAttribute('content', content);
}

// Sets the browser-tab title and description for the current page, in the current language.
// Pass nothing for the home page; other pages get "<title> · Abdelrahman Hamed".
// (index.html keeps English defaults for crawlers that don't run JavaScript.)
export function usePageMeta({ title, description } = {}) {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const fullTitle = title ? `${title} · ${profile.name}` : `${profile.name} — ${t('content:profile.role')}`;
    const fullDescription = description ?? t('meta.homeDescription');

    document.title = fullTitle;
    setMeta('meta[name="description"]', fullDescription);
    setMeta('meta[property="og:title"]', fullTitle);
    setMeta('meta[property="og:description"]', fullDescription);
  }, [title, description, t, i18n.resolvedLanguage]);
}
