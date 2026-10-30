---
title: Code graph analysis
description: Refresh and inspect BuddhiAI CLI's code graph, relationships, communities, and change impact.
sidebar:
  order: 4
  label: Graph analysis
---

BuddhiAI CLI parses supported source files with tree-sitter and records code entities and their relationships. Run `buddhi init` for the first graph, then use `buddhi generate` to rebuild it after code changes.

The generated `.buddhi/graphs/` directory contains:

- `tree-graph.db`, a SQLite database used for graph queries.
- `tree-graph.json`, a Cytoscape-compatible representation.
- `tree-graph.html`, an interactive graph viewer. It loads Cytoscape.js from a CDN, so the browser needs internet access to load that dependency.

## Inspect graph structure

Run these commands from the repository root:

```sh
buddhi graph stats
buddhi graph analyze
buddhi graph community
buddhi graph cycles
```

- `stats` reports graph counts, confidence breakdown, and Git staleness.
- `analyze` reports highly connected nodes, surprising connections, and review questions.
- `community` inspects graph clustering and cohesion.
- `cycles` finds circular import chains.

## Trace dependencies

```sh
buddhi graph path MyService AuthManager
buddhi graph blast-radius
```

`path` finds a shortest graph path between symbols and can disambiguate names. `blast-radius` analyzes transitive callers and affected communities to help assess change impact.

Run `buddhi graph --help` for the options supported by your installed version.

## Keep generated data current

`buddhi generate [path]` rebuilds all graph artifacts under the target repository. It does not update `.buddhi/docs-plan.json`; use `buddhi docs plan` for that separate step.

Graph resolution is best-effort, not a complete semantic analysis. The CLI resolves same-project relative imports and selected same-file calls; external or ambiguous relationships may remain unresolved.
