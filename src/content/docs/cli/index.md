---
title: BuddhiAI CLI overview
description: Learn how BuddhiAI CLI builds a code graph and connects it to MCP tools and an Antigravity agent harness.
sidebar:
  order: 1
  label: Overview
---

BuddhiAI CLI turns a software repository into a local code graph and a set of tools and workflows for coding agents. The package requires Python 3.10 or newer and installs the `buddhi` command. The optional `mcp` extra also installs the `buddhi-mcp` stdio server.

## Main parts

### Code graph

`buddhi init` and `buddhi generate` parse supported source with tree-sitter and write graph artifacts under `.buddhi/graphs/`. The graph records files, directories, classes, functions, methods, imports, calls, and containment relationships. `tree-graph.db` backs graph queries; `tree-graph.json` and `tree-graph.html` provide visualization artifacts.

The graph supports `buddhi graph` commands for statistics, community analysis, dependency paths, import cycles, and blast-radius investigation. See [Graph analysis](/cli/graph-analysis/).

### MCP server

`buddhi-mcp` runs over stdio and provides tools for code search, compressed file reading, project memory, contrast checks, and accessibility verification. See [MCP server and tools](/cli/mcp-server/).

### OKF documentation and memory

`buddhi docs` generates documentation in Google Open Knowledge Format (OKF) from the graph and can build or serve the generated Pelican site. `buddhi memory` manages source-aware concepts and memory indexes. These operate on the target repository; see [Documentation generation](/cli/documentation/) and [Project memory](/cli/memory/).

### Antigravity harness

`buddhi init` can scaffold `.agents/` with workflows, specialist agents, rules, hooks, templates, and a memory index. The included workflows support specification, planning, task breakdown, implementation, and verification. See [Agent harness](/cli/agent-harness/).

## Supported languages

The CLI parses Python, JavaScript, TypeScript and TSX, Go, Rust, C#, Java, Kotlin, and Swift. Import and call resolution is best-effort; see the accuracy notes in the [CLI README](https://github.com/Buddhilive/buddhi-cli#notes-on-accuracy).

## Common setup

1. Install BuddhiAI CLI with the MCP extra using the [installation guide](/cli/installation/).
2. From the repository root, run `buddhi init`.
3. Open the repository in Google Antigravity to use the generated harness and workspace MCP configuration.
4. Run `buddhi generate` after source changes to refresh the graph.

Browse the [command reference](/cli/commands/) for command syntax and the [MCP guide](/cli/mcp-server/) for connecting other compatible clients.
