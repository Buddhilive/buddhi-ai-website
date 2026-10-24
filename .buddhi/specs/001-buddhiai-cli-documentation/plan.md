# Implementation Plan: BuddhiAI CLI Documentation & Homepage Ecosystem

**Branch**: `develop` (Feature: `001-buddhiai-cli-documentation`) | **Date**: 2026-09-13 | **Spec**: [.buddhi/specs/001-buddhiai-cli-documentation/spec.md](file:///E:/Projects/buddhi-ai-website/.buddhi/specs/001-buddhiai-cli-documentation/spec.md)

**Input**: Feature specification from `.buddhi/specs/001-buddhiai-cli-documentation/spec.md`

## Summary

This plan outlines the architecture and execution strategy for introducing complete, step-by-step documentation for **BuddhiAI CLI** into the documentation site under `src/content/docs/cli/`, hiding unreleased product links ("Studio" and "Harness") from navigation and sidebars, and redesigning the homepage landing components to showcase the **BuddhiAI Ecosystem** ("BuddhiAI Web" + "BuddhiAI CLI").

The CLI documentation is based directly on the canonical `buddhi-cli` specification and README: covering code graph generation via tree-sitter, the Model Context Protocol (MCP) server, the Antigravity agent harness with SDD workflows, and installation/command references.

## Technical Context

**Language/Version**: TypeScript 5.0+, Node.js 18+, Astro 6.0+, Starlight 0.38+  
**Primary Dependencies**: `@astrojs/starlight`, `@astrojs/starlight-tailwind`, `@tailwindcss/vite`, `astro-vtbot`  
**Storage**: Static markdown content collections (`src/content/docs/`) with Astro Content Layer  
**Testing / Validation**: `npm run check` (`astro check`), `npm run build` (`astro build`)  
**Target Platform**: Cloudflare Workers / Static Web Hosting  
**Project Type**: Astro/Starlight Documentation Site  
**Performance Goals**: Instant client-side page transitions, zero broken links, fast static build  
**Constraints**:
- Must preserve existing Markdown/MDX frontmatter conventions.
- Must preserve existing "Studio" and "Harness" docs on disk without deletion.
- Clean removal of obsolete template demo files in `src/content/docs/cli/` (`components/` and `editing/`).

## AGENTS.md Compliance Check

- [x] Project build & test commands adhered to (`npm run check`, `npm run build`)
- [x] Architectural constraints respected (Starlight content collection structure, navigation configs in `src/config/`)
- [x] No unapproved external dependencies introduced (pure Markdown/Astro components)
- [x] Grounded in real file paths and existing codebase conventions

## Project Structure

### Documentation & Specifications (this feature)

```text
.buddhi/specs/001-buddhiai-cli-documentation/
├── spec.md              # Feature specification
└── plan.md              # This technical implementation plan
```

### Source Code Changes

```text
src/
├── config/
│   ├── sidebar.json     # Hide Studio & Harness; configure CLI documentation links
│   └── menu.en.json     # Update Products dropdown (Web & CLI only, hide Studio & Harness)
├── content/docs/
│   ├── index.mdx        # Homepage: showcase BuddhiAI Ecosystem (Web & CLI cards/links)
│   └── cli/             # New modular BuddhiAI CLI documentation
│       ├── index.md             # Overview, Architecture, Key Concepts, Languages
│       ├── installation.md      # Prerequisites (Python 3.10+), pip, pipx, uv
│       ├── commands.md          # Comprehensive CLI commands (init, generate, mcp, docs, sdd)
│       ├── mcp-server.md        # Buddhi MCP Server, buddhi_search, buddhi_read
│       ├── agent-harness.md     # Antigravity Agent Harness (.agents/), Workflows, Hooks, Rules
│       ├── components/          # [DELETE obsolete theme demo directory]
│       └── editing/             # [DELETE obsolete theme demo directory]
```

## Implementation Phases

### Phase 1: BuddhiAI CLI Documentation Suite (`src/content/docs/cli/`)
1. Create `src/content/docs/cli/index.md`: Introduction to Buddhi AI CLI, core architecture, code graph (tree-sitter, SQLite `tree-graph.db`, Cytoscape viewer), MCP server, Antigravity agent harness, SDD lifecycle, and supported languages.
2. Create `src/content/docs/cli/installation.md`: System requirements (Python 3.10+), installation guides for `pip install "buddhi-ai[mcp]"`, `pipx`, and `uv tool`, shell completion setup, and environment verification.
3. Create `src/content/docs/cli/commands.md`: Full command reference for:
   - `buddhi init [path]` (graph generation, docs plan, `AGENTS.md`, `.agents/` Antigravity harness, idempotency guarantees).
   - `buddhi generate [path]` (graph updates, SQLite DB and Cytoscape JSON).
   - `buddhi mcp` / `buddhi-mcp` (StdIO server startup with `--db-path` and `--root`).
   - `buddhi docs plan [path]` (documentation plan computation and staleness detection).
   - `buddhi sdd` (helper subcommands `create`, `setup-plan`, `setup-tasks`, `check`, `resolve-template`).
4. Create `src/content/docs/cli/mcp-server.md`: Deep dive into `buddhi_search` (lexical anchors, graph expansion, entropy filtering, U-curve layout) and `buddhi_read` (compression modes `auto`, `signatures`, `map`, `entropy`, `full`, token budgeting).
5. Create `src/content/docs/cli/agent-harness.md`: Scaffolding of `.agents/`, detailed breakdown of SDD workflows (`/ask`, `/specify`, `/plan`, `/tasks`, `/implement`, `/verify`, `/quick-plan`, `/document-codebase`, `/debug`, `/remember`, `/status`), specialist subagents, rules, and `guard_destructive.py` hook.
6. Remove obsolete template demo directories: `src/content/docs/cli/components/` and `src/content/docs/cli/editing/`.

### Phase 2: Navigation & Sidebar Configuration
1. Update `src/config/sidebar.json`:
   - Remove "Studio" and "Harness" entries from the main sidebar.
   - Configure "CLI" section to link ordered pages: Overview, Installation, Core Commands, MCP Server, Agent Harness.
2. Update `src/config/menu.en.json`:
   - In `main[1].children` ("Products"), retain "Web" (`/web/`) and "CLI" (`/cli/`).
   - Remove "Studio" (`/studio/`) and "Harness" (`/harness/`).

### Phase 3: Homepage Ecosystem Refresh (`src/content/docs/index.mdx`)
1. Update hero and feature sections to present the **BuddhiAI Ecosystem**:
   - Highlight **BuddhiAI Web**: In-browser privacy-first AI platform powered by Gemma 4, client-side RAG, zero server data transmission. Link to `/web/getting-started/`.
   - Highlight **BuddhiAI CLI**: Agentic infrastructure converting codebases into tree-sitter code graphs, Stdio MCP server, Antigravity harness, and SDD workflow engine. Link to `/cli/`.
2. Ensure consistent branding, cards, and CTA buttons.

### Phase 4: Verification
1. Run `npm run check` to verify Astro and TypeScript types.
2. Run `npm run build` to verify full static production compilation and link integrity.
3. Validate sidebar and navigation paths.

## Complexity Tracking

No architectural violations or unapproved dependencies are introduced. Standard Astro/Starlight markdown content and configuration mechanisms are used exclusively.
