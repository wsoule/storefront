---
id: t-58cc03
title: Rank exact SKU matches above fuzzy
status: review
kind: task
parent: e-77b3e1
milestone: null
blocked-by: []
labels: []
priority: high
assignee: human:wsoule679
created: 2026-07-25T14:00:00.000Z
updated: 2026-07-26T14:00:00.000Z
external: null
writes: [src/search/rank.ts]
---

## Description

Searching a full SKU returns fuzzy matches first, which is never what anyone wants.

## Activity

- Added an exact-match boost ahead of the fuzzy pass; dispatched for review. — human:wsoule679
