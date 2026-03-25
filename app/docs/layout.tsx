import type { ReactNode } from 'react';
import { EditPageLink } from '@/components/docs/edit-page-link';
import { PrevNextNav } from '@/components/docs/prev-next-nav';
import { TableOfContents } from '@/components/docs/table-of-contents';
import { DocsSidebar } from '@/components/layout/docs-sidebar';

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[280px_minmax(0,1fr)] lg:px-8 xl:grid-cols-[280px_minmax(0,1fr)_240px]">
      <div className="hidden lg:block">
        <DocsSidebar />
      </div>
      <div className="min-w-0">
        <article className="doc-prose max-w-none">{children}</article>
        <EditPageLink />
        <PrevNextNav />
      </div>
      <div className="hidden xl:block">
        <TableOfContents />
      </div>
    </div>
  );
}
