import { useEffect, useRef, useState } from 'react';
import ProfileImg from '../assets/profile-photo.jpeg';
import { useTyping } from '../hooks/useTyping';
import { t } from '../utils/theme';
import { Fade } from './Fade';
import { MagBtn } from './MagBtn';

export function Hero({ dark }: { dark: boolean }) {
  const typed = useTyping([
    'Frontend Developer',
    'React Enthusiast',
    'UI/UX Craftsman',
    'AI-savvy Developer',
  ]);
  const heroRef = useRef<HTMLElement>(null);
  const [mp, setMp] = useState({ x: 0.5, y: 0.5 });
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const h = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      setMp({
        x: (e.clientX - r.left) / r.width,
        y: (e.clientY - r.top) / r.height,
      });
    };
    el.addEventListener('mousemove', h);
    return () => el.removeEventListener('mousemove', h);
  }, []);
  const heroBg = t(dark, '#05050f', '#fafbff');
  const gridColor = t(dark, 'rgba(167,139,250,0.04)', 'rgba(167,139,250,0.07)');
  return (
    <section
      ref={heroRef}
      id='hero'
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: heroBg,
        transition: 'background 0.3s',
      }}
    >
      <div
        style={{
          position: 'absolute',
          width: 700,
          height: 700,
          borderRadius: '50%',
          background: `radial-gradient(circle,${t(dark, 'rgba(167,139,250,0.13)', 'rgba(167,139,250,0.08)')} 0%,transparent 70%)`,
          left: `calc(${mp.x * 100}% - 350px)`,
          top: `calc(${mp.y * 100}% - 350px)`,
          transition: 'left 1s ease,top 1s ease',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `linear-gradient(${gridColor} 1px,transparent 1px),linear-gradient(90deg,${gridColor} 1px,transparent 1px)`,
          backgroundSize: '64px 64px',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '80px 24px 60px',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: 64,
          flexWrap: 'wrap',
        }}
      >
        <div
          style={{
            flex: 1,
            minWidth: 280,
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
          }}
        >
          <Fade>
            <span
              style={{
                display: 'inline-block',
                padding: '4px 14px',
                borderRadius: 999,
                fontSize: '0.76rem',
                fontWeight: 600,
                border: '1px solid rgba(167,139,250,0.35)',
                background: 'rgba(167,139,250,0.08)',
                color: '#a78bfa',
              }}
            >
              👋🏻 안녕하세요, 반갑습니다!
            </span>
          </Fade>
          <Fade delay={80}>
            <h1
              style={{
                fontSize: 'clamp(2.5rem,5vw,4rem)',
                fontWeight: 900,
                lineHeight: 1.1,
                color: t(dark, '#f1f5f9', '#0f172a'),
                margin: 0,
              }}
            >
              한유빈
              <br />
              <span
                style={{
                  background: 'linear-gradient(135deg,#a78bfa,#60a5fa)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {typed}
                <span
                  style={{
                    WebkitTextFillColor: '#a78bfa',
                    animation: 'blink 1s infinite',
                  }}
                >
                  |
                </span>
              </span>
            </h1>
          </Fade>
          <Fade delay={160}>
            <p
              style={{
                fontSize: '0.95rem',
                lineHeight: 1.8,
                color: t(dark, '#94a3b8', '#64748b'),
                maxWidth: 420,
                margin: 0,
              }}
            >
              사용자 경험을 최우선으로 생각하는 프론트엔드 개발자입니다.
              <br />
              깔끔한 코드와 직관적인 UI로 가치 있는 제품을 만들고 싶습니다.
            </p>
          </Fade>
          <Fade delay={240}>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <MagBtn
                onClick={() =>
                  document
                    .getElementById('projects')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                style={{
                  padding: '12px 28px',
                  borderRadius: 12,
                  background: 'linear-gradient(135deg,#7c3aed,#2563eb)',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 4px 24px rgba(124,58,237,0.4)',
                }}
              >
                프로젝트 보기 →
              </MagBtn>
              <MagBtn
                onClick={() => {
                  const a = document.createElement('a');
                  a.href = '/resume.pdf';
                  a.download = '한유빈_이력서.pdf';
                  a.click();
                }}
                style={{
                  padding: '12px 28px',
                  borderRadius: 12,
                  background: 'transparent',
                  color: t(dark, '#e2e8f0', '#334155'),
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  border: `1.5px solid ${t(dark, 'rgba(255,255,255,0.14)', 'rgba(0,0,0,0.14)')}`,
                  cursor: 'pointer',
                }}
              >
                이력서 다운로드 ↓
              </MagBtn>
              <MagBtn
                onClick={() => {
                  const a = document.createElement('a');
                  a.href = '/portfolio.pdf';
                  a.download = '한유빈_포트폴리오.pdf';
                  a.click();
                }}
                style={{
                  padding: '12px 28px',
                  borderRadius: 12,
                  background: 'transparent',
                  color: t(dark, '#e2e8f0', '#334155'),
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  border: `1.5px solid ${t(dark, 'rgba(255,255,255,0.14)', 'rgba(0,0,0,0.14)')}`,
                  cursor: 'pointer',
                }}
              >
                포트폴리오 다운로드 ↓
              </MagBtn>
            </div>
          </Fade>
        </div>
        <Fade delay={120}>
          <div style={{ position: 'relative', flexShrink: 0 }}>
            <div
              style={{
                width: 220,
                height: 220,
                borderRadius: '50%',
                padding: 3,
                background: 'linear-gradient(135deg,#a78bfa,#60a5fa,#34d399)',
                boxShadow: '0 0 60px rgba(167,139,250,0.4)',
              }}
            >
              <img
                src={ProfileImg}
                alt='프로필 이미지'
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>
            <div
              style={{
                position: 'absolute',
                bottom: -6,
                right: -6,
                padding: '4px 12px',
                borderRadius: 999,
                background: t(dark, '#0f0f1e', '#fff'),
                border: '1.5px solid #34d399',
                fontSize: '0.72rem',
                fontWeight: 700,
                color: '#34d399',
              }}
            >
              ● 구직 중
            </div>
          </div>
        </Fade>
      </div>
      <style>{`@keyframes blink{0%,100%{opacity:1}50%{opacity:0}}`}</style>
    </section>
  );
}
