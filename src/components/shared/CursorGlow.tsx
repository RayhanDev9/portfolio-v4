import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const GlowContainer = styled.div`
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 1;
  transition: opacity 0.3s ease;

  @media (hover: none) {
    display: none;
  }
`;

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;

    // Check if device supports hover
    if (window.matchMedia('(hover: none)').matches) return;

    let rafId: number;

    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (!el) return;
        const x = e.clientX;
        const y = e.clientY;
        el.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(183, 216, 148, 0.045), transparent 65%)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return <GlowContainer ref={glowRef} aria-hidden="true" />;
}
