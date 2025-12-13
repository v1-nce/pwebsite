import { ReactNode, CSSProperties } from 'react';

interface SectionProps {
  title: string;
  color: string;
  children: ReactNode;
}

export const Section = ({ title, color, children }: SectionProps) => {
  return (
    <section 
      className="retro-container" 
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