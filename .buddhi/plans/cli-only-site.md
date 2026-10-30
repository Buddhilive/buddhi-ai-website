# BuddhiAI CLI Official Site and User Guide

**Status:** Content conversion implemented and verified  
**Scope:** Make this Astro/Starlight site the official BuddhiAI CLI website and comprehensive user guide.

## Confirmed requirements

- Public content focuses only on BuddhiAI CLI and its bundled agent harness.
- Keep non-CLI and French source in the repository, but exclude it from public routes.
- Keep About, Privacy Policy, and Terms routes, rewritten for BuddhiAI CLI.
- Publish in English only until CLI translations are available.
- Cover the complete shipped CLI and bundled harness, not only core commands.
- Use the supplied BuddhiAI logo and favicon, with `#A7452A` as the primary color.
- Treat GitHub Pages, Google Analytics, and Google AdSense as future plans, not active services.
- Limit Terms to the owner-confirmed MIT license notice and repository link.

## Design read

Reading this as an official CLI documentation site for developers, retaining the existing BuddhiAI brand and Starlight layout. Dials: ENERGY 2 / RHYTHM 2 / MOTION 1.

## Current evidence

- The site currently uses Starlight `docsLoader()` in `src/content.config.ts:30-35`; the generated `.buddhi/docs/index.md` is absent. The refreshed site graph has 227 nodes and 413 edges, but contains sparse coverage of the content/config files, so the existing site sources and CLI README were used as the fallback context.
- The current homepage promotes Web and CLI together (`src/content/docs/index.mdx:1-9,23-42,47-99`), and the CLI docs comprise overview, installation, commands, MCP, and agent-harness pages.
- The previous feature spec and tasks under `.buddhi/specs/001-buddhiai-cli-documentation/` describe a Web + CLI ecosystem and are not the current acceptance criteria.
- The canonical CLI README covers `buddhi graph`, `init`, `mcp`, `generate`, `docs`, `sdd`, `skills`, `memory`, `scripts`, and the Antigravity harness (`C:/DevDojo/Buddhi/buddhi-cli/README.md:69-243`). `pyproject.toml:35,62-67` confirms Python 3.10+, the `buddhi` and `buddhi-mcp` entry points, and the optional MCP extra.

## Architecture decision: preserve source without publishing routes

Hiding items only in the sidebar is insufficient because the docs loader still discovers their pages. The installed Starlight loader ignores Markdown/MDX files whose names begin with `_` (`node_modules/@astrojs/starlight/loaders.ts:13-27,55-58`).

1. **Recommended — prefix non-public docs filenames with `_`:** keeps their contents and directory organization in the repository, while using Starlight's existing exclusion behavior. It changes filenames, and the build must verify the behavior against the pinned Starlight version.
2. **Custom filtered docs loader:** preserves paths, but adds custom route-generation logic and maintenance without an existing project pattern.
3. **Move content outside `src/content/docs/`:** excludes it naturally, but creates larger path changes and may break relative references in the preserved source.

Use the first option for Web, separate Studio/Harness product pages, theme-demo docs, and other unrelated pages. Keep the CLI's `/cli/agent-harness/` guide public because the user confirmed that the bundled harness is part of the CLI. Remove French from the configured public locales while retaining the French content files.

## Ordered implementation plan

