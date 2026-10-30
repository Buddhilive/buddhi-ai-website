# BuddhiAI CLI Documentation

The official BuddhiAI CLI website and user guide, built with Astro and Starlight.

The guide covers installation, graph analysis, MCP tools, generated code documentation, project memory, bundled scripts, and the Antigravity agent harness. The CLI package and its source code are maintained in the [BuddhiAI CLI repository](https://github.com/Buddhilive/buddhi-cli).

## Local development

Install dependencies with pnpm, then run the Astro development server:

```sh
pnpm install
pnpm run dev
```

Run the site checks and build:

```sh
pnpm run check
pnpm run build
pnpm run preview
```

## GitHub Pages deployment

The GitHub Actions workflow builds the site into `/docs` and publishes it when
a version tag beginning with `v` is pushed (for example, `v1.2.3`). In the
repository settings, set **Pages → Build and deployment → Source** to
**GitHub Actions** and configure `cli.buddhilive.com` as the custom domain.
The site uses the domain root, so links do not include a repository subpath.

The generated `/docs` output is ignored by Git and uploaded directly as the
Pages deployment artifact. The `public/CNAME` file places the custom domain in
that artifact. Other build targets keep the default `dist/` output.

## Site structure

- [`src/content/docs/index.mdx`](src/content/docs/index.mdx) is the documentation hub and links to every public guide.
- [`src/content/docs/cli/`](src/content/docs/cli/) contains the CLI user guide.
- [`src/config/`](src/config/) contains site identity, theme, locale, and navigation settings.
- [`public/`](public/) contains the public logo and favicon assets.

Non-CLI and untranslated French documentation source remains in the repository but is excluded from public routes.
