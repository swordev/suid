---
"@suid/material": patch
---

Avoid double effects over `autoFocus` when really there is not changes.

This error causes the loss of the scroll bar position in the `Select` component.
