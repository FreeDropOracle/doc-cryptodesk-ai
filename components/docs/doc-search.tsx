'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import Fuse from 'fuse.js';
import { Command, Search, X } from 'lucide-react';
import { allSearchItems } from '@/lib/docs-config';

export const DocSearch = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [recent, setRecent] = useState<typeof allSearchItems>([]);

  useEffect(() => {
    const stored = window.localStorage.getItem('cryptodesk-docs-recent');

    if (stored === null) {
      return;
    }

    try {
      const hrefs = JSON.parse(stored) as string[];
      const items = hrefs
        .map((href) => allSearchItems.find((item) => item.href === href))
        .filter((item): item is (typeof allSearchItems)[number] => item !== undefined);

      setRecent(items);
    } catch {
      window.localStorage.removeItem('cryptodesk-docs-recent');
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setOpen((current) => !current);
      }

      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const results = useMemo(() => {
    if (query.trim().length === 0) {
      return (recent.length > 0 ? recent : allSearchItems).slice(0, 6);
    }

    const fuse = new Fuse(allSearchItems, {
      threshold: 0.35,
      keys: ['title', 'description']
    });

    return fuse.search(query).map((result) => result.item).slice(0, 8);
  }, [query, recent]);

  const storeRecentItem = (href: string) => {
    const next = [href, ...recent.map((item) => item.href).filter((item) => item !== href)].slice(
      0,
      6
    );
    window.localStorage.setItem('cryptodesk-docs-recent', JSON.stringify(next));
    const nextItems = next
      .map((itemHref) => allSearchItems.find((item) => item.href === itemHref))
      .filter((item): item is (typeof allSearchItems)[number] => item !== undefined);
    setRecent(nextItems);
  };

  return (
    <>
      <button
        className="hidden min-w-[280px] items-center justify-between rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition hover:bg-white/10 md:inline-flex"
        onClick={() => setOpen(true)}
        type="button"
      >
        <span className="inline-flex items-center gap-2">
          <Search className="h-4 w-4" />
          Search docs, releases, and FAQ
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2 py-1 text-xs">
          <Command className="h-3 w-3" />K
        </span>
      </button>

      <button
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 md:hidden"
        onClick={() => setOpen(true)}
        type="button"
      >
        <Search className="h-4 w-4" />
      </button>

      {open ? (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-slate-950/75 px-4 pt-24 backdrop-blur-sm">
          <div className="w-full max-w-2xl rounded-3xl border border-white/10 bg-slate-950/95 shadow-glow">
            <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4">
              <Search className="h-4 w-4 text-slate-400" />
              <input
                autoFocus
                className="w-full bg-transparent text-sm text-slate-100 outline-none placeholder:text-slate-500"
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search documentation..."
                value={query}
              />
              <button
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-slate-300"
                onClick={() => setOpen(false)}
                type="button"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="max-h-[420px] overflow-y-auto p-3">
              {results.map((item) => (
                <Link
                  className="block rounded-2xl px-4 py-3 transition hover:bg-white/5"
                  href={item.href}
                  key={item.href}
                  onClick={() => {
                    storeRecentItem(item.href);
                    setOpen(false);
                  }}
                >
                  <div className="text-sm font-semibold text-white">{item.title}</div>
                  <div className="mt-1 text-sm text-slate-400">{item.description}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
