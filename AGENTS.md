# AGENTS.md

> Project instructions and conventions for AI coding agents.

## Overview

- **Project**: buddhi-ai-website
- **Type**: Documentation Site for BuddhiAI Products
- **Primary Language/Runtime**: TypeScript

## Commands

- **Install**: [e.g., `pnpm install`]
- **Build**: [e.g., `pnpm run build`]
- **Test**: [e.g., `pnpm run test`]
- **Lint & Format**: [e.g., `pnpm run lint`]
- **Typecheck**: [e.g., `pnpm run typecheck`]

- **Knowledge Base & Code Graph**: Consult `.buddhi/docs/` (OKF concept documentation) and use Buddhi MCP tools (`buddhi_search`, `buddhi_read`) before grepping raw source files.
- **Spec-Driven Development (SDD)**: Features follow the SDD lifecycle:
  1. `/specify` — create feature branch and refine `spec.md`
  2. `/plan` — synthesize technical architecture into `plan.md`
  3. `/spec-tasks` — break down tasks by user story in `tasks.md`
  4. `/implement` — execute tasks story by story
  5. `/verify` — prove working behavior with real test evidence
- **Lightweight Planning**: Use `/quick-plan` for quick, non-SDD changes.

## Engineering Principles & Non-Negotiables

1. **Grounded Changes**: Ground all edits in real file paths and existing codebase conventions.
2. **Evidence-Based Verification**: Always run verification commands through `terminal-runner` and report actual exit codes and stdout/stderr output.
3. **Clean Code & Typings**: Preserve type annotations, docstrings, and existing comments.
