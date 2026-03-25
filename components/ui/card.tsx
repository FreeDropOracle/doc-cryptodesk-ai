import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={cn(
        'rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_12px_40px_rgba(2,6,23,0.35)] backdrop-blur',
        className
      )}
    >
      {children}
    </div>
  );
};
