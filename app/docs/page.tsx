import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { docSections } from '@/lib/docs-config';

export const metadata = {
  title: 'Documentation'
};

export default function DocsIndexPage() {
  return (
    <div>
      <div className="mb-12">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">
          Documentation
        </p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white">
          Product, security, and release knowledge in one place.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Start with the basics, explore the product surface, then move into the security and
          engineering decisions that shaped the alpha.
        </p>
      </div>

      <div className="space-y-8">
        {docSections.map((section) => (
          <section key={section.title}>
            <h2 className="mb-4 text-2xl font-semibold text-white">{section.title}</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {section.items.map((item) => (
                <Link href={item.href} key={item.href}>
                  <Card className="h-full transition hover:border-primary/40 hover:bg-white/[0.07]">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                        <p className="mt-3 leading-7 text-slate-300">{item.description}</p>
                      </div>
                      <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-slate-400" />
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
