# @suid/vite-plugin

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/swordev/suid/CI) ![npm (scoped)](https://img.shields.io/npm/v/@suid/vite-plugin?label=@suid/vite-plugin)

## Features

- Optimizes the SUID imports:
  ```ts
  // Input
  import { Wifi } from "@suid/material-icons";
  import { Button } from "@suid/material";
  // Output
  import Wifi from "@suid/material-icons/Wifi";
  import Button from "@suid/material/Button";
  ```
- Sets the vite config required by `solid-start/vite` and `vite-plugin-solid`.

## Installation

```sh
npm install @suid/vite-plugin
```

## Usage

```ts
// vite.config.ts
import suidPlugin from "@suid/vite-plugin";
import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  plugins: [suidPlugin(), solidPlugin()],
});
```

## License

Distributed under the MIT License. See LICENSE for more information.
