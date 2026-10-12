---
id: t-8ac410
title: Rate limit the search endpoint
status: ready
kind: task
parent: e-77b3e1
milestone: null
blocked-by: []
labels: [security]
priority: medium
assignee: human:dokafor
created: 2026-07-24T14:00:00.000Z
updated: 2026-07-25T14:00:00.000Z
external: null
writes: [src/server/routes.ts]
---

## Description

One client can currently issue unbounded queries.
