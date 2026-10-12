---
id: t-0c9b88
title: Fix hyphenated SKU search
status: landed
kind: task
parent: e-77b3e1
milestone: null
blocked-by: []
labels: []
priority: high
assignee: human:pmirand
created: 2026-07-21T14:00:00.000Z
updated: 2026-07-22T14:00:00.000Z
external: null
writes: [src/search/tokenize.ts, test/search.test.ts]
---

## Description

Hyphens were being stripped before tokenisation, so "AB-1200" matched nothing.
