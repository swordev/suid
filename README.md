# SolidJS User Interface Design (SUID)

[![workflow-badge]](https://github.com/swordev/suid/actions/workflows/ci.yaml) [![license-badge]](https://github.com/swordev/suid#license)

[workflow-badge]: https://img.shields.io/github/actions/workflow/status/swordev/suid/ci.yaml?branch=main
[license-badge]: https://img.shields.io/github/license/swordev/suid

> A port of Material-UI ([MUI](https://mui.com/core)) built with [SolidJS](https://solidjs.com)

SUID is all a set of utils and components ported from MUI Core and much more.

MUI has one of the largest development communities on the scene, a long history, is used by large corporations, its level of customization is very detailed and has a future ahead. Why reinvent the wheel? The MUI problem is React and this is where SUID comes in.

The main idea behind the project is to create a bridge between the MUI and SUID repository for syncing the incoming changes. This is possible thanks to tools integrated in SUID like codemod (a React to Solid transformer).

With this smart target in mind, the project avoids becoming another library that could fall into oblivion, avoiding all its complexities, developing under the shadow of MUI.

## Packages

| Name                                             |                                   Version                                   | Description                                        |
| ------------------------------------------------ | :-------------------------------------------------------------------------: | -------------------------------------------------- |
| [@suid/material](/packages/material)             |       [![material-npm]](https://www.npmjs.com/package/@suid/material)       | A port of Material-UI (MUI) built with SolidJS.    |
| [@suid/icons-material](/packages/icons-material) | [![icons-material-npm]](https://www.npmjs.com/package/@suid/icons-material) | Material Design icons as SVG SolidJS components.   |
| [@suid/codemod](/packages/codemod)               |        [![codemod-npm]](https://www.npmjs.com/package/@suid/codemod)        | Tool for migrating MUI React code to SUID SolidJS. |
| [@suid/vite-plugin](/packages/vite-plugin)       |    [![vite-plugin-npm]](https://www.npmjs.com/package/@suid/vite-plugin)    | SUID integration plugin for Vite.                  |
| [@suid/styled-engine](/packages/styled-engine)   |  [![styled-engine-npm]](https://www.npmjs.com/package/@suid/styled-engine)  | Styled engine used by @suid/system.                |
| [@suid/system](/packages/system)                 |         [![system-npm]](https://www.npmjs.com/package/@suid/system)         | Styles system used by suid packages.               |
| [@suid/base](/packages/base)                     |           [![base-npm]](https://www.npmjs.com/package/@suid/base)           | Unstyled base components used by @suid/material.   |
| [@suid/css](/packages/css)                       |            [![css-npm]](https://www.npmjs.com/package/@suid/css)            | CSS render in JS.                                  |
| [@suid/types](/packages/types)                   |          [![types-npm]](https://www.npmjs.com/package/@suid/types)          | Types used by suid packages.                       |
| [@suid/site](/packages/site)                     |           [![site-npm]](https://www.npmjs.com/package/@suid/site)           | SUID website.                                      |
| [create-suid](/packages/create-suid)             |       [![create-suid-npm]](https://www.npmjs.com/package/create-suid)       | CLI tool for creating a SUID project easily.       |

[material-npm]: https://img.shields.io/npm/v/@suid/material
[icons-material-npm]: https://img.shields.io/npm/v/@suid/icons-material
[codemod-npm]: https://img.shields.io/npm/v/@suid/codemod
[vite-plugin-npm]: https://img.shields.io/npm/v/@suid/vite-plugin
[styled-engine-npm]: https://img.shields.io/npm/v/@suid/styled-engine
[site-npm]: https://img.shields.io/npm/v/@suid/site
[css-npm]: https://img.shields.io/npm/v/@suid/css
[system-npm]: https://img.shields.io/npm/v/@suid/system
[base-npm]: https://img.shields.io/npm/v/@suid/base
[types-npm]: https://img.shields.io/npm/v/@suid/types
[create-suid-npm]: https://img.shields.io/npm/v/create-suid

## Installation

```sh
npm init suid
```

## Resources

- [Documentation](https://suid.io)
- [Playground](https://suid.io/tools/playground)
- [React to SolidJS](https://suid.io/tools/react-to-solid)

## Roadmap

For details about the project status go [here](https://github.com/swordev/suid/blob/main/ROADMAP.md).

## Development

### Requirements

- [Node.js v20](https://nodejs.org)
- [pnpm v9](https://pnpm.io)

### Startup

```sh
git clone https://github.com/swordev/suid
cd suid
pnpm install
pnpm dev
```

### Contributing

Go [here](https://github.com/swordev/suid/blob/main/CONTRIBUTING.md).

## License

Distributed under the MIT License. See LICENSE file in each package for more information.
