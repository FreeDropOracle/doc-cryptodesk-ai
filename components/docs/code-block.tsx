'use client';

import { useMemo, useState, type ReactNode } from 'react';
import { Check, Copy } from 'lucide-react';

interface CodeBlockProps {
  children: ReactNode;
}

const extractText = (children: ReactNode): string => {
  if (typeof children === 'string') {
    return children;
  }

  if (
    children !== null &&
    typeof children === 'object' &&
    'props' in children &&
    typeof children.props === 'object' &&
    children.props !== null &&
    'children' in children.props
  ) {
    const nestedChildren = children.props.children as ReactNode;
    return typeof nestedChildren === 'string' ? nestedChildren : '';
  }

  return '';
};

export const CodeBlock = ({ children }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);
  const text = useMemo(() => extractText(children), [children]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1200);
  };

  return (
    <div className="group relative my-8 overflow-hidden rounded-2xl border border-white/10 bg-slate-950">
      <button
        className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 opacity-0 transition group-hover:opacity-100"
        onClick={handleCopy}
        type="button"
      >
        {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
        {copied ? 'Copied' : 'Copy'}
      </button>
      <pre className="overflow-x-auto p-5 text-sm leading-7 text-slate-100">{children}</pre>
    </div>
  );
};
