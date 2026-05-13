import { t } from '../utils/theme';
import { Fade } from './Fade';
import { SectionHead } from './SectionHead';

export function Contact({ dark }: { dark: boolean }) {
  const links = [
    {
      icon: '✉️',
      label: '이메일',
      value: 'yubin04529@gmail.com',
      href: 'mailto:yubin04529@gmail.com',
      color: '#f472b6',
    },
    {
      icon: '🐙',
      label: 'GitHub',
      value: 'github.com/yubin121',
      href: 'https://github.com/yubin121',
      color: '#94a3b8',
    },
    {
      icon: '📝',
      label: '블로그',
      value: 'bbinit.tistory.com',
      href: 'https://bbinit.tistory.com',
      color: '#34d399',
    },
  ];
  return (
    <section
      id='contact'
      style={{
        padding: '96px 0',
        background: t(dark, '#0a0a14', '#f4f4fb'),
        transition: 'background 0.3s',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <Fade>
          <SectionHead title='Contact' sub='연락하기' dark={dark} />
        </Fade>
        <Fade delay={60}>
          <p
            style={{
              textAlign: 'center',
              fontSize: '0.9rem',
              color: t(dark, '#94a3b8', '#64748b'),
              marginBottom: 40,
            }}
          >
            새로운 기회나 협업 제안은 언제나 환영합니다. 편하게 연락 주세요!
          </p>
        </Fade>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))',
            gap: 16,
            maxWidth: 620,
            margin: '0 auto',
          }}
        >
          {links.map((l, i) => (
            <Fade key={l.label} delay={i * 60}>
              <a
                href={l.href}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 10,
                  padding: '26px 18px',
                  borderRadius: 20,
                  border: `1.5px solid ${t(dark, 'rgba(255,255,255,0.06)', 'rgba(0,0,0,0.07)')}`,
                  background: t(
                    dark,
                    'rgba(255,255,255,0.02)',
                    'rgba(255,255,255,0.85)',
                  ),
                  textDecoration: 'none',
                  transition:
                    'transform 0.3s,border-color 0.3s,box-shadow 0.3s',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.transform = 'translateY(-6px)';
                  el.style.borderColor = l.color;
                  el.style.boxShadow = `0 16px 40px ${l.color}28`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.transform = 'translateY(0)';
                  el.style.borderColor = t(
                    dark,
                    'rgba(255,255,255,0.06)',
                    'rgba(0,0,0,0.07)',
                  );
                  el.style.boxShadow = 'none';
                }}
              >
                <span style={{ fontSize: '1.9rem' }}>{l.icon}</span>
                <span
                  style={{
                    fontWeight: 700,
                    fontSize: '0.88rem',
                    color: t(dark, '#f1f5f9', '#0f172a'),
                  }}
                >
                  {l.label}
                </span>
                <span
                  style={{
                    fontSize: '0.72rem',
                    color: l.color,
                    wordBreak: 'break-all',
                    textAlign: 'center',
                  }}
                >
                  {l.value}
                </span>
              </a>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}
