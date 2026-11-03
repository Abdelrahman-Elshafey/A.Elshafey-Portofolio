import { useEffect, useState } from 'react';

// Returns the id of the section currently in view (the last one whose top has passed
// 35% of the screen), or null near the top of the page. At the very bottom, the last
// section wins even if it's too short to reach that line.
export function useActiveSection(ids, enabled) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (!enabled) {
      setActive(null);
      return undefined;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      let current = null;
      for (const id of ids) {
        const element = document.getElementById(id);
        if (element && element.getBoundingClientRect().top <= window.innerHeight * 0.35) current = id;
      }
      const atBottom =
        window.scrollY > 0 && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      setActive(atBottom && current ? ids[ids.length - 1] : current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [ids, enabled]);

  return active;
}
