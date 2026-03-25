# CryptoDesk AI Docs

Standalone documentation site for **CryptoDesk AI**, built with Next.js 14, Tailwind CSS, and MDX.

This repository is separate from the product repository:

- Product repo: https://github.com/FreeDropOracle/CryptoDesk-ai
- Docs repo: https://github.com/FreeDropOracle/doc-cryptodesk-ai

## Highlights

- App Router structure with reusable docs layout
- MDX-powered content pages for product, security, and engineering docs
- Dark-first theme with light mode toggle
- Client-side search powered by Fuse.js
- Release notes, FAQ, community, and about pages
- SEO helpers including metadata, sitemap, robots, and Open Graph image

## Development

```bash
npm install
npm run dev
```

## Production

```bash
npm run build
npm run start
```

## Deployment

This project is designed for Vercel or any platform that supports standard Next.js builds.

## Environment

Copy `.env.example` to `.env.local` and update the public URLs as needed.

## Key Paths

- `app/` - routes and page entry points
- `app/docs/` - MDX documentation pages
- `components/` - shared UI, layout, and docs-specific components
- `lib/docs-config.ts` - navigation, search index, and public links
