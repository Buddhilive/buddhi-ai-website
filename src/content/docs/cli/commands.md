---
title: "CLI Commands Reference"
description: "Complete command-line interface reference for buddhi init, generate, mcp, docs plan, and sdd."
sidebar:
  order: 3
  label: "[seti:powershell] Commands Reference"
---

BuddhiAI CLI provides a suite of commands to build code graphs, prepare agent harnesses, manage documentation roadmaps, and power Spec-Driven Development.

---

## Command Summary

| Command | Description |
| :--- | :--- |
| [`buddhi init [path]`](#buddhi-init) | Complete setup: builds code graph, plans docs, creates `AGENTS.md`, and scaffolds Antigravity harness. |
| [`buddhi generate [path]`](#buddhi-generate) | Scans code and rebuilds `.buddhi/graphs/` without touching harness or docs. |
| [`buddhi mcp`](#buddhi-mcp) | Launches the Model Context Protocol server over StdIO. |
| [`buddhi docs plan [path]`](#buddhi-docs-plan) | Recomputes documentation plan and detects stale documentation. |
| [`buddhi sdd <subcommand>`](#buddhi-sdd) | Helpers for Spec-Driven Development workflows (`create`, `setup-plan`, `setup-tasks`, `check`). |

---

## `buddhi init`

The primary initialization command. Run this once in any new or existing project repository.

```sh
buddhi init [path]
```

### What it Does

1. **Scans the target codebase**: Detects supported languages and parses abstract syntax trees using tree-sitter.
2. **Builds the Code Graph**: Identifies classes, methods, functions, calls, imports, and containment hierarchies.
3. **Computes Documentation Roadmap**: Prepares `.buddhi/docs-plan.json` in bottom-up dependency order.
4. **Scaffolds `AGENTS.md`**: Creates root project instructions, command guidelines, and architecture rules.
5. **Scaffolds `.agents/` Harness**: Installs slash commands/workflows, domain specialists, safety hooks, and memory templates.
6. **Configures MCP Server**: Writes `.agents/mcp_config.json` with pre-anchored paths for Google Antigravity.

### Generated File Hierarchy

```text
your-project/
├── AGENTS.md                          # Standard agent guidelines & rules
├── .buddhi/
│   ├── .gitignore                     # Ignores graphs/ and docs/
│   ├── docs-plan.json                 # Dependency-aware doc plan
│   └── graphs/
│       ├── tree-graph.json            # Cytoscape.js elements format
│       ├── tree-graph.db              # SQLite relational graph database
│       └── tree-graph.html            # Interactive visualizer viewer
└── .agents/
    ├── mcp_config.json                # Registers buddhi-mcp with IDE
    ├── workflows/                     # Slash commands (/specify, /plan, /tasks...)
    ├── agents/                        # Domain specialist subagents
    ├── rules/                         # Project guardrails & memory conventions
    ├── skills/                        # Knowledge graph & doc generation skills
    ├── hooks.json                     # PreToolUse hook configurations
    ├── hooks/guard_destructive.py     # Destructive command safety guard
    └── memory/MEMORY.md               # Durable context and decisions index
```

### Idempotency Guarantee

`buddhi init` is **fully idempotent**. Running it multiple times will never overwrite custom edits you made to files in `.agents/` or `AGENTS.md`. It only creates missing files and refreshes the graph database.

---

## `buddhi generate`

Refreshes the code graph when code changes.

```sh
buddhi generate [path]
```

### Usage Notes

- Scans `path` (defaults to current working directory) and updates:
  - `.buddhi/graphs/tree-graph.db` (SQLite)
  - `.buddhi/graphs/tree-graph.json` (Cytoscape JSON)
  - `.buddhi/graphs/tree-graph.html` (Interactive HTML visualizer)
- **Does not touch** `.agents/` or `.buddhi/docs-plan.json`.
- **When to run**: Run this whenever new functions, files, or dependencies are added to keep the SQLite database queried by `buddhi_search` fresh.

---

## `buddhi mcp`

Runs the Model Context Protocol (MCP) server over **StdIO**, exposing code graph search and compressed reading tools to AI agents.

```sh
buddhi mcp [OPTIONS]
```

Or execute the direct entrypoint:

```sh
buddhi-mcp [OPTIONS]
```

### Options

| Option | Flag | Description |
| :--- | :--- | :--- |
| `--db-path` | `-d PATH` | Explicit path to `.buddhi/graphs/tree-graph.db`. Defaults to finding it in the workspace. |
| `--root` | `-r PATH` | Anchors the repository root directory for relative file paths and search queries. |

Example manual run:

```sh
buddhi-mcp --root . --db-path .buddhi/graphs/tree-graph.db
```

---

## `buddhi docs plan`

Recomputes `.buddhi/docs-plan.json` against the current source tree without touching `.agents/` or overwriting existing graph files.

```sh
buddhi docs plan [path]
```

### What it Does

- Detects newly added or modified source files.
- Computes cryptographic SHA-256 hashes of symbol ranges.
- Marks stale Open Knowledge Format (OKF) docs under `.buddhi/docs/` for regeneration.
- This command is called automatically by the `/document-codebase` and `/plan` Antigravity workflows.

---

## `buddhi sdd`

Underlying helper commands utilized by Spec-Driven Development workflows.

```sh
buddhi sdd <COMMAND> [OPTIONS]
```

### Subcommands

#### `buddhi sdd create <description>`
Scaffolds a new feature branch and directory under `.buddhi/specs/<branch>/`, initializes `spec.md` from the spec template, and returns branch metadata.
```sh
buddhi sdd create "Add user authentication" --json
```

#### `buddhi sdd setup-plan`
Verifies that `spec.md` exists and sets up `plan.md` for the active feature branch using `plan-template.md`.
```sh
buddhi sdd setup-plan --json
```

#### `buddhi sdd setup-tasks`
Verifies prerequisites and outputs task resolution context for generating `tasks.md`.
```sh
buddhi sdd setup-tasks --json
```

#### `buddhi sdd check`
Consolidated prerequisite checker supporting `--require-tasks`, `--include-tasks`, `--paths-only`, and `--json`.
```sh
buddhi sdd check --require-tasks --include-tasks --json
```

#### `buddhi sdd resolve-template <name>`
Resolves and composes templates across `.agents/templates/` and built-in defaults.

---

## Recommended Daily Workflow

1. **Initial Setup**:
   ```sh
   buddhi init
   ```
2. **Open in Google Antigravity IDE**.
3. **Start a new feature**:
   Run `/specify <feature description>` in chat.
4. **Architect the solution**:
   Run `/plan` to synthesize specialist agent research.
5. **Break into actionable tasks**:
   Run `/tasks` to produce a user-story checklist.
6. **Implement & Verify**:
   Run `/implement` to write code, followed by `/verify` to test against acceptance criteria.
7. **Refresh graph after large changes**:
   ```sh
   buddhi generate
   ```
