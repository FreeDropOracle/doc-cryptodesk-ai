import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { latestReleaseUrl } from '@/lib/docs-config';

export const metadata = {
  title: 'v1.0.0-alpha.1'
};

export default function ReleaseVersionPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <Badge className="mb-6">Latest Release</Badge>
        <h1 className="text-5xl font-semibold tracking-tight text-white">v1.0.0-alpha.1</h1>
        <p className="mt-6 text-lg leading-8 text-slate-300">
          First public alpha release of CryptoDesk AI. This version establishes the secure
          desktop foundation, simulation-first workflows, and explainable AI posture for private
          beta delivery.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <Card>
          <h2 className="text-2xl font-semibold text-white">What&apos;s included</h2>
          <ul className="mt-5 space-y-3 text-slate-300">
            <li>Electron 28 desktop shell with isolated main, preload, and renderer layers</li>
            <li>Typed IPC contracts validated with Zod before privileged execution</li>
            <li>Read-only exchange connectivity and portfolio preview flows</li>
            <li>Simulation trading engine with local history and virtual portfolio state</li>
            <li>Explainable AI signals, metrics, live alerts, and transparent filtering</li>
            <li>Bilingual renderer foundations in English and Arabic</li>
          </ul>
        </Card>

        <Card>
          <h2 className="text-2xl font-semibold text-white">Known limitations</h2>
          <ul className="mt-5 space-y-3 text-slate-300">
            <li>Windows x64 zip is the only published artifact in this release line</li>
            <li>Code signing is deferred for alpha, so Windows warnings are expected</li>
            <li>Live trading remains disabled intentionally</li>
            <li>Portable NSIS packaging is still experimental in the local environment</li>
          </ul>
        </Card>
      </div>

      <Card className="mt-6">
        <h2 className="text-2xl font-semibold text-white">Installation path</h2>
        <ol className="mt-5 space-y-3 text-slate-300">
          <li>Download the published Windows zip from the release page.</li>
          <li>Verify the SHA256 checksum if you want to validate integrity manually.</li>
          <li>Extract the archive into a dedicated folder.</li>
          <li>Run <code>CryptoDesk AI.exe</code> and complete onboarding.</li>
          <li>Begin with Simulation Mode before testing any exchange connectivity.</li>
        </ol>
        <div className="mt-8">
          <Button asChild>
            <Link href={latestReleaseUrl} target="_blank">
              Open Release on GitHub
            </Link>
          </Button>
        </div>
      </Card>
    </div>
  );
}
