import { t } from '../utils/theme';

export function SectionHead({
  title,
  sub,
  dark,
}: {
  title: string;
  sub: string;
  dark: boolean;
}) {
  return (
    <div style={{ textAlign: 'center', marginBottom: 52 }}>
      <p
        style={{
          fontSize: '0.72rem',
          fontWeight: 600,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: '#a78bfa',
          marginBottom: 8,
          marginTop: 0,
        }}
      >
        {sub}
      </p>
      <h2
        style={{
          fontSize: 'clamp(1.8rem,3vw,2.4rem)',
          fontWeight: 900,
          margin: 0,
          color: t(dark, '#f1f5f9', '#0f172a'),
        }}
      >
        {title}
      </h2>
      <div
        style={{
          width: 36,
          height: 3,
          background: 'linear-gradient(to right, #a78bfa, #60a5fa)',
          borderRadius: 99,
          margin: '12px auto 0',
        }}
      />
    </div>
  );
}
