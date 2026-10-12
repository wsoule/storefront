---
id: t-2e91aa
title: Move cart state to the session store
status: review
kind: task
parent: e-4a19c2
milestone: null
blocked-by: []
labels: []
priority: high
assignee: human:dokafor
created: 2026-07-24T14:00:00.000Z
updated: 2026-07-25T14:00:00.000Z
external: null
writes: [src/cart/CartProvider.ts]
---

## Description

Cart lives in React state today, so a refresh loses it.

## Activity

- Moved cart state behind the session store; dispatched for review. — human:dokafor
