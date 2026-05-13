import { useState } from 'react';
import { PROJECTS } from '../data/projects';
import { t } from '../utils/theme';
import { Book } from './Book';
import { Fade } from './Fade';
import { SectionHead } from './SectionHead';

export function Projects({ dark }: { dark: boolean }) {
  const configs = [
    { tilt: 0 },
    { tilt: 0 },
    { tilt: 14 },
    { tilt: 0 },
    { tilt: 0 },
  ];
  const [anyOpen, setAnyOpen] = useState(false);
  return (
    <section
      id='projects'
      style={{
        padding: '96px 0',
        background: t(dark, '#0a0a14', '#f4f4fb'),
        transition: 'background 0.3s',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <Fade>
          <SectionHead
            title='Projects'
            sub='나의 작업실 — 책장을 클릭해보세요 📖'
            dark={dark}
          />
        </Fade>
        <Fade>
          <div
            style={{
              position: 'relative',
              borderRadius: 20,
              overflow: 'visible',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '70%',
                height: 180,
                background: `radial-gradient(ellipse,${t(dark, 'rgba(167,139,250,0.06)', 'rgba(167,139,250,0.04)')} 0%,transparent 70%)`,
                pointerEvents: 'none',
                zIndex: 0,
              }}
            />
            <div
              style={{
                background: t(
                  dark,
                  'linear-gradient(180deg,rgba(18,12,36,0.7) 0%,rgba(10,8,20,0.9) 100%)',
                  'linear-gradient(180deg,rgba(230,225,250,0.6) 0%,rgba(215,210,240,0.8) 100%)',
                ),
                borderRadius: 20,
                border: `1px solid ${t(dark, 'rgba(167,139,250,0.08)', 'rgba(167,139,250,0.18)')}`,
                padding: '44px 40px 0',
                position: 'relative',
                zIndex: 1,
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `repeating-linear-gradient(0deg,transparent,transparent 28px,${t(dark, 'rgba(167,139,250,0.015)', 'rgba(167,139,250,0.04)')} 28px,${t(dark, 'rgba(167,139,250,0.015)', 'rgba(167,139,250,0.04)')} 29px)`,
                  borderRadius: 20,
                  pointerEvents: 'none',
                }}
              />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                  gap: 2,
                  paddingBottom: 0,
                  position: 'relative',
                  zIndex: 2,
                  minHeight: 230,
                }}
              >
                {PROJECTS.map((p, i) => (
                  <Book
                    key={p.id}
                    p={p}
                    tilt={configs[i].tilt}
                    dark={dark}
                    dropDelay={[2, 4, 0, 3, 1][i] * 110}
                    onModalChange={setAnyOpen}
                  />
                ))}
              </div>
              <div
                style={{
                  height: 14,
                  background: t(
                    dark,
                    'linear-gradient(180deg,#2a1f4e,#1c1436)',
                    'linear-gradient(180deg,#c5bde0,#b0a8d0)',
                  ),
                  margin: '0 -40px',
                  boxShadow: '0 6px 24px rgba(0,0,0,0.4)',
                }}
              />
              <div
                style={{
                  height: 8,
                  background: t(dark, '#110d28', '#a098c0'),
                  margin: '0 -40px',
                  borderRadius: '0 0 20px 20px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
                }}
              />
            </div>
          </div>
        </Fade>
        <Fade>
          <p
            style={{
              textAlign: 'center',
              fontSize: '0.78rem',
              color: t(dark, '#374151', '#9ca3af'),
              marginTop: 14,
              transition: 'opacity 0.3s',
              opacity: anyOpen ? 0 : 1,
            }}
          >
            책을 클릭하면 프로젝트 상세 정보가 펼쳐집니다
          </p>
        </Fade>
      </div>
    </section>
  );
}
