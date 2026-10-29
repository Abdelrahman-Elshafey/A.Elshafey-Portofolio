import urconnectionDesktop from '../assets/images/urconnection-desktop.png';
import urconnectionMobile from '../assets/images/urconnection-mobile.png';
import uploadIcon from '../assets/icons/upload.svg';
import syncDot from '../assets/icons/sync-dot.svg';
import moonIcon from '../assets/icons/moon.svg';
import savedDot from '../assets/icons/saved-dot.svg';
import hardDriveIcon from '../assets/icons/hard-drive.svg';

const frame = 'flex flex-wrap gap-4 rounded-2xl border border-line p-3 sm:p-5';
const aside = 'flex min-w-0 flex-[1_1_220px] flex-col gap-3';
const panel =
  'group flex flex-col gap-3 rounded-lg border border-line bg-surface p-4 transition-[border-color,translate] duration-300 ease-out-soft hover:-translate-y-0.5 hover:border-accent/30';
const panelHeader = 'flex items-center justify-between gap-2';
const panelTitle = 'text-[11px] font-medium';
const panelLabel = 'whitespace-nowrap text-[8px] text-muted';
const panelText = '-mt-0.5 text-[10px] leading-[15px] text-muted';
const status = 'flex items-center gap-2 text-[11px]';
const zoomImage =
  'size-full object-cover transition-[scale] duration-[600ms] ease-out-soft group-hover/shot:scale-[1.03]';

function UrConnectionShowcase() {
  return (
    <div className={`${frame} bg-[#242622]`}>
      <div className="group/shot aspect-[590/272] w-full overflow-hidden rounded-lg sm:aspect-auto sm:h-[272px] sm:w-auto sm:flex-[3_1_400px]">
        <img
          className={`${zoomImage} object-top`}
          src={urconnectionDesktop}
          alt="UrConnections desktop landing page"
          loading="lazy"
        />
      </div>
      <div className="group/shot mx-auto h-[272px] flex-[0_0_156px] overflow-hidden rounded-[20px] border-[3px] border-[#b7b6ae] sm:mx-0">
        <img className={zoomImage} src={urconnectionMobile} alt="UrConnections mobile sign-in screen" loading="lazy" />
      </div>
      <div className={aside}>
        <div className={panel}>
          <div className={panelHeader}>
            <p className={panelTitle}>Profile photo</p>
            <p className={panelLabel}>SECURE UPLOAD</p>
          </div>
          <div className="flex min-h-[88px] flex-col items-center justify-center gap-2 rounded-[6px] border border-dashed border-line-strong p-2 text-center transition-colors group-hover:border-accent/30 group-hover:bg-accent/[0.04]">
            <img src={uploadIcon} alt="" width="20" height="20" />
            <p className="text-[10px] text-soft">Choose a file to upload</p>
            <p className={panelLabel}>Keep your profile personal.</p>
          </div>
        </div>
        <div className={panel}>
          <p className={status}>
            <img src={syncDot} alt="" width="5" height="5" />
            One consistent profile
          </p>
          <p className={panelText}>Account details and profile changes stay in sync across the interface.</p>
        </div>
      </div>
    </div>
  );
}

function TaskRow({ label, done }) {
  return (
    <div className="flex h-[30px] items-center gap-2.5 border-b border-line text-[11px] text-soft transition-colors hover:bg-white/[0.02]">
      <span
        className={`inline-flex size-3 shrink-0 items-center justify-center rounded-[3px] border text-[9px] text-white ${done ? 'border-accent bg-accent' : 'border-faint'}`}
      >
        {done && '✓'}
      </span>
      <p className={`min-w-0 flex-1 ${done ? 'text-muted line-through' : ''}`}>{label}</p>
      <span className="text-[12px] text-muted">×</span>
    </div>
  );
}

function FilterChips({ items, active }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <span
          key={item}
          className={`rounded-[5px] border px-2.5 py-1.5 text-[9px] transition-colors ${
            item === active
              ? 'border-accent/30 bg-accent/10 text-white'
              : 'border-line text-muted hover:border-line-strong hover:text-white'
          }`}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function PracticalTasksShowcase() {
  return (
    <div className={`${frame} bg-sunken`}>
      <div className="flex min-h-[272px] min-w-0 flex-[3_1_460px] overflow-hidden rounded-lg border border-[#333] bg-surface">
        <div className="hidden w-[118px] shrink-0 flex-col gap-[22px] border-r border-line p-4 sm:flex">
          <p className="flex items-center gap-1.5 text-[16px] font-semibold">
            <span className="size-[7px] rounded-[2px] bg-accent" />
            tasks
          </p>
          <div className="flex flex-col gap-[18px] text-[10px] text-muted">
            <p className="font-medium text-white">All tasks</p>
            <p>In progress</p>
            <p>Completed</p>
          </div>
          <div className="flex flex-col gap-1.5 pt-[42px] text-[8px] text-muted">
            <img src={moonIcon} alt="" width="14" height="14" />
            <p>Dark interface</p>
          </div>
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-2.5 p-[18px]">
          <div className={panelHeader}>
            <p className="text-[18px] font-medium">Your tasks, in focus.</p>
            <p className={panelLabel}>SAMPLE TASKS</p>
          </div>
          <div className="flex h-8 items-center justify-between gap-2 rounded-[5px] border border-line bg-sunken px-2.5 text-[10px] text-muted">
            <p>What needs to get done?</p>
            <span className="whitespace-nowrap rounded-[4px] bg-accent px-[9px] py-1 text-[9px] text-white">
              + Add task
            </span>
          </div>
          <FilterChips items={['All tasks', 'In progress', 'Completed']} active="All tasks" />
          <div>
            <TaskRow label="Review the interface" done />
            <TaskRow label="Build the task manager" />
            <TaskRow label="Save tasks locally" />
          </div>
          <p className="flex items-center gap-1.5 text-[9px] text-muted">
            <img src={savedDot} alt="" width="4" height="4" />
            Saved in local storage · Ready for your next session
          </p>
        </div>
      </div>
      <div className={aside}>
        <div className={panel}>
          <div className={panelHeader}>
            <p className={panelTitle}>A clearer view</p>
            <p className={panelLabel}>FILTER STUDY</p>
          </div>
          <FilterChips items={['All', 'In progress', 'Completed']} active="Completed" />
          <TaskRow label="Review the interface" done />
          <p className="text-[9px] text-muted">Only completed tasks in view.</p>
        </div>
        <div className={panel}>
          <p className={status}>
            <img src={hardDriveIcon} alt="" width="15" height="15" />
            Pick up where you left off.
          </p>
          <p className={panelText}>Tasks stay in this browser between sessions, using local storage.</p>
          <p className={panelLabel}>CLIENT-SIDE / FRAMEWORK-FREE</p>
        </div>
      </div>
    </div>
  );
}

const showcases = {
  urconnection: UrConnectionShowcase,
  'practical-tasks': PracticalTasksShowcase,
};

export default function CaseStudyShowcase({ type }) {
  const Showcase = showcases[type];
  return Showcase ? <Showcase /> : null;
}
