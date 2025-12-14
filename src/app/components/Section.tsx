'use client';

import { ReactNode, useRef, useEffect, useState, CSSProperties } from 'react';

interface SectionProps {
  title: string;
  color: string;
  children: ReactNode;
}

export const Section = ({ title, color, children }: SectionProps) => {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={ref}
      className={`retro-container mb-6 ${isVisible ? 'animate-slide-right' : 'opacity-0'}`}
      style={{ '--retro-color': `var(--tos-${color})` } as CSSProperties}
    >
      <header className="retro-header">
        [{title}]
      </header>
      <div className="p-2.5 md:p-4">
        {children}
      </div>
    </section>
  );
};