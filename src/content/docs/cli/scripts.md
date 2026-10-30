---
title: Scripts and utilities
description: Use BuddhiAI CLI's bundled accessibility, contrast, RTK, and repository utilities.
sidebar:
  order: 8
  label: Scripts and utilities
---

The `buddhi scripts` command groups standalone utilities. Run `buddhi scripts --help` for the installed version's available subcommands and options.

## Accessibility and contrast

```sh
buddhi scripts contrast "#000000" "#ffffff"
buddhi scripts contrast --bg "#ffffff" --fg "#000000"
buddhi scripts contrast --css src/styles/global.css
buddhi scripts contrast --selftest
buddhi scripts verify-a11y
```

Contrast checks use WCAG 2.x thresholds and can inspect multiple color pairs, CSS files, or named strictness profiles. The self-test recomputes the reference table. `verify-a11y` runs the A11Y.md static gate against project artifacts, freshness, contrast calculations, and source patterns.

## Repository checks

```sh
buddhi scripts check-file-size --all
buddhi scripts receipts report.md
buddhi scripts visual-parity-diff
```

`check-file-size` checks source files against a token limit. `receipts` verifies report measurement claims and artifact hashes. `visual-parity-diff` calculates scene metrics or compares candidate and reference screenshots.

## RTK output filtering

RTK can filter output from supported developer commands while preserving the original exit code and error lines:

```sh
buddhi scripts rtk run -- pytest
buddhi scripts rtk run --raw -- pytest
buddhi scripts rtk rewrite -- pnpm run build
buddhi scripts rtk gain
buddhi scripts rtk filters list
buddhi scripts rtk filters test <filter-name>
```

On command failure, RTK saves full raw output under `.buddhi/rtk/raw/`. Antigravity can use an RTK `PreToolUse` hook to rewrite supported commands; check workspace command permissions before enabling that integration.

## Anti-slop mode

```sh
buddhi scripts antislop-mode
buddhi scripts antislop-mode during
buddhi scripts antislop-mode after
buddhi scripts antislop-mode ask
```

The setting controls when the bundled anti-slop workflow runs. On Windows, the user setting is stored under `%APPDATA%\\antislop\\settings.json`; macOS and Linux use `~/.config/antislop/settings.json`.

Run `buddhi scripts <subcommand> --help` for other options, including project paths and report directories.
