# Tasks: BuddhiAI CLI Documentation & Homepage Ecosystem

**Feature Branch**: `001-buddhiai-cli-documentation`  
**Input**: Feature specification from `.buddhi/specs/001-buddhiai-cli-documentation/spec.md` and implementation plan from `.buddhi/specs/001-buddhiai-cli-documentation/plan.md`

---

## Phase 1: Setup & Cleanup (Shared Infrastructure)

**Purpose**: Prepare directory structure and clean up obsolete placeholder files

- [x] T001 Clean up obsolete DocKit theme demo directories `src/content/docs/cli/components/` and `src/content/docs/cli/editing/`

---

## Phase 2: User Story 1 - Comprehensive BuddhiAI CLI Documentation Suite (Priority: P1) 🎯 MVP

**Goal**: Deliver a complete, modular, step-by-step documentation guide for BuddhiAI CLI under `src/content/docs/cli/` grounded in canonical CLI specs.

**Independent Test**: Navigate to `/cli/`, read overview, installation (`pip`/`pipx`/`uv`), command reference (`init`, `generate`, `mcp`, `docs plan`, `sdd`), MCP server tool guides (`buddhi_search`, `buddhi_read`), and Antigravity harness architecture.

- [x] T002 [P] [US1] Create overview page with architecture, core concepts, and supported languages in `src/content/docs/cli/index.md`
- [x] T003 [P] [US1] Create installation guide for Python 3.10+, pip, pipx, uv tool, and shell completion in `src/content/docs/cli/installation.md`
- [x] T004 [P] [US1] Create comprehensive CLI command reference (`init`, `generate`, `mcp`, `docs plan`, `sdd`) in `src/content/docs/cli/commands.md`
- [x] T005 [P] [US1] Create MCP server and tools documentation (`buddhi_search`, `buddhi_read`) in `src/content/docs/cli/mcp-server.md`
- [x] T006 [P] [US1] Create Antigravity agent harness and workflows guide (`/ask`, `/specify`, `/plan`, etc.) in `src/content/docs/cli/agent-harness.md`

**Checkpoint**: User Story 1 (P1 MVP) documentation suite is complete and readable.

---

## Phase 3: User Story 2 - Navigation & Sidebar Visibility Adjustments (Priority: P2)

**Goal**: Hide unreleased "Studio" and "Harness" links from the documentation sidebar and top navigation menu while keeping content on disk.

**Independent Test**: Verify that neither "Studio" nor "Harness" appears in the top navigation dropdown or documentation sidebar, while "Web" and "CLI" are prominently accessible.

- [x] T007 [P] [US2] Update `src/config/sidebar.json` to hide "Studio" and "Harness", and configure "CLI" with ordered links to the 5 modular documentation pages
- [x] T008 [P] [US2] Update `src/config/menu.en.json` to retain only "Web" and "CLI" under the Products dropdown menu, hiding "Studio" and "Harness"

**Checkpoint**: Navigation reflects live products ("Web" & "CLI") without dead or unreleased links.

---

## Phase 4: User Story 3 - Homepage BuddhiAI Ecosystem Showcase (Priority: P3)

**Goal**: Transform the homepage to present the "BuddhiAI Ecosystem" with distinct focus on "BuddhiAI Web" and "BuddhiAI CLI".

**Independent Test**: Load `/`, verify the "BuddhiAI Ecosystem" showcase section and confirm cards/CTAs direct users to `/web/getting-started/` and `/cli/`.

- [x] T009 [US3] Update `src/content/docs/index.mdx` to present the "BuddhiAI Ecosystem" showcasing "BuddhiAI Web" and "BuddhiAI CLI" with direct documentation links and badges

**Checkpoint**: Homepage seamlessly introduces both pillars of the BuddhiAI ecosystem.

---

## Phase 5: Verification & Polish

**Purpose**: End-to-end verification, type checking, and static site build validation

- [x] T010 [US1] [US2] [US3] Run `npm run check` to verify Astro template syntax and TypeScript type safety
- [x] T011 [US1] [US2] [US3] Run `npm run build` to verify full static compilation and link integrity

---

## Dependencies & Execution Order

- **Phase 1 (Cleanup)**: Runs first to ensure clean state in `src/content/docs/cli/`.
- **Phase 2 (US1 - MVP Docs)**: T002-T006 can run in parallel as they author distinct markdown files.
- **Phase 3 (US2 - Navigation)**: T007 and T008 can run in parallel.
- **Phase 4 (US3 - Homepage)**: Runs after doc routes and nav structure are finalized.
- **Phase 5 (Verification)**: Runs once all content and configurations are implemented.
