const faqs = [
  {
    question: 'Is my money safe?',
    answer:
      'CryptoDesk AI is designed as a non-custodial interface. It does not hold user funds, and the current alpha is simulation-first with live execution intentionally disabled.'
  },
  {
    question: 'Do you hold my API keys?',
    answer:
      'No. Credentials are intended to remain on the user machine, protected through OS-level secure storage and local encryption paths.'
  },
  {
    question: 'Can I trade with real money today?',
    answer:
      'No. The published alpha is not a real-money release path. Testnet and simulation-first behavior are the recommended and documented defaults.'
  },
  {
    question: 'Is this available for macOS or Linux?',
    answer:
      'Not yet in the published artifact line. The current release package is Windows x64 only while packaging and signing paths continue to mature.'
  },
  {
    question: 'How accurate is the AI?',
    answer:
      'AI signals are advisory-only and intentionally transparent. The product shows confidence, reasoning, and filtering instead of presenting the AI as an autonomous trader.'
  },
  {
    question: 'How do I report a bug?',
    answer:
      'Use GitHub Issues for fast bug reports, or the project Discord and beta feedback channels for longer-form tester notes.'
  }
] as const;

export const metadata = {
  title: 'FAQ'
};

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">FAQ</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white">
          Common questions from early testers and reviewers.
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-300">
          The short version: CryptoDesk AI is security-first, non-custodial, and deliberately
          conservative about live execution. The questions below explain that posture plainly.
        </p>
      </div>

      <div className="mt-10 space-y-4">
        {faqs.map((faq) => (
          <details
            className="rounded-3xl border border-white/10 bg-white/5 p-6 text-slate-300"
            key={faq.question}
          >
            <summary className="cursor-pointer list-none text-lg font-semibold text-white">
              {faq.question}
            </summary>
            <p className="mt-4 leading-8">{faq.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
