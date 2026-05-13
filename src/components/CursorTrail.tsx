import { useEffect, useRef } from 'react';

export function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<
    {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      size: number;
      hue: number;
    }[]
  >([]);
  const raf = useRef(0);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);
    const onMove = (e: MouseEvent) => {
      for (let i = 0; i < 3; i++)
        particles.current.push({
          x: e.clientX + (Math.random() - 0.5) * 8,
          y: e.clientY + (Math.random() - 0.5) * 8,
          vx: (Math.random() - 0.5) * 1.4,
          vy: (Math.random() - 0.5) * 1.4 - 0.4,
          life: 1,
          size: Math.random() * 3.5 + 1,
          hue: 220 + Math.random() * 80,
        });
    };
    window.addEventListener('mousemove', onMove);
    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.current = particles.current.filter((p) => p.life > 0.01);
      for (const p of particles.current) {
        p.x += p.vx;
        p.y += p.vy;
        p.life *= 0.92;
        p.size *= 0.97;
        ctx.save();
        ctx.globalAlpha = p.life * 0.65;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
        g.addColorStop(0, `hsla(${p.hue},90%,75%,1)`);
        g.addColorStop(1, `hsla(${p.hue},90%,55%,0)`);
        ctx.fillStyle = g;
        ctx.fill();
        ctx.restore();
      }
      raf.current = requestAnimationFrame(loop);
    };
    loop();
    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);
  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  );
}
