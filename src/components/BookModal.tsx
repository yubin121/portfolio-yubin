import { useEffect, useState } from 'react';
import type { Project } from '../types';

export function BookModal({
  p,
  dark,
  onClose,
}: {
  p: Project;
  dark: boolean;
  onClose: () => void;
}) {
  const [phase, setPhase] = useState<'idle' | 'opening' | 'open'>('idle');

  const handleClose = () => {
    setPhase('idle');
    setTimeout(onClose, 350);
  };

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('opening'), 20);
    const t2 = setTimeout(() => setPhase('open'), 500);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener('keydown', onKey);
    };
  }, []);

  // LEFT page: starts folded shut (rotateY 90) → opens flat (rotateY 0)
  const leftRot = phase === 'idle' ? 90 : 0;
  // RIGHT page: starts folded shut (rotateY -90) → opens flat (rotateY 0)
  const rightRot = phase === 'idle' ? -90 : 0;
  const dur = '0.48s';
  const ease = 'cubic-bezier(0.4,0,0.2,1)';

  const tagColors: Record<string, string> = {
    '프론트엔드 팀장': '#a78bfa',
    오픈소스: '#60a5fa',
    'DB 설계': '#f97316',
    '팀 프로젝트': '#34d399',
    '개인 프로젝트': '#fb923c',
    디자인: '#f472b6',
    '실시간 채팅': '#38bdf8',
    모바일: '#a3e635',
    AI: '#fb7185',
    모노레포: '#fbbf24',
    반응형: '#e879f9',
    '자동 배포': '#94a3b8',
    마크다운: '#7dd3fc',
    SEO: '#fcd34d',
    'AI 통합': '#34d399',
    실시간성: '#60a5fa',
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 5000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
      }}
      onClick={handleClose}
    >
      {/* backdrop */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: dark ? 'rgba(0,0,0,0.78)' : 'rgba(200,195,220,0.72)',
          opacity: phase !== 'idle' ? 1 : 0,
          transition: 'opacity 0.35s',
          backdropFilter: 'blur(16px)',
        }}
      />
      {/* book wrapper */}
      <div
        style={{
          position: 'relative',
          width: 'min(800px,95vw)',
          perspective: 2000,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* closed cover (fades out as pages open) */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 3,
            borderRadius: 4,
            background: `linear-gradient(105deg,${p.spine}ee,${p.spine}aa)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 20,
            opacity: phase === 'idle' ? 1 : 0,
            transition: `opacity ${dur} ${ease}`,
            pointerEvents: 'none',
            boxShadow: `0 20px 60px rgba(0,0,0,0.6)`,
            minHeight: 400,
          }}
        >
          <span style={{ fontSize: '4rem' }}>{p.emoji}</span>
          <div>
            <h2
              style={{
                fontSize: '1.8rem',
                fontWeight: 900,
                color: 'rgba(255,255,255,0.95)',
                margin: 0,
              }}
            >
              {p.title}
            </h2>
            <p
              style={{
                fontSize: '0.85rem',
                color: 'rgba(255,255,255,0.55)',
                margin: '6px 0 0',
              }}
            >
              클릭하여 열기
            </p>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            transformStyle: 'preserve-3d',
            minHeight: 460,
          }}
        >
          {/* LEFT page */}
          <div
            style={{
              flex: 1,
              transformOrigin: 'right center',
              transform: `rotateY(${leftRot}deg)`,
              transition: `transform ${dur} ${ease}`,
              transformStyle: 'preserve-3d',
              zIndex: phase === 'idle' ? 2 : 1,
            }}
          >
            {/* front face */}
            <div
              style={{
                backfaceVisibility: 'hidden',
                background: `linear-gradient(125deg,${p.spine}f0,${p.spine}bb)`,
                borderRadius: '8px 0 0 8px',
                padding: '32px 28px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: 'inset -8px 0 24px rgba(0,0,0,0.35)',
              }}
            >
              <div>
                <div style={{ fontSize: '2.8rem', marginBottom: 12 }}>
                  {p.emoji}
                </div>
                <h2
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 900,
                    color: 'rgba(255,255,255,0.95)',
                    margin: '0 0 8px',
                  }}
                >
                  {p.title}
                </h2>
                <div
                  style={{
                    width: 36,
                    height: 3,
                    background: 'rgba(255,255,255,0.35)',
                    borderRadius: 99,
                    marginBottom: 14,
                  }}
                />
                <div style={{ margin: '0 0 16px' }}>
                  <p
                    style={{
                      fontSize: '0.9rem',
                      fontWeight: 700,
                      color: 'rgba(255,255,255,0.95)',
                      lineHeight: 1.45,
                      margin: '0 0 10px',
                      wordBreak: 'keep-all',
                    }}
                  >
                    {p.description.summary}
                  </p>
                  {p.description.sections.map(({ label, content }) => (
                    <div key={label} style={{ marginBottom: 8 }}>
                      <span
                        style={{
                          display: 'inline-block',
                          fontSize: '0.58rem',
                          fontWeight: 700,
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          color: p.accent,
                          background: `${p.accent}1a`,
                          padding: '2px 7px',
                          borderRadius: 4,
                          marginBottom: 4,
                        }}
                      >
                        {label}
                      </span>
                      <p
                        style={{
                          fontSize: '0.82rem',
                          lineHeight: 1.72,
                          color: 'rgba(255,255,255,0.65)',
                          margin: 0,
                          wordBreak: 'keep-all',
                        }}
                      >
                        {content}
                      </p>
                    </div>
                  ))}
                </div>
                {/* tags */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 5,
                    marginBottom: 16,
                  }}
                >
                  {p.tags.map((tag) => {
                    const color = tagColors[tag] || 'rgba(255,255,255,0.8)';
                    return (
                      <span
                        key={tag}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 5,
                          fontSize: '0.7rem',
                          padding: '4px 16px 4px 8px',
                          background: 'rgba(255,255,255,0.1)',
                          color,
                          fontWeight: 600,
                          clipPath:
                            'polygon(0% 0%, calc(100% - 10px) 0%, 100% 50%, calc(100% - 10px) 100%, 0% 100%)',
                        }}
                      >
                        <span
                          style={{
                            width: 5,
                            height: 5,
                            borderRadius: '50%',
                            border: '1.5px solid currentColor',
                            flexShrink: 0,
                            opacity: 0.7,
                          }}
                        />
                        {tag}
                      </span>
                    );
                  })}
                </div>
              </div>
              {/* tech stack */}
              <div>
                <p
                  style={{
                    fontSize: '0.63rem',
                    fontWeight: 700,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.38)',
                    margin: '0 0 7px',
                  }}
                >
                  Tech Stack
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                  {p.techStack.map((s) => (
                    <span
                      key={s}
                      style={{
                        fontSize: '0.74rem',
                        padding: '3px 9px',
                        borderRadius: 999,
                        background: 'rgba(255,255,255,0.1)',
                        color: 'rgba(255,255,255,0.8)',
                        border: '1px solid rgba(255,255,255,0.18)',
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* SPINE fold */}
          <div
            style={{
              width: 10,
              background: `linear-gradient(90deg,rgba(0,0,0,0.5),rgba(0,0,0,0.1))`,
              flexShrink: 0,
              zIndex: 4,
            }}
          />

          {/* RIGHT page */}
          <div
            style={{
              flex: 1,
              transformOrigin: 'left center',
              transform: `rotateY(${rightRot}deg)`,
              transition: `transform ${dur} ${ease}`,
              transformStyle: 'preserve-3d',
              zIndex: phase === 'idle' ? 2 : 1,
            }}
          >
            <div
              style={{
                backfaceVisibility: 'hidden',
                background: dark ? '#12121e' : '#f8f9ff',
                borderRadius: '0 8px 8px 0',
                padding: '28px 24px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: 18,
                boxShadow: 'inset 6px 0 20px rgba(0,0,0,0.2)',
              }}
            >
              {/* period + team */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontSize: '0.78rem' }}>📅</span>
                  <span
                    style={{
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: dark ? '#cbd5e1' : '#334155',
                    }}
                  >
                    {p.period}
                  </span>
                </div>
                {p.team && (
                  <div
                    style={{ display: 'flex', alignItems: 'center', gap: 8 }}
                  >
                    <span style={{ fontSize: '0.78rem' }}>👥</span>
                    <span
                      style={{
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        color: dark ? '#cbd5e1' : '#334155',
                        wordBreak: 'keep-all',
                      }}
                    >
                      {p.team}
                    </span>
                  </div>
                )}
              </div>

              <div
                style={{
                  height: 1,
                  background: dark
                    ? 'rgba(255,255,255,0.06)'
                    : 'rgba(0,0,0,0.06)',
                }}
              />

              {/* contribution */}
              {p.contribution.length > 0 && (
                <div>
                  <p
                    style={{
                      fontSize: '0.6rem',
                      fontWeight: 700,
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase',
                      color: dark ? '#475569' : '#94a3b8',
                      margin: '0 0 10px',
                    }}
                  >
                    기여도
                  </p>
                  <div
                    style={{ display: 'flex', flexDirection: 'column', gap: 8 }}
                  >
                    {p.contribution.map(({ label, pct }) => (
                      <div
                        key={label}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 10,
                        }}
                      >
                        <span
                          style={{
                            fontSize: '0.72rem',
                            fontWeight: 500,
                            color: dark ? '#94a3b8' : '#64748b',
                            minWidth: 88,
                            flexShrink: 0,
                          }}
                        >
                          {label}
                        </span>
                        <div
                          style={{
                            flex: 1,
                            height: 4,
                            background: dark
                              ? 'rgba(255,255,255,0.07)'
                              : 'rgba(0,0,0,0.07)',
                            borderRadius: 99,
                            overflow: 'hidden',
                          }}
                        >
                          <div
                            style={{
                              height: '100%',
                              width: `${pct}%`,
                              background: `linear-gradient(90deg,${p.spine},${p.accent})`,
                              borderRadius: 99,
                              transition:
                                'width 0.9s cubic-bezier(0.4,0,0.2,1)',
                            }}
                          />
                        </div>
                        <span
                          style={{
                            fontSize: '0.72rem',
                            fontWeight: 700,
                            color: p.accent,
                            minWidth: 32,
                            textAlign: 'right',
                            flexShrink: 0,
                          }}
                        >
                          {pct}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* performance */}
              {p.performance.length > 0 && (
                <div>
                  <p
                    style={{
                      fontSize: '0.6rem',
                      fontWeight: 700,
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase',
                      color: dark ? '#475569' : '#94a3b8',
                      margin: '0 0 10px',
                    }}
                  >
                    성과
                  </p>
                  <div
                    style={{ display: 'flex', flexDirection: 'column', gap: 6 }}
                  >
                    {p.performance.map(({ label, value }, i) => (
                      <div
                        key={i}
                        style={{
                          padding: '8px 11px',
                          borderRadius: 8,
                          background: dark
                            ? 'rgba(255,255,255,0.03)'
                            : 'rgba(0,0,0,0.025)',
                          border: `1px solid ${dark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}`,
                        }}
                      >
                        {label && (
                          <span
                            style={{
                              fontSize: '0.62rem',
                              fontWeight: 700,
                              color: p.accent,
                              display: 'block',
                              marginBottom: 2,
                              letterSpacing: '0.03em',
                            }}
                          >
                            {label}
                          </span>
                        )}
                        <span
                          style={{
                            fontSize: '0.77rem',
                            fontWeight: 500,
                            color: dark ? '#cbd5e1' : '#334155',
                            lineHeight: 1.5,
                            wordBreak: 'keep-all',
                          }}
                        >
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* links */}
              <div style={{ display: 'flex', gap: 8, marginTop: 'auto' }}>
                {(() => {
                  const hasGithub = p.githubUrl && p.githubUrl !== '#';
                  return hasGithub ? (
                    <a
                      href={p.githubUrl}
                      style={{
                        flex: 1,
                        textAlign: 'center',
                        padding: '9px',
                        borderRadius: 10,
                        background: 'transparent',
                        border: `1px solid ${dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
                        color: dark ? '#94a3b8' : '#64748b',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        textDecoration: 'none',
                        transition: 'all 0.2s',
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLAnchorElement;
                        el.style.borderColor = p.accent;
                        el.style.color = p.accent;
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLAnchorElement;
                        el.style.borderColor = dark
                          ? 'rgba(255,255,255,0.1)'
                          : 'rgba(0,0,0,0.1)';
                        el.style.color = dark ? '#94a3b8' : '#64748b';
                      }}
                    >
                      🐙 GitHub
                    </a>
                  ) : (
                    <span
                      style={{
                        flex: 1,
                        textAlign: 'center',
                        padding: '9px',
                        borderRadius: 10,
                        background: dark
                          ? 'rgba(255,255,255,0.03)'
                          : 'rgba(0,0,0,0.03)',
                        border: `1px solid ${dark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)'}`,
                        color: dark
                          ? 'rgba(255,255,255,0.2)'
                          : 'rgba(0,0,0,0.2)',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        cursor: 'not-allowed',
                        userSelect: 'none',
                      }}
                    >
                      🐙 GitHub
                    </span>
                  );
                })()}
                {(() => {
                  const hasDemo = p.demoUrl && p.demoUrl !== '#';
                  return hasDemo ? (
                    <a
                      href={p.demoUrl}
                      style={{
                        flex: 1,
                        textAlign: 'center',
                        padding: '9px',
                        borderRadius: 10,
                        background: `${p.accent}18`,
                        border: `1px solid ${p.accent}40`,
                        color: p.accent,
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        textDecoration: 'none',
                      }}
                    >
                      🚀 Live Demo
                    </a>
                  ) : (
                    <span
                      style={{
                        flex: 1,
                        textAlign: 'center',
                        padding: '9px',
                        borderRadius: 10,
                        background: dark
                          ? 'rgba(255,255,255,0.03)'
                          : 'rgba(0,0,0,0.03)',
                        border: `1px solid ${dark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)'}`,
                        color: dark
                          ? 'rgba(255,255,255,0.2)'
                          : 'rgba(0,0,0,0.2)',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        cursor: 'not-allowed',
                        userSelect: 'none',
                      }}
                    >
                      🚀 Live Demo
                    </span>
                  );
                })()}
              </div>

              {/* page number */}
              <p
                style={{
                  fontSize: '0.65rem',
                  color: dark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)',
                  textAlign: 'center',
                  margin: 0,
                  fontFamily: 'monospace',
                }}
              >
                p. {(p.id * 24).toString().padStart(3, '0')}
              </p>
            </div>
          </div>
        </div>
        {/* close button */}
        <button
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: -14,
            right: -14,
            width: 32,
            height: 32,
            borderRadius: '50%',
            background: dark ? '#1e1e2e' : '#fff',
            border: `1px solid ${dark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.12)'}`,
            color: dark ? '#94a3b8' : '#64748b',
            fontSize: '1rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 12px rgba(0,0,0,0.3)',
          }}
        >
          ✕
        </button>
      </div>
    </div>
  );
}
