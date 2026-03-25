import type { Metadata } from 'next';
import Script from 'next/script';
import type { ReactNode } from 'react';
import { SiteFooter } from '@/components/layout/site-footer';
import { SiteHeader } from '@/components/layout/site-header';
import { ThemeProvider } from '@/components/theme/theme-provider';
import { siteUrl } from '@/lib/docs-config';
import './globals.css';

const title = 'CryptoDesk AI Docs';
const description =
  'Professional documentation for CryptoDesk AI, the non-custodial desktop trading co-pilot built around simulation-first workflows and explainable AI.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${title}`
  },
  description,
  keywords: [
    'crypto',
    'trading',
    'electron',
    'next.js',
    'simulation',
    'non-custodial',
    'AI',
    'documentation'
  ],
  authors: [{ name: 'Ahmed Sami Khedhri' }],
  openGraph: {
    title: 'CryptoDesk AI - Secure Trading Co-Pilot',
    description,
    type: 'website',
    url: siteUrl,
    images: ['/og-image.svg']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CryptoDesk AI Docs',
    description,
    images: ['/og-image.svg']
  }
};

const softwareStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'CryptoDesk AI',
  version: '1.0.0-alpha.1',
  description: 'AI-powered trading co-pilot for desktop',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Windows',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD'
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className="dark" lang="en" suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
        <Script
          id="cryptodesk-jsonld"
          strategy="afterInteractive"
          type="application/ld+json"
        >
          {JSON.stringify(softwareStructuredData)}
        </Script>
      </body>
    </html>
  );
}
