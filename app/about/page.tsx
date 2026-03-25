import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

const phases = [
  ['Phase 1', 'Foundation & Security', '100%'],
  ['Phase 2', 'Connection Engine', '99.5%'],
  ['Phase 3', 'Trading Interface', '95%'],
  ['Phase 4', 'AI Integration', '95%'],
  ['Phase 5', 'Polish & Launch', '99.9%']
] as const;

export const metadata = {
  title: 'About'
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <Badge className="mb-6">About CryptoDesk AI</Badge>
        <h1 className="text-5xl font-semibold tracking-tight text-white">
          A security-first desktop trading product built deliberately.
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-300">
          CryptoDesk AI exists to make crypto trading workflows more understandable and safer.
          The product avoids black-box claims, treats security boundaries as first-class design
          constraints, and keeps users in control of every meaningful decision.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr]">
        <Card>
          <h2 className="text-2xl font-semibold text-white">Mission</h2>
          <p className="mt-4 leading-8 text-slate-300">
            Deliver a trading co-pilot that improves clarity without asking users to surrender
            custody, trust opaque automation, or skip risk-awareness steps.
          </p>

          <h2 className="mt-8 text-2xl font-semibold text-white">Team</h2>
          <p className="mt-4 leading-8 text-slate-300">
            <span className="font-semibold text-white">Ahmed Sami Khedhri</span> leads the
            product direction and engineering execution for CryptoDesk AI, with AI-assisted
            development support used as a force multiplier rather than a substitute for review.
          </p>
        </Card>

        <Card>
          <h2 className="text-2xl font-semibold text-white">Core stack</h2>
          <ul className="mt-4 space-y-3 text-slate-300">
            <li>Electron 28 for desktop delivery and privileged process boundaries</li>
            <li>React 18 and TypeScript 5 for strict renderer implementation</li>
            <li>CCXT for exchange connectivity and normalized exchange interactions</li>
            <li>SQLite for local persistence and simulation state</li>
            <li>TensorFlow.js and ONNX Runtime for AI advisory flows</li>
          </ul>
        </Card>
      </div>

      <Card className="mt-6">
        <h2 className="text-2xl font-semibold text-white">Development journey</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {phases.map(([phase, title, progress]) => (
            <div className="rounded-2xl border border-white/10 bg-slate-950/45 p-4" key={phase}>
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                {phase}
              </div>
              <div className="mt-3 text-lg font-semibold text-white">{title}</div>
              <div className="mt-2 text-sm text-blue-300">{progress}</div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
