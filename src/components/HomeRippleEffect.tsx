"use client";

import { type MouseEvent, type ReactNode, useCallback, useRef, useState } from "react";

type Ripple = {
  id: number;
  x: number;
  y: number;
};

const MIN_TRAVEL_DISTANCE = 18;
const RIPPLE_LIFETIME = 1000;

export function HomeRippleEffect({ children }: { children: ReactNode }) {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const lastPointer = useRef<{ x: number; y: number } | null>(null);
  const nextId = useRef(0);

  const handleMouseMove = useCallback((event: MouseEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - bounds.left + event.currentTarget.scrollLeft;
    const y = event.clientY - bounds.top + event.currentTarget.scrollTop;
    const previous = lastPointer.current;

    if (previous) {
      const distance = Math.hypot(x - previous.x, y - previous.y);
      if (distance < MIN_TRAVEL_DISTANCE) return;
    }

    lastPointer.current = { x, y };
    const id = nextId.current++;
    setRipples((current) => [...current.slice(-24), { id, x, y }]);

    window.setTimeout(() => {
      setRipples((current) => current.filter((ripple) => ripple.id !== id));
    }, RIPPLE_LIFETIME);
  }, []);

  const handleMouseLeave = useCallback(() => {
    lastPointer.current = null;
  }, []);

  return (
    <main className="reference-site home-ripple-surface" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <div className="home-ripple-layer" aria-hidden="true">
        {ripples.map((ripple) => (
          <span
            className="home-ripple"
            key={ripple.id}
            style={{ left: ripple.x, top: ripple.y }}
          />
        ))}
      </div>
      {children}
    </main>
  );
}
