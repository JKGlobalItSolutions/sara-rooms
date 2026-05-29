import { useMemo } from "react";

export function Particles({ count = 18 }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 3 + Math.random() * 6,
        duration: 14 + Math.random() * 18,
        delay: Math.random() * 12,
        dx: (Math.random() - 0.5) * 120,
        opacity: 0.4 + Math.random() * 0.5,
      })),
    [count]
  );
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          className="particle"
          style={{
            left: `${p.left}%`,
            bottom: "-20px",
            width: p.size,
            height: p.size,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            "--dx": `${p.dx}px`,
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  );
}