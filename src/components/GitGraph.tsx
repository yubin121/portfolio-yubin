import React, { useState } from 'react';
import {
  BRANCH_COLORS,
  COL_X,
  GIT_GRAPH,
  GRAPH_W,
  ROW_H,
} from '../data/gitGraph';

export function GitGraph({ dark }: { dark: boolean }) {
  const [hov, setHov] = useState<string | null>(null);
  const totalH = GIT_GRAPH.length * ROW_H + 20;
  const paths: React.ReactNode[] = [];
  const colRanges: Record<number, { start: number; end: number }> = {};
  GIT_GRAPH.forEach((c, i) => {
    if (!colRanges[c.x]) colRanges[c.x] = { start: i, end: i };
    colRanges[c.x].end = i;
  });
  Object.entries(colRanges).forEach(([col, range]) => {
    const cx = COL_X[Number(col)];
    const y1 = range.start * ROW_H + 14;
    const y2 = range.end * ROW_H + 28;
    const color =
      BRANCH_COLORS[col === '1' ? 'main' : col === '2' ? 'feature' : 'hotfix'];
    paths.push(
      <line
        key={`vl-${col}`}
        x1={cx}
        y1={y1}
        x2={cx}
        y2={y2}
        stroke={color}
        strokeWidth={1.5}
        opacity={0.5}
      />,
    );
  });
  GIT_GRAPH.forEach((c, i) => {
    if (!c.merge) return;
    const ti = GIT_GRAPH.findIndex((x) => x.id === c.merge);
    if (ti < 0) return;
    const x1 = COL_X[c.x],
      y1 = i * ROW_H + 21,
      x2 = COL_X[GIT_GRAPH[ti].x],
      y2 = ti * ROW_H + 21;
    paths.push(
      <path
        key={`merge-${c.id}`}
        d={`M${x1},${y1} C${x1},${(y1 + y2) / 2} ${x2},${(y1 + y2) / 2} ${x2},${y2}`}
        fill='none'
        stroke={BRANCH_COLORS[c.branch]}
        strokeWidth={1.5}
        opacity={0.6}
        strokeDasharray='4 3'
      />,
    );
  });

  const scrollbarStyle = `
    .git-scroll::-webkit-scrollbar{width:3px}
    .git-scroll::-webkit-scrollbar-track{background:transparent}
    .git-scroll::-webkit-scrollbar-thumb{background:rgba(167,139,250,0.2);border-radius:99px}
    .git-scroll::-webkit-scrollbar-thumb:hover{background:rgba(167,139,250,0.4)}
  `;

  return (
    <div
      style={{
        background: dark ? '#0d1117' : '#f6f8fa',
        borderRadius: 16,
        border: `1px solid ${dark ? 'rgba(167,139,250,0.12)' : 'rgba(0,0,0,0.08)'}`,
        overflow: 'hidden',
      }}
    >
      <style>{scrollbarStyle}</style>
      <div
        style={{
          padding: '10px 14px',
          borderBottom: `1px solid ${dark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}`,
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          flexWrap: 'wrap',
        }}
      >
        <span
          style={{
            fontSize: '0.7rem',
            color: dark ? '#7d8590' : '#57606a',
            fontFamily: 'monospace',
          }}
        >
          learning-journey
        </span>
        <span
          style={{
            fontSize: '0.68rem',
            padding: '2px 8px',
            borderRadius: 999,
            background: 'rgba(167,139,250,0.1)',
            color: '#a78bfa',
            border: '1px solid rgba(167,139,250,0.25)',
          }}
        >
          19 commits
        </span>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 14 }}>
          {Object.entries(BRANCH_COLORS).map(([br, col]) => (
            <span
              key={br}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 4,
                fontSize: '0.66rem',
                color: dark ? '#7d8590' : '#57606a',
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: col,
                  display: 'inline-block',
                }}
              />
              {br}
            </span>
          ))}
        </div>
      </div>
      <div
        className='git-scroll'
        style={{
          overflowY: 'auto',
          maxHeight: 480,
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgba(167,139,250,0.2) transparent',
        }}
      >
        <div style={{ display: 'flex', position: 'relative' }}>
          <div style={{ flexShrink: 0, width: GRAPH_W, position: 'relative' }}>
            <svg width={GRAPH_W} height={totalH} style={{ display: 'block' }}>
              {paths}
              {GIT_GRAPH.map((c, i) => {
                const cx = COL_X[c.x],
                  cy = i * ROW_H + 21;
                const color = BRANCH_COLORS[c.branch];
                const isHov = hov === c.id,
                  isMerge = !!c.merge;
                return (
                  <g key={c.id}>
                    {isMerge && (
                      <circle
                        cx={cx}
                        cy={cy}
                        r={9}
                        fill='none'
                        stroke={color}
                        strokeWidth={1.5}
                        opacity={0.5}
                      />
                    )}
                    <circle
                      cx={cx}
                      cy={cy}
                      r={5}
                      fill={isHov ? color : dark ? '#0d1117' : '#f6f8fa'}
                      stroke={color}
                      strokeWidth={2}
                      style={{ cursor: 'pointer', transition: 'fill 0.2s' }}
                      onMouseEnter={() => setHov(c.id)}
                      onMouseLeave={() => setHov(null)}
                    />
                    {!isMerge && <circle cx={cx} cy={cy} r={2} fill={color} />}
                  </g>
                );
              })}
            </svg>
          </div>
          <div style={{ flex: 1, padding: '0 4px' }}>
            {GIT_GRAPH.map((c) => (
              <div
                key={c.id}
                style={{
                  height: ROW_H,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '0 8px',
                  borderRadius: 6,
                  background:
                    hov === c.id
                      ? dark
                        ? 'rgba(167,139,250,0.06)'
                        : 'rgba(167,139,250,0.04)'
                      : 'transparent',
                  transition: 'background 0.15s',
                  cursor: 'default',
                }}
                onMouseEnter={() => setHov(c.id)}
                onMouseLeave={() => setHov(null)}
              >
                <span
                  style={{
                    minWidth: 36,
                    fontSize: '0.64rem',
                    color: c.year ? '#a78bfa' : 'transparent',
                    fontWeight: 700,
                    fontFamily: 'monospace',
                  }}
                >
                  {c.year || '·'}
                </span>
                <span
                  style={{
                    fontSize: '0.65rem',
                    color: '#58a6ff',
                    fontFamily: 'monospace',
                    minWidth: 44,
                    opacity: 0.8,
                  }}
                >
                  {c.id.padStart(5, '0').slice(-5)}
                </span>
                <span
                  style={{
                    fontSize: '0.78rem',
                    color:
                      hov === c.id
                        ? dark
                          ? '#e2e8f0'
                          : '#0f172a'
                        : dark
                          ? '#c9d1d9'
                          : '#24292f',
                    flex: 1,
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {c.msg}
                </span>
                {c.tag && (
                  <span
                    style={{
                      fontSize: '0.63rem',
                      padding: '2px 7px',
                      borderRadius: 999,
                      background:
                        c.tag === 'HEAD'
                          ? 'rgba(56,211,159,0.12)'
                          : 'rgba(96,165,250,0.1)',
                      color:
                        c.tag === 'HEAD'
                          ? '#38d39f'
                          : c.tag === 'dev'
                            ? '#a78bfa'
                            : '#60a5fa',
                      border: `1px solid ${c.tag === 'HEAD' ? 'rgba(56,211,159,0.3)' : c.tag === 'dev' ? 'rgba(167,139,250,0.3)' : 'rgba(96,165,250,0.25)'}`,
                      flexShrink: 0,
                      fontFamily: 'monospace',
                    }}
                  >
                    {c.tag === 'HEAD'
                      ? '◉ HEAD'
                      : c.tag === 'dev'
                        ? '⬡ dev'
                        : '☁ origin/main'}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
