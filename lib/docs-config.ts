export interface DocHeading {
  id: string;
  title: string;
}

export interface DocLink {
  title: string;
  href: string;
  description: string;
  headings?: DocHeading[];
}

export interface DocSection {
  title: string;
  items: DocLink[];
}

export const docSections: readonly DocSection[] = [
  {
    title: 'Getting Started',
    items: [
      {
        title: 'Introduction',
        href: '/docs/getting-started/introduction',
        description: 'What CryptoDesk AI is, who it serves, and the principles behind the product.',
        headings: [
          { id: 'what-is-cryptodesk-ai', title: 'What is CryptoDesk AI?' },
          { id: 'core-principles', title: 'Core Principles' },
          { id: 'who-is-it-for', title: 'Who Is It For?' },
          { id: 'technology-foundation', title: 'Technology Foundation' }
        ]
      },
      {
        title: 'Quick Start',
        href: '/docs/getting-started/quick-start',
        description: 'Download, verify, launch, and begin with the simulation-first flow.',
        headings: [
          { id: 'system-requirements', title: 'System Requirements' },
          { id: 'download-and-verify', title: 'Download and Verify' },
          { id: 'first-launch', title: 'First Launch' },
          { id: 'what-to-do-next', title: 'What To Do Next' }
        ]
      },
      {
        title: 'Installation',
        href: '/docs/getting-started/installation',
        description: 'Platform guidance and checksum verification for the published alpha.',
        headings: [
          { id: 'windows-x64', title: 'Windows x64' },
          { id: 'future-platforms', title: 'Future Platforms' },
          { id: 'checksum-verification', title: 'Checksum Verification' }
        ]
      }
    ]
  },
  {
    title: 'Core Features',
    items: [
      {
        title: 'Dashboard',
        href: '/docs/features/dashboard',
        description: 'Real-time market data, charts, and AI metrics at a glance.',
        headings: [
          { id: 'market-overview', title: 'Market Overview' },
          { id: 'ai-metrics', title: 'AI Metrics' },
          { id: 'why-it-matters', title: 'Why It Matters' }
        ]
      },
      {
        title: 'Portfolio',
        href: '/docs/features/portfolio',
        description: 'Read-only portfolio preview through validated renderer-safe flows.',
        headings: [
          { id: 'read-only-preview', title: 'Read-Only Preview' },
          { id: 'testnet-context', title: 'Testnet Context' },
          { id: 'safety-notes', title: 'Safety Notes' }
        ]
      },
      {
        title: 'Trading',
        href: '/docs/features/trading',
        description: 'Simulation-first order entry with clear human-in-the-loop controls.',
        headings: [
          { id: 'order-types', title: 'Order Types' },
          { id: 'human-in-the-loop', title: 'Human-in-the-Loop' },
          { id: 'risk-management', title: 'Risk Management' }
        ]
      },
      {
        title: 'Simulation Mode',
        href: '/docs/features/simulation',
        description: 'Virtual balance, paper trading, trade history, and reset workflows.',
        headings: [
          { id: 'virtual-balance', title: 'Virtual Balance' },
          { id: 'paper-trading-flow', title: 'Paper Trading Flow' },
          { id: 'history-and-reset', title: 'History and Reset' }
        ]
      },
      {
        title: 'AI Signals',
        href: '/docs/features/ai-signals',
        description: 'Explainable recommendations, confidence scores, and transparent filtering.',
        headings: [
          { id: 'how-signals-work', title: 'How Signals Work' },
          { id: 'confidence-and-reasoning', title: 'Confidence and Reasoning' },
          { id: 'risk-filtering', title: 'Risk Filtering' }
        ]
      }
    ]
  },
  {
    title: 'Security',
    items: [
      {
        title: 'Architecture',
        href: '/docs/security/architecture',
        description: 'Non-custodial design, keychain storage, encryption, and process isolation.',
        headings: [
          { id: 'non-custodial-by-design', title: 'Non-Custodial by Design' },
          { id: 'credential-storage', title: 'Credential Storage' },
          { id: 'renderer-boundaries', title: 'Renderer Boundaries' }
        ]
      },
      {
        title: 'Best Practices',
        href: '/docs/security/best-practices',
        description: 'How to use API keys, testnet, and release artifacts safely.',
        headings: [
          { id: 'api-key-hygiene', title: 'API Key Hygiene' },
          { id: 'testnet-first', title: 'Testnet First' },
          { id: 'backup-and-recovery', title: 'Backup and Recovery' }
        ]
      },
      {
        title: 'Audit Trail',
        href: '/docs/security/audit',
        description: 'Dependency scans, CI checks, and vulnerability reporting flows.',
        headings: [
          { id: 'ci-gates', title: 'CI Gates' },
          { id: 'dependency-audits', title: 'Dependency Audits' },
          { id: 'reporting', title: 'Reporting' }
        ]
      }
    ]
  },
  {
    title: 'Advanced',
    items: [
      {
        title: 'ADRs',
        href: '/docs/advanced/adrs',
        description: 'Key engineering decisions captured through the project journey.',
        headings: [
          { id: 'documented-decisions', title: 'Documented Decisions' },
          { id: 'why-adrs-matter', title: 'Why ADRs Matter' }
        ]
      },
      {
        title: 'Development',
        href: '/docs/advanced/development',
        description: 'Local setup, commands, environment assumptions, and release workflow.',
        headings: [
          { id: 'prerequisites', title: 'Prerequisites' },
          { id: 'install-and-run', title: 'Install and Run' },
          { id: 'build-and-release', title: 'Build and Release' }
        ]
      },
      {
        title: 'Contributing',
        href: '/docs/advanced/contributing',
        description: 'How to contribute safely and consistently to the project.',
        headings: [
          { id: 'contribution-flow', title: 'Contribution Flow' },
          { id: 'quality-gates', title: 'Quality Gates' },
          { id: 'community-expectations', title: 'Community Expectations' }
        ]
      }
    ]
  }
] as const;

export const staticPages = [
  { title: 'Releases', href: '/releases', description: 'Release notes and version history.' },
  { title: 'FAQ', href: '/faq', description: 'Frequently asked questions for testers and users.' },
  { title: 'Community', href: '/community', description: 'Where to report issues and stay in touch.' },
  { title: 'About', href: '/about', description: 'Mission, roadmap, and team context.' }
] as const;

export const topNavigation = [
  { title: 'Docs', href: '/docs' },
  { title: 'Releases', href: '/releases' },
  { title: 'FAQ', href: '/faq' },
  { title: 'Community', href: '/community' },
  { title: 'About', href: '/about' }
] as const;

export const docLinks = docSections.flatMap((section) => section.items);

export const allSearchItems = [...docLinks, ...staticPages].map((item) => ({
  title: item.title,
  href: item.href,
  description: item.description
}));

export const findDocByHref = (href: string): DocLink | undefined => {
  return docLinks.find((item) => item.href === href);
};

export const productRepo =
  process.env.NEXT_PUBLIC_PRODUCT_REPO ?? 'https://github.com/FreeDropOracle/CryptoDesk-ai';
export const docsRepo =
  process.env.NEXT_PUBLIC_DOCS_REPO ?? 'https://github.com/FreeDropOracle/doc-cryptodesk-ai';
export const releasesUrl = `${productRepo}/releases`;
export const latestReleaseUrl = `${releasesUrl}/tag/v1.0.0-alpha.1`;
export const discordUrl =
  process.env.NEXT_PUBLIC_DISCORD_INVITE ?? 'https://discord.gg/your-invite';
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://docs.cryptodesk.ai';

