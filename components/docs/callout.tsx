import type { ReactNode } from 'react';
import { AlertTriangle, CheckCircle2, Info, ShieldAlert } from 'lucide-react';
import { cn } from '@/lib/utils';

type CalloutTone = 'info' | 'warning' | 'success' | 'security';

interface CalloutProps {
  title?: string;
  tone?: CalloutTone;
  children: ReactNode;
}

const toneMap: Record<
  CalloutTone,
  { icon: typeof Info; className: string; title: string }
> = {
  info: {
    icon: Info,
    className: 'border-blue-400/30 bg-blue-400/10 text-blue-50',
    title: 'Info'
  },
  warning: {
    icon: AlertTriangle,
    className: 'border-amber-400/30 bg-amber-400/10 text-amber-50',
    title: 'Warning'
  },
  success: {
    icon: CheckCircle2,
    className: 'border-emerald-400/30 bg-emerald-400/10 text-emerald-50',
    title: 'Success'
  },
  security: {
    icon: ShieldAlert,
    className: 'border-fuchsia-400/30 bg-fuchsia-400/10 text-fuchsia-50',
    title: 'Security'
  }
};

export const Callout = ({ title, tone = 'info', children }: CalloutProps) => {
  const { icon: Icon, className, title: defaultTitle } = toneMap[tone];

  return (
    <div className={cn('my-8 rounded-2xl border p-5', className)}>
      <div className="mb-3 flex items-center gap-2 font-semibold">
        <Icon className="h-4 w-4" />
        <span>{title ?? defaultTitle}</span>
      </div>
      <div className="text-sm leading-7 text-current/90">{children}</div>
    </div>
  );
};
