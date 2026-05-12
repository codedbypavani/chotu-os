"use client";

export function RainLayer() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-70" aria-hidden>
      {Array.from({ length: 42 }, (_, index) => (
        <span
          className="rain-streak absolute top-0 h-24 w-px bg-gradient-to-b from-transparent via-cyanfire/35 to-transparent"
          key={index}
          style={{
            left: `${(index * 37) % 100}%`,
            animationDuration: `${2.8 + (index % 7) * 0.45}s`,
            animationDelay: `${(index % 9) * 0.32}s`
          }}
        />
      ))}
    </div>
  );
}
