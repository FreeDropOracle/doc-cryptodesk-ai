import Image from 'next/image';
import Link from 'next/link';
import { Github } from 'lucide-react';
import { DocSearch } from '@/components/docs/doc-search';
import { ThemeToggle } from '@/components/theme/theme-toggle';
import { Badge } from '@/components/ui/badge';
import { topNavigation, productRepo } from '@/lib/docs-config';

export const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <Link className="flex items-center gap-3" href="/">
            <div className="relative h-11 w-11 overflow-hidden rounded-2xl border border-white/10 bg-black/50 p-1 shadow-glow">
              <Image alt="CryptoDesk AI brand mark" fill priority sizes="44px" src="/brand-mark.svg" />
            </div>
            <div>
              <div className="font-semibold text-white">CryptoDesk AI</div>
              <div className="text-xs text-slate-400">Docs and release hub</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-5 text-sm text-slate-300 lg:flex">
            {topNavigation.map((item) => (
              <Link className="transition hover:text-white" href={item.href} key={item.href}>
                {item.title}
              </Link>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-3">
            <DocSearch />
            <Badge className="hidden md:inline-flex">v1.0.0-alpha.1</Badge>
            <Link
              className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:bg-white/10 md:inline-flex"
              href={productRepo}
              target="_blank"
            >
              <Github className="h-4 w-4" />
              Product Repo
            </Link>
            <ThemeToggle />
          </div>
        </div>

        <nav className="mt-4 flex gap-2 overflow-x-auto pb-1 text-sm text-slate-300 lg:hidden">
          {topNavigation.map((item) => (
            <Link
              className="whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-3 py-2 transition hover:bg-white/10 hover:text-white"
              href={item.href}
              key={item.href}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};