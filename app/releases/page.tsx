import Link from 'next/link';
import { ArrowUpRight, Download, ShieldCheck } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { latestReleaseUrl, releasesUrl } from '@/lib/docs-config';

const highlights = [
  'Non-custodial storage boundaries with keychain-backed secret handling',
  'Simulation-first order flow with virtual balance and isolated history',
  'Explainable AI signals with confidence and transparent risk filtering',
  'English and Arabic renderer experience with onboarding and guardrails'
] as const;

const limitations = [
  'Windows x64 release only',
  'Unsigned alpha build, so Unknown Publisher is expected on Windows',
  'Live trading remains disabled by design in this release track',
  'Auto-update metadata is not yet published for alpha delivery'
] as const;

export const metadata = {
  title: 'Releases'
};

export default function ReleasesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <Badge className="mb-6">Release Notes</Badge>
        <h1 className="text-5xl font-semibold tracking-tight text-white">Published release channel</h1>
        <p className="mt-6 text-lg leading-8 text-slate-300">
          The current documentation site tracks the latest public alpha artifact and explains
          what is available today, what is intentionally limited, and how testers should approach
          validation safely.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Card>
          <div className="flex flex-wrap items-center gap-3">
            <Badge>Latest</Badge>
            <span className="text-sm text-slate-400">Released 2026-03-24</span>
          </div>
          <h2 className="mt-5 text-3xl font-semibold text-white">CryptoDesk AI v1.0.0-alpha.1</h2>
          <p className="mt-4 leading-8 text-slate-300">
            The first published Windows alpha artifact for private beta delivery. This release
            ships the secure desktop shell, simulation workspace, explainable AI layer, and the
            launch documentation package that supports controlled testing.
          </p>

          <div className="mt-8">
            <h3 className="text-lg font-semibold text-white">Highlights</h3>
            <ul className="mt-4 space-y-3 text-slate-300">
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <Link href={latestReleaseUrl} target="_blank">
                <Download className="h-4 w-4" />
                Download Release
              </Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/releases/v1.0.0-alpha.1">
                Read Full Notes
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Card>

        <Card className="bg-slate-950/60">
          <div className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            <ShieldCheck className="h-4 w-4 text-blue-300" />
            Alpha notes
          </div>
          <ul className="mt-6 space-y-4 text-slate-300">
            {limitations.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-slate-300">
            Need the full release feed instead of just the latest artifact? Use the GitHub
            releases page for drafts, tags, and historical notes.
          </div>
          <div className="mt-6">
            <Button asChild variant="ghost">
              <Link href={releasesUrl} target="_blank">
                Open GitHub Releases
              </Link>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
