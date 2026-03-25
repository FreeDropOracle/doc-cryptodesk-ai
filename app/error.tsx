'use client';

import { Button } from '@/components/ui/button';

export default function Error({
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 py-20 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-300">Documentation error</p>
      <h1 className="mt-4 text-4xl font-semibold text-white">Something went wrong.</h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
        The docs site hit an unexpected rendering issue. You can retry the page or return to the
        main documentation index.
      </p>
      <div className="mt-8 flex gap-3">
        <Button className="cursor-pointer" onClick={reset}>
          Try again
        </Button>
        <Button href="/docs" variant="secondary">
          Open docs index
        </Button>
      </div>
    </div>
  );
}
