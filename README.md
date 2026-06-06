# Matteo Arellano — Technical SEO & AI Visibility Site

This is a polished Astro starter project for a one-page consulting website focused on technical SEO audits, AI visibility, AEO/GEO readiness, Core Web Vitals, analytics, and SEO automation.

## What is included

- Astro static website structure
- One polished landing page with all major sections
- Modern responsive CSS design with soft blue trustworthy palette
- Sticky header, service cards, process cards, FAQ, CTA, and footer
- SEO metadata, canonical tag, Open Graph metadata, favicon, robots.txt
- JSON-LD schema for Person, ProfessionalService, and WebSite
- Astro sitemap integration
- Markdown folders for future insights and case studies

## Local setup

Install Node.js, then run:

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal, usually http://localhost:4321.

## Production build

```bash
npm run build
npm run preview
```

The final static files will be generated in the `dist/` folder.

## Files to edit first

- `astro.config.mjs`: replace `https://matteoarellano.com` with your final domain if different.
- `public/robots.txt`: replace the sitemap URL with your final domain.
- `src/components/JsonLd.astro`: update sameAs links, languages, services, or location if needed.
- `src/pages/index.astro`: edit the copy, metrics, services, FAQs, and contact links.
- `src/styles/global.css`: adjust colors, spacing, and visual style.

## Recommended deployment

Use Cloudflare Pages or GitHub Pages. For Cloudflare Pages, connect your GitHub repository and use:

- Build command: `npm run build`
- Output directory: `dist`

## Content strategy after launch

Add Markdown articles inside `src/content/insights/` and case studies inside `src/content/case-studies/`. Later, create dedicated Astro routes for `/insights/` and `/case-studies/`.
