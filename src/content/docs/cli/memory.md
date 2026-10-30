---
title: Project memory
description: Store, find, validate, and maintain source-aware BuddhiAI project memory.
sidebar:
  order: 7
  label: Project memory
---

`buddhi memory` manages structured project memory in the configured project, local, or user scope. Memory concepts use OKF v0.2 and can include path filters and source references.

## Check memory status

```sh
buddhi memory status
buddhi memory status --scope project --json
```

Status reports memory budget use, concept counts, and staleness information. The README documents a `MEMORY.md` budget of 200 lines and 25 KB.

## Add, search, and read concepts

```sh
buddhi memory add --kind decision --title "Graph refresh workflow" --summary "Refresh graph before planning." --path-glob "src/**/*.ts" --source "src/config.ts#L1-L20"
buddhi memory search "graph refresh" --kind decision
buddhi memory read <node_id>
buddhi memory read <node_id> --expand-imports
```

`add` accepts a kind, title, summary, optional body, path glob, and source reference. `search` can filter by kind and active file. `read --expand-imports` follows `@path` references recursively up to five hops.

## Maintain memory

```sh
buddhi memory validate
buddhi memory sync
buddhi memory compact
buddhi memory migrate
buddhi memory sdd-promote
```

- `validate` checks frontmatter, budgets, and stale sources.
- `sync` reconciles topic indexes and the root memory index.
- `compact` moves older pointers into topic indexes to keep the root index within budget.
- `migrate` converts legacy flat memory files non-destructively.
- `sdd-promote` extracts durable decisions from an SDD plan and verified choices.

Use `--scope` on commands that support it to select project, local, or user memory. Run `buddhi memory --help` for the exact syntax in your installed version.
