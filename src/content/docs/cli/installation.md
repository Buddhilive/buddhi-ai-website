---
title: "Installation & Setup"
description: "Step-by-step instructions for installing BuddhiAI CLI and the Model Context Protocol (MCP) server."
sidebar:
  order: 2
  label: "[rocket] Installation"
---

This guide provides step-by-step instructions for installing the **BuddhiAI CLI** and its dedicated `buddhi-mcp` entrypoint on your machine.

---

## Prerequisites

- **Python**: Version **3.10** or higher is required.
- **Package Manager**: One of `pip`, `pipx`, or `uv`.
- **Operating System**: macOS, Linux, or Windows.
- **Tree-sitter runtime**: Bundled automatically with dependencies.

Verify your Python version:

```sh
python --version
# Output should show Python 3.10.x or higher
```

---

## Installation Methods

### Method 1: Using pip (Standard Installation)

You can install BuddhiAI CLI directly using `pip`. Be sure to include the `[mcp]` extra to install the Model Context Protocol server components:

```sh
pip install "buddhi-ai[mcp]"
```

To upgrade an existing installation:

```sh
pip install --upgrade "buddhi-ai[mcp]"
```

---

### Method 2: Using pipx (Isolated Tool Environment)

If you prefer installing command-line tools in isolated virtual environments to prevent dependency conflicts across global packages:

```sh
pipx install "buddhi-ai[mcp]"
```

To upgrade via pipx:

```sh
pipx upgrade buddhi-ai
```

---

### Method 3: Using uv (Fastest & Recommended)

If you use [Astral's `uv`](https://github.com/astral-sh/uv), you can install BuddhiAI CLI as a standalone global tool in seconds:

```sh
uv tool install "buddhi-ai[mcp]"
```

To upgrade via uv:

```sh
uv tool upgrade buddhi-ai
```

---

## Installed Binaries

Installing with `[mcp]` provisions two primary executable binaries in your PATH:

1. **`buddhi`**: The core command-line tool for project initialization, graph building, documentation planning, and Spec-Driven Development (SDD).
2. **`buddhi-mcp`**: The standalone Stdio Model Context Protocol server entrypoint, allowing AI agents like Google Antigravity to interact with the code graph.

---

## Verifying Installation

Verify that both commands are accessible in your terminal:

```sh
# Verify the CLI tool
buddhi --help

# Verify the MCP entrypoint
buddhi-mcp --help
```

Expected output for `buddhi --help`:

```text
Usage: buddhi [OPTIONS] COMMAND [ARGS]...

buddhi - tree-sitter code graph generator.

+- Commands ------------------------------------------------------------------+
| generate  Scan PATH, build a code graph, and write it to .buddhi/graphs/.   |
| init      Build the code graph, plan docs, and scaffold a Google            |
|           Antigravity agent harness.                                        |
| mcp       Run the Buddhi Model Context Protocol (MCP) server over StdIO.    |
| docs      Documentation planning for the current code graph.                |
| sdd       Spec-Driven Development (SDD) scripts and prerequisite checks.    |
+-----------------------------------------------------------------------------+
```

---

## Shell Auto-Completion

BuddhiAI CLI supports auto-completion for popular shells (Bash, Zsh, Fish, PowerShell):

```sh
buddhi --install-completion
```

Follow the on-screen instructions to activate completion for your current shell.

---

## Troubleshooting

### Command Not Found (`buddhi: command not found`)

Ensure that Python's user bin directory is included in your system's `PATH` environment variable:

- **macOS / Linux**: `~/.local/bin`
- **Windows**: `%USERPROFILE%\AppData\Roaming\Python\Python3xx\Scripts` or `uv` tool path `%USERPROFILE%\.local\bin`

### Windows PowerShell Encoding Issue

When executing shell automation scripts on Windows, ensure your terminal processes UTF-8 correctly by setting:

```powershell
$env:PYTHONUTF8 = "1"
```

---

## Next Steps

Now that BuddhiAI CLI is installed, learn how to initialize your projects in the [Commands Reference](/cli/commands/).
