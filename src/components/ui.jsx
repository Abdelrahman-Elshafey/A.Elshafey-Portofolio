// Small building blocks shared by every page, so the same Tailwind classes
// aren't repeated in many places.
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import { profile } from '../data/profile.js';
import LanguageSwitcher from './LanguageSwitcher.jsx';

const cardBase =
  'relative overflow-hidden rounded-2xl border border-line bg-surface transition-[border-color,box-shadow,translate] duration-300 ease-out-soft';
const cardQuiet = 'hover:border-line-hover';
const cardInteractive = 'group hover:-translate-y-[3px] hover:border-accent/30 hover:shadow-glow';

// interactive: the card is clickable (lifts and glows). Otherwise: a quiet border change.
export function cardClasses({ interactive = false } = {}) {
  return `${cardBase} ${interactive ? cardInteractive : cardQuiet}`;
}

export function Card({ as: Tag = 'div', interactive = false, className = '', ...props }) {
  return <Tag className={`${cardClasses({ interactive })} ${className}`} {...props} />;
}

export function TagList({ items, large = false, className = 'gap-2' }) {
  const size = large ? 'py-[5px] text-[10px] text-soft' : 'py-1 text-[9px] text-muted';
  return (
    <ul className={`flex flex-wrap ${className}`}>
      {items.map((item) => (
        <li
          key={item}
          className={`inline-flex whitespace-nowrap rounded-[5px] border border-line px-2 leading-[1.4] transition-colors duration-200 hover:border-accent/30 hover:bg-accent/10 hover:text-white ${size}`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

// An icon that slides toward the corner its arrow points at, when its parent `group` is hovered.
export function ArrowIcon({ src, size = 14 }) {
  return (
    <img
      className="transition-transform duration-200 ease-out-soft group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      src={src}
      alt=""
      width={size}
      height={size}
    />
  );
}

// A gray icon that turns white when its parent `group` is hovered.
export function MutedIcon({ src, size }) {
  return (
    <img
      className="transition-[filter] duration-200 group-hover:brightness-0 group-hover:invert"
      src={src}
      alt=""
      width={size}
      height={size}
    />
  );
}

// Text whose underline draws in from the left when its parent `group` is hovered.
export function Underline({ children }) {
  return (
    <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0_1px] bg-left-bottom bg-no-repeat pb-px transition-[background-size] duration-300 ease-out-soft group-hover:bg-[length:100%_1px]">
      {children}
    </span>
  );
}

const pillVariants = {
  primary:
    'border-transparent bg-accent font-medium text-white hover:bg-accent-hover hover:shadow-button',
  outline: 'border-line text-soft hover:border-accent/30 hover:bg-white/[0.03] hover:text-white',
  accent:
    'border-accent bg-accent/10 font-medium text-accent hover:bg-accent/20 hover:text-red-400 hover:shadow-button',
};

const pillSizes = {
  sm: 'px-3 py-2 text-[13px]',
  md: 'h-10 px-4 text-[12px]',
  lg: 'px-4 py-3 text-[13px]',
};

export function PillLink({ variant = 'primary', size = 'md', className = '', ...props }) {
  return (
    <a
      className={`group inline-flex cursor-pointer items-center gap-2 whitespace-nowrap rounded-full border transition-[background-color,border-color,color,box-shadow,translate] duration-200 ease-out-soft hover:-translate-y-0.5 active:translate-y-0 ${pillVariants[variant]} ${pillSizes[size]} ${className}`}
      {...props}
    />
  );
}

export function IconButton({ label, ...props }) {
  return (
    <a
      className="inline-flex size-8 items-center justify-center rounded-2xl border border-line bg-raised transition-[background-color,border-color,box-shadow,translate] duration-200 ease-out-soft hover:-translate-y-0.5 hover:border-accent hover:bg-accent/10 hover:shadow-[0_6px_16px_-6px_rgb(220_38_38/0.6)] active:translate-y-0"
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      title={label}
      {...props}
    />
  );
}

export function BackLink({ to, children }) {
  return (
    <Link to={to} className="group inline-flex gap-1.5 text-[13px] text-muted transition-colors hover:text-white">
      <span className="transition-[translate,color] duration-200 ease-out-soft group-hover:-translate-x-1 group-hover:text-accent">
        ←
      </span>
      <Underline>{children}</Underline>
    </Link>
  );
}

// Back link + small label, then the page title and intro (Projects and case study pages).
export function PageHeader({ backTo, backLabel, meta, title, intro, titleSize = 'text-[clamp(36px,5vw,56px)]' }) {
  return (
    <header className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3 text-muted">
        <BackLink to={backTo}>{backLabel}</BackLink>
        <div className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2">
          <p className="text-right text-[10px]">{meta}</p>
          <LanguageSwitcher />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className={`font-serif font-medium leading-[1.04] ${titleSize}`}>{title}</h1>
        <p className="text-[15px] leading-[22px] text-muted">{intro}</p>
      </div>
    </header>
  );
}

export function PageFooter() {
  const { t } = useTranslation();
  return (
    <footer className="flex flex-wrap justify-between gap-x-6 gap-y-2 text-[11px] text-muted">
      <p>
        © {new Date().getFullYear()} {profile.name}
      </p>
      <p>{t('footer.tagline')}</p>
    </footer>
  );
}
