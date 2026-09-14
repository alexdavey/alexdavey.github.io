# Alex Davey — academic website

Personal academic website for Alex Davey, postdoctoral researcher at Inria TAU
and Université Paris-Saclay.

## Local development

```bash
npm install
npm run dev
```

## Deployment

The app is configured as a static export for GitHub Pages. The workflow in
`.github/workflows/deploy-pages.yml` builds the site and publishes
`dist/client` whenever `main` is updated.

In the repository settings, set **Pages → Build and deployment → Source** to
**GitHub Actions**. The generated site is available at:

<https://alexdavey.github.io>

The portrait and CV are intentionally represented by placeholders until the final
assets are provided.
