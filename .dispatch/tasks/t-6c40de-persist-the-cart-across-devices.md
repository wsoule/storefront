---
id: t-6c40de
title: Persist the cart across devices
status: ready
kind: task
parent: e-4a19c2
milestone: null
blocked-by: [t-2e91aa]
labels: []
priority: high
assignee: human:wsoule679
created: 2026-07-22T14:00:00.000Z
updated: 2026-07-23T14:00:00.000Z
external: null
writes: [src/cart/CartProvider.ts, test/cart.test.ts]
---

## Description

Once cart state lives in the session store, the same cart should follow a signed-in user between devices.

## Acceptance Criteria

- Cart survives sign-out and sign-in
- No cart data in localStorage
