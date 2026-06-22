# JXManifesto.org

A clean, fast, multilingual manifesto website for **JX: Journalist Experience**. The site is built with Next.js, TypeScript, Tailwind CSS, App Router, and static export for GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

Open <http://localhost:3000> and choose English or Persian.

## Build

```bash
npm run build
```

Next.js is configured with `output: "export"`, `trailingSlash: true`, and unoptimized images. The static GitHub Pages output is written to `out/`.

## Deployment

GitHub Actions workflow `.github/workflows/deploy.yml` installs dependencies, builds the static site, uploads `out/`, and deploys to GitHub Pages. Enable Pages in the repository settings and choose GitHub Actions as the source.

## Content editing

Primary text lives in `src/content/site.ts`:

- English content: `content.en`
- Persian content: `content.fa`
- Manifesto principles are generated from the manifesto section list.

Routes are shared across languages to avoid duplicated UI. Persian pages use `dir="rtl"`; English pages use `dir="ltr"`.

## Project structure

```text
src/app/                 App Router pages, metadata, sitemap, robots
src/components/          Reusable UI components
src/content/site.ts      Versioned bilingual manifesto content
.github/workflows/       GitHub Pages deployment workflow
```

## License

Source code is licensed under the MIT License in `LICENSE`. Manifesto text is published under Creative Commons Attribution 4.0 International (CC BY 4.0). Attribution is required when sharing or adapting the manifesto.
