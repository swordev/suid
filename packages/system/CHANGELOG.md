# @suid/system

## 0.10.1

### Patch Changes

- [`f7dc98e9`](https://github.com/swordev/suid/commit/f7dc98e94c393e8f184d361d4040827ca7ebb02b) Thanks [@juanrgm](https://github.com/juanrgm)! - Improve performance in styled components

- Updated dependencies [[`f7dc98e9`](https://github.com/swordev/suid/commit/f7dc98e94c393e8f184d361d4040827ca7ebb02b)]:
  - @suid/styled-engine@0.5.1
  - @suid/utils@0.7.1

## 0.10.0

### Minor Changes

- [`1b0fe836`](https://github.com/swordev/suid/commit/1b0fe8367a2b23a446f397ef5fa0663f385230b6) Thanks [@juanrgm](https://github.com/juanrgm)! - Update to SolidJS v1.7.0.

  Thanks to @ryansolid for https://github.com/swordev/suid/pull/199.

### Patch Changes

- [`f9361c06`](https://github.com/swordev/suid/commit/f9361c06a589872e02fdd11bdd0ab8eaf725b5a0) Thanks [@juanrgm](https://github.com/juanrgm)! - Fix SSR build

- Updated dependencies [[`1b0fe836`](https://github.com/swordev/suid/commit/1b0fe8367a2b23a446f397ef5fa0663f385230b6)]:
  - @suid/styled-engine@0.5.0
  - @suid/types@0.5.0
  - @suid/utils@0.7.0

## 0.9.1

### Patch Changes

- [`af9e1427`](https://github.com/swordev/suid/commit/af9e1427697a5aec4313611d7f1fcf1c853e74d1) Thanks [@juanrgm](https://github.com/juanrgm)! - Fix breakpoints in `sx` property

- Updated dependencies [[`fa8d6eb7`](https://github.com/swordev/suid/commit/fa8d6eb7fb84507f52067c8224b991125f4d02d7)]:
  - @suid/css@0.3.0
  - @suid/styled-engine@0.4.3

## 0.9.0

### Minor Changes

- [`ba6f7a4c`](https://github.com/swordev/suid/commit/ba6f7a4ccc9d9cfa80654b1d09a61ab2766cf8e0) Thanks [@juanrgm](https://github.com/juanrgm)! - Allow breakpoints as object/array in the `sx` property

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

### Patch Changes

- Updated dependencies [[`51c5ade3`](https://github.com/swordev/suid/commit/51c5ade396c53144c20bd3a8bf9af9045559cf52)]:
  - @suid/css@0.2.2
  - @suid/styled-engine@0.4.2

## 0.8.3

### Patch Changes

- [`93354e5b`](https://github.com/swordev/suid/commit/93354e5b673d745dafdcadc4c7b5d92622043b08) Thanks [@juanrgm](https://github.com/juanrgm)! - Export `StyledOptions` type

## 0.8.2

### Patch Changes

- [`b462103b`](https://github.com/swordev/suid/commit/b462103baa996e6934421401e341bc6e32c28f0b) Thanks [@juanrgm](https://github.com/juanrgm)! - Avoid re-rendering on theme changes

## 0.8.1

### Patch Changes

- Updated dependencies [[`16fc5591`](https://github.com/swordev/suid/commit/16fc5591116ea1d5cf4ec0ce16fd01f743f9c0a9)]:
  - @suid/styled-engine@0.4.1
  - @suid/css@0.2.1

## 0.8.0

### Minor Changes

- [`7d2a1ebb`](https://github.com/swordev/suid/commit/7d2a1ebb2dd9135551e0f24487844bc5ece3bb14) Thanks [@juanrgm](https://github.com/juanrgm)! - Add random class names to styled components.

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

- [`651d3c86`](https://github.com/swordev/suid/commit/651d3c86f89c7d88e797ca6d373eaebbc4e7fb9f) Thanks [@juanrgm](https://github.com/juanrgm)! - Return the class selector of the styled components

- [`7c1cec6f`](https://github.com/swordev/suid/commit/7c1cec6f50d6dfbadf11cc96a28f01c15732240f) Thanks [@juanrgm](https://github.com/juanrgm)! - Global refactoring for adopting the behaviour to MUI styled components

### Patch Changes

- [`c14f8639`](https://github.com/swordev/suid/commit/c14f863995a749b13d76e3e3e459e2b6f4b069f2) Thanks [@juanrgm](https://github.com/juanrgm)! - Update to SolidJS v1.6.7

- [`401f1735`](https://github.com/swordev/suid/commit/401f17358421fcf37a2c150097dd888b3e93f229) Thanks [@juanrgm](https://github.com/juanrgm)! - Update readme

- [`c5273760`](https://github.com/swordev/suid/commit/c5273760f96d58c7de41caa7c71b87249d17595d) Thanks [@juanrgm](https://github.com/juanrgm)! - Update to SolidJS v1.6.5

- Updated dependencies [[`1dd2bebe`](https://github.com/swordev/suid/commit/1dd2bebea8da94e24eb86503ada330f880430553), [`696eeac5`](https://github.com/swordev/suid/commit/696eeac54b141db7637ff6f38701ddb77b8944f5), [`c14f8639`](https://github.com/swordev/suid/commit/c14f863995a749b13d76e3e3e459e2b6f4b069f2), [`9a1685e9`](https://github.com/swordev/suid/commit/9a1685e9040b0a9b82b4ccbd89f434cea18e54b6), [`3319c8f1`](https://github.com/swordev/suid/commit/3319c8f181d437cddba60df55783acbdd85915cb), [`7c1cec6f`](https://github.com/swordev/suid/commit/7c1cec6f50d6dfbadf11cc96a28f01c15732240f), [`97781a66`](https://github.com/swordev/suid/commit/97781a66cc87e620b9ba2a7c7c5b02b68fcbc0ea), [`d4cede7e`](https://github.com/swordev/suid/commit/d4cede7e1d932acc9137dbbdb19608bc3df45159), [`401f1735`](https://github.com/swordev/suid/commit/401f17358421fcf37a2c150097dd888b3e93f229), [`c5273760`](https://github.com/swordev/suid/commit/c5273760f96d58c7de41caa7c71b87249d17595d)]:
  - @suid/css@0.2.0
  - @suid/styled-engine@0.4.0
  - @suid/types@0.4.0
  - @suid/utils@0.6.1

## 0.7.1

### Patch Changes

- [`003c7864`](https://github.com/swordev/suid/commit/003c7864287e1785587550e2f7c3c5fb4d833738) Thanks [@juanrgm](https://github.com/juanrgm)! - Fix `inspectChildren` function

## 0.7.0

### Minor Changes

- [`64eae194`](https://github.com/swordev/suid/commit/64eae194686fd0d3a28394a3cac4d55737bbf2ac) Thanks [@juanrgm](https://github.com/juanrgm)! - Add internal hook for inspecting all suid components

## 0.6.0

### Minor Changes

- [`6440e2d2`](https://github.com/swordev/suid/commit/6440e2d2e8952bed1fc1f8eaf417786d843b307d) Thanks [@juanrgm](https://github.com/juanrgm)! - Export some system functions

- [`fe655f75`](https://github.com/swordev/suid/commit/fe655f75d97ee8d9ab2ed77440d483489d64f915) Thanks [@juanrgm](https://github.com/juanrgm)! - Update to SolidJS v1.6

### Patch Changes

- Updated dependencies [[`f0cd735e`](https://github.com/swordev/suid/commit/f0cd735ecb125683fb2334b2426b8c51ce54028b), [`fe655f75`](https://github.com/swordev/suid/commit/fe655f75d97ee8d9ab2ed77440d483489d64f915)]:
  - @suid/utils@0.6.0
  - @suid/styled-engine@0.3.0
  - @suid/types@0.3.0
  - @suid/css@0.1.7

## 0.6.0-next.1

### Minor Changes

- [`fe655f75`](https://github.com/swordev/suid/commit/fe655f75d97ee8d9ab2ed77440d483489d64f915) Thanks [@juanrgm](https://github.com/juanrgm)! - Update to SolidJS v1.6

### Patch Changes

- Updated dependencies [[`fe655f75`](https://github.com/swordev/suid/commit/fe655f75d97ee8d9ab2ed77440d483489d64f915)]:
  - @suid/styled-engine@0.3.0-next.1
  - @suid/types@0.3.0-next.0
  - @suid/utils@0.6.0-next.1
  - @suid/css@0.1.7-next.1

## 0.6.0-next.0

### Minor Changes

- [`6440e2d2`](https://github.com/swordev/suid/commit/6440e2d2e8952bed1fc1f8eaf417786d843b307d) Thanks [@juanrgm](https://github.com/juanrgm)! - Export some system functions

### Patch Changes

- Updated dependencies [[`f0cd735e`](https://github.com/swordev/suid/commit/f0cd735ecb125683fb2334b2426b8c51ce54028b)]:
  - @suid/utils@0.6.0-next.0
  - @suid/css@0.1.7-next.0
  - @suid/styled-engine@0.2.2-next.0

## 0.5.2

### Patch Changes

- [`705b1523`](https://github.com/swordev/suid/commit/705b1523437f2b32ec8892f02a7bbef4e58c17ac) Thanks [@juanrgm](https://github.com/juanrgm)! - Update dependencies

## 0.5.1

### Patch Changes

- [`c5f7ab08`](https://github.com/swordev/suid/commit/c5f7ab08bfa4e2e274a0d8e191116f9172868082) Thanks [@juanrgm](https://github.com/juanrgm)! - Fix `ThemeContext` reference in development mode

- Updated dependencies [[`817b1aaf`](https://github.com/swordev/suid/commit/817b1aaf5e9c3b64b2b40f3985d0016d2d204c27)]:
  - @suid/utils@0.5.0
  - @suid/css@0.1.6
  - @suid/styled-engine@0.2.1

## 0.5.0

### Minor Changes

- [`912a1740`](https://github.com/swordev/suid/commit/912a17405ca411411033aab0f39da732d28fb7e9) Thanks [@juanrgm](https://github.com/juanrgm)! - Update SolidJS to 1.5

- [`b7da6ee8`](https://github.com/swordev/suid/commit/b7da6ee86524cd4870aa098734661d40f021dadd) Thanks [@juanrgm](https://github.com/juanrgm)! - Update SolidJS to 1.4

### Patch Changes

- [`c827289b`](https://github.com/swordev/suid/commit/c827289b533a974d04296edb002dc3836aec7309) Thanks [@juanrgm](https://github.com/juanrgm)! - Update dependencies

- Updated dependencies [[`912a1740`](https://github.com/swordev/suid/commit/912a17405ca411411033aab0f39da732d28fb7e9), [`b7da6ee8`](https://github.com/swordev/suid/commit/b7da6ee86524cd4870aa098734661d40f021dadd), [`c827289b`](https://github.com/swordev/suid/commit/c827289b533a974d04296edb002dc3836aec7309)]:
  - @suid/styled-engine@0.2.0
  - @suid/types@0.2.0
  - @suid/utils@0.4.0
  - @suid/css@0.1.5

## 0.4.2

### Patch Changes

- [`c09275c1`](https://github.com/swordev/suid/commit/c09275c1440f13139a78a000063e2979981e40f1) Thanks [@juanrgm](https://github.com/juanrgm)! - Update dependencies

- Updated dependencies [[`a00adadf`](https://github.com/swordev/suid/commit/a00adadf6c4e6f0aebdee7be8a250dcc19c04a03)]:
  - @suid/styled-engine@0.1.1

## 0.4.1

### Patch Changes

- [`e74745ba`](https://github.com/swordev/suid/commit/e74745ba5f07e47b7b83f97ee5f11ef0c4a37194) Thanks [@juanrgm](https://github.com/juanrgm)! - Refactor `css` package

* [`a0d73652`](https://github.com/swordev/suid/commit/a0d73652bea194187c6d9fea315ed5fc4d26a8b1) Thanks [@juanrgm](https://github.com/juanrgm)! - Extract the style functions into `styled-engine` package

* Updated dependencies [[`e74745ba`](https://github.com/swordev/suid/commit/e74745ba5f07e47b7b83f97ee5f11ef0c4a37194), [`a0d73652`](https://github.com/swordev/suid/commit/a0d73652bea194187c6d9fea315ed5fc4d26a8b1), [`82eb276b`](https://github.com/swordev/suid/commit/82eb276b0a6d1bd651567e225383ab207998ede3)]:
  - @suid/css@0.1.4
  - @suid/styled-engine@0.1.0

## 0.4.0

### Minor Changes

- [`acfbf033`](https://github.com/swordev/suid/commit/acfbf033b8a30f507e6655a8de73eb8d5f36f62d) Thanks [@juanrgm](https://github.com/juanrgm)! - Add system properties

* [`a278ca8f`](https://github.com/swordev/suid/commit/a278ca8f3a2195bca6602202fdfe649e1996eb35) Thanks [@juanrgm](https://github.com/juanrgm)! - Add `display`, `flexbox` and `grid` system props

- [`a7f65c40`](https://github.com/swordev/suid/commit/a7f65c401ac5ab8893e56459f5f9d254ebd1c70d) Thanks [@juanrgm](https://github.com/juanrgm)! - Global refactoring for separating style properties into `StyleProps`, `StyledProps`, `SxProps` and `SystemProps`

### Patch Changes

- [`1aced166`](https://github.com/swordev/suid/commit/1aced166dea7fb9b5d3636048610284c79d6fc7f) Thanks [@juanrgm](https://github.com/juanrgm)! - Add px unit suffix when necessary

- Updated dependencies [[`a13f2f0d`](https://github.com/swordev/suid/commit/a13f2f0d201fbe30c74611200cb5582106910a27)]:
  - @suid/utils@0.3.0
  - @suid/css@0.1.3

## 0.3.0

### Minor Changes

- [`1678375e`](https://github.com/swordev/suid/commit/1678375ea0e0fb3e9cf5332562d4425f82a5c0f2) Thanks [@juanrgm](https://github.com/juanrgm)! - Add `createRenderEffectWithCleaning` function

### Patch Changes

- [`5de407a6`](https://github.com/swordev/suid/commit/5de407a6ffd97eb98069bb3528fe2b0c4c6baa00) Thanks [@juanrgm](https://github.com/juanrgm)! - Add property alias (`ref.current`)

* [`a5301430`](https://github.com/swordev/suid/commit/a5301430638a936acded48116bd1eaf42e51584b) Thanks [@juanrgm](https://github.com/juanrgm)! - Add `solid-js` peer dependency

* Updated dependencies [[`5eea1f4d`](https://github.com/swordev/suid/commit/5eea1f4d039bd8d8faab869ace8027c6ef321ae9)]:
  - @suid/types@0.1.2
  - @suid/utils@0.2.1
  - @suid/css@0.1.2

## 0.2.0

### Minor Changes

- [`5b7d59bd`](https://github.com/swordev/suid/commit/5b7d59bdbe34d5149e3462e7511636fad8a783f9) Thanks [@juanrgm](https://github.com/juanrgm)! - Add `createEffectWithCleaning` and `onMountWithCleaning` functions

### Patch Changes

- [`c033eed5`](https://github.com/swordev/suid/commit/c033eed58c347d3122f84fdd02312c9cf0026341) Thanks [@juanrgm](https://github.com/juanrgm)! - Remove unneeded memoization

* [`db4d5676`](https://github.com/swordev/suid/commit/db4d56761854cb724ce231d90fb4774ab935229d) Thanks [@juanrgm](https://github.com/juanrgm)! - Use default imports

- [`73bc609a`](https://github.com/swordev/suid/commit/73bc609ac89fc18d1534c1e238a8c3d5d767a57f) Thanks [@juanrgm](https://github.com/juanrgm)! - Set class name before render

* [`7f2d7633`](https://github.com/swordev/suid/commit/7f2d7633bb6b5c6d927c7d463bfcb285b6f4867e) Thanks [@juanrgm](https://github.com/juanrgm)! - Add compatibility with `solid-js` type in `createRef`

- [`6d3daf3e`](https://github.com/swordev/suid/commit/6d3daf3e00f5d1b159076fa0b9fea8916fceaa9f) Thanks [@juanrgm](https://github.com/juanrgm)! - Improve performance

- Updated dependencies [[`8f2a158c`](https://github.com/swordev/suid/commit/8f2a158c8eeac1f25cd3c9cde3e3fe4952f8695d), [`e7246bcc`](https://github.com/swordev/suid/commit/e7246bcc298af75cb0e2fb439e8fea5aae83347d), [`5c341c3d`](https://github.com/swordev/suid/commit/5c341c3d7692ae92fe6762bb0a03a7d67250f6b5), [`69bef979`](https://github.com/swordev/suid/commit/69bef979c7ef78c865b750bd3a3d43f8d283d8a5), [`e003704a`](https://github.com/swordev/suid/commit/e003704af0bed136188314d8e38964a66d5f8d08), [`db4d5676`](https://github.com/swordev/suid/commit/db4d56761854cb724ce231d90fb4774ab935229d), [`5abb76ef`](https://github.com/swordev/suid/commit/5abb76efb419d8ceebe219f8b75f42cccca3aaaf)]:
  - @suid/types@0.1.1
  - @suid/utils@0.2.0
  - @suid/css@0.1.1

## 0.2.0-next.5

### Minor Changes

- [`5b7d59bd`](https://github.com/swordev/suid/commit/5b7d59bdbe34d5149e3462e7511636fad8a783f9) Thanks [@juanrgm](https://github.com/juanrgm)! - Add `createEffectWithCleaning` and `onMountWithCleaning` functions

### Patch Changes

- [`7f2d7633`](https://github.com/swordev/suid/commit/7f2d7633bb6b5c6d927c7d463bfcb285b6f4867e) Thanks [@juanrgm](https://github.com/juanrgm)! - Add compatibility with `solid-js` type in `createRef`

## 0.1.1-next.4

### Patch Changes

- Updated dependencies [[`8f2a158c`](https://github.com/swordev/suid/commit/8f2a158c8eeac1f25cd3c9cde3e3fe4952f8695d)]:
  - @suid/types@0.1.1-next.1
  - @suid/utils@0.2.0-next.2
  - @suid/css@0.1.1-next.2

## 0.1.1-next.3

### Patch Changes

- Updated dependencies [[`e7246bcc`](https://github.com/swordev/suid/commit/e7246bcc298af75cb0e2fb439e8fea5aae83347d), [`69bef979`](https://github.com/swordev/suid/commit/69bef979c7ef78c865b750bd3a3d43f8d283d8a5)]:
  - @suid/types@0.1.1-next.0
  - @suid/utils@0.2.0-next.1
  - @suid/css@0.1.1-next.1

## 0.1.1-next.2

### Patch Changes

- [`db4d5676`](https://github.com/swordev/suid/commit/db4d56761854cb724ce231d90fb4774ab935229d) Thanks [@juanrgm](https://github.com/juanrgm)! - Use default imports

- Updated dependencies [[`5c341c3d`](https://github.com/swordev/suid/commit/5c341c3d7692ae92fe6762bb0a03a7d67250f6b5), [`e003704a`](https://github.com/swordev/suid/commit/e003704af0bed136188314d8e38964a66d5f8d08), [`db4d5676`](https://github.com/swordev/suid/commit/db4d56761854cb724ce231d90fb4774ab935229d), [`5abb76ef`](https://github.com/swordev/suid/commit/5abb76efb419d8ceebe219f8b75f42cccca3aaaf)]:
  - @suid/utils@0.2.0-next.0
  - @suid/css@0.1.1-next.0

## 0.1.1-next.1

### Patch Changes

- [`6d3daf3e`](https://github.com/swordev/suid/commit/6d3daf3e00f5d1b159076fa0b9fea8916fceaa9f) Thanks [@juanrgm](https://github.com/juanrgm)! - Improve performance

## 0.1.1-next.0

### Patch Changes

- [`c033eed5`](https://github.com/swordev/suid/commit/c033eed58c347d3122f84fdd02312c9cf0026341) Thanks [@juanrgm](https://github.com/juanrgm)! - Remove unneeded memoization

* [`73bc609a`](https://github.com/swordev/suid/commit/73bc609ac89fc18d1534c1e238a8c3d5d767a57f) Thanks [@juanrgm](https://github.com/juanrgm)! - Set class name before render

## 0.1.0

### Minor Changes

- [`01cdd2d6`](https://github.com/swordev/suid/commit/01cdd2d6cbc8e6131c30c70a13e597cb5b36f548) Thanks [@juanrgm](https://github.com/juanrgm)! - Update versions

### Patch Changes

- Updated dependencies [[`01cdd2d6`](https://github.com/swordev/suid/commit/01cdd2d6cbc8e6131c30c70a13e597cb5b36f548)]:
  - @suid/css@0.1.0
  - @suid/types@0.1.0
  - @suid/utils@0.1.0

## 0.0.17

### Patch Changes

- [`ed0ee1c4`](https://github.com/swordev/suid/commit/ed0ee1c4d4d95937e59970455f2975dc5689b035) Thanks [@juanrgm](https://github.com/juanrgm)! - Rename `ComponentProps` and `ComponentInProps`

- Updated dependencies [[`ed0ee1c4`](https://github.com/swordev/suid/commit/ed0ee1c4d4d95937e59970455f2975dc5689b035)]:
  - @suid/types@0.0.8
  - @suid/utils@0.0.9
  - @suid/css@0.0.9

## 0.0.16

### Patch Changes

- [`aee1cfe4`](https://github.com/swordev/suid/commit/aee1cfe494d8d8919f6f7499cbefd986bf2920a6) Thanks [@juanrgm](https://github.com/juanrgm)! - Forward `ownerState` to inner component

- Updated dependencies [[`fd42bc02`](https://github.com/swordev/suid/commit/fd42bc02cb0fc4a5163172ce0d9116a63490b421), [`009ffee6`](https://github.com/swordev/suid/commit/009ffee68cffda8287a49c8c2debc936401d92a5), [`f2b336d5`](https://github.com/swordev/suid/commit/f2b336d52e0c4ee8e2c01a3ad3b87c8eb41537f0)]:
  - @suid/css@0.0.8
  - @suid/types@0.0.7
  - @suid/utils@0.0.8

## 0.0.15

### Patch Changes

- [`16dcdd3`](https://github.com/swordev/suid/commit/16dcdd341bb7c7148126046a848b81ed85ae210c) Thanks [@juanrgm](https://github.com/juanrgm)! - Fix CSS property order

## 0.0.14

### Patch Changes

- [`ef21396`](https://github.com/swordev/suid/commit/ef21396ead087c64b44a1744834f09a68a1f45a2) Thanks [@juanrgm](https://github.com/juanrgm)! - Add package description

- Updated dependencies [[`ef21396`](https://github.com/swordev/suid/commit/ef21396ead087c64b44a1744834f09a68a1f45a2)]:
  - @suid/css@0.0.7
  - @suid/types@0.0.6
  - @suid/utils@0.0.7

## 0.0.13

### Patch Changes

- [`506fade`](https://github.com/swordev/suid/commit/506fadee9e15acc91a776b4c59da5814ae6fe66c) Thanks [@juanrgm](https://github.com/juanrgm)! - Add package info

* [`d1a1f65`](https://github.com/swordev/suid/commit/d1a1f65fc409a4f69d83aeb6d65ef3e9075fbcf3) Thanks [@juanrgm](https://github.com/juanrgm)! - Forward `sx` prop for avoiding create two classes

* Updated dependencies [[`506fade`](https://github.com/swordev/suid/commit/506fadee9e15acc91a776b4c59da5814ae6fe66c)]:
  - @suid/css@0.0.6
  - @suid/types@0.0.5
  - @suid/utils@0.0.6

## 0.0.12

### Patch Changes

- [`778a57d`](https://github.com/swordev/suid/commit/778a57d5881f1f07b6127884b24bee56492e7e2f) Thanks [@juanrgm](https://github.com/juanrgm)! - Fix `useTheme` when is used with `vite` in server mode

* [`da3846f`](https://github.com/swordev/suid/commit/da3846ff5b1151bfdc7a562d63091fe28e38cd28) Thanks [@juanrgm](https://github.com/juanrgm)! - Add readme file

* Updated dependencies [[`da3846f`](https://github.com/swordev/suid/commit/da3846ff5b1151bfdc7a562d63091fe28e38cd28)]:
  - @suid/css@0.0.5
  - @suid/types@0.0.4
  - @suid/utils@0.0.5

## 0.0.11

### Patch Changes

- [`f02b15e`](https://github.com/swordev/suid/commit/f02b15ea8cb290534dfabc10e9436603143f50e9) Thanks [@juanrgm](https://github.com/juanrgm)! - Fix `useTheme`

## 0.0.10

### Patch Changes

- [`56ca9f2`](https://github.com/swordev/suid/commit/56ca9f2d42e75b6f2882f53a7fdda98b278a2578) Thanks [@juanrgm](https://github.com/juanrgm)! - Add license files

- Updated dependencies [[`56ca9f2`](https://github.com/swordev/suid/commit/56ca9f2d42e75b6f2882f53a7fdda98b278a2578)]:
  - @suid/css@0.0.4
  - @suid/types@0.0.3
  - @suid/utils@0.0.4

## 0.0.9

### Patch Changes

- [`adafe7d`](https://github.com/swordev/suid/commit/adafe7d0d794bc992402c60d5fe9b6b29ffd7eb5) Thanks [@juanrgm](https://github.com/juanrgm)! - Fix typings

## 0.0.8

### Patch Changes

- [`330f149`](https://github.com/swordev/suid/commit/330f1499d74af873f6717d42923753e7e31ea13a) Thanks [@juanrgm](https://github.com/juanrgm)! - Add css vendor typings

## 0.0.7

### Patch Changes

- [`3542ed4`](https://github.com/swordev/suid/commit/3542ed40b893f65a5ac4d38d4da53838e8e3cd56) Thanks [@juanrgm](https://github.com/juanrgm)! - Rename theme provider export and data prop

## 0.0.6

### Patch Changes

- [`c0092d5`](https://github.com/swordev/suid/commit/c0092d54b577e0a968ab1d28245f935f109dd7ec) Thanks [@juanrgm](https://github.com/juanrgm)! - Fix errors

## 0.0.5

### Patch Changes

- [`5b6b816`](https://github.com/swordev/suid/commit/5b6b816949c4a5eaa3d04f878d7ae94f7cf8e61a) Thanks [@juanrgm](https://github.com/juanrgm)! - Use `NODE_ENV` variable

## 0.0.4

### Patch Changes

- [`3dc9e3b`](https://github.com/swordev/suid/commit/3dc9e3b3ad467f867ec89030f524d42da4779e32) Thanks [@juanrgm](https://github.com/juanrgm)! - Fix styled type

## 0.0.3

### Patch Changes

- [`506b717`](https://github.com/swordev/suid/commit/506b717b0ea5ae2df82c3d0f34d5d3ffa98495b7) Thanks [@juanrgm](https://github.com/juanrgm)! - Format the generated files correctly

* [`460e00c`](https://github.com/swordev/suid/commit/460e00c2b14c2f720d9a1e959f2886a6a7be65e8) Thanks [@juanrgm](https://github.com/juanrgm)! - Fix module entry point

* Updated dependencies [[`0048449`](https://github.com/swordev/suid/commit/0048449215bc85200987c34bef93173868220c1d), [`cef7706`](https://github.com/swordev/suid/commit/cef77068d7afd8333e2a3f270acb39eb138334b7), [`506b717`](https://github.com/swordev/suid/commit/506b717b0ea5ae2df82c3d0f34d5d3ffa98495b7)]:
  - @suid/utils@0.0.3
  - @suid/css@0.0.3
  - @suid/types@0.0.2

## 0.0.2

### Patch Changes

- [`f3ffe55`](https://github.com/swordev/suid/commit/f3ffe5548ee8c37c1927a17717b31163c8922870) Thanks [@juanrgm](https://github.com/juanrgm)! - Fix errors

- Updated dependencies [[`f3ffe55`](https://github.com/swordev/suid/commit/f3ffe5548ee8c37c1927a17717b31163c8922870)]:
  - @suid/utils@0.0.2
  - @suid/css@0.0.2

## 0.0.1

### Patch Changes

- [`0175d7c`](https://github.com/swordev/suid/commit/0175d7cde2206ea78530dfadb1658eae66277763) Thanks [@juanrgm](https://github.com/juanrgm)! - Replace npm by pnpm

* [`a409467`](https://github.com/swordev/suid/commit/a409467a4f23bb1baac38eb59187d6e01b9fbf1c) Thanks [@juanrgm](https://github.com/juanrgm)! - Fix publish config

* Updated dependencies [[`0175d7c`](https://github.com/swordev/suid/commit/0175d7cde2206ea78530dfadb1658eae66277763), [`a409467`](https://github.com/swordev/suid/commit/a409467a4f23bb1baac38eb59187d6e01b9fbf1c)]:
  - @suid/css@0.0.1
  - @suid/types@0.0.1
  - @suid/utils@0.0.1
