# Feature Specification: BuddhiAI CLI Documentation & Homepage Ecosystem

**Feature Branch**: `001-buddhiai-cli-documentation`  
**Created**: 2026-09-13  
**Status**: Ready for Plan  
**Input**: "Add detailed step by step documentation for BuddhiAI CLI based on README documentation: https://github.com/Buddhilive/buddhi-cli/blob/main/README.md. Documentation should be done at ./src/content/docs/cli folder. Additionally, hide documentation links to Harness and Studio for now. Update the Homepage pointing to BuddhiAI Web and BuddhiAI CLI as BuddhiAI Ecosystem."

---

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Comprehensive BuddhiAI CLI Documentation Suite (Priority: P1)

As a developer or AI engineer exploring BuddhiAI, I want access to a comprehensive, step-by-step documentation guide for BuddhiAI CLI under `/cli/` so that I can understand its capabilities, install the CLI with required MCP extras, initialize my codebase into a code graph, configure the Antigravity agent harness, and run Spec-Driven Development (SDD) workflows.

**Why this priority**:
BuddhiAI CLI is the foundational developer tool that turns codebases into topology-aware graphs for AI agents. Without clear, complete documentation, developers cannot adopt the CLI, set up the MCP server, or utilize the Antigravity harness effectively.

**Independent Test**:
A user can navigate to the documentation website at `/cli/` (or via sidebar "CLI"), read through the overview, follow the installation instructions using `pip` / `pipx` / `uv`, follow the command references (`buddhi init`, `buddhi generate`, `buddhi mcp`, `buddhi docs plan`, `buddhi sdd`), learn the MCP tool capabilities (`buddhi_search`, `buddhi_read`), and understand how the Antigravity harness workflows operate.

**Acceptance Scenarios**:

