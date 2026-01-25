import type { ReactNode } from 'react';

interface SectionProps {
  title: string;
  children: ReactNode;
}

export default function Section({ title, children }: SectionProps) {
  return (
    <section style={{ marginBottom: '2.5rem' }}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
