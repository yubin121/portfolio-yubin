import { SKILLS } from '../data/skills';
import { t } from '../utils/theme';
import { Fade } from './Fade';
import { GitGraph } from './GitGraph';
import { SectionHead } from './SectionHead';

export function Skills({ dark }: { dark: boolean }) {
  return (
    <section
      id='skills'
      style={{
        padding: '96px 0',
        background: t(dark, '#05050f', '#fafbff'),
        transition: 'background 0.3s',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <Fade>
          <SectionHead
            title='Skills'
            sub='기술 스택 & 러닝 히스토리'
            dark={dark}
          />
        </Fade>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 14,
            marginBottom: 48,
          }}
        >
          {SKILLS.map((g, gi) => (
            <Fade key={g.label} delay={gi * 60}>
              <div
                style={{
                  padding: '18px 22px',
                  borderRadius: 16,
                  border: `1px solid ${t(dark, 'rgba(167,139,250,0.1)', 'rgba(167,139,250,0.18)')}`,
                  background: t(
                    dark,
                    'rgba(255,255,255,0.015)',
                    'rgba(255,255,255,0.8)',
                  ),
                }}
              >
                <p
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: '#a78bfa',
                    margin: '0 0 10px',
                  }}
                >
                  {g.label}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                  {g.skills.map((s) => (
                    <span
                      key={s}
                      style={{
                        padding: '5px 13px',
                        borderRadius: 999,
                        fontSize: '0.79rem',
                        fontWeight: 500,
                        border: `1px solid ${t(dark, 'rgba(167,139,250,0.22)', 'rgba(167,139,250,0.35)')}`,
                        background: t(
                          dark,
                          'rgba(167,139,250,0.07)',
                          'rgba(167,139,250,0.08)',
                        ),
                        color: t(dark, '#c4b5fd', '#7c3aed'),
                        transition: 'all 0.2s',
                        cursor: 'default',
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLSpanElement;
                        el.style.background = t(
                          dark,
                          'rgba(167,139,250,0.18)',
                          'rgba(167,139,250,0.18)',
                        );
                        el.style.transform = 'scale(1.06)';
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLSpanElement;
                        el.style.background = t(
                          dark,
                          'rgba(167,139,250,0.07)',
                          'rgba(167,139,250,0.08)',
                        );
                        el.style.transform = 'scale(1)';
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Fade>
          ))}
        </div>
        <Fade>
          <p
            style={{
              fontSize: '0.7rem',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#a78bfa',
              marginBottom: 14,
            }}
          >
            Learning Timeline — Git Graph
          </p>
          <GitGraph dark={dark} />
        </Fade>
      </div>
    </section>
  );
}
