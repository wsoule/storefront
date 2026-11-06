---
id: t-71ff03
title: Add a /health endpoint
status: landed
kind: task
parent: e-4a19c2
milestone: null
blocked-by: []
labels: []
priority: low
assignee: human:wsoule679
created: 2026-07-19T14:00:00.000Z
updated: 2026-07-20T14:00:00.000Z
external: null
writes: [src/server/routes.ts]
---

## Description

The load balancer needs something cheap to poll.

## Activity

- Reviewed and merged — the load balancer can poll this now. — human:pmirand
