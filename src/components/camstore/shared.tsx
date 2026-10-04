import { useLayoutEffect, useRef, useState, type ReactNode } from 'react';
import { motion } from 'framer-motion';

/** Smooth-scrolls to a section by id; falls back to instant scroll when the user prefers reduced motion. */
export function scrollToId(id: string) {
  const target = document.getElementById(id);
  if (!target) return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
}

/** Subtle fade + small slide-up. Reduced-motion is honoured globally by <MotionConfig reducedMotion="user">. */
export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay, ease: [0.2, 0.7, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHead({
  eyebrow,
  title,
  copy,
  id,
  align = 'left',
}: {
  eyebrow?: string;
  title: ReactNode;
  copy?: string;
  id?: string;
  align?: 'left' | 'center';
}) {
  return (
    <div className={`cs-head cs-head--${align}`}>
      {eyebrow ? <span className="section-eyebrow">{eyebrow}</span> : null}
      <h2 id={id} className="cs-head__title">{title}</h2>
      {copy ? <p className="cs-head__copy">{copy}</p> : null}
    </div>
  );
}

/**
 * Renders a mock product screen at a fixed design size, then scales the whole thing to fit its container
 * (like a screenshot would). On very narrow viewports it stops shrinking at `minScale` and pans inside
 * the frame instead of letting the text become unreadable or overflowing the page.
 */
export function ScaledScreen({
  width,
  height,
  minScale = 0.56,
  label,
  children,
}: {
  width: number;
  height: number;
  minScale?: number;
  label: string;
  children: ReactNode;
}) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [panning, setPanning] = useState(false);

  useLayoutEffect(() => {
    const host = hostRef.current;
    if (!host) return undefined;
    const measure = () => {
      const available = host.clientWidth;
      const fit = available / width;
      setScale(Math.max(minScale, Math.min(1, fit)));
      setPanning(fit < minScale - 0.001);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(host);
    return () => observer.disconnect();
  }, [width, minScale]);

  return (
    <div
      ref={hostRef}
      className="cs-scaled"
      role="img"
      aria-label={label}
      data-panning={panning || undefined}
      tabIndex={panning ? 0 : undefined}
    >
      <div className="cs-scaled__sizer" style={{ width: width * scale, height: height * scale }}>
        <div className="cs-scaled__canvas" style={{ width, height, transform: `scale(${scale})` }} aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}

/** Neutral browser chrome so every screenshot reads as the same product, on any page background. */
export function BrowserFrame({ title, children, className = '' }: { title: string; children: ReactNode; className?: string }) {
  return (
    <figure className={`cs-browser ${className}`.trim()}>
      <div className="cs-browser__bar" aria-hidden="true">
        <span /><span /><span />
        <em>{title}</em>
      </div>
      <div className="cs-browser__body">{children}</div>
    </figure>
  );
}
