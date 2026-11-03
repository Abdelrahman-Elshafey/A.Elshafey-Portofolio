import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import Sidebar from './Sidebar.jsx';

function useScrollOnNavigate() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
}

export default function Layout() {
  useScrollOnNavigate();

  return (
    <div className="relative min-h-screen overflow-x-clip">
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
