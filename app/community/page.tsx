import Link from 'next/link';
import { Github, MessageSquare, Send, ShieldAlert } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { discordUrl, githubRepo } from '@/lib/docs-config';

const channels = [
  {
    title: 'GitHub Issues',
    description: 'Use issues for reproducible bugs, build failures, and concrete improvement requests.',
    href: `${githubRepo}/issues`,
    icon: Github
  },
  {
    title: 'Discord',
    description: 'The fastest place for beta coordination, quick questions, and release follow-ups.',
    href: discordUrl,
    icon: MessageSquare
  },
  {
    title: 'Release Feedback',
    description: 'Structured alpha notes live in the beta tracker and feedback log inside the main repository.',
    href: `${githubRepo}/tree/main/docs`,
    icon: Send
  }
] as const;

export const metadata = {
  title: 'Community'
};

export default function CommunityPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">Community</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white">
          Feedback channels for a careful alpha program.
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-300">
          CryptoDesk AI is being released in a disciplined way. These are the channels to use for
          bug reports, private tester feedback, and release coordination.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {channels.map((channel) => {
          const Icon = channel.icon;
          return (
            <Link href={channel.href} key={channel.title} target="_blank">
              <Card className="h-full transition hover:border-primary/40 hover:bg-white/[0.07]">
                <div className="inline-flex rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 p-3">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h2 className="mt-5 text-xl font-semibold text-white">{channel.title}</h2>
                <p className="mt-3 leading-7 text-slate-300">{channel.description}</p>
              </Card>
            </Link>
          );
        })}
      </div>

      <Card className="mt-6 bg-slate-950/60">
        <div className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
          <ShieldAlert className="h-4 w-4 text-blue-300" />
          Security note
        </div>
        <p className="mt-4 max-w-3xl leading-8 text-slate-300">
          Do not post API keys, secrets, or sensitive balance data in public channels. Reproduce
          issues with simulation mode whenever possible, and use the project security policy for
          vulnerability disclosure.
        </p>
      </Card>
    </div>
  );
}
