'use client';

import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { docLinks } from '@/lib/docs-config';

export const PrevNextNav = () => {
  const pathname = usePathname();
  const index = docLinks.findIndex((doc) => doc.href === pathname);

  if (index === -1) {
    return null;
  }

  const previous = index > 0 ? docLinks[index - 1] : null;
  const next = index < docLinks.length - 1 ? docLinks[index + 1] : null;

  return (
    <div className="mt-12 grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-2">
      {previous ? (
        <Link
          className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/8"
          href={previous.href}
        >
          <div className="mb-2 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-slate-400">
            <ChevronLeft className="h-3 w-3" />
            Previous
          </div>
          <div className="font-semibold text-white">{previous.title}</div>
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          className="rounded-2xl border border-white/10 bg-white/5 p-4 text-right transition hover:bg-white/8"
          href={next.href}
        >
          <div className="mb-2 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-slate-400">
            Next
            <ChevronRight className="h-3 w-3" />
          </div>
          <div className="font-semibold text-white">{next.title}</div>
        </Link>
      ) : null}
    </div>
  );
};
