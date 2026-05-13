import { useEffect, useRef } from 'react';
import { NAV_LINKS } from '../data/nav';
import { t } from '../utils/theme';

export function Navbar({
  dark,
  toggleDark,
  scrolled,
}: {
  dark: boolean;
  toggleDark: () => void;
  scrolled: boolean;
}) {
  const barRef = useRef<HTMLDivElement>(null);

  const go = (id: string) =>
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: 'smooth' });

  useEffect(() => {
    let displayed = 0;
    let target = 0;
    let rafId: number;

    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      target = total > 0 ? window.scrollY / total : 0;
    };

    const animate = () => {
      displayed += (target - displayed) * 0.08;
      if (barRef.current) {
        barRef.current.style.width = `${displayed * 100}%`;
      }
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.3s',
        background: scrolled
          ? dark
            ? 'rgba(5,5,16,0.92)'
            : 'rgba(255,255,255,0.92)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(18px)' : 'none',
        borderBottom: scrolled
          ? dark
            ? '1px solid rgba(167,139,250,0.1)'
            : '1px solid rgba(0,0,0,0.08)'
          : 'none',
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '0 24px',
          height: 60,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <button
          onClick={() => go('hero')}
          style={{
            fontFamily: 'monospace',
            fontWeight: 900,
            fontSize: '1.05rem',
            color: '#a78bfa',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          &lt;YB /&gt;
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          {NAV_LINKS.map((l) => (
            <button
              key={l}
              onClick={() => go(l)}
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                fontSize: '0.83rem',
                fontWeight: 500,
                color: t(dark, '#94a3b8', '#475569'),
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.color = '#a78bfa';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.color = t(
                  dark,
                  '#94a3b8',
                  '#475569',
                );
              }}
            >
              {l}
            </button>
          ))}
          <button
            onClick={toggleDark}
            style={{
              width: 34,
              height: 34,
              borderRadius: '50%',
              cursor: 'pointer',
              fontSize: '0.95rem',
              transition: 'all 0.2s',
              border: `1px solid ${t(dark, 'rgba(167,139,250,0.3)', 'rgba(0,0,0,0.15)')}`,
              background: t(
                dark,
                'rgba(167,139,250,0.08)',
                'rgba(0,0,0,0.04)',
              ),
            }}
          >
            {dark ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
      <div
        ref={barRef}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: 0,
          height: 2,
          background: 'linear-gradient(to right, #a78bfa, #60a5fa)',
          pointerEvents: 'none',
        }}
      />
    </nav>
  );
}
