---
title: CLI command reference
description: Command groups for initializing projects, refreshing code graphs, and using BuddhiAI CLI features.
sidebar:
  order: 3
  label: Commands
---

Run `buddhi --help` or `buddhi <command> --help` for the options supported by your installed version.

## Command groups

| Command | Purpose |
| --- | --- |
| [`buddhi init`](#buddhi-init) | Build the initial graph, plan documentation, and scaffold project instructions and the Antigravity harness. |
| [`buddhi generate`](#buddhi-generate) | Refresh graph artifacts after source changes. |
| [`buddhi graph`](#buddhi-graph) | Analyze graph structure, communities, paths, cycles, and change impact. |
| [`buddhi mcp`](#buddhi-mcp) | Start the MCP server over stdio. |
| [`buddhi docs`](#buddhi-docs) | Generate OKF docs, build or serve their Pelican site, or refresh the docs plan. |
| [`buddhi sdd`](#buddhi-sdd) | Run helpers used by Spec-Driven Development workflows. |
| [`buddhi skills`](#buddhi-skills) | Inspect or install supported custom agent skills. |
| [`buddhi memory`](#buddhi-memory) | Manage project memory concepts and indexes. |
| [`buddhi scripts`](#buddhi-scripts) | Run accessibility, contrast, RTK, and other developer utilities. |

## `buddhi init`

```sh
buddhi init [path]
```

Initializes the current directory or the optional `path`. It builds the graph, computes the documentation plan, creates `AGENTS.md` if missing, and scaffolds an Antigravity harness. Existing customized `AGENTS.md` and `.agents/` files are not overwritten.

The command writes:

- `.buddhi/graphs/tree-graph.json`, `tree-graph.db`, and `tree-graph.html`
- `.buddhi/docs-plan.json`
- `.agents/mcp_config.json` and missing harness files
- `AGENTS.md` if the project does not already have one

See [Agent harness](/cli/agent-harness/) for generated files and workflows.

## `buddhi generate`

```sh
buddhi generate [path]
```

Rebuilds the graph artifacts under `.buddhi/graphs/`. It does not update `.buddhi/docs-plan.json` or scaffold `.agents/`. Run `buddhi docs plan` separately when you also need a refreshed documentation plan.

## `buddhi graph`

Analyze an existing graph:

```sh
buddhi graph stats
buddhi graph analyze
buddhi graph blast-radius
buddhi graph path MyService AuthManager
buddhi graph cycles
buddhi graph community
```

See [Graph analysis](/cli/graph-analysis/) for what these reports contain.

## `buddhi mcp`

```sh
buddhi mcp [--db-path <path>] [--root <path>]
```

Starts the MCP server over stdio. The `mcp` package extra is required. You can also run the installed `buddhi-mcp` entry point directly. See [MCP server and tools](/cli/mcp-server/).

## `buddhi docs`

For the `docs` group's serve, build, and plan workflows, see [Documentation generation](/cli/documentation/).

## `buddhi sdd`

```sh
buddhi sdd <command> [options]
```

The helpers used by the SDD workflows are:

- `create <description>`: create a feature branch and spec directory.
- `setup-plan`: prepare the plan for the active feature.
- `setup-tasks`: check prerequisites and return task-generation context.
- `check`: validate SDD inputs; supports `--require-tasks`, `--include-tasks`, `--paths-only`, and `--json`.
- `resolve-template <name>`: resolve a template from project or built-in templates.

The agent-facing workflow is described in [Agent harness](/cli/agent-harness/).

## `buddhi skills`

```sh
buddhi skills [--repo-to-skill] [--path <path>] [--force]
```

Lists available custom skills. `--repo-to-skill` installs the repository-analysis skill; `--path` selects a project root, and `--force` allows replacing existing installed skill files. Run `buddhi skills --help` for the complete option syntax.

## `buddhi memory`

```sh
buddhi memory [subcommand] [options]
```

Manage structured project memory, including status, add, search, read, validate, sync, compact, migrate, and SDD promotion. See [Project memory](/cli/memory/) for scopes and common operations.

## `buddhi scripts`

```sh
buddhi scripts [subcommand] [options]
```

Run bundled utilities, including color-contrast checks, A11Y.md verification, anti-slop settings, file-size checks, visual parity comparisons, receipts, and RTK output filtering. See [Scripts and utilities](/cli/scripts/) for supported operations.
