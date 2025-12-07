import { ReactNode } from 'react';

interface SectionProps {
  title: string;
  color: string;
  children: ReactNode;
}

export const Section = ({ title, color, children }: SectionProps) => {
  const theme = `var(--tos-${color})`;

  return (
    <section className="bg-white" style={{ border: `4px double ${theme}` }}>
      <header 
        className="px-2 py-1 text-base md:text-lg font-bold uppercase tracking-widest truncate border-b-2"
        style={{ background: theme, color: 'white', borderColor: theme }}
      >
        [{title}]
      </header>
      <div className="p-2.5 md:p-4">{children}</div>
    </section>
  );
};