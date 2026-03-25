'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { findDocByHref } from '@/lib/docs-config';

export const TableOfContents = () => {
  const pathname = usePathname();
  const currentDoc = findDocByHref(pathname);

  if (currentDoc?.headings === undefined || currentDoc.headings.length === 0) {
    return null;
  }

  return (
    <aside className="sticky top-24 hidden rounded-3xl border border-white/10 bg-white/5 p-5 xl:block">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
        On this page
      </p>
      <nav className="space-y-3 text-sm">
        {currentDoc.headings.map((heading) => (
          <Link
            className="block text-slate-300 transition hover:text-white"
            href={`#${heading.id}`}
            key={heading.id}
          >
            {heading.title}
          </Link>
        ))}
      </nav>
    </aside>
  );
};