1. **Given** a visitor navigates to `/cli/` or `/cli/overview/`,  
   **When** viewing the CLI overview page,  
   **Then** they see a complete introduction to BuddhiAI CLI, its core value proposition (code graph via tree-sitter, MCP server, Antigravity agent harness, SDD lifecycle), supported languages (Python, JS, TS/TSX, Go, Rust, C#, Java, Kotlin, Swift), and links to subsequent guides.

2. **Given** a developer needs to install the CLI,  
   **When** reading `/cli/installation/`,  
   **Then** they find system prerequisites (Python 3.10+), step-by-step installation instructions for `pip install "buddhi-ai[mcp]"`, `pipx`, and `uv tool`, verifying installation, and troubleshooting common environment paths.

3. **Given** a developer wants to run CLI commands,  
   **When** navigating to `/cli/commands/`,  
   **Then** they find exhaustive usage guides and option flags for:
   - `buddhi init [path]` (graph generation, docs plan, AGENTS.md scaffolding, `.agents/` Antigravity harness setup, idempotency guarantees),
   - `buddhi generate [path]` (Cytoscape JSON, SQLite graph DB `tree-graph.db`, interactive HTML viewer),
   - `buddhi mcp` / `buddhi-mcp` (StdIO server startup with `--db-path` and `--root`),
   - `buddhi docs plan [path]` (documentation planning and staleness detection),
   - `buddhi sdd` (helper commands `create`, `setup-plan`, `setup-tasks`, `check`, `resolve-template`).

4. **Given** a developer wants to leverage the MCP server and tools,  
   **When** visiting `/cli/mcp-server/`,  
   **Then** they see detailed explanations of `buddhi_search` (lexical anchors, graph expansion, entropy filtering, U-curve layout) and `buddhi_read` (compression modes `auto`, `signatures`, `map`, `entropy`, `full`, token budgeting).

5. **Given** a developer wants to understand agentic orchestration,  
   **When** visiting `/cli/agent-harness/`,  
   **Then** they see documentation of the scaffolded Antigravity agent harness (`.agents/`), including workflows (`/ask`, `/specify`, `/plan`, `/tasks`, `/implement`, `/verify`, `/quick-plan`, `/document-codebase`, `/debug`, `/remember`, `/status`), specialist subagents, rules, hooks (`guard_destructive.py`), and memory index.

6. **Given** existing obsolete template files under `src/content/docs/cli/` (`components/` and `editing/`),  
   **When** the new documentation structure is deployed,  
   **Then** those stale theme demo files are cleanly replaced so no orphan or irrelevant components exist under the CLI section.

---

### User Story 2 - Navigation Visibility Adjustment: Hide Harness & Studio (Priority: P2)

As a product manager/maintainer, I want navigation links to "Harness" and "Studio" hidden from the site header menus and documentation sidebars for now, while keeping active navigation focused strictly on live products ("Web" and "CLI").

**Why this priority**:
Harness and Studio documentation sections are currently unreleased or being restructured. Hiding these links prevents visitor confusion and broken navigation pathways while keeping the underlying content intact for future release.

**Independent Test**:
Inspect the header navigation menu (desktop and mobile) and the documentation sidebar: confirm that neither "Studio" nor "Harness" appears as visible navigation items, while "Web" and "CLI" remain easily accessible.

**Acceptance Scenarios**:

1. **Given** a visitor loads any page on the website,  
   **When** opening the top navigation bar's "Products" dropdown menu,  
   **Then** only "Web" and "CLI" are displayed; "Studio" and "Harness" are omitted.

2. **Given** a visitor browses documentation pages with the Starlight sidebar,  
   **When** inspecting the sidebar categories,  
   **Then** "Web" and "CLI" are visible, while "Studio" and "Harness" are hidden from the sidebar.

3. **Given** existing content files for Studio and Harness under `src/content/docs/studio/` and `src/content/docs/harness/`,  
   **When** the navigation is hidden,  
   **Then** the files remain safely preserved in the repository without deletion.

---

### User Story 3 - Homepage Refresh: BuddhiAI Ecosystem (Priority: P3)

As a visitor landing on the BuddhiAI homepage (`/`), I want to see a clear presentation of the "BuddhiAI Ecosystem" highlighting both "BuddhiAI Web" (in-browser privacy-first AI platform with Gemma 4) and "BuddhiAI CLI" (code graph, MCP server, and Antigravity harness), with direct links into their respective documentation.

**Why this priority**:
The homepage is the primary entry point. Presenting BuddhiAI Web and BuddhiAI CLI under a unified "BuddhiAI Ecosystem" reinforces the dual-pillar architecture (browser-based inference & local developer agent infrastructure) and seamlessly guides users to relevant documentation.

**Independent Test**:
Navigate to `/`, verify the presence of the "BuddhiAI Ecosystem" showcase with dedicated cards/sections for "BuddhiAI Web" and "BuddhiAI CLI", containing working links to `/web/getting-started/` and `/cli/`.

**Acceptance Scenarios**:

1. **Given** a user navigates to the homepage (`/`),  
   **When** scrolling through the landing page,  
   **Then** they see a dedicated section titled "BuddhiAI Ecosystem" (or highlighted ecosystem feature cards).

2. **Given** the "BuddhiAI Ecosystem" presentation,  
   **When** reviewing the ecosystem products,  
   **Then** "BuddhiAI Web" is showcased (in-browser Gemma 4 execution, client-side RAG, zero cloud latency) with a link to `/web/getting-started/`, and "BuddhiAI CLI" is showcased (code graph generation, MCP server for agents, Antigravity harness, SDD workflows) with a link to `/cli/`.

---

## Edge Cases

- **Direct URLs to hidden sections**: What happens if a user navigates directly to `/harness/` or `/studio/` via URL? The pages still exist in Astro content collections and will render without crashing, but are not discoverable through navigation menus or sidebar links.
- **Sidebar Ordering & Auto-generation**: Ensure `src/config/sidebar.json` uses explicit items or order parameters so that CLI pages appear in logical pedagogical order: Overview -> Installation -> Core Commands -> MCP Server -> Agent Harness.
- **Mobile Navigation**: Verify the mobile drawer/modal menu correctly reflects hidden Harness/Studio items and shows the Ecosystem links cleanly.
- **Starlight / Astro build consistency**: Ensure all frontmatter tags (`title`, `description`, `sidebar`) conform to Astro Starlight schema so that `astro check` and `astro build` succeed without broken internal markdown references.

---

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST provide a comprehensive modular documentation guide for BuddhiAI CLI under `src/content/docs/cli/` consisting of:
  - `index.md`: Overview, architecture, core concepts, supported languages.
  - `installation.md`: Prerequisites, `pip`, `pipx`, and `uv` installation steps, verification.
  - `commands.md`: In-depth reference for `buddhi init`, `buddhi generate`, `buddhi mcp`, `buddhi docs plan`, and `buddhi sdd`.
  - `mcp-server.md`: Detailed guide to the Buddhi Model Context Protocol (MCP) server, `buddhi_search`, and `buddhi_read`.
  - `agent-harness.md`: Detailed guide to `.agents/` harness, workflows (`/ask`, `/specify`, `/plan`, etc.), specialists, rules, and hooks.
- **FR-002**: System MUST remove/replace the legacy DocKit template files under `src/content/docs/cli/components/` and `src/content/docs/cli/editing/`.
- **FR-003**: System MUST update `src/config/sidebar.json` to organize the CLI section with the new modular documents and logical ordering.
- **FR-004**: System MUST hide "Studio" and "Harness" from the documentation sidebar in `src/config/sidebar.json`.
- **FR-005**: System MUST hide "Studio" and "Harness" from `src/config/menu.en.json` under the `Products` dropdown.
- **FR-006**: System MUST update `src/content/docs/index.mdx` to feature the "BuddhiAI Ecosystem", presenting "BuddhiAI Web" and "BuddhiAI CLI" with direct links to `/web/getting-started/` and `/cli/`.
- **FR-007**: System MUST preserve existing content files in `src/content/docs/studio/` and `src/content/docs/harness/` without deleting them.
- **FR-008**: System MUST ensure all code snippets, terminal commands, and configuration examples are accurate and derived directly from the canonical Buddhi CLI README.

### Key Entities

- **CLI Documentation Section**: Represents the documentation collection under `src/content/docs/cli/` managed by Starlight.
- **Sidebar Configuration**: Defined in `src/config/sidebar.json`, controls category labels, ordering, and autogeneration directories.
- **Menu Configuration**: Defined in `src/config/menu.en.json`, controls top navigation items and dropdown menus.
- **Homepage (index.mdx)**: The primary landing page rendered using Astro/MDX components (`Section`, `Grid`, `Card`, `ListCard`).

---

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% of the core content from the official `buddhi-cli` README is accurately documented across the modular guides in `src/content/docs/cli/`.
- **SC-002**: No links to "Studio" or "Harness" appear in the top navigation bar or sidebar.
- **SC-003**: The homepage prominently highlights "BuddhiAI Web" and "BuddhiAI CLI" as "BuddhiAI Ecosystem" with functioning CTA links.
- **SC-004**: The project compiles and builds successfully (`npm run build` / `astro build`) with zero broken link warnings or syntax errors.
- **SC-005**: All CLI commands, options, workflows, and MCP tool descriptions match the official CLI tool release.

---

## Assumptions

- "Studio" and "Harness" content files do not need to be deleted from disk, only unlinked from navigation menus and sidebars.
- The site language is primarily English (`menu.en.json`), with French translations (`menu.fr.json`) preserved where applicable.
- Tailwind / custom CSS and existing Starlight components will be used without adding unnecessary external dependencies.
