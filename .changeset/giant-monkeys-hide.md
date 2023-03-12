---
"@suid/system": minor
---

Allow breakpoints as object/array in the `sx` property

```ts
<Box
  sx={{
    width: {
      xs: 100,
      sm: 200,
    },
    color: ["red", "blue"],
  }}
>
  This box has a responsive width.
</Box>
```
