import Link from 'next/link';
import {
  cloneElement,
  isValidElement,
  type MouseEventHandler,
  type ReactElement,
  type ReactNode
} from 'react';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps {
  href?: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  asChild?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-primary text-white shadow-glow hover:bg-blue-500',
  secondary:
    'bg-white/8 text-foreground ring-1 ring-inset ring-white/10 hover:bg-white/12',
  ghost:
    'bg-transparent text-slate-300 hover:bg-white/6 hover:text-white'
};

const baseClassName =
  'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary';

export const Button = ({
  href,
  children,
  variant = 'primary',
  className,
  asChild = false,
  onClick,
  type = 'button'
}: ButtonProps) => {
  const mergedClassName = cn(baseClassName, variantClasses[variant], className);

  if (asChild && isValidElement(children)) {
    const child = children as ReactElement<{ className?: string }>;

    return cloneElement(child, {
      className: cn(mergedClassName, child.props.className)
    });
  }

  if (href !== undefined) {
    return (
      <Link className={mergedClassName} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={mergedClassName} onClick={onClick} type={type}>
      {children}
    </button>
  );
};
