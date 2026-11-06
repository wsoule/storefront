---
id: t-1d77e5
title: Cache the search index in redis
status: ready
kind: task
parent: e-77b3e1
milestone: null
blocked-by: []
labels: []
priority: medium
assignee: human:wsoule679
created: 2026-07-24T14:00:00.000Z
updated: 2026-07-25T14:00:00.000Z
external: null
writes: [src/search/index.ts, src/db/client.ts]
---

## Description

Rebuilds are slow and cold starts hit the database hard.
