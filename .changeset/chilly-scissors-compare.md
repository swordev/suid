---
"@suid/system": minor
---

Add random class names to styled components.

Example:

```ts
const Div1 = styled("div")();
const Div2 = styled("div")();
const Div = styled("div")({
  [`${Div1}`]: {
    color: "red",
  },
  [`${Div2}`]: {
    color: "blue",
  },
});
```
