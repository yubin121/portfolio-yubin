import React from 'react';
import { useFadeIn } from '../hooks/useFadeIn';

export function Fade({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const { ref, vis } = useFadeIn();
  return (
    <div
      ref={ref}
      style={{
        transition: 'opacity 0.7s, transform 0.7s',
        transitionDelay: `${delay}ms`,
        opacity: vis ? 1 : 0,
        transform: vis ? 'translateY(0)' : 'translateY(28px)',
      }}
    >
      {children}
    </div>
  );
}
