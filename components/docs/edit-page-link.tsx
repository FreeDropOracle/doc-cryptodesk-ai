'use client';

import Link from 'next/link';
import { FilePenLine } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { docsRepo } from '@/lib/docs-config';

const getEditPath = (pathname: string) => {
  if (pathname === '/docs') {
    return 'app/docs/page.tsx';
  }

  if (pathname.startsWith('/docs/')) {
    return `app${pathname}/page.mdx`;
  }

  return `app${pathname}/page.tsx`;
};

export const EditPageLink = () => {
  const pathname = usePathname();

  if (pathname === null) {
    return null;
  }

  const href = `${docsRepo}/blob/main/${getEditPath(pathname)}`;

  return (
    <Link
      className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
      href={href}
      target="_blank"
    >
      <FilePenLine className="h-4 w-4" />
      Edit this page
    </Link>
  );
};
