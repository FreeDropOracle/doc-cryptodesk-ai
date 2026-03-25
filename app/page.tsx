import Link from 'next/link';
import {
  ArrowRight,
  Bot,
  Globe2,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
  TestTube2
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { discordUrl, productRepo, latestReleaseUrl, releasesUrl } from '@/lib/docs-config';

const stats = [
  { label: 'Tests Passing', value: '60/60' },
  { label: 'CI Checks', value: '3/3 Green' },
  { label: 'Security Compromises', value: '0' },
  { label: 'Open Source', value: 'MIT' }
] as const;

const features = [
  {
    title: 'Non-Custodial Security',
    description:
      'Credentials stay on the user machine behind keychain-backed storage, encryption, and strict renderer isolation.',
    icon: LockKeyhole
  },
  {
    title: 'Simulation Mode',
    description:
      'The primary learning path starts with a virtual balance and paper trading workflow before any live connectivity is even considered.',
    icon: TestTube2
  },
  {
    title: 'Explainable AI',
    description:
      'Signals come with confidence, reasoning, and visible risk filtering instead of black-box automation.',
    icon: Bot
  },
  {
    title: 'Bilingual UI',
    description:
      'English and Arabic are both supported, including RTL-aware renderer behavior and launch copy.',
    icon: Globe2
  }
] as const;

const quickLinks = [
  { title: 'Documentation', href: '/docs', description: 'Get started, features, security, and development guidance.' },
  { title: 'GitHub Repository', href: productRepo, description: 'Inspect the source, issues, and workflows on GitHub.' },
  { title: 'Release Notes', href: '/releases', description: 'Read the published alpha scope, limits, and install path.' },
  { title: 'Community', href: '/community', description: 'Find issue-reporting and feedback channels for the beta.' }
] as const;

export default function HomePage() {
  return (
    <div className="pb-20">
      <section className="hero-grid border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <Badge className="mb-6">v1.0.0-alpha.1</Badge>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              AI-powered trading co-pilot for desktop.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              CryptoDesk AI combines non-custodial architecture, simulation-first learning,
              and explainable AI guidance so traders can move carefully without giving up
              transparency.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild>
                <Link href={latestReleaseUrl} target="_blank">
                  Download v1.0.0-alpha.1
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="/docs">
                  Get Started
                  <ShieldCheck className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <Card className="bg-slate-950/50 p-5" key={stat.label}>
                <div className="text-xs uppercase tracking-[0.2em] text-slate-400">{stat.label}</div>
                <div className="mt-3 text-2xl font-semibold text-white">{stat.value}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
            Product strengths
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Documentation that reflects the real product, not marketing fiction.
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            This site is organized around the actual alpha scope: what works today, what is
            intentionally limited, and how the security boundaries were designed.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title}>
                <div className="inline-flex rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 p-3">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="overflow-hidden">
            <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              <Sparkles className="h-4 w-4 text-blue-300" />
              Why teams start here
            </div>
            <h2 className="mt-4 text-3xl font-semibold text-white">
              Clear entry points for testers, contributors, and reviewers.
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {quickLinks.map((item) => (
                <Link
                  className="rounded-3xl border border-white/10 bg-slate-950/45 p-5 transition hover:border-primary/40 hover:bg-slate-950/65"
                  href={item.href}
                  key={item.title}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                >
                  <div className="text-lg font-semibold text-white">{item.title}</div>
                  <p className="mt-2 leading-7 text-slate-300">{item.description}</p>
                </Link>
              ))}
            </div>
          </Card>

          <Card className="bg-gradient-to-b from-slate-950/75 via-slate-900/70 to-slate-950/75">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Alpha posture
            </div>
            <h2 className="mt-4 text-3xl font-semibold text-white">
              Honest scope, conservative defaults, and documented limits.
            </h2>
            <ul className="mt-6 space-y-4 text-slate-300">
              <li>Windows x64 is the only published artifact in this release line.</li>
              <li>Simulation mode is the recommended path for every first-time tester.</li>
              <li>Live trading remains intentionally gated while release hardening continues.</li>
              <li>Unsigned alpha delivery is documented clearly so testers know what to expect.</li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="secondary">
                <Link href={releasesUrl} target="_blank">
                  View GitHub Releases
                </Link>
              </Button>
              <Button asChild variant="ghost">
                <Link href={discordUrl} target="_blank">
                  Join Community
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
