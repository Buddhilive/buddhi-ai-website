---
title: "Knowledge Graph"
description: Understand how BuddhiAI's Document Management & Knowledge Retrieval with Open Knowledge Format (OKF) works.
sidebar:
  order: 3
  label: "[information] Knowledge Graph"
---

BuddhiAI utilizes the [Open Knowledge Format (OKF v0.2)](https://github.com/Buddhilive/buddhi-ai/blob/main/okf-guide.md) specification to manage, structure, and retrieve document context directly within the browser.

OKF converts unstructured files into a connected web of structured Markdown concepts with rich metadata and relation graphs, providing fast, private, and context-aware responses without sending data to external servers.

## Overview of the OKF Architecture

The Open Knowledge Format system structures knowledge using standard Markdown combined with YAML frontmatter.

### Key Technical Pillars

- **Standardized Metadata**: Every concept includes YAML frontmatter describing its provenance, lifecycle, type, and source tags.
- **Granular Concept Decomposition**: Documents are decomposed into discrete, cross-linked sub-concepts rather than opaque text chunks.
- **In-Memory & IndexedDB Persistence**: Full persistence inside the browser's IndexedDB with zero remote telemetry.
- **Interactive Knowledge Graph**: Built with Cytoscape.js to visualize nodes, edges, and neighborhood connections.

## Supported File Formats & Limits

- **Supported Extensions**: `.pdf`, `.txt`, `.md`
- **Upload Limits**: Up to 5 files per batch (maximum 25 MB per file).
- **Processing Location**: 100% client-side (local browser worker).

## The OKF Ingestion & Processing Pipeline

### Document Ingestion

When files are uploaded via the Documents tab, the browser parses the text contents of PDF, TXT, or Markdown files locally without transmitting raw data over the network.

### Concept Decomposition

The engine constructs primary OKF concepts. Each concept is formatted as standard Markdown accompanied by YAML frontmatter:

```yml
---
type: concept
title: "Document Title or Subject"
sources: ["filename.pdf"]
generated: true
tags: ["documentation", "guide"]
---
```

### LLM Enrichment & Decomposition

When the local language model (Gemma 4 E2B) is loaded, an on-device enrichment worker breaks down large, multifaceted documents into linked sub-concepts (/concept-id.md), creating semantic relationships between distinct sections.

### Local Indexing & Graph Mapping

The processed concepts are committed to local IndexedDB storage, added to an in-browser inverted keyword search index, and mapped into graph node/edge elements for visual exploration.

## How to Use the OKF Document System

### Step 1: Uploading & Managing Documents

1. Open the BuddhiAI web application.
2. In the left navigation sidebar, click "Documents" to open the Document Manager.
3. Switch to the "Upload" tab.
4. Drag and drop or browse to select your `.pdf`, `.txt`, or `.md` files.
5. Wait for the local parser to extract content and build the OKF concept store.

#### Step 2: Visualizing the Concept Graph

1. Navigate to the Knowledge Graph section in the UI.

2. Explore the generated Cytoscape.js interactive graph:
   - **Color-coded Nodes**: Differentiate between primary documents, sub-concepts, and categories.
   - **Edge Relations**: Inspect labeled connection lines showing how concepts reference each other.
   - **Hover Metadata**: View quick summary cards, source tags, and provenance.
   - **Neighborhood Isolation**: Focus on specific clusters by selecting a parent node.

#### Step 3: Querying OKF Knowledge in Chat

1. Click "New Chat" from the left sidebar.
2. Enter your question in the chat input.
3. Retrieval in Action: BuddhiAI queries the local OKF search index, retrieves the most relevant structured Markdown concept snippets, injects them into the system context, and generates grounded answers using the local Gemma 4 model.
