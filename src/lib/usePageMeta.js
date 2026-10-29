import { useEffect } from 'react';
import { profile } from '../data/profile.js';

const SITE_NAME = profile.name;
const DEFAULT_TITLE = `${profile.name} — ${profile.role}`;
const DEFAULT_DESCRIPTION = document.querySelector('meta[name="description"]')?.content ?? '';

function setMeta(selector, content) {
  document.querySelector(selector)?.setAttribute('content', content);
}

// Sets the browser-tab title and description for the current page.
// Pass nothing for the home page; other pages get "<title> · Abdelrahman Hamed".
export function usePageMeta({ title, description } = {}) {
  useEffect(() => {
    const fullTitle = title ? `${title} · ${SITE_NAME}` : DEFAULT_TITLE;
    const fullDescription = description ?? DEFAULT_DESCRIPTION;

    document.title = fullTitle;
    setMeta('meta[name="description"]', fullDescription);
    setMeta('meta[property="og:title"]', fullTitle);
    setMeta('meta[property="og:description"]', fullDescription);
  }, [title, description]);
}
