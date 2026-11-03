import { Link, useLocation, useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { LANGUAGES, localizePath, useLocale } from '../lib/locale.js';

// EN · DE · FR · IT at the top right of every page — switching keeps the visitor on the same page.
export default function LanguageSwitcher() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { hash } = useLocation();
  const { lang, path } = useLocale();

  // Load the new language's texts first, then change the address, so the page
  // never goes blank (and jumps to the top) while the texts download.
  async function switchTo(event, other, target) {
    const opensNewTab = event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0;
    if (opensNewTab || other === lang) return;
    event.preventDefault();
    await i18n.changeLanguage(other);
    navigate(target, { preventScrollReset: true });
  }

  return (
    <div role="group" aria-label={t('language.label')} className="flex shrink-0 gap-1">
      {LANGUAGES.map((other) => {
        const active = other === lang;
        const target = localizePath(path + hash, other);
        return (
          <Link
            key={other}
            to={target}
            onClick={(event) => switchTo(event, other, target)}
            hrefLang={other}
            lang={other}
            aria-current={active ? 'true' : undefined}
            className={`min-w-8 rounded-md border px-2 py-1 text-center text-[11px] font-medium uppercase transition-colors duration-200 ${
              active
                ? 'border-accent/30 bg-accent/10 text-white'
                : 'border-line text-muted hover:border-accent/30 hover:text-white'
            }`}
          >
            {other}
          </Link>
        );
      })}
    </div>
  );
}
