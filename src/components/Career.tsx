import { CAREER } from '../data/career';
import { t } from '../utils/theme';
import { Fade } from './Fade';
import { SectionHead } from './SectionHead';

export function Career({ dark }: { dark: boolean }) {
  return (
    <section
      id='career'
      style={{
        padding: '96px 0',
        background: t(dark, '#05050f', '#fafbff'),
        transition: 'background 0.3s',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <Fade>
          <SectionHead title='Career & Education' sub='경력 및 학력' dark={dark} />
        </Fade>
        <div
          style={{
            maxWidth: 640,
            margin: '0 auto',
            position: 'relative',
            paddingLeft: 32,
            display: 'flex',
            flexDirection: 'column',
            gap: 28,
            borderLeft: `2px solid ${t(dark, 'rgba(167,139,250,0.2)', 'rgba(167,139,250,0.3)')}`,
          }}
        >
          {CAREER.map((c, i) => (
            <Fade key={i} delay={i * 70}>
              <div style={{ position: 'relative' }}>
                <div
                  style={{
                    position: 'absolute',
                    width: 20,
                    height: 20,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.6rem',
                    boxShadow: '0 0 14px rgba(167,139,250,0.55)',
                    background:
                      'linear-gradient(135deg, #a78bfa, #60a5fa)',
                    left: -41,
                  }}
                >
                  {c.type === 'education' ? '🎓' : '💼'}
                </div>
                <div
                  style={{
                    padding: 22,
                    borderRadius: 16,
                    border: `1px solid ${t(dark, 'rgba(167,139,250,0.1)', 'rgba(167,139,250,0.2)')}`,
                    background: t(
                      dark,
                      'rgba(255,255,255,0.02)',
                      'rgba(255,255,255,0.85)',
                    ),
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      padding: '3px 10px',
                      borderRadius: 999,
                      background: 'rgba(167,139,250,0.08)',
                      color: '#a78bfa',
                      border: '1px solid rgba(167,139,250,0.2)',
                    }}
                  >
                    {c.period}
                  </span>
                  <h3
                    style={{
                      fontWeight: 700,
                      fontSize: '0.98rem',
                      color: t(dark, '#f1f5f9', '#0f172a'),
                      marginTop: 10,
                      marginBottom: 4,
                    }}
                  >
                    {c.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.83rem',
                      fontWeight: 600,
                      color: '#a78bfa',
                      marginBottom: 8,
                      marginTop: 0,
                    }}
                  >
                    {c.subtitle}
                  </p>
                  <p
                    style={{
                      fontSize: '0.83rem',
                      lineHeight: 1.68,
                      color: t(dark, '#94a3b8', '#64748b'),
                      margin: 0,
                    }}
                  >
                    {c.description}
                  </p>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}
