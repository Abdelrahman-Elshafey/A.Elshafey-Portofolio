import { useTranslation } from 'react-i18next';
import urconnectionDesktop from '../assets/images/urconnection-desktop.webp';
import harmonySmilesDesktop from '../assets/images/harmonysmiles-desktop.webp';
import logo from '../assets/images/logo.webp';

const mockFrame = 'flex h-[208px] shrink-0 bg-sunken p-3 sm:p-4';
const appWindow =
  'flex min-w-0 flex-1 overflow-hidden whitespace-nowrap rounded-[4px] border border-line bg-surface text-[6px] text-muted';
const appSidebar = 'flex w-16 shrink-0 flex-col gap-[15px] border-r border-line p-2.5 sm:w-[82px] sm:p-3';

function ScreenshotPreview({ src, alt }) {
  return (
    <div className="aspect-[2.1] shrink-0 overflow-hidden sm:aspect-auto sm:h-[208px]">
      <img className="size-full object-cover object-top" src={src} alt={alt} loading="lazy" />
    </div>
  );
}

function UrConnectionPreview() {
  const { t } = useTranslation('content');
  return <ScreenshotPreview src={urconnectionDesktop} alt={t('previews.urconnection')} />;
}

function HarmonySmilesPreview() {
  const { t } = useTranslation('content');
  return <ScreenshotPreview src={harmonySmilesDesktop} alt={t('previews.harmonysmiles')} />;
}

function TasksDashboardPreview() {
  const stats = [
    ['Tasks', 12],
    ['Due soon', 3],
    ['Completed', 8],
  ];
  const rows = [
    ['Review design', '10:00'],
    ['Ship build', '11:30'],
    ['Sync notes', '14:00'],
  ];

  return (
    <div className={mockFrame} aria-hidden="true">
      <div className={appWindow}>
        <div className={appSidebar}>
          <p className="text-[10px] font-semibold text-white">tasks</p>
          <p className="text-white">All tasks</p>
          <p>In progress</p>
          <p>Completed</p>
          <p>Settings</p>
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-3 p-3.5">
          <div className="flex items-start justify-between">
            <p className="text-[10px] font-medium text-white">Task list</p>
            <p>Today ↓</p>
          </div>
          <div className="flex gap-2">
            {stats.map(([label, value]) => (
              <div key={label} className="flex flex-1 flex-col gap-[5px] rounded-[4px] border border-line p-2">
                <p>{label}</p>
                <p className="text-[12px] text-white">{value}</p>
              </div>
            ))}
          </div>
          <p className="-mb-1">TASKS</p>
          <div className="flex flex-col gap-2 border-t border-line pt-1.5">
            {rows.map(([task, time]) => (
              <div key={task} className="flex justify-between">
                <p className="text-white">{task}</p>
                <p>{time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PortfolioPreview() {
  return (
    <div className="flex min-h-[190px] flex-1 bg-sunken p-3 sm:min-h-[225px] sm:p-5" aria-hidden="true">
      <div className="flex min-w-0 flex-1 overflow-hidden rounded-[4px] border border-line bg-page">
        <div className="flex w-16 shrink-0 flex-col gap-5 border-r border-line p-2.5 sm:w-[92px] sm:p-3">
          <img className="size-11 sm:size-[68px]" src={logo} alt="" width="68" height="68" />
          <ul className="text-[6px] leading-[2.5] text-muted">
            <li>Home</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-3.5 p-3.5 sm:p-5">
          <p className="text-[6px] text-muted">FIGMA → REACT / DESIGN TO CODE</p>
          <p className="font-serif text-[19px] leading-none sm:text-[27px]">
            Thoughtfully designed.
            <br />
            Precisely built.
          </p>
          <div className="flex gap-2 sm:h-[60px]">
            {['Selected work', 'About me'].map((tile) => (
              <div
                key={tile}
                className="flex flex-1 flex-col gap-2.5 whitespace-nowrap rounded-[6px] border border-line bg-surface p-2.5 font-serif text-[11px] sm:text-[13px]"
              >
                <p>{tile}</p>
                <span className="h-px w-5 bg-accent" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const previews = {
  urconnection: UrConnectionPreview,
  harmonysmiles: HarmonySmilesPreview,
  'tasks-dashboard': TasksDashboardPreview,
  portfolio: PortfolioPreview,
};

export default function ProjectPreview({ type }) {
  const Preview = previews[type];
  return Preview ? <Preview /> : null;
}