1. **Set the public content boundary.** Inventory Markdown/MDX under `src/content/docs/`; keep the home, CLI docs, About, legal pages, and 404; prefix non-public content filenames as above. Remove French from `src/config/locals.json`. Treat the older ecosystem spec as superseded; do not carry its Web showcase requirements into implementation.
2. **Make site identity and navigation CLI-specific.** Update `src/config/config.json` site title and Get Started destination; configure `src/config/sidebar.json` for the CLI guide; replace Web/product navigation and template footer links in `src/config/menu.en.json`; remove placeholder social links or replace them only with verified BuddhiAI CLI destinations in `src/config/social.json`. Audit shared header/footer and section content for hard-coded non-CLI/template copy.
3. **Rewrite public landing and general pages.** Replace the ecosystem/Web homepage in `src/content/docs/index.mdx` with CLI positioning, installation CTA, supported capabilities, and links into the guide. Rewrite `about.md`, `privacy-policy.md`, `terms-conditions.md`, and `404.md` for the CLI. Legal claims must be grounded in owner-approved policy facts; the current About text names DocKit, and Terms repeats privacy-policy text.
4. **Complete the CLI guide from the canonical README.** Refresh `index.md`, `installation.md`, `commands.md`, `mcp-server.md`, and `agent-harness.md` in `src/content/docs/cli/` against the CLI README and package metadata. Add `graph-analysis.md`, `documentation.md`, `memory.md`, and `scripts.md` for graph analysis, OKF documentation generation/serving, memory management, and bundled utilities. Expand the command reference for `docs`, `skills`, `memory`, and `scripts`; expand MCP coverage beyond `buddhi_search` and `buddhi_read` to the shipped tools; document installation prerequisites, workflows, supported languages, and bundled harness skills. Keep contributor/release engineering details separate from the end-user guide unless they are needed for product use.
5. **Align low-risk deployment metadata.** Rename the stale project package metadata in `package.json` to a BuddhiAI CLI website identity and update its description. Change the Netlify build command in `netlify.toml` from Yarn to pnpm, matching `pnpm-lock.yaml`. Do not change the Cloudflare Worker name in `wrangler.jsonc`, deployment provider, or canonical domain until the owner supplies the intended deployment identity; no domain is configured in the inspected site settings.

## Verification

- Run `pnpm run check` and `pnpm run build` (`package.json:8-15`); the project has no test or lint script.
- Inspect `dist/`: confirm `/`, `/cli/` and every configured CLI guide page, `/about/`, `/privacy-policy/`, `/terms-conditions/`, and the 404 page are generated.
- Confirm `/web/`, `/studio/`, the separate `/harness/` product docs, and `/fr/` pages are absent, while their source remains in the repository.
- Check the rendered homepage, header, sidebar, footer, search results, metadata, and CTA for CLI-only branding and working internal links. Confirm the full CLI feature groups in the README are represented in the guide.
- Run `pnpm run preview` for a local navigation/content smoke check after the build.

**Result:** `pnpm run check` passed with no diagnostics and `pnpm run build` generated 14 pages. Route and link checks confirmed all expected pages, no broken root-relative links, no Web, Studio, standalone Harness, or French routes, and no unrelated product branding in generated HTML. Each page has one H1. Browser checks exercised the installation CTA, header and sidebar menu state, Escape close and focus return, theme switch, MCP search, and the custom 404 page. The 375px viewport had no horizontal overflow.

The final visual review found that the inherited CTA background embedded a DocKit website screenshot. The image was removed and the CTA now uses the theme's surface color. The strongest case that this defect remained was that a product logo or navigation label might still appear behind the CTA; the final browser capture shows only BuddhiAI CLI copy and its installation button, and the computed CTA background image is `none`. The strongest case that the revised button remained hard to read was that white text could fail at a gradient endpoint; WCAG formula checks passed at each stop: 5.423:1, 5.953:1, and 4.695:1. The gradient stops also exceed the 3:1 control-boundary floor against the dark body: 3.584:1, 3.265:1, and 4.140:1.

The lighter `.light-text` treatment now uses the theme's normal text color instead of 50% opacity. The CLI's accessibility gate passed with 0 errors and 47 warnings; the conditional status and remaining human checks are recorded in `.agents/skills/a11y/REPORT.md`. The build still warns about the `/404` route collision and skips sitemap generation because no canonical `site` URL is configured.

## Invariants confirmed during review

- The supplied logo is shared by both themes; `config.site.logo` and numeric dimensions are the only logo inputs.
- The footer contains navigation only; no disabled contact/signup form is presented as an available feature.
- The sidebar toggle's `aria-expanded` state belongs to its button; the body attribute controls scroll locking and panel visibility.
- The `buddhi docs` default command serves the current directory; select a project path with `buddhi docs serve [path]`. The guide follows the CLI implementation rather than the stale path syntax in the CLI README.
- Terms contain only the MIT notice and the repository license link, as confirmed by the owner.

## Follow-up outside this content conversion

- The owner supplied `www.buddhilive.com` as the legal-page contact URL. It has not been confirmed as the canonical deployment domain.
- GitHub Pages is planned but not configured. Confirm the canonical URL and project-site base path before changing deployment configuration or enabling sitemap generation.
- Google Analytics and Google AdSense are planned but not active. The Privacy Policy says so and scopes itself to the documentation website, not CLI data flows.
