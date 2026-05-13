import { useEffect, useRef, useState } from 'react';
import { AboutMe } from './components/AboutMe';
import { Career } from './components/Career';
import { Contact } from './components/Contact';
import { CursorTrail } from './components/CursorTrail';
import { DoorOverlay } from './components/DoorOverlay';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { t } from './utils/theme';

export default function App() {
  const [dark, setDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [door, setDoor] = useState<'closed' | 'opening' | 'open' | 'closing'>(
    'closed',
  );
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  useEffect(() => {
    timers.current.push(setTimeout(() => setDoor('opening'), 400));
    timers.current.push(setTimeout(() => setDoor('open'), 1500));
    return clearTimers;
  }, []);

  useEffect(() => {
    const h = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  return (
    <div
      style={{
        background: dark ? '#05050f' : '#fafbff',
        transition: 'background 0.3s',
      }}
    >
      <CursorTrail />
      <DoorOverlay phase={door} />
      <Navbar
        dark={dark}
        toggleDark={() => setDark((d) => !d)}
        scrolled={scrolled}
      />
      <Hero dark={dark} />
      <AboutMe dark={dark} />
      <Skills dark={dark} />
      <Projects dark={dark} />
      <Career dark={dark} />
      <Contact dark={dark} />
      <footer
        style={{
          padding: '22px 0',
          textAlign: 'center',
          fontSize: '0.76rem',
          color: t(dark, '#374151', '#9ca3af'),
          background: t(dark, '#05050f', '#fafbff'),
          borderTop: `1px solid ${t(dark, 'rgba(255,255,255,0.04)', 'rgba(0,0,0,0.06)')}`,
          transition: 'background 0.3s',
        }}
      >
        © 2026 한유빈 · React + TypeScript
      </footer>
    </div>
  );
}
