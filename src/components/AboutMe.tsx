import { t } from '../utils/theme';
import { Fade } from './Fade';
import { SectionHead } from './SectionHead';

export function AboutMe({ dark }: { dark: boolean }) {
  const cards = [
    {
      icon: '💡',
      title: '자기소개',
      body: '컴퓨터공학을 전공하며 웹 개발에 매력을 느껴 프론트엔드 개발자로 성장했습니다. 사용자가 편리하게 사용할 수 있는 인터페이스를 만드는 것을 즐깁니다.',
    },
    {
      icon: '🛠️',
      title: '개발 철학',
      body: '"읽기 쉬운 코드가 좋은 코드다." 기능 구현에 그치지 않고 유지보수성과 재사용성을 항상 고민합니다.',
    },
    {
      icon: '🎯',
      title: '목표',
      body: '프론트엔드 아키텍처 설계와 성능 최적화 전문가로 성장하는 것이 장기 목표입니다.',
    },
  ];
  return (
    <section
      id='about'
      style={{
        padding: '96px 0',
        background: t(dark, '#0a0a14', '#f4f4fb'),
        transition: 'background 0.3s',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <Fade>
          <SectionHead title='About Me' sub='저에 대해 소개합니다' dark={dark} />
        </Fade>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
            gap: 20,
          }}
        >
          {cards.map((c, i) => (
            <Fade key={c.title} delay={i * 80}>
              <div
                style={{
                  padding: 28,
                  borderRadius: 20,
                  transition: 'border-color 0.3s, transform 0.3s, box-shadow 0.3s',
                  cursor: 'default',
                  height: '100%',
                  boxSizing: 'border-box',
                  border: `1.5px solid ${t(dark, 'rgba(167,139,250,0.1)', 'rgba(167,139,250,0.2)')}`,
                  background: t(
                    dark,
                    'rgba(255,255,255,0.02)',
                    'rgba(255,255,255,0.9)',
                  ),
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = 'translateY(-4px)';
                  el.style.borderColor = '#a78bfa';
                  el.style.boxShadow = '0 12px 40px rgba(167,139,250,0.12)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = 'translateY(0)';
                  el.style.borderColor = t(
                    dark,
                    'rgba(167,139,250,0.1)',
                    'rgba(167,139,250,0.2)',
                  );
                  el.style.boxShadow = 'none';
                }}
              >
                <div style={{ fontSize: '2rem', marginBottom: 12 }}>
                  {c.icon}
                </div>
                <h3
                  style={{
                    fontWeight: 700,
                    fontSize: '1.02rem',
                    color: t(dark, '#f1f5f9', '#0f172a'),
                    marginBottom: 8,
                  }}
                >
                  {c.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.87rem',
                    lineHeight: 1.72,
                    color: t(dark, '#94a3b8', '#64748b'),
                    margin: 0,
                  }}
                >
                  {c.body}
                </p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}
