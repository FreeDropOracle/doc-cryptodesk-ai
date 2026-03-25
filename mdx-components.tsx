import type { MDXComponents } from 'mdx/types';
import Link from 'next/link';
import { Callout } from '@/components/docs/callout';
import { CodeBlock } from '@/components/docs/code-block';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Callout,
    a: ({ href = '', ...props }) => {
      const isExternal = href.startsWith('http');

      if (isExternal) {
        return <a href={href} rel="noreferrer" target="_blank" {...props} />;
      }

      return <Link href={href} {...props} />;
    },
    pre: ({ children }) => <CodeBlock>{children}</CodeBlock>,
    table: (props) => (
      <div className="my-8 overflow-x-auto">
        <table
          className="min-w-full border-collapse overflow-hidden rounded-2xl border border-white/10 text-left text-sm"
          {...props}
        />
      </div>
    ),
    th: (props) => (
      <th
        className="border-b border-white/10 bg-white/5 px-4 py-3 font-semibold text-white"
        {...props}
      />
    ),
    td: (props) => (
      <td className="border-b border-white/10 px-4 py-3 text-slate-300" {...props} />
    ),
    blockquote: (props) => (
      <blockquote
        className="my-8 rounded-r-2xl border-l-4 border-primary bg-primary/10 px-5 py-4 text-slate-200"
        {...props}
      />
    ),
    ...components
  };
}
