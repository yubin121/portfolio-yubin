import { useState } from 'react';
import { useFadeIn } from '../hooks/useFadeIn';
import type { Project } from '../types';
import { BookModal } from './BookModal';

export function Book({
  p,
  tilt = 0,
  dark,
  dropDelay = 0,
  onModalChange,
}: {
  p: Project;
  tilt?: number;
  dark: boolean;
  dropDelay?: number;
  onModalChange?: (open: boolean) => void;
}) {
  const [hov, setHov] = useState(false);
  const [modal, setModal] = useState(false);
  const { ref, vis } = useFadeIn();
  const openModal = () => {
    setModal(true);
    onModalChange?.(true);
  };
  const closeModal = () => {
    setModal(false);
    onModalChange?.(false);
  };
  return (
    <>
      <div
        ref={ref}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          cursor: 'pointer',
          flexShrink: 0,
          opacity: vis ? 1 : 0,
          transform: vis
            ? `translateY(${hov ? -16 : 0}px)`
            : 'translateY(-120px)',
          transition: vis
            ? `opacity 0.55s ${dropDelay}ms cubic-bezier(0.22,1,0.36,1), transform 0.55s ${dropDelay}ms cubic-bezier(0.22,1,0.36,1)`
            : 'none',
        }}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        onClick={openModal}
      >
        <div
          style={{
            position: 'relative',
            width: p.thickness + 22,
            height: 210,
            transformOrigin: 'bottom center',
            transform: `perspective(600px) rotate(${tilt}deg)`,
            transition: 'transform 0.35s cubic-bezier(0.34,1.4,0.64,1)',
            filter: hov
              ? `drop-shadow(0 20px 28px ${p.accent}60)`
              : `drop-shadow(0 ${4 + Math.abs(tilt) * 2}px 10px rgba(0,0,0,0.6))`,
          }}
        >
          <div
            style={{
              position: 'absolute',
              left: 17,
              top: 4,
              right: -4,
              height: '100%',
              background: 'rgba(240,235,220,0.07)',
              borderRadius: '0 3px 3px 0',
              zIndex: -1,
            }}
          />
          <div
            style={{
              position: 'absolute',
              left: 18,
              top: 7,
              right: -7,
              height: '100%',
              background: 'rgba(240,235,220,0.04)',
              borderRadius: '0 3px 3px 0',
              zIndex: -2,
            }}
          />
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: 18,
              height: '100%',
              background: `linear-gradient(180deg,${p.spine}ff,${p.spine}cc,${p.spine}ff)`,
              borderRadius: '3px 0 0 3px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 'inset -3px 0 6px rgba(0,0,0,0.3)',
            }}
          >
            <span
              style={{
                writingMode: 'vertical-rl',
                textOrientation: 'mixed',
                fontSize: '0.58rem',
                fontWeight: 700,
                color: 'rgba(255,255,255,0.55)',
                letterSpacing: '0.12em',
                transform: 'rotate(180deg)',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                maxHeight: '80%',
                textOverflow: 'ellipsis',
              }}
            >
              {p.title}
            </span>
          </div>
          <div
            style={{
              position: 'absolute',
              left: 18,
              top: 0,
              right: 0,
              height: '100%',
              background: `linear-gradient(155deg,${p.accent}55 0%,${p.accent}30 60%,${p.spine}60 100%)`,
              border: `1px solid ${p.accent}60`,
              borderLeft: 'none',
              borderRadius: '0 4px 4px 0',
              padding: '14px 10px 10px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: 1,
                background: `linear-gradient(90deg,transparent,${p.accent}80,transparent)`,
              }}
            />
            <div>
              <span style={{ fontSize: '1.4rem' }}>{p.emoji}</span>
              <p
                style={{
                  fontSize: '0.68rem',
                  fontWeight: 800,
                  color: dark ? p.accent : '#1e1b4b',
                  margin: '6px 0 0',
                  lineHeight: 1.2,
                  wordBreak: 'break-word',
                  textShadow: dark ? 'none' : '0 1px 2px rgba(255,255,255,0.6)',
                }}
              >
                {p.title}
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {p.techStack.slice(0, 2).map((s) => (
                <span
                  key={s}
                  style={{
                    fontSize: '0.54rem',
                    color: dark ? 'rgba(255,255,255,0.35)' : 'rgba(0,0,0,0.55)',
                    background: dark
                      ? 'rgba(255,255,255,0.04)'
                      : 'rgba(255,255,255,0.5)',
                    padding: '1px 5px',
                    borderRadius: 3,
                    display: 'inline-block',
                    width: 'fit-content',
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      {modal && <BookModal p={p} dark={dark} onClose={closeModal} />}
    </>
  );
}
