---
title: Codebase documentation
description: Generate, plan, build, and serve BuddhiAI CLI's graph-grounded OKF documentation.
sidebar:
  order: 5
  label: Codebase documentation
---

`buddhi docs` generates Open Knowledge Format (OKF) Markdown from the code graph and can build or serve the generated Pelican site.

## Refresh the documentation plan

```sh
buddhi docs plan [path]
```

This recalculates `.buddhi/docs-plan.json` for the current source tree. It detects new or changed files and marks documentation that needs generation. It does not rebuild graph artifacts; run `buddhi generate` first when the graph is stale.

## Generate, serve, or build documentation

```sh
buddhi docs [OPTIONS]
buddhi docs serve [path] [OPTIONS]
buddhi docs build [path] [OPTIONS]
```

- `buddhi docs` generates the OKF Markdown, builds the site, and serves the current directory by default. It accepts `--host`, `--port`, `--reload`/`--no-reload`, `--open`/`--no-open`, `--no-graph-refresh`, `--output`, and `--verbose`.
- `buddhi docs serve` starts the live-reloading documentation server. Use `--no-reload` to disable reload behavior.
- `buddhi docs serve [path]` selects the project directory when it is not the current directory.
- `buddhi docs build` writes static HTML to `.buddhi/site/` unless `--output` selects another directory.

Run `buddhi docs --help` or `buddhi docs <subcommand> --help` for installed-version options.

## Generated OKF documentation

The generated bundle can include an architecture report, graph community and highly connected-node articles, and per-symbol concept files. OKF frontmatter records source paths, line ranges, hashes, generation metadata, and status. Stable authored content can be preserved when its source hash still matches.

The Pelican site includes a symbol search index, Mermaid diagrams, and the graph visualization. Use it as a generated view of the repository, not as a substitute for checking current source.

## Suggested update sequence

```sh
buddhi generate
buddhi docs plan
buddhi docs build
```

Use the first command to refresh code structure, the second to determine documentation freshness, and the third to generate the site.
