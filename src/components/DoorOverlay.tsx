export function DoorOverlay({
  phase,
}: {
  phase: 'closed' | 'opening' | 'open' | 'closing';
}) {
  if (phase === 'open') return null;
  const isOpening = phase === 'opening';
  const isClosed = phase === 'closed';
  const leftTarget = isOpening ? '-100%' : '0%';
  const rightTarget = isOpening ? '100%' : '0%';
  const dur = isOpening ? '0.95s' : '1.1s';
  const ease = 'cubic-bezier(0.76,0,0.24,1)';
  const transition = isClosed ? 'none' : `transform ${dur} ${ease}`;
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10000,
        display: 'flex',
        pointerEvents: 'auto',
      }}
    >
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          paddingRight: 2,
          boxShadow: '6px 0 48px rgba(0,0,0,0.9)',
          background: '#080810',
          transform: `translateX(${leftTarget})`,
          transition,
        }}
      >
        <div
          style={{
            width: 2,
            height: '55%',
            opacity: 0.8,
            background:
              'linear-gradient(to bottom, transparent, #a78bfa, transparent)',
          }}
        />
      </div>
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          paddingLeft: 2,
          boxShadow: '-6px 0 48px rgba(0,0,0,0.9)',
          background: '#080810',
          transform: `translateX(${rightTarget})`,
          transition,
        }}
      >
        <div
          style={{
            width: 2,
            height: '55%',
            opacity: 0.8,
            background:
              'linear-gradient(to bottom, transparent, #a78bfa, transparent)',
          }}
        />
      </div>
      {(isClosed || phase === 'closing') && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}
        >
          <div
            style={{
              fontFamily: 'monospace',
              fontSize: '2.6rem',
              fontWeight: 900,
              color: '#fff',
              letterSpacing: '0.08em',
              textShadow: '0 0 30px rgba(167,139,250,0.8)',
            }}
          >
            &lt;YB /&gt;
          </div>
          <div
            style={{
              marginTop: 10,
              fontSize: '0.78rem',
              color: '#a78bfa',
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
            }}
          >
            Portfolio
          </div>
        </div>
      )}
    </div>
  );
}
