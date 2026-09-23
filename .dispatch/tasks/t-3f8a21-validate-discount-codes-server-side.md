---
id: t-3f8a21
title: Validate discount codes server-side
status: ready
kind: task
parent: e-4a19c2
milestone: null
blocked-by: []
labels: [security]
priority: urgent
assignee: human:pmirand
created: 2026-07-23T14:00:00.000Z
updated: 2026-07-24T14:00:00.000Z
external: null
writes: [src/checkout/discount.ts, test/discount.test.ts]
---

## Description

The client currently decides whether a code is valid. Move the check behind the API.

## Acceptance Criteria

- Codes are verified server-side
- Expired codes return 422
