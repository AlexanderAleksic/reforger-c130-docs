# C-130J Hercules — mod documentation

Player and crew manual for the C-130J Super Hercules mod for Arma Reforger.
Live site: https://codingpandaren.github.io/reforger-c130-docs/

Built with [Astro Starlight](https://starlight.astro.build/).

## Editing

Pages are Markdown/MDX files in `src/content/docs/`, one folder per sidebar section.
The sidebar order is defined in `astro.config.mjs` — add new pages there too.
See `STYLE.md` for the writing conventions.

```sh
npm install        # once
npm run dev        # local preview at http://localhost:4321/reforger-c130-docs/
npm run build      # production build into dist/
```

## Deploying

Every push to `main` builds and deploys via `.github/workflows/deploy.yml`.
One-time setup: repository **Settings → Pages → Source: GitHub Actions**.
