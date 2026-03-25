'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { docSections } from '@/lib/docs-config';
import { cn } from '@/lib/utils';

export const DocsSidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto rounded-3xl border border-white/10 bg-white/5 p-5">
      <Link className="mb-6 block text-sm font-semibold text-white" href="/docs">
        Documentation
      </Link>

      <div className="space-y-6">
        {docSections.map((section) => (
          <div key={section.title}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              {section.title}
            </p>
            <div className="space-y-1">
              {section.items.map((item) => (
                <Link
                  className={cn(
                    'block rounded-2xl px-3 py-2 text-sm transition',
                    pathname === item.href
                      ? 'bg-primary/15 text-white ring-1 ring-inset ring-primary/30'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  )}
                  href={item.href}
                  key={item.href}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};
