import Link from 'next/link';
import { productRepo, docsRepo, releasesUrl, discordUrl } from '@/lib/docs-config';

export const SiteFooter = () => {
  return (
    <footer className="border-t border-white/10 bg-slate-950/95">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 text-sm text-slate-400 sm:px-6 lg:grid-cols-[2fr_1fr_1fr] lg:px-8">
        <div>
          <div className="mb-3 text-lg font-semibold text-white">CryptoDesk AI</div>
          <p className="max-w-xl leading-7">
            AI-powered desktop trading documentation with a simulation-first, non-custodial, and explainable-AI posture.
          </p>
        </div>
        <div className="space-y-3">
          <div className="font-semibold text-white">Resources</div>
          <Link className="block hover:text-white" href="/docs">
            Documentation
          </Link>
          <Link className="block hover:text-white" href="/releases">
            Release Notes
          </Link>
          <Link className="block hover:text-white" href="/faq">
            FAQ
          </Link>
        </div>
        <div className="space-y-3">
          <div className="font-semibold text-white">Repositories</div>
          <Link className="block hover:text-white" href={productRepo} target="_blank">
            Product Repository
          </Link>
          <Link className="block hover:text-white" href={docsRepo} target="_blank">
            Docs Repository
          </Link>
          <Link className="block hover:text-white" href={releasesUrl} target="_blank">
            GitHub Releases
          </Link>
          <Link className="block hover:text-white" href={discordUrl} target="_blank">
            Discord
          </Link>
        </div>
      </div>
    </footer>
  );
};
