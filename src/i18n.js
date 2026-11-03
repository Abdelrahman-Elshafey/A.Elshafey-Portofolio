import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { DEFAULT_LANGUAGE, LANGUAGES, getLanguage } from './lib/locale.js';
import enCommon from './locales/en/common.json';
import enContent from './locales/en/content.json';

// English ships with the page; German, French and Italian are separate files
// that only download when a visitor opens that language.
const otherLanguages = import.meta.glob(['./locales/*/*.json', '!./locales/en/*.json']);

i18n
  .use(resourcesToBackend((lang, namespace) => otherLanguages[`./locales/${lang}/${namespace}.json`]()))
  .use(initReactI18next)
  .init({
    resources: { en: { common: enCommon, content: enContent } },
    partialBundledLanguages: true,
    lng: getLanguage(window.location.pathname),
    fallbackLng: DEFAULT_LANGUAGE,
    supportedLngs: LANGUAGES,
    ns: ['common', 'content'],
    defaultNS: 'common',
    interpolation: { escapeValue: false },
  });

export default i18n;
