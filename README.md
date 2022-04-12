# Solid.js User Interface Design (SUID)

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/swordev/suid/CI) ![npm (scoped)](https://img.shields.io/npm/v/@suid/material?label=@suid/material) ![npm (scoped)](https://img.shields.io/npm/v/@suid/icons-material?label=@suid/icons-material) <br/> ![npm (scoped)](https://img.shields.io/npm/v/@suid/css?label=@suid/css) ![npm (scoped)](https://img.shields.io/npm/v/@suid/system?label=@suid/system) ![npm (scoped)](https://img.shields.io/npm/v/@suid/base?label=@suid/base) ![npm (scoped)](https://img.shields.io/npm/v/@suid/types?label=@suid/types) ![npm (scoped)](https://img.shields.io/npm/v/@suid/codemod?label=@suid/codemod) ![npm (scoped)](https://img.shields.io/npm/v/@suid/site?label=@suid/site)

> A port of Material-UI ([MUI](https://mui.com/core)) built with [Solid.js](https://solidjs.com)

SUID is all a set of utils and components ported from MUI Core and much more.

MUI has one of the largest development communities on the scene, a long history, is used by large corporations, its level of customization is very detailed and has a future ahead. Why reinvent the wheel? The MUI problem is React and this is where SUID comes in.

The main idea behing the project is to create a bridge between the MUI and SUID repository for syncing the incoming changes. This is possible thanks to tools integrated in SUID like codemod (a React to Solid transformer).

With this smart target in mind, the project avoids becoming another library that could fall into oblivion, avoiding all its complexities, developing under the shadow of MUI.

## Notice

The main branch will be locked due to [SolidHack 2022](https://hack.solidjs.com). New changes will be pushed to the [develop](https://github.com/swordev/suid/tree/develop) branch (https://next.suid.io).

If you want to support the project, you have the possibility to do so [here](https://hack.solidjs.com).

## Installation

```sh
npm install @suid/material
```

## Resources

- [Documentation](https://suid.io)
- [Playground](https://suid.io/tools/playground)
- [React to SolidJS](https://suid.io/tools/react-to-solid)

## Roadmap

For details about the project status go [here](https://github.com/swordev/suid/blob/main/ROADMAP.md).

## Development

### Requirements

- [Node.js v16](https://nodejs.org)
- [pnpm](https://pnpm.io)

### Startup

```sh
git clone https://github.com/swordev/suid
cd suid
pnpm install
pnpm build
pnpm start
```

## Contributing

To contribute to the project, follow these steps:

1. Fork this repository and clone it.
2. Install the dependencies: `pnpm install`.
3. Create a branch: `git checkout -b <branch_name>`.
4. Make your changes and create the changeset file: `pnpm changeset`.
5. Add your changes: `git add .`
6. Commit your changes: `git commit -m '<commit_message>'`.
7. Push to the original branch: `git push origin <branch_name>`.
8. Create the pull request.

## License

Distributed under the MIT License. See LICENSE file in each package for more information.
