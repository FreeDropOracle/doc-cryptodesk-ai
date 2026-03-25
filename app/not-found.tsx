import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 py-20 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">404</p>
      <h1 className="mt-4 text-4xl font-semibold text-white">Page not found.</h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
        The documentation page you were looking for may have moved, or it may not have been
        published yet in this alpha docs site.
      </p>
      <div className="mt-8">
        <Button asChild>
          <Link href="/docs">Go to Documentation</Link>
        </Button>
      </div>
    </div>
  );
}
